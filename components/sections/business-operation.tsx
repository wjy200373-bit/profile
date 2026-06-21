'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

const businessSkills = [
  '私域转化',
  '用户留存',
  '活动策划',
  '社群运营',
  '用户画像',
  '内容转化',
]

const operationSkills = [
  '数据复盘',
  '内容迭代',
  '用户需求分析',
  '流量逻辑',
  '平台算法理解',
  '增长策略',
]

export function BusinessOperation() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <FadeIn>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Business & Operations
            </span>
          </FadeIn>
          <AnimatedTitle
            text="我不仅会做内容，也理解商业转化逻辑"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            delay={0.2}
          />
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business side */}
          <FadeIn delay={0.3}>
            <div className="glass-card p-8 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">商业化能力</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {businessSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium border border-border/50 hover:border-accent/30 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Key metrics */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">3000+</div>
                  <div className="text-sm text-muted-foreground">转化用户</div>
                </div>
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">2500+</div>
                  <div className="text-sm text-muted-foreground">私域用户</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Operations side */}
          <FadeIn delay={0.4}>
            <div className="glass-card p-8 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">运营理解</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {operationSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium border border-border/50 hover:border-accent/30 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Key insights */}
              <div className="mt-8 p-4 border-l-2 border-accent/50 bg-accent/5 rounded-r-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  运营的本质是理解用户需求与平台规则的交叉点，在这个交叉点上创造价值。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom quote */}
        <FadeIn delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground">
              &quot;我更擅长把<span className="text-foreground font-semibold">内容能力</span>、<span className="text-foreground font-semibold">用户理解</span>与<span className="text-foreground font-semibold">AI工具</span>结合。&quot;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
