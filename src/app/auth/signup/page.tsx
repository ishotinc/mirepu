import { SignupForm } from '@/components/auth/signup-form'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              アカウントを作成
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              無料で始めましょう
            </p>
          </div>
          <SignupForm />
          
          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
            <p className="text-xs text-purple-700 text-center">
              登録後、メールアドレスの確認が必要です
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              すでにアカウントをお持ちの方は{' '}
              <Link href="/auth/login" className="font-medium text-purple-600 hover:text-purple-500">
                ログイン
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}