import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: 'AI FinancePro | Next-Gen Financial Intelligence Platform',
  description: 'Revolutionary AI-powered finance dashboard featuring neural network analytics, predictive forecasting, intelligent invoice processing, and autonomous compliance monitoring',
  keywords: 'AI finance, machine learning, financial analytics, cyberpunk dashboard, futuristic finance, neural networks, predictive analytics',
  authors: [{ name: 'Executa Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AI FinancePro | Future of Finance',
    description: 'Experience the future of financial management with AI-powered insights',
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
    <html lang="en" className={`${orbitron.variable}`}>
      <head>
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors 'self' https://executasolutions.com https://*.executasolutions.com;" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Enhanced iframe detection with dark theme support
              (function() {
                if (window !== window.top) {
                  document.documentElement.classList.add('iframe-embedded');
                  
                  // Apply dark theme for iframe embedding
                  document.documentElement.style.setProperty('--bg-primary', '#0f0f23');
                  document.documentElement.style.setProperty('--text-primary', '#ffffff');
                  
                  function updateHeight() {
                    const height = Math.max(
                      document.documentElement.scrollHeight,
                      document.body.scrollHeight,
                      document.documentElement.offsetHeight,
                      document.body.offsetHeight
                    );
                    window.parent.postMessage({
                      type: 'iframe-resize',
                      height: height + 20 // Add padding
                    }, 'https://executasolutions.com');
                  }
                  
                  // Enhanced height tracking
                  window.addEventListener('load', () => {
                    setTimeout(updateHeight, 100);
                  });
                  window.addEventListener('resize', updateHeight);
                  
                  // Advanced DOM observation
                  if (typeof MutationObserver !== 'undefined') {
                    const observer = new MutationObserver(() => {
                      clearTimeout(window.resizeTimeout);
                      window.resizeTimeout = setTimeout(updateHeight, 50);
                    });
                    observer.observe(document.body, {
                      childList: true,
                      subtree: true,
                      attributes: true,
                      attributeFilter: ['style', 'class']
                    });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} relative overflow-x-hidden`}>
        {/* Global ambient effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className={`min-h-screen relative z-10 ${typeof window !== 'undefined' && window !== window.top ? 'iframe-container' : ''}`}>
          {children}
        </div>
      </body>
    </html>
  )
} 