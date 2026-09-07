import { Reveal } from '@/components/reveal'

const STRENGTHS = [
  {
    no: '01',
    label: 'PRICE',
    ja: '価格',
    desc: '必要な機能を、必要なだけ。産廃業務に合わせた現実的なコストで導入できます。',
    image: '/strength-price.jpeg',
    alt: 'ノートパソコンでコスト資料を見ながら打ち合わせする担当者たち',
  },
  {
    no: '02',
    label: 'CUSTOMIZE',
    ja: 'カスタマイズ',
    desc: '会社ごとに違う業務にも対応。現場の運用に合わせて、柔軟にカスタマイズできます。',
    image: '/strength-customize.jpeg',
    alt: '業務フロー図を画面で確認しながら打ち合わせする事務担当と現場スタッフ',
  },
  {
    no: '03',
    label: 'USABILITY',
    ja: '現場の使いやすさ',
    desc: '現場で迷わず使えることを重視。日々の業務に自然になじむ、シンプルな操作性。',
    image: '/strength-usability.jpeg',
    alt: '現場でタブレットに手書き入力する作業着姿のスタッフ',
  },
]

export function FeatureSection() {
  return (
    <section
      id="feature"
      className="bg-background py-24 lg:py-40"
      aria-labelledby="feature-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                FEATURE / WHY SMS
              </span>
            </div>
            <h2
              id="feature-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">
                SMSが
                <span className="relative whitespace-nowrap">
                  選ばれる
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                理由。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              産廃業務を知っているからこそ、現場で本当に使える仕組みをつくれます。
            </p>
          </Reveal>
        </div>

        {/* Strengths: alternating editorial rows */}
        <div className="mt-16 flex flex-col gap-20 lg:mt-28 lg:gap-32">
          {STRENGTHS.map((s, i) => {
            const reversed = i % 2 === 1
            return (
              <Reveal key={s.no}>
                <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  {/* Image */}
                  <div
                    className={`lg:col-span-7 ${
                      reversed ? 'lg:order-2 lg:col-start-6' : 'lg:order-1'
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={s.image || '/placeholder.svg'}
                        alt={s.alt}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`lg:col-span-5 ${
                      reversed ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-black leading-none text-navy/15">
                        {s.no}
                      </span>
                      <span className="h-px flex-1 bg-navy/10" />
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-px w-6 bg-blue" />
                      <span className="font-mono text-[12px] font-bold tracking-[0.28em] text-blue">
                        {s.label}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-black leading-tight tracking-tight text-navy-deep">
                      {s.ja}
                    </h3>
                    <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Closing message: bridge to WHY SMS */}
        <Reveal className="mt-24 lg:mt-36">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-pretty text-[clamp(1.25rem,2.2vw,1.9rem)] font-bold leading-relaxed tracking-tight text-navy-deep">
              私たちは、単なるIT会社ではありません。
              <br className="hidden sm:block" />
              産廃業務を理解しているからこそ、
              <span className="text-blue">現場に寄り添ったDX</span>
              を支えられます。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
