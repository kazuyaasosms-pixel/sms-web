import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    no: '01',
    labelEn: 'FIELD KNOWLEDGE',
    ja: '現場を知る',
    desc: '産廃業務の現場や実際の業務フローを理解した上で、使いやすい仕組みを考えます。',
  },
  {
    no: '02',
    labelEn: 'CUSTOMIZE',
    ja: '業務を理解する',
    desc: '会社ごとに異なる業務や運用にも柔軟に対応し、必要な仕組みを一緒につくります。',
  },
  {
    no: '03',
    labelEn: 'DX PARTNER',
    ja: 'テクノロジーで変える',
    desc: '単にシステムを導入するのではなく、現場と会社全体の仕事をよりスマートに変えていきます。',
  },
]

// The three-line statement mirrors the three pillars and reveals in sequence.
const STATEMENT = ['現場を知る。', '業務を理解する。', 'テクノロジーで変える。']

export function WhySmsSection() {
  return (
    <section
      className="bg-background py-24 lg:py-40"
      aria-labelledby="why-sms-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                WHY SMS / OUR STRENGTH
              </span>
            </div>
            <h2
              id="why-sms-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">
                なぜ、
                <span className="relative whitespace-nowrap">
                  SMS
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                なのか。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg font-medium leading-relaxed text-ink-soft">
              ITだけでは、現場は変えられない。
            </p>
          </Reveal>
        </div>

        {/* Statement panel — Deep Navy, dramatic typography */}
        <Reveal delay={80}>
          <div className="mt-16 overflow-hidden rounded-2xl bg-navy-deep px-6 py-16 lg:mt-24 lg:px-16 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                {STATEMENT.map((line, i) => {
                  const isLast = i === STATEMENT.length - 1
                  return (
                    <Reveal key={line} delay={200 + i * 220}>
                      <p className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[1.18] tracking-tight text-white">
                        {isLast ? (
                          <span className="relative whitespace-nowrap">
                            {line}
                            <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                          </span>
                        ) : (
                          line
                        )}
                      </p>
                    </Reveal>
                  )
                })}
              </div>
              <Reveal className="lg:col-span-5 lg:self-end" delay={200 + STATEMENT.length * 220}>
                <div className="flex items-start gap-4">
                  <span className="mt-2 h-px w-8 shrink-0 bg-cyan" />
                  <p className="text-pretty text-[15px] leading-relaxed text-white/70 lg:text-base">
                    私たちは、単なるIT会社ではありません。産廃業務を理解しているからこそ、現場に寄り添ったDXを支えられます。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Three brand-story pillars — editorial numbered columns */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-3 lg:mt-24">
          {PILLARS.map((p, i) => (
            <Reveal key={p.no} delay={i * 140}>
              <div className="border-t border-navy-deep/10 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-[clamp(2.5rem,4vw,3.25rem)] font-black leading-none tracking-tight text-blue/25 tabular-nums">
                    {p.no}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-[0.28em] text-cyan">
                    {p.labelEn}
                  </span>
                </div>
                <h3 className="mt-6 text-[clamp(1.35rem,2.4vw,1.75rem)] font-black leading-snug tracking-tight text-navy-deep">
                  {p.ja}
                </h3>
                <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
