import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CTA_LINKS } from '@/lib/site-links'

interface ColumnItem {
  no: string
  category: string
  title: string
  excerpt: string
  href: string | null
}

const COLUMNS: ColumnItem[] = [
  {
    no: '01',
    category: 'MANIFEST',
    title: '電子マニフェストとは？',
    excerpt:
      '紙のマニフェストと何が違うのか。電子化のメリットと、産廃業務における役割をわかりやすく解説します。',
    href: CTA_LINKS.columnDetail,
  },
  {
    no: '02',
    category: 'JWNET',
    title: 'JWNETをもっと効率化する方法',
    excerpt:
      '電子マニフェストシステム「JWNET」の活用をさらに便利にする、現場目線の工夫をご紹介します。',
    href: CTA_LINKS.columnDetail,
  },
  {
    no: '03',
    category: 'DX GUIDE',
    title: '産廃DX、何から始める？',
    excerpt:
      '「DXに興味はあるが、何から手をつければよいか分からない」――そんな方のための第一歩を考えます。',
    href: CTA_LINKS.columnDetail,
  },
]

export function ColumnSection() {
  return (
    <section
      id="column"
      className="bg-offwhite py-24 lg:py-40"
      aria-labelledby="column-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">COLUMN</span>
            </div>
            <h2
              id="column-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block whitespace-nowrap">産廃DX</span>
              <span className="block whitespace-nowrap">
                <span className="relative whitespace-nowrap">
                  JOURNAL
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              産廃業務のデジタル化について、現場の視点からわかりやすくお届けします。
            </p>
          </Reveal>
        </div>

        {/* Column cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {COLUMNS.map((item, i) => (
            <Reveal key={item.no} delay={i * 120}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-background p-8 transition-colors hover:border-blue/40 lg:p-9">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[clamp(2rem,3.5vw,2.75rem)] font-black leading-none text-navy/15">
                      {item.no}
                    </span>
                    <span className="h-px flex-1 bg-navy/10" />
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px w-6 bg-blue" />
                    <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-pretty text-xl font-black leading-snug tracking-tight text-navy-deep lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-ink-soft">
                    {item.excerpt}
                  </p>
                </div>
                <span
                  className={`mt-8 inline-flex items-center gap-1.5 text-[15px] font-bold ${
                    item.href ? 'text-blue' : 'cursor-default text-ink-soft/50'
                  }`}
                >
                  記事を読む
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
