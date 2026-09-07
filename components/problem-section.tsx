import { Reveal } from '@/components/reveal'

const PROBLEMS = [
  {
    label: 'PAPER',
    index: '01',
    title: '紙を探す。',
    desc: '紙マニフェスト、伝票、契約書。必要な一枚を探すだけで、時間が消えていく。',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04_problem_paper-lnegQ4wOAa2cMkPnE2J0snQLp7wXHw.jpeg',
    alt: '事務所で大量の紙の伝票・書類を仕分けする担当者',
  },
  {
    label: 'PHONE',
    index: '02',
    title: '電話で確認する。',
    desc: '「今どこですか？」「いつ回収ですか？」その都度、手が止まる。',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05_problem_phone-KGILRcSQnwXjVU4DIdEv78vCtIoG35.jpeg',
    alt: '書類が積まれた机で電話をかけながら確認する事務担当者',
  },
  {
    label: 'EXCEL',
    index: '03',
    title: 'Excelを探す。',
    desc: '複数のファイル、複数の担当者。最新がどれか、誰も分からない。',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06_problem_excel-Xm9DRxYUtVPSy8OYUpNWRl5572gmB3.jpeg',
    alt: '書類に囲まれた机でスプレッドシートを更新する担当者',
  },
  {
    label: 'MANUAL',
    index: '04',
    title: '同じ情報を、何度も入力する。',
    desc: '入力、転記、確認。本来しなくてもいい作業が、静かに積み上がる。',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07_problem_manual-qTErUC5833HdRBbJ0J77v7IK1WcOCE.jpeg',
    alt: '伝票を見ながらExcelへ手入力で転記する担当者',
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="bg-offwhite py-24 lg:py-40" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">PROBLEM</span>
            </div>
            <h2
              id="problem-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block whitespace-nowrap">産廃業務には、</span>
              <span className="block whitespace-nowrap">
                まだ<span className="text-blue">「手作業」</span>が多すぎる。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              紙、電話、Excel、手入力。本来もっと減らせるはずの仕事が、現場と事務所にまだ残っています。
            </p>
          </Reveal>
        </div>

        {/* Editorial alternating rows */}
        <div className="mt-16 flex flex-col gap-16 lg:mt-24 lg:gap-24">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.label}>
              <article className="group grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-14">
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2 lg:col-start-6' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-xl bg-navy-deep aspect-[16/10]">
                    <img
                      src={p.img || '/placeholder.svg'}
                      alt={p.alt}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                    <span className="pointer-events-none absolute left-5 top-4 font-mono text-sm font-bold tracking-widest text-white/80">
                      {p.index}
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-blue" />
                    <span className="text-[11px] font-bold tracking-[0.28em] text-blue">
                      {p.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-balance text-2xl font-black leading-snug tracking-tight text-navy-deep lg:text-[2rem]">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Closing statement */}
        <Reveal className="mt-20 border-t border-navy/10 pt-16 text-center lg:mt-28 lg:pt-20">
          <p className="text-balance text-[clamp(1.9rem,5vw,4rem)] font-black leading-tight tracking-tight text-navy-deep">
            その仕事、
            <span className="relative whitespace-nowrap">
              本当に必要ですか？
              <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
