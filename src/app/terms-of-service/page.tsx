export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>
        
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第1条（適用）</h2>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
            <li>本規約は、当社が提供するオンライン評判管理サービス「ミレプ」（以下「本サービス」）の利用に関して、当社と利用者との間の権利義務関係を定めるものです。</li>
            <li>本規約は、本サービスの利用に関して、利用者と当社に適用されます。</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第2条（定義）</h2>
          <p className="mb-4 text-gray-700">本規約において、以下の用語はそれぞれ以下の意味で使用します。</p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
            <li>「当社」とは、株式会社i-SHOTを意味します。</li>
            <li>「利用者」とは、本サービスを利用する個人または法人を意味します。</li>
            <li>「利用者情報」とは、利用者が本サービスの利用に際して当社に提供する情報を意味します。</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第3条（利用資格）</h2>
          <p className="mb-4 text-gray-700">本サービスは、以下の条件を満たす方のみご利用いただけます。</p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
            <li>18歳以上の個人または法人であること</li>
            <li>本規約に同意し、これを遵守できること</li>
            <li>反社会的勢力でないこと</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第4条（アカウント登録）</h2>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
            <li>利用者は、本サービスの利用にあたり、当社の定める方法によりアカウント登録を行うものとします。</li>
            <li>利用者は、登録時に正確、最新かつ完全な情報を提供するものとします。</li>
            <li>アカウント情報の管理責任は利用者が負うものとし、第三者による不正利用について当社は責任を負いません。</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第5条（禁止事項）</h2>
          <p className="mb-4 text-gray-700">利用者は、本サービスの利用にあたり、以下の行為を行ってはならないものとします。</p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
            <li>法令または公序良俗に反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
            <li>虚偽の情報を登録する行為</li>
            <li>営利目的での本サービスの利用</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第6条（知的財産権）</h2>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
            <li>本サービスに関する知的財産権は、当社または当社にライセンスを許諾している者に帰属します。</li>
            <li>本規約に基づく本サービスの利用許諾は、知的財産権の使用許諾を意味するものではありません。</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第7条（利用制限・停止）</h2>
          <p className="mb-4 text-gray-700">当社は、利用者が以下のいずれかに該当する場合、事前の通知なく、利用者に対して本サービスの全部または一部の利用を制限し、または利用者のアカウントを削除することができます。</p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
            <li>本規約のいずれかの条項に違反した場合</li>
            <li>登録事項に虚偽の事実があることが判明した場合</li>
            <li>その他、本サービスの利用を適当でないと当社が判断した場合</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第8条（本サービスの提供の停止等）</h2>
          <p className="mb-4 text-gray-700">当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができます。</p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第9条（規約の変更）</h2>
          <p className="mb-6 text-gray-700">
            当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができます。変更後の本規約は、当社ウェブサイトに掲示された時点から効力を生じるものとします。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第10条（準拠法・管轄裁判所）</h2>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
            <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
            <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
          </ol>
        </div>
      </div>
    </div>
  )
}