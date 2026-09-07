import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CTA_LINKS } from '@/lib/site-links'

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-navy-deep py-28 text-white lg:py-48"
      aria-labelledby="final-cta-heading"
    >
      {/* subtle gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,184,217,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cyan" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-cyan">
                GET STARTED
              </span>
              <span className="h-px w-8 bg-cyan" />
            </div>

            <h2
              id="final-cta-heading"
              className="mt-8 text-[clamp(2.2rem,5.5vw,4.5rem)] font-black leading-[1.15] tracking-tight text-white"
            >
              産廃の仕事を、
              <br className="sm:hidden" />
              もっと
              <span className="relative whitespace-nowrap">
                スマート
                <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
              </span>
              に。
            </h2>

            <p className="mt-8 text-pretty text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-relaxed text-white/60">
              紙と残業から、現場を解放する。
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CTA_LINKS.documentDownload ?? '#final-cta'}
                className="group flex h-14 items-center justify-center gap-2 rounded-full bg-blue px-8 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(22,119,255,0.3)] transition-all hover:bg-cyan hover:shadow-[0_10px_30px_rgba(0,184,217,0.3)]"
              >
                資料ダウンロード
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={CTA_LINKS.contact ?? '#final-cta'}
                className="flex h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-[15px] font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                お問い合わせ
              </a>
            </div>

            <p className="mt-8 text-[13px] leading-relaxed text-white/40">
              まずは話を聞いてみたい方もお気軽に。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
