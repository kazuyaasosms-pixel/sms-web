'use client'

import { useState, useId, type ReactNode } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: '産廃DXとは何ですか？',
    answer:
      '産業廃棄物業務におけるデジタルトランスフォーメーションです。紙・電話・Excelなどの手作業を減らし、現場と事務所の情報をデジタルでつなぐことで、業務をよりスマートにします。',
  },
  {
    question: '電子マニフェストにも対応できますか？',
    answer:
      'はい。電子マニフェストを中心とした業務管理に対応しています。詳細な対応範囲については、お問い合わせにてご確認いただけます。',
  },
  {
    question: '現在紙マニフェストを使っていますが導入できますか？',
    answer:
      'はい。紙の運用から段階的に移行することが可能です。現場の状況に合わせて、無理のない導入をご相談できます。',
  },
  {
    question: '既存の業務に合わせてカスタマイズできますか？',
    answer:
      'はい。会社ごとに異なる業務フローや運用に合わせて、柔軟にカスタマイズできます。現場の声を反映した仕組みづくりを大切にしています。',
  },
  {
    question: '現場のスタッフでも簡単に使えますか？',
    answer:
      'はい。現場で迷わず使えることを重視した設計です。日々の業務に自然になじむ、シンプルな操作性を心がけています。',
  },
  {
    question: '導入後のサポートはありますか？',
    answer:
      'はい。導入後も継続してサポートをご提供しています。ご不明点やご要望があれば、お気軽にご相談ください。',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-offwhite py-24 lg:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section head */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-blue">FAQ</span>
            </div>
            <h2
              id="faq-heading"
              className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.22] tracking-tight text-navy-deep"
            >
              <span className="block">よくある</span>
              <span className="block whitespace-nowrap">
                <span className="relative whitespace-nowrap">
                  ご質問
                  <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-blue to-cyan" />
                </span>
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              導入を検討されている方からよくいただくご質問にお答えします。
            </p>
          </Reveal>
        </div>

        {/* Accordion */}
        <div className="mt-16 flex flex-col gap-4 lg:mt-24">
          {FAQS.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <FaqRow
                index={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqRow({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-background transition-colors',
        isOpen ? 'border-blue/30' : 'border-navy/10',
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left lg:px-8 lg:py-7"
        >
          <span className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-blue">
              {`0${index + 1}`}
            </span>
            <span className="text-pretty text-lg font-bold leading-snug tracking-tight text-navy-deep lg:text-xl">
              {question}
            </span>
          </span>
          <span
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors',
              isOpen ? 'bg-blue text-white' : 'bg-offwhite text-navy',
            )}
          >
            {isOpen ? (
              <Minus className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Plus className="h-4 w-4" aria-hidden="true" />
            )}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-all duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-7 text-pretty leading-relaxed text-ink-soft lg:px-8 lg:pl-[3.75rem]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
