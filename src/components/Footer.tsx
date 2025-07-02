import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © 2025 ビューティーレビューアプリ. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
            <Link 
              href="/terms-of-service" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              利用規約
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link 
              href="/commercial-transaction-act" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              特定商取引法に基づく表記
            </Link>
            <Link 
              href="/disclaimer" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              免責事項
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}