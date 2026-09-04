import { Reveal } from '@/components/reveal'

interface StatItem {
  no: string
  /** Numeric portion, isolated so a count-up can be added later. */
  value?: string
  /** Accent-colored suffix rendered after the value (e.g. "社", "年"). */
  suffix?: string
  label: string
  labelEn: string
  /** When true, render a "DATA COMING SOON" placeholder instead of a figure. */
  comingSoon?: boolean
}

// The first two figures are confirmed SMS values. The third is intentionally
// left as a "coming soon" placeholder — swap `comingSoon` for a real
// `value`/`suffix` once the manifest-management figure is confirmed.
const STATS: StatItem[] = [
  {
    no: '01',
    value: '20',
    suffix: '年',
    label: '産廃業界を支えてきた年数',
    labelEn: 'YEARS OF EXPERIENCE',
  },
  {
    no: '02',
    value: '3,188',
    suffix: '社',
    label: '導入・利用実績',
    labelEn: 'COMPANIES',
  },
  {
    no: '03',
    comingSoon: true,
    label: '実績データ準備中',
    labelEn: 'DATA COMING SOON',
  },
]

export function NumbersSection() {
  return (
    <section
      className="bg-navy-deep py-24 text-white lg:py-40"
      aria-labelledby="numbers-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-cyan">
                NUMBERS / SMS DATA
              </span>
            </div>
            <h2
              id="numbers-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-white"
            >
              <span className="block">
                数字で見る、
                <span className="relative whitespace-nowrap">
                  SMS
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-white/60">
              産廃業務を支えてきた実績を、数字でご紹介します。
            </p>
          </Reveal>
        </div>

        {/* Stats: big numbers with thin dividers */}
        <div className="mt-16 grid grid-cols-1 gap-y-14 sm:grid-cols-3 lg:mt-24 lg:gap-y-0">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.no}
              delay={i * 120}
              className={[
                'relative min-w-0 px-0 sm:px-8 lg:px-10',
                // thin dividers between items
                i > 0 ? 'sm:border-l sm:border-white/10' : '',
                'sm:first:pl-0',
              ].join(' ')}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
                  {stat.no}
                </span>
                <span className="h-px w-6 bg-white/20" />
              </div>

              {stat.comingSoon ? (
                <div className="mt-5 flex min-h-[clamp(3.25rem,5vw,4.25rem)] items-baseline">
                  <span className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-black leading-none tracking-tight text-white/30">
                    調査中
                  </span>
                </div>
              ) : (
                <div className="mt-5 flex items-baseline whitespace-nowrap">
                  <span className="text-[clamp(3.25rem,5vw,4.75rem)] font-black leading-none tracking-tight tabular-nums text-white">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="ml-1.5 text-[clamp(1.5rem,2.5vw,2.25rem)] font-black leading-none tracking-tight text-cyan">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              )}

              <p className="mt-6 font-mono text-[10px] font-bold tracking-[0.28em] text-white/40">
                {stat.labelEn}
              </p>
              <p className="mt-2 text-pretty text-[15px] font-medium leading-relaxed text-white/80">
                {stat.label}
              </p>
              {stat.comingSoon && (
                <p className="mt-2 text-[12px] leading-relaxed text-white/35">
                  ※ 後日、実際のマニフェスト管理実績などの数値に差し替え予定です。
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
