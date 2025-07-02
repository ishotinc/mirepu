import { LoginForm } from '@/components/auth/login-form'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              おかえりなさい
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              アカウントにログインして続ける
            </p>
          </div>
          <LoginForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              アカウントをお持ちでない方は{' '}
              <Link href="/auth/signup" className="font-medium text-purple-600 hover:text-purple-500">
                新規登録
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}