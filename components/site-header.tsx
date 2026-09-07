'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, CTA_LINKS } from '@/lib/site-links'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-300',
        scrolled ? 'border-black/5 shadow-[0_1px_20px_rgba(7,26,51,0.06)]' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className={cn(
            'flex shrink-0 items-center gap-2.5 transition-all duration-300',
            scrolled ? 'h-14' : 'h-[72px]',
          )}
          aria-label="SMS ホーム"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-deep">
            <span className="h-3.5 w-3.5 rounded-[3px] bg-cyan" />
          </span>
          <span className="text-xl font-black tracking-tight text-navy-deep">SMS</span>
          <span className="hidden text-[11px] font-medium tracking-widest text-ink-soft sm:inline">
            産廃DX
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 xl:flex" aria-label="メインナビゲーション">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-ink transition-colors hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CTA_LINKS.documentDownload ?? '#final-cta'}
            className="flex h-11 items-center rounded-full border border-navy/20 px-5 text-[13px] font-bold text-navy transition-colors hover:border-navy hover:bg-offwhite"
          >
            資料ダウンロード
          </a>
          <a
            href={CTA_LINKS.contact ?? '#final-cta'}
            className="flex h-11 items-center rounded-full bg-blue px-6 text-[13px] font-bold text-white shadow-[0_6px_18px_rgba(22,119,255,0.28)] transition-colors hover:bg-navy"
          >
            お問い合わせ
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy-deep lg:hidden"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-black/5 bg-white lg:hidden',
          open ? 'max-h-[520px]' : 'max-h-0 border-t-0',
        )}
        style={{ transition: 'max-height 0.4s ease' }}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="モバイルナビゲーション">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-offwhite"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2.5">
            <a
              href={CTA_LINKS.documentDownload ?? '#final-cta'}
              className="flex h-12 items-center justify-center rounded-full border border-navy/20 text-sm font-bold text-navy"
            >
              資料ダウンロード
            </a>
            <a
              href={CTA_LINKS.contact ?? '#final-cta'}
              className="flex h-12 items-center justify-center rounded-full bg-blue text-sm font-bold text-white"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
