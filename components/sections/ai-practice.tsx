'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

const workflowSteps = [
  { title: '热点监测', desc: '跟踪平台热点与行业话题，筛选可转化选题。', tool: '平台数据 / 热点榜' },
  { title: '竞品拆解', desc: '拆解爆款账号、千川素材和脚本结构。', tool: '40+账号分析' },
  { title: '脚本生成', desc: '用大模型辅助初稿、标题和卖点表达。', tool: 'ChatGPT / Gemini' },
  { title: '视觉素材', desc: '生成封面方向、场景图和视频素材灵感。', tool: 'Midjourney / 即梦' },
  { title: '剪辑包装', desc: '完成字幕、节奏、封面和成片适配。', tool: '剪映AI / PR / PS' },
  { title: '数据复盘', desc: '根据CTR、ROI、完播率迭代素材和模板。', tool: '数据看板' },
]

const workflowNotes = [
  '标准流程：LLM撰写脚本 -> Midjourney制作配图 -> 可灵/Sora生成视频 -> 剪映AI剪辑成片。',
  '重点不是一次性生成内容，而是沉淀提示词、脚本模板和素材结构，支撑批量产出。',
]

const promptElements = ['角色', '受众', '痛点', '卖点', '结构', '格式']

const comparisonRows = [
  {
    dimension: '需求输入',
    before: '一句话需求，受众、场景、卖点和转化动作都不清晰。',
    after: '先拆成目标人群、痛点、产品利益点、平台语境和行动引导。',
  },
  {
    dimension: '脚本产出',
    before: '凭经验写初稿，容易变成泛泛介绍，测试版本数量有限。',
    after: '批量生成不同钩子、节奏和卖点表达，再人工筛选可拍版本。',
  },
  {
    dimension: '素材方向',
    before: '封面、分镜和口播画面需要反复临时构思，沟通成本高。',
    after: '同步输出封面文案、镜头建议和视觉关键词，方便剪辑落地。',
  },
  {
    dimension: '复盘沉淀',
    before: '复盘停留在单条内容表现，下一轮容易重新开始。',
    after: '把有效钩子、脚本结构和素材组合沉淀成可复用模板。',
  },
]

const aiOutputItems = [
  '3条标题方向',
  '2版脚本结构',
  '4个封面卖点',
  '3组镜头建议',
  '1份复盘清单',
]

export function AIPractice() {
  return (
    <section id="practice" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(117,185,116,0.16),transparent_34rem),radial-gradient(circle_at_82%_18%,rgba(202,86,85,0.12),transparent_30rem),linear-gradient(180deg,#171a14_0%,#263321_48%,#171a14_100%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              AIGC Workflow
            </span>
          </FadeIn>
          <AnimatedTitle
            text="我如何把AIGC接入内容生产全链路"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            delay={0.2}
          />
          <FadeIn delay={0.4}>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              从选题、脚本、素材到剪辑和复盘，我关注的是AI如何提升内容产出效率和商业化转化。
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-12 right-12 top-[34px] h-px bg-white/10" />
          <motion.div
            className="flow-line-animated hidden lg:block absolute left-12 right-12 top-[34px] h-px origin-left bg-gradient-to-r from-[#39703D] via-[#75B974] to-[#CA5655]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.15, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, margin: '-120px' }}
          />

          <div className="grid gap-4 lg:grid-cols-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <div
                  className="lg:mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-[#75B974] text-[#171a14] flow-dot"
                  style={{ animationDelay: `${index * 0.18}s` }}
                >
                  <span className="font-mono text-sm">0{index + 1}</span>
                </div>
                <div className="glass-card rounded-2xl p-5 h-full">
                  <span className="inline-flex rounded-full bg-[#75B974]/15 px-3 py-1 text-xs text-[#e4e4dc]">
                    {step.tool}
                  </span>
                  <h3 className="text-lg font-bold mt-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <FadeIn delay={0.55}>
          <div className="mt-10 glass-card rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-[180px_1fr] gap-6">
              <div>
                <div className="text-xs text-accent uppercase tracking-wider font-semibold">Workflow Standard</div>
                <h3 className="text-2xl font-bold mt-2">可复用流程</h3>
              </div>
              <div className="space-y-3">
                {workflowNotes.map((note) => (
                  <p key={note} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="mt-12">
            <div className="max-w-3xl mb-8">
              <span className="text-[#75B974] font-mono text-sm">Before / After</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3">AI参与前后对比：从一句需求到可投放素材包</h3>
              <p className="text-muted-foreground leading-relaxed mt-3">
                AI不是替代内容判断，而是把模糊需求拆成脚本、封面、镜头和复盘动作，缩短试错周期。
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-4">
              <motion.div
                className="glass-card rounded-2xl p-5 md:p-6"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid gap-3 lg:grid-cols-[92px_1fr_1fr]">
                  <div className="hidden text-xs font-semibold uppercase tracking-wider text-[#75B974] lg:block">
                    维度
                  </div>
                  <div className="hidden text-xs font-semibold uppercase tracking-wider text-[#e4e4dc] lg:block">
                    AI介入前
                  </div>
                  <div className="hidden text-xs font-semibold uppercase tracking-wider text-[#75B974] lg:block">
                    AI介入后
                  </div>
                  {comparisonRows.map((row, index) => (
                    <motion.div
                      key={row.dimension}
                      className="contents"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-xl bg-white/8 px-4 py-3 text-sm font-semibold text-[#75B974] lg:bg-transparent lg:px-0">
                        {row.dimension}
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/6 p-4 text-sm leading-relaxed text-muted-foreground">
                        <span className="mb-2 block text-xs font-semibold text-[#e4e4dc] lg:hidden">AI介入前</span>
                        {row.before}
                      </div>
                      <div className="rounded-xl border border-[#75B974]/25 bg-[#75B974]/12 p-4 text-sm leading-relaxed text-[#e4e4dc]">
                        <span className="mb-2 block text-xs font-semibold text-[#75B974] lg:hidden">AI介入后</span>
                        {row.after}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="card-blue rounded-2xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-xs text-[#e4e4dc] uppercase tracking-wider font-semibold">Prompt Structure</div>
                <h4 className="text-xl font-bold mt-3">提示词重构</h4>
                <div className="mt-5 flex flex-wrap gap-2">
                  {promptElements.map((item, index) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/12 text-sm"
                      initial={{ opacity: 0, scale: 0.86 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.18 + index * 0.04 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm text-[#e4e4dc] leading-relaxed mt-5">
                  让AI按“信息流广告编导”身份，围绕目标用户痛点、核心卖点和视频结构输出。
                </p>
                <div className="mt-6 border-t border-white/15 pt-5">
                  <div className="text-xs text-[#e4e4dc] uppercase tracking-wider font-semibold">Output Package</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {aiOutputItems.map((item, index) => (
                      <motion.span
                        key={item}
                        className="rounded-lg bg-white/10 px-3 py-1.5 text-sm"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-4 rounded-2xl border border-white/10 bg-white/6 p-5 md:p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              viewport={{ once: true }}
            >
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-center">
                <div>
                  <div className="text-xs text-[#75B974] uppercase tracking-wider font-semibold">Result</div>
                  <h4 className="mt-2 text-xl font-bold">最终价值</h4>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  原本只能交付一版脚本，AI参与后可以同时交付多版钩子、脚本结构、封面方向、镜头建议和复盘指标，让内容从“写出来”变成“可测试、可迭代、可复用”。
                </p>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
