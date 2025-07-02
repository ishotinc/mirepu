import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* ヒーローセクション */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              <span className="block">アンチコメントに</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                完璧な返信を
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              AIが、ネガティブなコメントやレビューに対して
              <br className="hidden sm:block" />
              プロフェッショナルで心のこもった返信を自動生成します
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="px-8 py-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform transition hover:scale-105 shadow-lg"
              >
                無料で始める
              </Link>
              <Link
                href="/auth/login"
                className="px-8 py-4 text-lg font-medium rounded-lg text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-50 transform transition hover:scale-105 shadow-lg"
              >
                ログイン
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              なぜこのツールが必要なのか？
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">時間を節約</h3>
              <p className="text-gray-600">
                返信を考える時間を大幅に削減。
                数秒で適切な返信を生成します。
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">感情的にならない</h3>
              <p className="text-gray-600">
                AIが冷静で建設的な返信を作成。
                ブランドイメージを守ります。
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">プロフェッショナル</h3>
              <p className="text-gray-600">
                ビジネスに適した丁寧で
                プロフェッショナルな文章を生成。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 使い方セクション */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              たった3ステップで完了
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">アンチコメントをコピー</h3>
                  <p className="text-gray-600">対応が必要なコメントやレビューをコピーします</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">ツールに貼り付け</h3>
                  <p className="text-gray-600">ダッシュボードのテキストエリアに貼り付けます</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">AIが返信を生成</h3>
                  <p className="text-gray-600">数秒で適切な返信が生成され、コピーして使用できます</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTAセクション */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            今すぐ始めましょう
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            アカウント登録は無料。クレジットカードは不要です。
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform transition hover:scale-105 shadow-lg"
          >
            無料アカウントを作成
          </Link>
        </div>
      </div>
    </div>
  )
}