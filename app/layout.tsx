import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI FinancePro | Professional Financial Management Dashboard',
  description: 'AI-powered finance dashboard with neural network analytics, predictive forecasting, invoice management, and compliance reporting',
  keywords: 'finance, dashboard, AI, machine learning, financial analytics, invoice management, compliance',
  authors: [{ name: 'Executa Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AI FinancePro Dashboard',
    description: 'Professional AI-powered financial management dashboard',
    type: 'website',
    siteName: 'AI FinancePro',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors 'self' https://executasolutions.com https://*.executasolutions.com;" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Detect if running in iframe and adjust styling
              (function() {
                if (window !== window.top) {
                  document.documentElement.classList.add('iframe-embedded');
                  // Communicate with parent frame for responsive sizing
                  function updateHeight() {
                    const height = document.documentElement.scrollHeight;
                    window.parent.postMessage({
                      type: 'iframe-resize',
                      height: height
                    }, 'https://executasolutions.com');
                  }
                  
                  // Update height on load and resize
                  window.addEventListener('load', updateHeight);
                  window.addEventListener('resize', updateHeight);
                  
                  // Observe DOM changes for dynamic content
                  if (typeof MutationObserver !== 'undefined') {
                    const observer = new MutationObserver(updateHeight);
                    observer.observe(document.body, {
                      childList: true,
                      subtree: true,
                      attributes: true
                    });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className={`min-h-screen ${typeof window !== 'undefined' && window !== window.top ? 'iframe-container' : ''}`}>
          {children}
        </div>
      </body>
    </html>
  )
} 