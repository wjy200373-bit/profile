'use client'

import { useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'

type PortfolioTheme = 'forest' | 'mono'

const STORAGE_KEY = 'portfolio-theme'
const THEME_CHANGE_EVENT = 'portfolio-theme-change'
const THEME_CLASSES = ['theme-mono', 'theme-glass', 'theme-noir'] as const

const themes: Array<{
  id: PortfolioTheme
  label: string
  shortLabel: string
  swatch: string
}> = [
  {
    id: 'forest',
    label: '专业绿',
    shortLabel: '绿',
    swatch: 'linear-gradient(135deg, #39703D, #75B974 58%, #CA5655)',
  },
  {
    id: 'mono',
    label: '黑白',
    shortLabel: '黑',
    swatch: 'linear-gradient(135deg, #050505, #2F2F2F 52%, #F4F1EA 100%)',
  },
]

function isPortfolioTheme(value: string | null): value is PortfolioTheme {
  return value === 'forest' || value === 'mono'
}

function applyTheme(theme: PortfolioTheme) {
  const root = document.documentElement

  root.classList.remove(...THEME_CLASSES)
  root.dataset.portfolioTheme = theme

  if (theme === 'mono') {
    root.classList.add('theme-mono')
  }
}

function getThemeSnapshot(): PortfolioTheme {
  if (typeof document === 'undefined') return 'forest'

  const currentTheme = document.documentElement.dataset.portfolioTheme ?? null

  return isPortfolioTheme(currentTheme) ? currentTheme : 'forest'
}

function getServerThemeSnapshot(): PortfolioTheme {
  return 'forest'
}

function subscribeThemeChange(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback)
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

export function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribeThemeChange, getThemeSnapshot, getServerThemeSnapshot)

  const selectTheme = (nextTheme: PortfolioTheme) => {
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  }

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-[70]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div className="glass flex items-center gap-1 rounded-full p-1 shadow-2xl">
        {themes.map((item) => {
          const isActive = item.id === theme

          return (
            <motion.button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              aria-label={`切换到${item.label}主题`}
              className={`relative flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium transition-colors ${
                isActive ? 'text-[#171a14]' : 'text-foreground/70 hover:bg-white/10 hover:text-foreground'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => selectTheme(item.id)}
            >
              {isActive && (
                <motion.span
                  layoutId="theme-switcher-active"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span
                className="relative size-3 rounded-full ring-1 ring-white/45"
                style={{ background: item.swatch }}
              />
              <span className="relative hidden sm:inline">{item.label}</span>
              <span className="relative sm:hidden">{item.shortLabel}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
