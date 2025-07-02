import Link from 'next/link'

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            メールをご確認ください
          </h2>
          
          <p className="text-gray-600 mb-6">
            登録いただいたメールアドレスに確認メールを送信しました。
            メール内のリンクをクリックして、アカウントの登録を完了してください。
          </p>
          
          <div className="bg-purple-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-purple-700">
              <strong>ご注意：</strong>メールが届かない場合は、迷惑メールフォルダもご確認ください。
            </p>
          </div>
          
          <div className="space-y-3">
            <Link
              href="/auth/login"
              className="block w-full py-3 px-4 border border-purple-600 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
            >
              ログインページへ
            </Link>
            
            <Link
              href="/"
              className="block text-sm text-gray-500 hover:text-gray-700"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}