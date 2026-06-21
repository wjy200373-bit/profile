'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn, StaggerContainer, StaggerItem } from '../animations'

const insights = [
  {
    number: '01',
    title: 'AI会淘汰"重复执行者"',
    description: '而不是淘汰真正理解需求的人。那些能深入理解用户痛点、洞察市场变化的人，将与AI协同创造更大价值。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: '提示词只是基础',
    description: '真正重要的是任务拆解能力。能够将复杂问题分解为可执行步骤，才能让AI发挥最大效能。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI工具的价值',
    description: '取决于使用者是否理解业务目标。工具本身是中性的，懂业务的人才能让AI产出有商业价值的结果。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: '内容、运营、用户洞察',
    description: '在AI时代反而会更值钱。这些需要人类判断力和创造力的能力，正是AI无法完全替代的领域。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const myAdvantages = [
  '内容洞察',
  '用户心理理解',
  '运营能力',
  '信息结构化能力',
  '学习速度',
  'AI工具适应能力',
  '执行落地能力',
]

export function AIUnderstanding() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Deep Understanding
            </span>
          </FadeIn>
          <AnimatedTitle
            text="AI真正改变的不是工具，而是人的工作结构"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            delay={0.2}
          />
        </div>

        {/* Insight cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {insights.map((insight) => (
            <StaggerItem key={insight.number}>
              <motion.div
                className="glass-card p-8 rounded-2xl h-full group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {insight.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-accent text-sm font-mono">{insight.number}</span>
                    <h3 className="text-xl font-bold mt-1">{insight.title}</h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* My advantages */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8">我的优势</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {myAdvantages.map((advantage, index) => (
                <motion.span
                  key={advantage}
                  className="px-5 py-2.5 glass-card rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,77,109,0.2)' }}
                >
                  {advantage}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
