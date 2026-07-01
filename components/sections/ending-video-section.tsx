'use client'

import { motion } from 'framer-motion'

export function EndingVideoSection() {
  return (
    <section id="ending-reel" className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover ending-video-enhanced"
        src="videos/ending.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/12" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/36 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/48 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-start justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/42 sm:text-xs"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <div>
            <span>Final Reel</span>
            <span className="mx-3 text-white/30">/</span>
            <span>AIGC Portfolio</span>
          </div>
          <span className="hidden text-right text-white/38 sm:block">Video as Proof</span>
        </motion.div>

        <div className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            className="max-w-[24rem] text-xs font-medium leading-relaxed text-white/46 sm:text-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            AIGC内容运营 / 短视频增长候选人
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            <a
              href="mailto:2724760294@qq.com"
              className="inline-flex h-9 items-center rounded-full bg-white/82 px-5 text-xs font-semibold text-black backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              发送邮件
            </a>
            <a
              href="tel:18073772607"
              className="inline-flex h-9 items-center rounded-full border border-white/14 bg-black/14 px-5 text-xs font-semibold text-white/68 backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              电话联系
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
