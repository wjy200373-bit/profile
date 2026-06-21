'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { Navigation } from '@/components/navigation'
import { ParticleBackground, MouseGlow, ScrollProgress, GridBackground } from '@/components/background-effects'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { HeroSection } from '@/components/sections/hero-section'
import { AbilityMatrix } from '@/components/sections/ability-matrix'
import { AIPractice } from '@/components/sections/ai-practice'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContentGrowth } from '@/components/sections/content-growth'
import { HonorsSection } from '@/components/sections/honors-section'
import { CompetitiveSummary } from '@/components/sections/competitive-summary'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  // Initialize smooth scroll
  useEffect(() => {
    let frameId = 0

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <GridBackground />
      <ParticleBackground />
      <MouseGlow />
      <ScrollProgress />
      <ThemeSwitcher />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <ContentGrowth />
      <ProjectsSection />
      <AIPractice />
      <AbilityMatrix />
      <HonorsSection />
      <CompetitiveSummary />
      <ContactSection />
    </main>
  )
}
