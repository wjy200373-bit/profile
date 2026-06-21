'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export function AnimatedTitle({ text, className = '', delay = 0, once = true }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  const words = text.split(' ')

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: delay + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  )
}

export function AnimatedCharacters({ text, className = '', delay = 0, once = true }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const characters = text.split('')

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: delay + i * 0.02,
                ease: [0.215, 0.61, 0.355, 1],
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up', once = true }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1, once = true }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function CountUp({ end, suffix = '', prefix = '', className = '', duration = 2 }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView && (
          <CountUpAnimation end={end} duration={duration} />
        )}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

function CountUpAnimation({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0)
  const fractionDigits = Number.isInteger(end) ? 0 : 1

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      const nextCount = progress * end
      setCount(Number.isInteger(end) ? Math.floor(nextCount) : Number(nextCount.toFixed(fractionDigits)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, fractionDigits])

  return <>{count.toLocaleString(undefined, { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits })}</>
}
