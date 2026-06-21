'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

const values = [
  '能快速理解平台内容逻辑',
  '能用数据复盘素材质量',
  '能把AI变成生产流程',
  '能兼顾内容增长与转化',
]

export function CompetitiveSummary() {
  return (
    <section className="section-light relative py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="kicker-blue text-sm font-semibold">
            Position Fit
          </span>
        </FadeIn>

        <AnimatedTitle
          text="我能为岗位带来的价值"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-blue-gradient"
          delay={0.2}
        />

        <FadeIn delay={0.4}>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            相比单纯的工具使用，我更适合承担需要内容判断、AIGC生产、数据复盘和运营转化协同的岗位。
          </p>
        </FadeIn>

        <motion.div
          className="mt-12 grid sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value}
              className="card-light rounded-2xl p-5 text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
            >
              <span className="text-[#39703D] font-mono text-sm">0{index + 1}</span>
              <p className="text-lg font-semibold mt-3 text-slate-950">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
