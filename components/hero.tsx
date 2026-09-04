import { ArrowRight, ArrowDown } from 'lucide-react'

const HERO_IMG =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_hero_main-TnSQgix2jABMKtYMDOtxy8gR4An6aw.jpeg'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[72px]">
      <div className="mx-auto grid min-h-[calc(100svh-72px)] w-full max-w-[1920px] grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Text column */}
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-20 lg:pl-[max(2.5rem,calc((100vw-1600px)/2+2.5rem))] lg:pr-[clamp(2.5rem,4vw,5rem)]">
          <div className="w-full max-w-[36rem]">
            <div className="flex items-center gap-3 opacity-0 [animation:fade-up_0.8s_0.05s_forwards] motion-reduce:opacity-100">
              <span className="h-px w-8 bg-cyan" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                INDUSTRIAL × DIGITAL
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.3rem,3.6vw,4.25rem)] font-black leading-[1.14] tracking-tight text-navy-deep opacity-0 [animation:fade-up_0.9s_0.15s_forwards] motion-reduce:opacity-100">
              <span className="block whitespace-nowrap">紙と残業から、</span>
              <span className="relative mt-1 inline-block whitespace-nowrap">
                現場を解放する。
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
              </span>
            </h1>

            <p className="mt-8 text-pretty text-[clamp(1.05rem,1.3vw,1.35rem)] font-medium leading-relaxed text-ink opacity-0 [animation:fade-up_0.9s_0.3s_forwards] motion-reduce:opacity-100">
              産業廃棄物業務を、
              <br className="sm:hidden" />
              もっとシンプルに。もっとスマートに。
            </p>

            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-ink-soft opacity-0 [animation:fade-up_0.9s_0.42s_forwards] motion-reduce:opacity-100">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              現場を知る、産廃DXパートナー
            </p>

            <div className="mt-10 flex flex-col gap-3 opacity-0 [animation:fade-up_0.9s_0.54s_forwards] sm:flex-row sm:items-center motion-reduce:opacity-100">
              <a
                href="#"
                className="group flex h-14 items-center justify-center gap-2 rounded-full bg-blue px-8 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(22,119,255,0.3)] transition-all hover:bg-navy-deep hover:shadow-[0_10px_30px_rgba(7,26,51,0.3)]"
              >
                産廃DXを見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="flex h-14 items-center justify-center rounded-full border border-navy/20 bg-white px-8 text-[15px] font-bold text-navy transition-colors hover:border-navy hover:bg-offwhite"
              >
                資料ダウンロード
              </a>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="relative min-h-[52svh] lg:min-h-full">
          <img
            src={HERO_IMG || '/placeholder.svg'}
            alt="タブレットを手に現場に立つ、ヘルメット姿のSMS担当者。背景に産業廃棄物運搬トラックとコンテナ。"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* soft blend into text column on desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-white to-transparent lg:block" />
          {/* faint tech grid accent */}
          <div className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 rounded-full bg-navy-deep/85 px-4 py-2 backdrop-blur-sm lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            <span className="text-[11px] font-bold tracking-widest text-white">FIELD CONNECTED</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-bold tracking-[0.3em] text-ink-soft">SCROLL</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink-soft/40 pt-1.5">
          <ArrowDown className="h-3 w-3 animate-scroll-dot text-blue" />
        </span>
      </div>
    </section>
  )
}
