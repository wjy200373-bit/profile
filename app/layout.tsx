import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AIGC内容运营 / 短视频增长候选人 | 求职作品集',
  description: '面向HR和面试官的求职作品集：展示短视频矩阵增长、信息流素材生产、AIGC内容工作流和私域转化经验。',
  keywords: ['AIGC内容运营', '短视频增长', '信息流素材运营', '新媒体运营', '求职作品集'],
  authors: [{ name: 'AIGC内容运营候选人' }],
  openGraph: {
    title: 'AIGC内容运营 / 短视频增长候选人 | 求职作品集',
    description: '短视频矩阵增长、信息流素材生产与AIGC内容工作流实践。',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

const themeInitScript = `
  try {
    var storedTheme = window.localStorage.getItem('portfolio-theme');
    var theme = storedTheme === 'mono' ? 'mono' : 'forest';
    var root = document.documentElement;
    root.classList.remove('theme-glass', 'theme-noir', 'theme-mono');
    root.dataset.portfolioTheme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
    if (theme === 'mono') root.classList.add('theme-mono');
  } catch (error) {}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
