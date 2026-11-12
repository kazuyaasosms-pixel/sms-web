'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Headset, MessageCircle, Phone, RotateCcw, X } from 'lucide-react'

type TroubleTopic = 'print' | 'login' | 'backup' | 'manifest' | 'billing' | 'annual'
type Topic = TroubleTopic | 'other' | 'start' | 'troubleshoot' | 'consult' | 'pricing' | 'solved' | 'unsolved' | 'phone' | 'rental' | 'demo' | 'cases'
type LinkItem = { label: string; href: string }
type ChatMessage = {
  id: number
  from: 'bot' | 'user'
  text: string
  checklist?: string[]
  videos?: string[]
  links?: LinkItem[]
}
type Choice = { label: string; topic: Topic }

type TroubleGuide = {
  confirmation: string
  checklist: string[]
  videos: string[]
}

const videoListUrl = 'https://www.sanpai.com/soft/sms_movie.html'
const faqUrl = 'https://www.sanpai.com/support/faq.html'
const emailSupportUrl = 'https://www.sanpai.com/support/support_form.html'
const rentalUrl = 'https://www.sanpai.com/buy/rental.html'
const demoUrl = 'https://www.sanpai.com/buy/new_form.html'
const caseStudiesUrl = 'https://www.sanpai.com/casestudies/'

const initialMessage: ChatMessage = {
  id: 0,
  from: 'bot',
  text: 'こんにちは。株式会社エスエムエスのサポート受付です。ご用件に近いものを選んでください。',
}

const mainChoices: Choice[] = [
  { label: '使い方・トラブル', topic: 'troubleshoot' },
  { label: '導入のご相談', topic: 'consult' },
  { label: '料金・購入について', topic: 'pricing' },
]

const troubleChoices: Choice[] = [
  { label: '印刷できない', topic: 'print' },
  { label: '起動・ログインできない', topic: 'login' },
  { label: 'バックアップについて', topic: 'backup' },
  { label: 'マニフェストの入力・印刷', topic: 'manifest' },
  { label: '請求書・金額が合わない', topic: 'billing' },
  { label: '年次報告について', topic: 'annual' },
  { label: 'その他のトラブル', topic: 'other' },
]

const solutionChoices: Choice[] = [
  { label: '解決しました', topic: 'solved' },
  { label: '解決しません', topic: 'unsolved' },
]

const returnChoice: Choice = { label: '最初に戻る', topic: 'start' }

const troubleGuides: Record<TroubleTopic, TroubleGuide> = {
  print: {
    confirmation: '印刷できない場合は、次の項目をご確認ください。',
    checklist: ['プリンターの電源が入っているか', 'USBケーブルの接続ポートを変えていないか', 'テストページが印刷できるか'],
    videos: ['マニフェストの印刷方法', 'fit7450 単票印刷方法', 'fit7450 連帳印刷方法'],
  },
  login: {
    confirmation: '起動・ログインできない場合は、次の項目をご確認ください。',
    checklist: ['USBキーが接続されているか', '起動時の確認画面で「はい」を選んだか', 'パソコンを再起動しても同じ症状か'],
    videos: ['突然ソフトが動かなくなった時の対処法', '初回起動時ログインパスワードと変更方法', 'USBライセンス認証から、WEBライセンス認証へ切り替える方法について'],
  },
  backup: {
    confirmation: 'バックアップについて、次の項目をご確認ください。',
    checklist: ['バックアップ先が接続され、空き容量があるか', 'バックアップの最終実行日時と完了状況', '必要なデータがバックアップ対象に含まれているか'],
    videos: ['デイリーバックアップ設定方法', '自動バックアップの設定方法/メイン機のみ', '手動バックアップの取り方', 'クラウドバックアップ設定方法'],
  },
  manifest: {
    confirmation: 'マニフェストの入力・印刷について、次の項目をご確認ください。',
    checklist: ['マニフェストの種類と対象票が正しいか', '必須項目や関連マスターに入力漏れがないか', '入力内容を保存してから印刷しているか'],
    videos: ['マニフェストの登録方法（基礎編）', 'マニフェストの登録方法（応用編）', 'マニフェストの印刷方法', 'マニフェスト入力保存時のエラー対処法'],
  },
  billing: {
    confirmation: '請求書・金額が合わない場合は、次の項目をご確認ください。',
    checklist: ['請求月と締日が正しく設定されているか', '請求書と残高一覧表の集計対象期間が同じか', '対象となる取引や入金の入力に漏れがないか'],
    videos: ['産廃キング請求書と残高一覧表で差額が出る事例の説明', '請求書を普段の締日より早く集計する方法', '請求月を設定する方法'],
  },
  annual: {
    confirmation: '年次報告について、次の項目をご確認ください。',
    checklist: ['対象年度と報告対象期間が正しいか', '関連するマスター情報に入力漏れがないか', '対象期間のマニフェストが登録・集計されているか'],
    videos: ['年次報告書の作成方法（作成編）', '年次報告書の作成方法（マスター整備編）', '年次報告書の作成方法（環境設定編）', '年次報告書の作成方法（失敗時の対処編）'],
  },
}

