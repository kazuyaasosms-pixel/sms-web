/**
 * Central place for all navigation links and CTA destinations.
 *
 * External URLs (contact form, document download, etc.) are not yet
 * provided by the client. They are left as `null` so the UI can render
 * a safe placeholder that is easy to swap for a real URL later.
 *
 * To activate a link: replace the `null` value with the target URL string.
 */

export interface NavLink {
  label: string
  /** In-page anchor (e.g. "#product") or external URL. */
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: '製品・サービス', href: '#product' },
  { label: '産廃DXとは', href: '#solution' },
  { label: '導入事例', href: '#case-study' },
  { label: 'SMSについて', href: '#about' },
  { label: 'お知らせ', href: '#news' },
  { label: 'よくあるご質問', href: '#faq' },
]

/**
 * CTA destinations that are not yet decided.
 * Set to `null` — the UI shows these as non-navigating buttons
 * so we never link to a non-existent page.
 */
export const CTA_LINKS = {
  contact: null as string | null,
  documentDownload: null as string | null,
  aboutDetail: null as string | null,
  newsDetail: null as string | null,
  columnDetail: null as string | null,
} as const

/**
 * Footer link groups.
 * Items with `null` href are placeholders for future pages.
 */
export interface FooterGroup {
  title: string
  links: NavLink[]
}

export const FOOTER_LINKS: FooterGroup[] = [
  {
    title: 'サービス',
    links: [
      { label: '産廃イチロー', href: '#product' },
      { label: 'SMS-ASP', href: '#product' },
      { label: 'ナビコ', href: '#product' },
      { label: 'コンテナ管理', href: '#product' },
    ],
  },
  {
    title: 'コンテンツ',
    links: [
      { label: '産廃DXとは', href: '#solution' },
      { label: '導入事例', href: '#case-study' },
      { label: '産廃DX JOURNAL', href: '#column' },
      { label: 'よくあるご質問', href: '#faq' },
    ],
  },
  {
    title: 'SMSについて',
    links: [
      { label: 'SMSについて', href: '#about' },
      { label: '数字で見るSMS', href: '#numbers' },
      { label: 'お知らせ', href: '#news' },
    ],
  },
]

/**
 * Legal / company pages — URLs not yet provided.
 */
export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'プライバシーポリシー', href: '#' },
  { label: '利用規約', href: '#' },
]
