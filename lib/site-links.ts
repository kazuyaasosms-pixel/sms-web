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
  /** お問い合わせ（暫定: sanpai.com のお問合せフォーム。専用フォームを作る場合はここを差し替え） */
  contact: 'https://www.sanpai.com/support/new_form.html' as string | null,
  /** 旧「資料ダウンロード」ボタン → 「製品ラインナップ」へ変更 */
  productLineup: 'https://www.sanpai.com/soft/index.html' as string | null,
  /** 「SMSについて詳しく見る」→ 株式会社エスエムエス 会社サイト */
  companyDetail: 'https://www.sms-corp.net/index.html' as string | null,
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
      { label: '全国の拠点・サポート', href: '#support' },
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

/** 外部URLのときだけ新しいタブで開く設定を返す */
export const linkProps = (href: string) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}

/** フッターに表示する会社情報 */
export const COMPANY_INFO = {
  name: '株式会社エスエムエス',
  profileUrl: 'https://www.sms-corp.net/company/001.html',
  offices: [
    { label: '本社', address: '和歌山県和歌山市中之島255番地8', tel: '073-488-3400' },
    {
      label: '東京支店',
      address: '東京都中央区東日本橋2丁目27-24 イクソン日本橋ビル3F',
      tel: '03-5809-3760',
    },
    { label: '神奈川営業所', address: '神奈川県大和市桜森2-3-15 三井ビル101', tel: '046-244-5151' },
    { label: '北海道支店', address: '北海道札幌市北区新琴似6条12丁目2-25', tel: '011-765-8626' },
    {
      label: '宮城支店',
      address: '宮城県大崎市古川台町3番24号 パルタウン台町101',
      tel: '0229-91-0935',
    },
    { label: '愛知支店', address: '愛知県江南市飛高町本町113番地', tel: '0587-54-5360' },
  ],
}
