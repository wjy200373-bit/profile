'use client'

import { motion } from 'framer-motion'

const closingStats = ['10万+全网粉丝', '300+短视频产出', '2000+私域转化']

export function EndingVideoSection() {
  return (
    <section id="ending-reel" className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="videos/ending.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/36" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/82 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-6 py-10 sm:px-8 lg:px-10">
        <motion.div
          className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-white/72"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <span>Final Reel</span>
          <span className="hidden sm:inline">AIGC Content Portfolio</span>
        </motion.div>

        <div className="max-w-4xl pb-8 sm:pb-12 lg:pb-16">
          <motion.p
            className="mb-5 text-sm font-semibold tracking-[0.16em] text-white/72"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            AIGC内容运营 / 短视频增长 / 信息流素材生产
          </motion.p>

          <motion.h2
            className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            把选题、素材与增长，落到可被验证的作品里
          </motion.h2>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            {closingStats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-white/86 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            <a
              href="mailto:2724760294@qq.com"
              className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              发送邮件
            </a>
            <a
              href="tel:18073772607"
              className="inline-flex h-12 items-center rounded-full border border-white/22 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              电话联系
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
