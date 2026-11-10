import { Reveal } from '@/components/reveal'

// 拠点情報は https://www.sms-corp.net/ の掲載内容（本社＋5拠点）。
const REGIONS = [
  { name: '北海道', place: '札幌' },
  { name: '宮城', place: '大崎' },
  { name: '東京', place: '中央区' },
  { name: '神奈川', place: '大和' },
  { name: '愛知', place: '江南' },
  { name: '和歌山', place: '本社' },
]

const SUPPORTS = [
  {
    no: '01',
    labelEn: 'NATIONWIDE',
    ja: '全国の拠点',
    desc: '北海道から和歌山まで、6つの拠点でお客様を支えます。お近くのスタッフにご相談いただけます。',
  },
  {
    no: '02',
    labelEn: 'REMOTE SUPPORT',
    ja: 'リモートサポート',
    desc: '操作で困ったときは、離れた場所からもサポート。現場の業務を止めない対応を心がけています。',
  },
  {
    no: '03',
    labelEn: 'HOW-TO MOVIES',
    ja: 'かんたん動画',
    desc: '操作方法やよくある対処法を、短い動画でご覧いただけます。いつでも見返せて安心です。',
  },
]

export function SupportSection() {
  return (
    <section
      id="support"
      className="bg-background py-24 lg:py-40"
      aria-labelledby="support-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">
                SUPPORT / NATIONWIDE
              </span>
            </div>
            <h2
              id="support-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">
                導入後まで、
                <span className="relative whitespace-nowrap">
                  全国で支える
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
                。
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg font-medium leading-relaxed text-ink-soft">
              導入して終わりではなく、使い続けるための支援まで。全国の拠点と各種サポートで、現場に寄り添います。
            </p>
          </Reveal>
        </div>

        {/* Network panel */}
        <Reveal delay={80}>
          <div className="mt-16 overflow-hidden rounded-2xl bg-navy-deep px-6 py-14 lg:mt-24 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                  OFFICES
                </p>
                <p className="mt-4 flex items-baseline gap-3 text-white">
                  <span className="text-[clamp(4rem,9vw,7rem)] font-black leading-none tracking-tight tabular-nums">
                    6
                  </span>
                  <span className="text-[clamp(1.5rem,3vw,2.25rem)] font-black text-cyan">拠点</span>
                </p>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-white/70 lg:text-base">
                  全国のお客様の近くで、導入から運用までをサポートします。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
                {REGIONS.map((r, i) => (
                  <Reveal key={r.name} delay={120 + i * 80}>
                    <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-5">
                      <span className="block text-lg font-black text-white">{r.name}</span>
                      <span className="mt-1 block text-[13px] text-white/50">{r.place}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Support pillars */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-3 lg:mt-24">
          {SUPPORTS.map((p, i) => (
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
