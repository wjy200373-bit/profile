'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

const cases = [
  {
    title: '个人全平台自媒体运营',
    role: '信息流内容负责人',
    period: '2022.09 - 至今',
    summary: '独立搭建抖音、小红书、快手多平台账号矩阵，负责内容增长与私域承接。',
    metrics: ['全网粉丝10万+', '总点赞100万+', '抖音粉丝3.7万', '私域转化2000+'],
    actions: [
      '完成账号定位、选题策划、内容发布、数据复盘和私域承接。',
      '拆解40+同类账号与信息流素材，沉淀选题方向和爆款结构。',
      '搭建公域引流到私域转化链路，结合活动和话术提升用户沉淀。',
    ],
    color: '#39703D',
  },
  {
    title: '短视频矩阵 & AI素材运营',
    role: '内容运营专员',
    period: '2025.11 - 2026.03',
    summary: '围绕信息流广告素材，参与素材策划、批量测试、数据分析和放量优化。',
    metrics: ['孵化2个百万播放账号', '素材批量测试', 'CTR/ROI复盘', '完播率优化'],
    actions: [
      '执行素材测款机制，依据ROI、点击率和完播率判断素材质量。',
      '分析素材爆款结构，优化标题、封面、卖点和视频节奏。',
      '搭建数据看板，持续跟踪播放、消耗、转化等关键指标。',
    ],
    color: '#CA5655',
  },
  {
    title: '抖音社群运营',
    role: '私域转化与用户维护',
    period: '2023.06 - 至今',
    summary: '承接内容流量进入私域，负责社群维护、活动策划与用户转化。',
    metrics: ['引流转化2000+', '月均稳定变现1.5万+', '活动转化提升25%', '社群运营闭环'],
    actions: [
      '搭建并维护私域社群体系，提升用户留存和信任感。',
      '结合用户画像优化文案和推送策略，提高活动转化表现。',
      '沉淀话术、活动节奏和内容触点，让公域内容产生商业价值。',
    ],
    color: '#93A292',
  },
]

export function ProjectsSection() {
  return (
    <section id="cases" className="section-white relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="kicker-blue text-sm font-semibold">
              Core Cases
            </span>
          </FadeIn>
          <AnimatedTitle
            text="三段经历，证明内容增长、商业化素材与私域转化能力"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-blue-gradient"
            delay={0.2}
          />
          <FadeIn delay={0.4}>
            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              结果、职责与可迁移能力集中呈现，方便快速判断岗位匹配度。
            </p>
          </FadeIn>
        </div>

        <div className="space-y-6">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              className="card-light rounded-2xl p-6 md:p-8 overflow-hidden relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: item.color }} />

              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-[#39703D] text-[#fefefd] font-medium">{item.role}</span>
                    <span className="text-slate-500">{item.period}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mt-4 text-slate-950">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mt-4">{item.summary}</p>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {item.metrics.map((metric) => (
                      <div key={metric} className="bg-[#e4e4dc] text-[#2f3328] rounded-xl px-4 py-3 text-sm font-semibold">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {item.actions.map((action, actionIndex) => (
                    <div key={action} className="flex gap-4">
                      <span className="text-[#39703D] font-mono text-sm mt-0.5">0{actionIndex + 1}</span>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
