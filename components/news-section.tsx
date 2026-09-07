import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CTA_LINKS } from '@/lib/site-links'

interface NewsItem {
  date: string
  category: string
  title: string
  excerpt: string
  href: string | null
}

const NEWS: NewsItem[] = [
  {
    date: '2026.XX.XX',
    category: 'お知らせ',
    title: 'サンプル：新機能リリースのお知らせ',
    excerpt:
      '産廃業務の効率化をさらに加速させる新機能を追加しました。詳細は後日公開予定です。',
    href: CTA_LINKS.newsDetail,
  },
  {
    date: '2026.XX.XX',
    category: 'イベント',
    title: 'サンプル：産廃DXセミナー開催のお知らせ',
    excerpt:
      '産業廃棄物業務のデジタル化についてご紹介するセミナーを予定しています。',
    href: CTA_LINKS.newsDetail,
  },
  {
    date: '2026.XX.XX',
    category: 'お知らせ',
    title: 'サンプル：システムメンテナンスのお知らせ',
    excerpt:
      'サービス品質向上のため、定期メンテナンスを予定しております。ご不便をおかけしないよう努めます。',
    href: CTA_LINKS.newsDetail,
  },
]

export function NewsSection() {
  return (
    <section
      id="news"
      className="bg-background py-24 lg:py-40"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">NEWS</span>
            </div>
            <h2
              id="news-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">お知らせ</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              SMSからのお知らせや、産廃DXに関する最新情報をお届けします。
            </p>
          </Reveal>
        </div>

        {/* News list */}
        <div className="mt-16 flex flex-col gap-4 lg:mt-24">
          {NEWS.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="group grid grid-cols-1 gap-3 rounded-2xl border border-navy/10 bg-background p-6 transition-colors hover:border-blue/30 lg:grid-cols-12 lg:items-center lg:gap-6 lg:p-8">
                {/* Date + category */}
                <div className="flex items-center gap-4 lg:col-span-3">
                  <time className="font-mono text-sm font-bold tabular-nums text-navy-deep">
                    {item.date}
                  </time>
                  <span className="inline-flex items-center rounded-md bg-offwhite px-3 py-1 text-[12px] font-bold text-navy">
                    {item.category}
                  </span>
                </div>

                {/* Title + excerpt */}
                <div className="lg:col-span-7">
                  <h3 className="text-pretty text-lg font-bold leading-snug tracking-tight text-navy-deep lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                    {item.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="lg:col-span-2 lg:flex lg:justify-end">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[15px] font-bold ${
                      item.href
                        ? 'text-blue'
                        : 'cursor-default text-ink-soft/50'
                    }`}
                  >
                    詳しく見る
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
