import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CTA_LINKS } from '@/lib/site-links'

const DOMAINS = [
  { label: 'MANIFEST', ja: '電子マニフェスト・管理' },
  { label: 'FIELD / LOGISTICS', ja: '現場・配車・収集運搬' },
  { label: 'CONTAINER', ja: 'コンテナ・位置管理' },
  { label: 'MANAGEMENT', ja: '業務・契約・情報管理' },
]

const FLAGSHIP = {
  name: '産廃イチロー',
  domain: 'MANIFEST',
  desc: '電子マニフェストをはじめ、産廃業務の中心をひとつのシステムで。日々の入力から管理までを、現場と事務所でつなぎます。',
}

const PRODUCTS = [
  {
    name: 'SMS-ASP',
    domain: 'MANAGEMENT',
    desc: '業務に必要な情報をクラウドで一元管理。いつでも、どこからでも最新の状態を共有できます。',
  },
  {
    name: 'ナビコ',
    domain: 'FIELD / LOGISTICS',
    desc: '現場・配車・収集運搬の情報をつなぎ、動きが見える運用へ。指示も報告も、ひとつの流れで。',
  },
  {
    name: 'コンテナ管理',
    domain: 'CONTAINER',
    desc: 'コンテナの状況や位置を可視化。「今どこに、いくつあるか」を、探さずに把握できます。',
  },
  {
    name: 'その他のソリューション',
    domain: 'MANAGEMENT',
    desc: '契約や各種業務まわりまで。産廃業務に必要な仕組みを、幅広く支えます。',
  },
]

export function ProductSection() {
  return (
    <section id="product" className="bg-offwhite py-24 lg:py-40" aria-labelledby="product-heading">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                PRODUCT / SMS SOLUTIONS
              </span>
            </div>
            <h2
              id="product-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">産廃DXを支える、</span>
              <span className="block whitespace-nowrap">
                SMSの
                <span className="relative whitespace-nowrap">
                  ソリューション
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              電子マニフェストから現場・配車・コンテナ管理まで。産廃業務に必要な仕組みを、ひとつの流れとして支えます。
            </p>
          </Reveal>
        </div>

        {/* Business domain flow */}
        <Reveal className="mt-14 lg:mt-20">
          <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
            {DOMAINS.map((d, i) => (
              <li key={d.label} className="flex items-center lg:flex-1">
                <div className="flex-1 rounded-xl border border-navy/10 bg-background px-5 py-5 lg:px-6 lg:py-6">
                  <span className="font-mono text-[11px] font-bold tracking-[0.24em] text-blue">
                    {d.label}
                  </span>
                  <p className="mt-2 text-sm font-bold text-navy-deep">{d.ja}</p>
                </div>
                {i < DOMAINS.length - 1 && (
                  <ArrowRight
                    className="mx-2 hidden h-5 w-5 shrink-0 text-blue lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Products: flagship + supporting */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-12">
          {/* Flagship */}
          <Reveal className="lg:col-span-7">
            <article className="group flex h-full flex-col justify-between rounded-2xl bg-navy-deep p-8 text-white lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-cyan" />
                  <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                    {FLAGSHIP.domain}
                  </span>
                </div>
                <h3 className="mt-6 text-[clamp(2rem,3.4vw,3rem)] font-black leading-tight tracking-tight">
                  {FLAGSHIP.name}
                </h3>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/70">
                  {FLAGSHIP.desc}
                </p>
              </div>
              <a
                href={CTA_LINKS.aboutDetail ?? '#product'}
                className="group/link mt-10 inline-flex items-center gap-2 text-[15px] font-bold text-cyan"
              >
                詳しく見る
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </article>
          </Reveal>

          {/* First supporting product (tall) */}
          <Reveal className="lg:col-span-5" delay={120}>
            <ProductCard product={PRODUCTS[0]} />
          </Reveal>
        </div>

        {/* Remaining supporting products */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(1).map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 flex justify-center lg:mt-24">
          <a
            href={CTA_LINKS.contact ?? '#final-cta'}
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-blue px-8 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(22,119,255,0.3)] transition-all hover:bg-navy-deep hover:shadow-[0_10px_30px_rgba(7,26,51,0.3)]"
          >
            あなたの会社に合ったソリューションを見る
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ProductCard({
  product,
}: {
  product: { name: string; domain: string; desc: string }
}) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-background p-8 transition-colors hover:border-blue/40 lg:p-9">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue" />
          <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
            {product.domain}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-black leading-snug tracking-tight text-navy-deep">
          {product.name}
        </h3>
        <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{product.desc}</p>
      </div>
      <a
        href={CTA_LINKS.aboutDetail ?? '#product'}
        className="group/link mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-blue"
      >
        詳しく見る
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </article>
  )
}
