'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn, CountUp } from '../animations'

const stats = [
  { value: 3.7, suffix: '万', label: '抖音粉丝', note: '短视频主阵地运营' },
  { value: 2.7, suffix: '万', label: '小红书粉丝', note: '种草内容与搜索流量' },
  { value: 2.4, suffix: '万', label: '快手粉丝', note: '多平台内容分发' },
  { value: 100, suffix: '万+', label: '总点赞量', note: '内容互动反馈' },
  { value: 10, suffix: '万+', label: '全网粉丝', note: '矩阵增长结果' },
  { value: 2000, suffix: '+', label: '私域转化用户', note: '内容到转化承接' },
]

const proofPoints = [
  {
    title: '内容增长不是单点爆款',
    desc: '有抖音、小红书、快手多平台账号矩阵经验，关注不同平台的用户语境、内容结构和分发逻辑。',
  },
  {
    title: '商业化素材看数据闭环',
    desc: '熟悉CTR、ROI、完播率、转化率等核心指标，能根据数据反馈调整选题、脚本、封面和卖点表达。',
  },
  {
    title: 'AI能力服务生产效率',
    desc: '将AI用于热点监测、竞品拆解、脚本生成、素材制作、剪辑包装和复盘沉淀，而不是停留在工具展示。',
  },
]

export function ContentGrowth() {
  return (
    <section id="metrics" className="section-light relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="kicker-blue text-sm font-semibold">
              Key Results
            </span>
          </FadeIn>
          <AnimatedTitle
            text="先看结果：多平台内容增长与转化数据"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-blue-gradient"
            delay={0.2}
          />
          <FadeIn delay={0.4}>
            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              多平台内容矩阵、信息流素材与私域承接形成可验证的增长结果。
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="result-card card-light rounded-2xl p-5 sm:p-6 min-h-[158px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="text-3xl md:text-4xl font-bold">
                <CountUp end={stat.value} suffix={stat.suffix} className="text-blue-gradient" />
              </div>
              <div className="text-sm font-semibold mt-3 text-slate-950">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-2 leading-relaxed">{stat.note}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {proofPoints.map((item, index) => (
            <FadeIn key={item.title} delay={0.3 + index * 0.1}>
              <div className="h-full card-light p-6 rounded-2xl">
                <div className="text-[#39703D] font-mono text-sm">0{index + 1}</div>
                <h3 className="text-xl font-bold mt-3 text-slate-950">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
