'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const SCROLL_IMG =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02_scroll_message-xckp4Xd4pC1uStcBzl1KtrhQxVdLzY.jpeg'

const MESSAGES = [
  'まだ、紙でやっていますか？',
  'まだ、電話で確認していますか？',
  'まだ、Excelを探していますか？',
]

const FINAL = 'その仕事、もっとスマートにできます。'

export function ScrollMessage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let ticking = false
    const update = () => {
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // 4 stages spread across the scroll: 0..1
  const stages = MESSAGES.length + 1
  const active = Math.min(stages - 1, Math.floor(progress * stages))

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-deep"
      style={{ height: '420vh' }}
      aria-label="産廃業務の課題提起"
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={SCROLL_IMG || '/placeholder.svg'}
          alt="クレーンで産業廃棄物コンテナを吊り上げるトラックとリサイクルセンターの現場"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Readability overlay — darker on the final message */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background:
              active === stages - 1
                ? 'linear-gradient(180deg, rgba(7,26,51,0.72), rgba(7,26,51,0.86))'
                : 'linear-gradient(180deg, rgba(7,26,51,0.45), rgba(7,26,51,0.58))',
          }}
        />

        {/* Progress rail */}
        <div className="absolute left-1/2 top-8 flex -translate-x-1/2 gap-2">
          {Array.from({ length: stages }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1 rounded-full transition-all duration-500',
                i <= active ? 'w-10 bg-cyan' : 'w-6 bg-white/30',
              )}
            />
          ))}
        </div>

        {/* Messages */}
        <div className="relative z-10 w-full px-6 text-center">
          {MESSAGES.map((msg, i) => (
            <Line key={i} show={active === i} strong={false}>
              {msg}
            </Line>
          ))}
          <Line show={active === stages - 1} strong>
            {FINAL}
          </Line>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="text-[11px] font-bold tracking-[0.3em] text-white/50">
            KEEP SCROLLING
          </span>
        </div>
      </div>
    </section>
  )
}

function Line({
  children,
  show,
  strong,
}: {
  children: React.ReactNode
  show: boolean
  strong: boolean
}) {
  return (
    <p
      className={cn(
        'absolute inset-x-0 top-1/2 mx-auto max-w-5xl -translate-y-1/2 px-6 font-black leading-[1.25] text-white transition-all duration-700 ease-out',
        strong
          ? 'text-[clamp(2rem,6.5vw,5rem)]'
          : 'text-[clamp(1.6rem,5vw,3.75rem)]',
        show ? 'opacity-100 blur-0' : 'pointer-events-none translate-y-[calc(-50%+18px)] opacity-0 blur-sm',
      )}
    >
      {strong ? (
        <span className="inline-block">
          <span className="whitespace-nowrap">その仕事、もっと</span>
          <span className="whitespace-nowrap">
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              スマート
            </span>
            にできます。
          </span>
        </span>
      ) : (
        <span className="whitespace-nowrap">{children}</span>
      )}
    </p>
  )
}
