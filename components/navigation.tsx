'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: '定位', href: '#positioning' },
  { label: '数据', href: '#metrics' },
  { label: '案例', href: '#cases' },
  { label: 'AI工作流', href: '#practice' },
  { label: '能力', href: '#abilities' },
  { label: '联系', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">AI</span>
            <span className="text-foreground">AIGC运营</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-4 py-2 bg-[#75B974] text-[#171a14] text-sm font-medium rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              联系我
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-foreground origin-left"
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-foreground"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-foreground origin-left"
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0 }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-20 left-6 right-6 glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-4 px-4 py-3 bg-[#75B974] text-[#171a14] text-center font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  联系我
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
