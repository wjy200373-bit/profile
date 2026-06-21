'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

const toolCategories = [
  { name: '内容生成', angle: 0 },
  { name: '数据分析', angle: 45 },
  { name: 'Agent', angle: 90 },
  { name: '自动化', angle: 135 },
  { name: '图像生成', angle: 180 },
  { name: '视频生成', angle: 225 },
  { name: 'UI设计', angle: 270 },
  { name: '编程辅助', angle: 315 },
]

export function AIToolEcosystem() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Tool Ecosystem
            </span>
          </FadeIn>
          <AnimatedTitle
            text="我实际使用过的AI工具生态"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            delay={0.2}
          />
          <FadeIn delay={0.4}>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              AI对我而言不是聊天工具，而是一套完整的效率系统。
            </p>
          </FadeIn>
        </div>

        {/* Orbital diagram */}
        <div className="relative h-[500px] md:h-[600px]">
          <OrbitalDiagram />
        </div>

        {/* Bottom highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <FadeIn delay={0.5}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text">30+</div>
              <div className="text-muted-foreground mt-2">AI工具深度使用</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text">8</div>
              <div className="text-muted-foreground mt-2">核心工作流领域</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text">跨工具</div>
              <div className="text-muted-foreground mt-2">协同工作流意识</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function OrbitalDiagram() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Orbital rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-border/30"
          style={{
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: ring * 0.1 }}
          viewport={{ once: true }}
        />
      ))}

      {/* Center hub */}
      <motion.div
        className="absolute z-10 glass-card px-8 py-6 rounded-2xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Core</div>
        <div className="text-2xl font-bold gradient-text">AI Workflow</div>
        <div className="text-sm text-muted-foreground mt-1">完整效率系统</div>
      </motion.div>

      {/* Orbiting categories */}
      {toolCategories.map((category, index) => {
        const radius = 220
        const radian = (category.angle * Math.PI) / 180
        const x = Math.cos(radian) * radius
        const y = Math.sin(radian) * radius

        return (
          <motion.div
            key={category.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: x - 50,
              y: y - 20,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.08,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-card px-4 py-2 rounded-xl cursor-pointer whitespace-nowrap"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(255,77,109,0.2)',
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <span className="text-sm font-medium">{category.name}</span>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {toolCategories.map((category, index) => {
          const radius = 220
          const radian = (category.angle * Math.PI) / 180
          const x = Math.cos(radian) * radius + 50 // offset for center
          const y = Math.sin(radian) * radius + 50

          return (
            <motion.line
              key={`line-${index}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke="rgba(255,77,109,0.1)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
              viewport={{ once: true }}
            />
          )
        })}
      </svg>

      {/* Animated glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,77,109,0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