function ResourceLink({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-10 items-center justify-between gap-3 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-[#0b2d50] transition hover:border-[#0b2d50] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2d50]"
    >
      <span>{link.label}</span>
      <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-[#3986ad] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isBot = message.from === 'bot'

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && <span className="mr-2 mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0b2d50] text-[10px] font-bold text-white">SMS</span>}
      <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13px] leading-6 ${isBot ? 'rounded-tl-md border border-slate-200 bg-white text-slate-700 shadow-sm' : 'rounded-tr-md bg-[#0b2d50] text-white'}`}>
        <p>{message.text}</p>
        {message.checklist && (
          <ul className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-2">
            {message.checklist.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-[#1682b5]" />{item}</li>)}
          </ul>
        )}
        {message.videos && (
          <div className="mt-3 border-t border-slate-100 pt-2">
            <p className="mb-2 text-xs font-bold text-[#0b2d50]">参考動画</p>
            <ul className="flex flex-col gap-2">
              {message.videos.map((title) => (
                <li key={title}>
                  <a href={videoListUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#12658f] underline decoration-blue-200 underline-offset-2 hover:text-[#0b2d50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2d50]">
                    「{title}」
                  </a>
                </li>
              ))}
            </ul>
            <a href={videoListUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#12658f] underline underline-offset-2 hover:text-[#0b2d50]">
              かんたん動画一覧を見る <ExternalLink aria-hidden="true" className="size-3" />
            </a>
          </div>
        )}
        {message.links && (
          <div className="mt-3 flex flex-col gap-2">
            {message.links.map((link) => <ResourceLink key={link.label} link={link} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export function SupportChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [choices, setChoices] = useState<Choice[]>(mainChoices)
  const [showPhone, setShowPhone] = useState(false)
  const nextMessageId = useRef(1)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const transcript = transcriptRef.current
    if (transcript) transcript.scrollTop = transcript.scrollHeight
  }, [messages, choices, showPhone])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    closeRef.current?.focus()
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  function addMessage(from: ChatMessage['from'], text: string, extra: Pick<ChatMessage, 'checklist' | 'videos' | 'links'> = {}) {
    const message: ChatMessage = { id: nextMessageId.current++, from, text, ...extra }
    setMessages((current) => [...current, message])
  }

  function resetChat() {
    setMessages([initialMessage])
    setChoices(mainChoices)
    setShowPhone(false)
    nextMessageId.current = 1
  }

  function showContactOptions() {
    addMessage('bot', 'お電話でサポートします。受付時間内に、下のボタンからおかけください。サポートセンター TEL:073-488-4008（受付時間 9:00〜17:00）。お電話の際、リモートサポートで画面を見ながらご案内する場合があります。手順はかんたん動画「リモートでサポートを受ける手順」でも確認できます。')
    setShowPhone(true)
    setChoices([returnChoice])
  }

  function choose(choice: Choice) {
    if (choice.topic === 'start') {
      resetChat()
      return
    }

    addMessage('user', choice.label)
    setChoices([])

    if (choice.topic === 'troubleshoot') {
      addMessage('bot', 'どのようなことでお困りですか？')
      setChoices(troubleChoices)
      return
    }

    if (choice.topic === 'consult') {
      addMessage('bot', '導入前に実際のソフトを試せる「無料貸出」と、オンラインでご案内する「オンラインデモ」があります。導入事例も69件掲載しています。')
      setChoices([
        { label: '無料貸出について', topic: 'rental' },
        { label: 'オンラインデモについて', topic: 'demo' },
        { label: '導入事例を見る', topic: 'cases' },
        { label: '電話で相談したい', topic: 'phone' },
      ])
      return
    }

    if (choice.topic === 'pricing') {
      addMessage('bot', '料金は、ご利用になるソフトと台数によって変わります。お電話かお問い合わせフォームで、お見積りをご案内しています。')
      setChoices([
        { label: '電話で聞きたい', topic: 'phone' },
        returnChoice,
      ])
      return
    }

    if (choice.topic === 'other') {
      addMessage('bot', '「よくある質問」と「かんたん動画」で、症状から解決方法をお探しいただけます。')
      addMessage('bot', '参考ページはこちらです。', {
        links: [
          { label: 'よくある質問を見る', href: faqUrl },
          { label: 'かんたん動画一覧を見る', href: videoListUrl },
        ],
      })
      setChoices(solutionChoices)
      return
    }

    if (choice.topic === 'print' || choice.topic === 'login' || choice.topic === 'backup' || choice.topic === 'manifest' || choice.topic === 'billing' || choice.topic === 'annual') {
      const guide = troubleGuides[choice.topic]
      addMessage('bot', guide.confirmation, { checklist: guide.checklist })
      addMessage('bot', '確認事項をお試しいただいた後、以下の参考動画をご覧ください。', { videos: guide.videos })
      setChoices(solutionChoices)
      return
    }

    if (choice.topic === 'rental') {
      addMessage('bot', '無料貸出やお見積りは、専用フォームからご相談いただけます。')
      addMessage('bot', '申し込み・ご相談はこちらです。', {
        links: [{ label: '無料貸出について見る', href: rentalUrl }],
      })
      setChoices([returnChoice, { label: '電話で相談したい', topic: 'phone' }])
      return
    }

    if (choice.topic === 'demo') {
      addMessage('bot', 'オンラインデモは、専用フォームからお申し込みいただけます。')
      addMessage('bot', '申し込みはこちらです。', {
        links: [{ label: 'オンラインデモ申し込みフォームを見る', href: demoUrl }],
      })
      setChoices([returnChoice, { label: '電話で相談したい', topic: 'phone' }])
      return
    }

    if (choice.topic === 'cases') {
      addMessage('bot', '導入事例を69件掲載しています。導入後のイメージづくりにお役立てください。')
      addMessage('bot', '導入事例はこちらからご覧いただけます。', {
        links: [{ label: '導入事例を見る', href: caseStudiesUrl }],
      })
      setChoices([returnChoice, { label: '電話で相談したい', topic: 'phone' }])
      return
    }

    if (choice.topic === 'phone' || choice.topic === 'unsolved') {
      showContactOptions()
      return
    }

    addMessage('bot', 'よかったです。他にご用件があれば、最初に戻って選んでください。')
    setChoices([returnChoice])
  }

  function closeChat() {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <section
          id="support-chat-panel"
          aria-labelledby="support-chat-title"
          role="dialog"
          className="flex h-[min(680px,calc(100dvh-104px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-18px_rgba(7,26,51,0.4)]"
        >
          <header className="flex items-center justify-between bg-[#0b2d50] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10"><Headset aria-hidden="true" className="size-5" /></span>
              <div>
                <h2 id="support-chat-title" className="text-sm font-bold">SMSサポート</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100"><span className="size-1.5 rounded-full bg-emerald-300" />サポート受付中</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" onClick={resetChat} aria-label="チャットを最初からやり直す" className="rounded-full p-2 text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"><RotateCcw aria-hidden="true" className="size-4" /></button>
              <button ref={closeRef} type="button" onClick={closeChat} aria-label="チャットを閉じる" className="rounded-full p-2 text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"><X aria-hidden="true" className="size-5" /></button>
            </div>
          </header>

          <div ref={transcriptRef} className="flex-1 overflow-y-auto bg-slate-50 px-4 py-5" aria-live="polite" aria-relevant="additions">
            <div className="flex flex-col gap-4">
              {messages.map((message) => <MessageBubble key={message.id} message={message} />)}
            </div>

            {showPhone && (
              <div className="ml-9 mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-center text-xs font-medium text-slate-600">サポートセンター TEL:073-488-4008</p>
                <p className="mt-1 text-center text-xs font-medium text-slate-600">受付時間 9:00〜17:00</p>
                <a href="tel:0734884008" className="mt-3 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#0b2d50] px-4 py-3 text-base font-bold text-white shadow-sm transition hover:bg-[#12436e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2d50]">
                  <Phone aria-hidden="true" className="size-5" />
                  電話をかける 073-488-4008
                </a>
                <div className="mt-2 flex flex-col gap-2">
                  <ResourceLink link={{ label: 'メールで問い合わせる', href: emailSupportUrl }} />
                  <ResourceLink link={{ label: 'リモートサポートの手順を見る', href: videoListUrl }} />
                </div>
              </div>
            )}

            {choices.length > 0 && (
              <div className="ml-9 mt-4 flex flex-col gap-2" aria-label="選択肢">
                {choices.map((choice) => (
                  <button key={choice.label} type="button" onClick={() => choose(choice)} className="group flex min-h-11 items-center justify-between gap-3 rounded-xl border border-[#c9d8e6] bg-white px-4 py-2.5 text-left text-[13px] font-medium text-[#0b2d50] transition hover:border-[#0b2d50] hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2d50]">
                    {choice.label}<span aria-hidden="true" className="text-lg text-[#3986ad] transition-transform group-hover:translate-x-0.5">›</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <footer className="border-t border-slate-100 bg-white px-4 py-3 text-center text-[11px] text-slate-500">選択肢を選んでお問い合わせください</footer>
        </section>
      )}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="support-chat-panel"
        aria-label={open ? 'サポートチャットを閉じる' : 'サポート受付'}
        className="group flex min-h-14 items-center gap-2.5 rounded-full bg-[#0b2d50] px-6 text-sm font-bold tracking-wide text-white shadow-[0_8px_24px_-6px_rgba(7,26,51,0.5)] transition hover:-translate-y-0.5 hover:bg-[#12436e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1682b5]"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <MessageCircle aria-hidden="true" className="size-5" />}
        {open ? '閉じる' : 'サポート受付'}
      </button>
    </div>
  )
}
