'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

const achievements = [
  { title: '国家专利', count: '2项', desc: '创新与项目落地能力' },
  { title: '国家软著', count: '3项', desc: '技术成果转化能力' },
  { title: '国家级奖项', count: '9项', desc: '项目竞争力与执行力' },
  { title: '省级奖项', count: '11项', desc: '持续参赛与打磨能力' },
  { title: '校级奖项', count: '50+项', desc: '长期稳定输出' },
  { title: '综合成果', count: '70+项', desc: '学习、实践与组织能力' },
]

const projects = [
  '省级“汉字应用能力测试平台”项目负责人：参与项目从0到1上线，负责流程推进与团队协作。',
  '“芙蓉学子·乡村振兴”公益计划项目通讯员：参与调研、内容报道和主题传播。',
]

export function HonorsSection() {
  return (
    <section className="section-white relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="kicker-blue text-sm font-semibold">
              Proof & Awards
            </span>
          </FadeIn>
          <AnimatedTitle
            text="项目经历与成果背书"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-blue-gradient"
            delay={0.2}
          />
          <FadeIn delay={0.4}>
            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              持续学习、项目推进与长期输出的成果记录。
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-light rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl font-bold text-blue-gradient">{item.count}</div>
              <h3 className="text-lg font-bold mt-4 text-slate-950">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 card-light rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-950">代表项目经历</h3>
            <div className="mt-5 grid md:grid-cols-2 gap-5">
              {projects.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="text-[#39703D] font-mono text-sm mt-0.5">0{index + 1}</span>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
