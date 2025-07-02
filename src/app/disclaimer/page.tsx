export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">免責事項</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">サービスの提供について</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、本サービスが利用者の特定の目的に適合すること、期待する機能・商品価値・正確性・有用性を有すること、利用者による本サービスの利用が利用者に適用のある法令または業界団体の内部規則等に適合すること、および不具合が生じないことについて、何ら保証するものではありません。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">技術的問題に関する免責</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="leading-relaxed">• 当社は、本サービスに関して、利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
              <li className="leading-relaxed">• システム障害、メンテナンス、通信回線の障害等によるサービス中断について、当社は一切の責任を負いません。</li>
              <li className="leading-relaxed">• 利用者のデータの消失、破損等について、当社は責任を負いません。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">第三者サービスとの連携について</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="leading-relaxed">• 本サービスでは、第三者が提供するレビューサイトやその他のプラットフォームとの情報連携を行う場合がありますが、これらの第三者サービスの内容、品質について当社は一切保証いたしません。</li>
              <li className="leading-relaxed">• 第三者サービスの利用規約の変更、サービス終了等により本サービスに影響が生じた場合でも、当社は責任を負いません。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">損害賠償の制限</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="leading-relaxed">• 当社の債務不履行または不法行為により利用者に生じた損害の賠償は、利用者に直接かつ現実に生じた通常の損害に限られ、逸失利益、特別損害、間接損害、付随的損害については賠償責任を負いません。</li>
              <li className="leading-relaxed">• 本サービスは無料で提供されるサービスであることを鑑み、当社の責任の範囲は合理的な範囲に限定されます。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">効果に関する免責</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="leading-relaxed">• 本サービスの利用により期待される効果（評判改善、レビュー増加等）について、当社は一切保証いたしません。</li>
              <li className="leading-relaxed">• 効果には個人差があり、利用者の状況、業種、地域等により結果が異なる場合があります。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">情報の正確性について</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="leading-relaxed">• 本サービスで提供される情報の正確性、完全性、最新性について、当社は保証いたしません。</li>
              <li className="leading-relaxed">• 利用者は、本サービスの情報を利用する際は、自己の責任において判断し、利用するものとします。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}