'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { generateReplyWithRetry } from '@/lib/ai'
import toast from 'react-hot-toast'

export default function DashboardPage() {
  const [comment, setComment] = useState('')
  const [reply, setReply] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error('ログアウトに失敗しました')
    } else {
      toast.success('ログアウトしました')
      router.push('/auth/login')
    }
  }

  const generateReply = async () => {
    if (!comment.trim()) {
      toast.error('コメントを入力してください')
      return
    }

    setIsGenerating(true)
    setReply('')

    try {
      const generatedReply = await generateReplyWithRetry(comment, 'professional')
      setReply(generatedReply)
      toast.success('返信を生成しました')
    } catch (error) {
      toast.error('返信の生成に失敗しました')
      console.error(error)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(reply)
      toast.success('クリップボードにコピーしました')
    } catch (err) {
      toast.error('コピーに失敗しました')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <nav className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                アンチコメント返信生成AI
              </h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
              >
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              アンチコメントを貼り付けてください
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={6}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
              placeholder="ここにアンチコメントを貼り付けてください..."
              disabled={isGenerating}
            />
          </div>

          <button
            onClick={generateReply}
            disabled={isGenerating || !comment.trim()}
            className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition hover:scale-105"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                生成中...
              </>
            ) : (
              '返信を生成'
            )}
          </button>

          {reply && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  生成された返信
                </label>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  コピー
                </button>
              </div>
              <div className="relative">
                <div className="p-6 bg-white rounded-xl border-2 border-purple-200 shadow-lg">
                  <p className="text-gray-900 text-base whitespace-pre-wrap leading-relaxed font-medium">
                    {reply}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}