import { FOOTER_LINKS, FOOTER_LEGAL_LINKS } from '@/lib/site-links'

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-20">
        {/* Top: logo + link groups */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Logo + tagline */}
          <div className="lg:col-span-4">
            <a href="#hero" className="flex items-center gap-2.5" aria-label="SMS ホーム">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <span className="h-3.5 w-3.5 rounded-[3px] bg-cyan" />
              </span>
              <span className="text-xl font-black tracking-tight text-white">SMS</span>
              <span className="text-[11px] font-medium tracking-widest text-white/50">
                産廃DX
              </span>
            </a>
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-white/50">
              現場を知る、産廃DXパートナー。紙と残業から、現場を解放する。
            </p>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-10">
            {FOOTER_LINKS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="font-mono text-[11px] font-bold tracking-[0.28em] text-cyan">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom: legal + copyright */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} SMS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
