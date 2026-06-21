'use client'

import { motion } from 'framer-motion'
import { AnimatedTitle, FadeIn } from '../animations'

export function ContactSection() {
  return (
    <section id="contact" className="section-white relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section header */}
        <FadeIn>
          <span className="kicker-blue text-sm font-semibold">
            Get In Touch
          </span>
        </FadeIn>

        <AnimatedTitle
          text="期待获得面试交流机会"
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-6 leading-tight text-blue-gradient"
          delay={0.2}
        />

        <FadeIn delay={0.4}>
          <p className="text-slate-600 text-lg mt-6 max-w-xl mx-auto">
            如果岗位需要一名既懂短视频内容增长，又能将AIGC接入素材生产与数据复盘的内容运营候选人，欢迎进一步联系。
          </p>
        </FadeIn>

        {/* Contact info */}
        <FadeIn delay={0.5}>
          <div className="mt-12 card-light p-8 rounded-2xl max-w-md mx-auto">
            <div className="space-y-4">
              <ContactItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="邮箱"
                value="2724760294@qq.com"
              />
              <ContactItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                label="手机"
                value="18073772607"
              />
              <ContactItem
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.328.328 0 00.186-.059l1.875-1.153a.587.587 0 01.573-.049 9.88 9.88 0 002.985.461c4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.341-8.691-7.341z" />
                  </svg>
                }
                label="微信"
                value="与手机同步"
              />
            </div>
          </div>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={0.6}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:2724760294@qq.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#39703D] text-[#fefefd] font-semibold rounded-xl hover:bg-[#2f6334] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              发送邮件
            </motion.a>
            <motion.a
              href="tel:18073772607"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              电话联系
            </motion.a>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-slate-200">
        <p className="text-center text-sm text-slate-500">
          © 2024 AIGC内容运营求职作品集. Built with Next.js & Framer Motion.
        </p>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 text-left">
      <div className="w-10 h-10 rounded-lg bg-[#e4e4dc] flex items-center justify-center text-[#39703D] flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="font-medium text-slate-950">{value}</div>
      </div>
    </div>
  )
}
