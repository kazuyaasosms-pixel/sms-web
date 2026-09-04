import { ArrowRight, ArrowDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const BEFORE_STEPS = ['紙', 'FAX', '電話', 'Excel', '手入力', '確認', '残業']

const AFTER_STEPS = [
  { label: '現場', note: '回収・排出の現場から' },
  { label: 'SMS', note: 'その場で入力・送信', hub: true },
  { label: 'データ共有', note: '関係者へリアルタイムに' },
  { label: '自動連携', note: '転記も報告も自動で' },
  { label: '業務完了', note: '待ち時間も残業もなく' },
]

const SHIFTS = [
  { from: '紙', to: 'デジタル' },
  { from: 'バラバラ', to: 'ひとつ' },
  { from: '手作業', to: 'スマート' },
]

export function SolutionSection() {
  return (
    <section className="bg-background py-24 lg:py-40" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">SOLUTION</span>
            </div>
            <h2
              id="solution-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">産廃の仕事を、</span>
              <span className="block whitespace-nowrap">
                <span className="relative whitespace-nowrap">
                  ひとつに
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                つなぐ。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              産廃業務に必要な情報を、ひとつの流れへ。現場で生まれた情報が、そのまま事務所とつながります。
            </p>
          </Reveal>
        </div>

        {/* BEFORE -> AFTER visual */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:mt-24 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* BEFORE */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-offwhite p-7 lg:p-9">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
                  BEFORE
                </span>
                <span className="text-sm font-bold text-ink-soft">バラバラの業務</span>
              </div>
              <div className="mt-8 flex flex-col items-center">
                {BEFORE_STEPS.map((step, i) => (
                  <div key={step} className="flex flex-col items-center">
                    <span
                      className={`inline-flex min-w-24 justify-center rounded-md border border-dashed border-navy/25 bg-background px-4 py-2 text-sm font-bold text-ink-soft ${
                        i % 2 === 0
                          ? '-translate-x-4 lg:-translate-x-6'
                          : 'translate-x-4 lg:translate-x-6'
                      }`}
                    >
                      {step}
                    </span>
                    {i < BEFORE_STEPS.length - 1 && (
                      <span className="my-1 h-5 w-px border-l border-dashed border-navy/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Convergence marker */}
          <Reveal className="flex items-center justify-center" delay={120}>
            <div className="flex flex-col items-center gap-3 py-2 lg:py-0">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-primary-foreground shadow-lg shadow-blue/25">
                <ArrowDown className="h-6 w-6 lg:hidden" aria-hidden="true" />
                <ArrowRight className="hidden h-6 w-6 lg:block" aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
                SMS
              </span>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal delay={200}>
            <div className="flex h-full flex-col rounded-2xl bg-navy-deep p-7 text-white lg:p-9">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                  AFTER
                </span>
                <span className="text-sm font-bold text-white/70">ひとつの流れ</span>
              </div>
              <ol className="relative mt-8 flex flex-col gap-6 pl-8">
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue to-cyan"
                />
                {AFTER_STEPS.map((step) => (
                  <li key={step.label} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-8 top-1 h-3.5 w-3.5 rounded-full ring-4 ring-navy-deep ${
                        step.hub ? 'bg-cyan' : 'bg-blue'
                      }`}
                    />
                    <p
                      className={`text-lg font-black leading-none tracking-tight ${
                        step.hub ? 'text-cyan' : 'text-white'
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.note}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Three change messages */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-3 lg:mt-24">
          {SHIFTS.map((shift, i) => (
            <Reveal key={shift.to} className="bg-background" delay={i * 120}>
              <div className="flex h-full flex-col justify-center gap-4 px-7 py-10 lg:px-9 lg:py-12">
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink-soft">
                  {`0${i + 1}`}
                </span>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-black tracking-tight text-navy-deep lg:text-2xl">
                  <span className="text-ink-soft">{shift.from}</span>
                  <ArrowRight className="h-5 w-5 text-blue" aria-hidden="true" />
                  <span className="relative">
                    {shift.to}
                    <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
