'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn, StaggerContainer, StaggerItem } from '../animations'

const productionLayers = [
  {
    label: 'Input',
    title: '需求拆解',
    desc: '把岗位目标、平台场景、人群痛点和转化动作整理成清晰Brief。',
    className: 'bg-[#39703D] text-white',
  },
  {
    label: 'Generate',
    title: '内容生成',
    desc: '用大模型完成选题扩展、脚本初稿、标题方向和卖点表达。',
    className: 'bg-[#75B974] text-[#171a14]',
  },
  {
    label: 'Produce',
    title: '素材制作',
    desc: '结合图像、视频与剪辑工具，产出封面、分镜和可发布成片。',
    className: 'bg-[#CA5655] text-white',
  },
  {
    label: 'Optimize',
    title: '复盘沉淀',
    desc: '根据完播、点击、转化数据优化模板、提示词和素材结构。',
    className: 'bg-[#5f624e] text-white',
  },
]

const abilityModules = [
  {
    title: '选题与竞品拆解',
    desc: '热点监测、竞品账号拆解、内容结构分析',
  },
  {
    title: '大模型文案与脚本',
    desc: 'ChatGPT / Gemini辅助脚本、卖点提炼、标题优化',
  },
  {
    title: 'AIGC素材生产',
    desc: 'Midjourney、即梦、可灵 / Sora辅助图片与视频素材生成',
  },
  {
    title: '剪辑包装落地',
    desc: '剪映AI、PR、PS完成封面、字幕、节奏与成片包装',
  },
  {
    title: '数据复盘优化',
    desc: '基于CTR、ROI、完播率、转化率判断素材质量',
  },
  {
    title: '模板沉淀复用',
    desc: '沉淀脚本模板、提示词库、素材结构，提高批量产出效率',
  },
]

export function AbilityMatrix() {
  return (
    <section id="abilities" className="section-light relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="kicker-blue text-sm font-semibold">
              AIGC Capability
            </span>
          </FadeIn>
          <AnimatedTitle
            text="AIGC内容生产能力结构"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-blue-gradient"
            delay={0.2}
          />
          <FadeIn delay={0.4}>
            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              能将AI接入内容生产关键环节，把需求拆解、生成协作、素材制作和数据复盘串成可执行流程。
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {productionLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                className={`${layer.className} relative min-h-[180px] rounded-2xl p-5 overflow-hidden`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute right-4 top-4 text-5xl font-bold opacity-10">0{index + 1}</div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="text-xs font-semibold uppercase">{layer.label}</span>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold">{layer.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-85">{layer.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {abilityModules.map((module, index) => (
            <StaggerItem key={module.title}>
              <motion.div
                className="card-light p-6 rounded-2xl h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-[#39703D] font-mono text-sm">0{index + 1}</span>
                <h3 className="text-xl font-bold mt-4 text-slate-950">{module.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">{module.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
