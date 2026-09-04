import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    no: '01',
    label: 'FIELD',
    ja: '現場で入力',
    note: '回収・排出の現場で、その場で記録。紙もFAXも持ち帰らない。',
    hub: false,
  },
  {
    no: '02',
    label: 'OFFICE',
    ja: 'リアルタイムで共有',
    note: '入力したその瞬間に、情報が会社全体へつながる。',
    hub: true,
  },
  {
    no: '03',
    label: 'MANAGEMENT',
    ja: '事務所ですぐ確認',
    note: '転記も確認待ちもなく、最新の状況をそのまま把握。',
    hub: false,
  },
]

export function FieldMobileSection() {
  return (
    <section
      className="bg-offwhite py-24 lg:py-40"
      aria-labelledby="field-mobile-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                FIELD / MOBILE
              </span>
            </div>
            <h2
              id="field-mobile-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">現場が変われば、</span>
              <span className="block whitespace-nowrap">
                会社が
                <span className="relative whitespace-nowrap">
                  変わる
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              現場で入力。リアルタイムで共有。事務所ですぐ確認。現場で生まれた情報が、その場で会社全体につながります。
            </p>
          </Reveal>
        </div>

        {/* Main visual + flow */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* Video main visual */}
          <Reveal className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy-deep">
              <video
                className="aspect-[16/11] h-full w-full object-cover lg:aspect-[4/5]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/field-tablet.jpeg"
                aria-label="産廃現場でタブレットに入力し、その情報がデジタルでつながっていく様子"
              >
                <source src="/field-digital.mp4" type="video/mp4" />
                <img
                  src="/field-tablet.jpeg"
                  alt="現場でタブレットに入力する作業着姿のスタッフ"
                  className="aspect-[16/11] h-full w-full object-cover lg:aspect-[4/5]"
                />
              </video>

              {/* readability overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent"
              />

              {/* live badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-navy-deep/85 px-4 py-2 backdrop-blur-sm lg:left-6 lg:top-6">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                <span className="text-[11px] font-bold tracking-[0.28em] text-white">
                  FIELD CONNECTED
                </span>
              </div>

              {/* overlaid caption */}
              <div className="absolute inset-x-5 bottom-5 lg:inset-x-8 lg:bottom-8">
                <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                  MAIN VISUAL
                </p>
                <p className="mt-2 text-pretty text-[clamp(1.25rem,2.4vw,2rem)] font-black leading-tight tracking-tight text-white">
                  産廃現場が、そのまま
                  <br className="hidden sm:block" />
                  デジタルにつながる。
                </p>
              </div>
            </div>
          </Reveal>

          {/* Step flow: FIELD -> OFFICE -> MANAGEMENT */}
          <Reveal className="lg:col-span-5" delay={160}>
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-background p-7 lg:p-9">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
                  REALTIME FLOW
                </span>
                <span className="text-sm font-bold text-ink-soft">情報がつながる</span>
              </div>

              <ol className="relative mt-9 flex flex-1 flex-col justify-between gap-9 pl-9">
                <span
                  aria-hidden="true"
                  className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-blue to-cyan"
                />
                {STEPS.map((step) => (
                  <li key={step.no} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-9 top-1 h-4 w-4 rounded-full ring-4 ring-background ${
                        step.hub ? 'bg-cyan' : 'bg-blue'
                      }`}
                    />
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
                        {step.no}
                      </span>
                      <span
                        className={`font-mono text-[12px] font-bold tracking-[0.28em] ${
                          step.hub ? 'text-cyan' : 'text-blue'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    <p className="mt-2 text-xl font-black leading-tight tracking-tight text-navy-deep lg:text-2xl">
                      {step.ja}
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                      {step.note}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Connection band */}
        <Reveal className="mt-8 lg:mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-navy-deep">
            <img
              src="/solution-connection.jpeg"
              alt="現場と事務所の情報がデジタルでつながっていくイメージ"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40"
            />
            <div className="relative px-7 py-14 lg:px-14 lg:py-20">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan" />
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                  FIELD → OFFICE → MANAGEMENT
                </span>
              </div>
              <p className="mt-6 max-w-2xl text-pretty text-[clamp(1.3rem,2.6vw,2.4rem)] font-black leading-[1.3] tracking-tight text-white">
                現場で発生した情報が、その場で
                <span className="text-cyan">会社全体につながる</span>。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
