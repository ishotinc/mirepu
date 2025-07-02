import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-5 py-20 md:py-24 lg:py-32 text-center min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            美容クリニックの悪いレビューに<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              適切で信頼される返信を
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-4">
            AIが、美容医療特有のクレームやレビューに対して
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            医療広告ガイドラインに準拠し、患者心理に配慮したプロフェッショナルな返信を自動生成します
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/auth/signup"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              無料で始める
            </Link>
            <Link
              href="/auth/login"
              className="inline-block px-10 py-4 bg-transparent text-purple-600 border-2 border-purple-600 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              ログイン
            </Link>
          </div>

          {/* Why Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              なぜ美容クリニックに特化したツールが必要なのか？
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">時間を節約</h3>
                <p className="text-gray-600 leading-relaxed">
                返信を考える時間を大幅に削減。 数秒で適切な返信を生成します。
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">感情的にならない</h3>
                <p className="text-gray-600 leading-relaxed">
                AIが冷静で建設的な返信を作成。 ブランドイメージを守ります。
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <span className="text-3xl">🩺</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">プロフェッショナル</h3>
                <p className="text-gray-600 leading-relaxed">
                ビジネスに適した丁寧で プロフェッショナルな文章を生成。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}