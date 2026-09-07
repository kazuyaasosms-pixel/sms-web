import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CTA_LINKS } from '@/lib/site-links'

interface CaseItem {
  no: string
  industry: string
  industryEn: string
  image: string
  alt: string
  title: React.ReactNode
  before: string[]
  after: string[]
  solutions: string[]
}

const CASES: CaseItem[] = [
  {
    no: '01',
    industry: '収集運搬会社',
    industryEn: 'COLLECTION & TRANSPORT',
    image: '/case-collection.jpeg',
    alt: '産業廃棄物収集運搬のトラックの前に立つ作業員',
    title: (
      <>
        回収の記録を、
        <br className="hidden sm:block" />
        その場でデジタルに。
      </>
    ),
    before: ['紙の伝票', '電話での連絡', '手書きの記録'],
    after: ['モバイル入力', 'リアルタイム共有', '事務所と連携'],
    solutions: ['現場モバイル入力', '情報共有'],
  },
  {
    no: '02',
    industry: '中間処理・リサイクル施設',
    industryEn: 'RECYCLING FACILITY',
    image: '/case-recycle.jpeg',
    alt: 'リサイクル施設で受入設備を操作するヘルメット姿のスタッフ',
    title: (
      <>
        受入から処理まで、
        <br className="hidden sm:block" />
        情報をひとつに。
      </>
    ),
    before: ['Excel管理', '二重入力', '確認待ち'],
    after: ['一元管理', '自動連携', '見える化'],
    solutions: ['業務データ管理', '自動連携'],
  },
  {
    no: '03',
    industry: '産廃業務・事務所',
    industryEn: 'OFFICE & ADMIN',
    image: '/case-meeting.jpeg',
    alt: '事務所前で端末を囲んで業務システムを確認するスタッフたち',
    title: (
      <>
        現場と事務所が、
        <br className="hidden sm:block" />
        同じ情報でつながる。
      </>
    ),
    before: ['紙の集計', '転記作業', '属人化'],
    after: ['情報共有', 'ペーパーレス', '全体で把握'],
    solutions: ['情報共有基盤', 'ペーパーレス'],
  },
]

export function CaseStudySection() {
  return (
    <section id="case-study" className="bg-background py-24 lg:py-40" aria-labelledby="case-study-heading">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                CASE STUDY / CUSTOMER VOICE
              </span>
            </div>
            <h2
              id="case-study-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">導入すると、</span>
              <span className="block whitespace-nowrap">
                仕事は
                <span className="relative whitespace-nowrap">
                  こう変わる
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              産廃業務の現場で、SMSがどのように使われているのか。実際の導入事例をご紹介します。
            </p>
          </Reveal>
        </div>

        {/* Cases: alternating editorial rows */}
        <div className="mt-16 flex flex-col gap-16 lg:mt-24 lg:gap-28">
          {CASES.map((item, i) => {
            const flipped = i % 2 === 1
            return (
              <Reveal key={item.no}>
                <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Photo */}
                  <div className={`lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-navy-deep">
                      <img
                        src={item.image || '/placeholder.svg'}
                        alt={item.alt}
                        className="aspect-[16/11] w-full object-cover lg:aspect-[16/10]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent"
                      />
                      {/* case number badge */}
                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-navy-deep/85 px-4 py-2 backdrop-blur-sm lg:left-6 lg:top-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                        <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-white">
                          CASE {item.no}
                        </span>
                      </div>
                      {/* industry caption */}
                      <div className="absolute inset-x-5 bottom-5 lg:inset-x-8 lg:bottom-8">
                        <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                          {item.industryEn}
                        </p>
                        <p className="mt-2 text-pretty text-[clamp(1.15rem,2.2vw,1.75rem)] font-black leading-tight tracking-tight text-white">
                          {item.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-5 ${flipped ? 'lg:order-1' : ''}`}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
                        CASE {item.no}
                      </span>
                      <span className="text-sm font-bold text-blue">{item.industry}</span>
                    </div>
                    <h3 className="mt-4 text-pretty text-[clamp(1.4rem,2.6vw,2.1rem)] font-black leading-[1.3] tracking-tight text-navy-deep">
                      {item.title}
                    </h3>

                    {/* BEFORE -> AFTER */}
                    <div className="mt-7 flex flex-col gap-4">
                      {/* BEFORE */}
                      <div className="rounded-2xl border border-navy/10 bg-offwhite p-5">
                        <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
                          BEFORE
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.before.map((b) => (
                            <span
                              key={b}
                              className="inline-flex items-center rounded-md border border-dashed border-navy/25 bg-background px-3 py-1.5 text-[13px] font-bold text-ink-soft"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* connector */}
                      <div className="flex items-center gap-3 pl-1">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue text-white shadow-md shadow-blue/25">
                          <ArrowRight className="h-4 w-4 rotate-90" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
                          SMS
                        </span>
                      </div>

                      {/* AFTER */}
                      <div className="rounded-2xl bg-navy-deep p-5 text-white">
                        <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                          AFTER
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.after.map((a) => (
                            <span
                              key={a}
                              className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-[13px] font-bold text-white"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Solutions used */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
                        SOLUTION
                      </span>
                      {item.solutions.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full border border-blue/30 px-3 py-1 text-[13px] font-bold text-navy"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 lg:mt-24">
          <div className="flex flex-col items-center gap-4">
            <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
              ※ 掲載する導入事例は順次追加予定です。
            </p>
            <a
              href={CTA_LINKS.aboutDetail ?? '#case-study'}
              className="group flex h-14 items-center justify-center gap-2 rounded-full bg-blue px-8 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(22,119,255,0.3)] transition-all hover:bg-navy-deep hover:shadow-[0_10px_30px_rgba(7,26,51,0.3)]"
            >
              導入事例をもっと見る
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
