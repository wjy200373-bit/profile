'use client'

import { motion } from 'framer-motion'
import { AnimatedCharacters, FadeIn } from '../animations'

const targetRoles = ['AIGC内容运营', '短视频增长', '信息流素材运营', '新媒体运营']

const proofStats = [
  { value: '10万+', label: '全网粉丝累计' },
  { value: '100万+', label: '总点赞量' },
  { value: '300+', label: '短视频产出' },
  { value: '2000+', label: '私域转化用户' },
]

const fitPoints = [
  '三年内容实战经验，覆盖抖音 / 小红书 / 快手',
  '熟悉信息流素材策划、测款、复盘与转化',
  '能把AI接入选题、脚本、素材、剪辑和复盘',
  '具备内容增长、商业化思维和执行落地能力',
]

export function HeroSection() {
  return (
    <section id="positioning" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-4 py-1.5 text-sm font-medium text-muted-foreground bg-secondary/50 rounded-full border border-border/50"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </FadeIn>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]">
                <AnimatedCharacters
                  text="AIGC内容运营"
                  className="block"
                  delay={0.25}
                />
                <span className="block mt-2 gradient-text">
                  <AnimatedCharacters
                    text="/ 短视频增长候选人"
                    delay={0.55}
                  />
                </span>
              </h1>
            </div>

            <FadeIn delay={0.9}>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                25届应届生，中共党员。具备三年内容实战经验，熟悉短视频矩阵增长、信息流素材生产与AIGC内容工作流落地。
              </p>
            </FadeIn>

            <FadeIn delay={1.05}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="border-l border-[#75B974]/60 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={1.2}>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#cases"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#75B974] text-[#171a14] font-semibold rounded-lg hover:bg-[#86c985] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  查看核心案例
                  <span aria-hidden="true">→</span>
                </motion.a>
                <motion.a
                  href="#practice"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-border hover:bg-secondary/80 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  查看AI工作流
                </motion.a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.35} direction="left">
            <div className="relative">
              <div className="absolute -inset-6 bg-[#75B974]/10 blur-3xl" />
              <div className="relative glass-card rounded-2xl p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-border/40">
                  <div>
                    <div className="text-xs text-[#75B974] uppercase tracking-wider font-semibold">Recruiter Snapshot</div>
                    <h2 className="text-2xl font-bold mt-2">30秒快速判断</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">Fit</div>
                    <div className="text-xs text-muted-foreground">AIGC内容 / 短视频增长</div>
                  </div>
                </div>

                <div className="divide-y divide-border/40">
                  {fitPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      className="flex items-start gap-4 py-5"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <span className="mt-0.5 text-[#75B974] font-mono text-sm">0{index + 1}</span>
                      <p className="text-foreground/90 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border/40">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    适配方向：AIGC内容运营、短视频运营、信息流素材运营、新媒体内容增长、用户/私域运营。
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
