'use client'

import { useEffect, useRef, useState } from 'react'
import { Headset, MessageCircle, Phone, RotateCcw, X } from 'lucide-react'

type Topic = 'print' | 'launch' | 'backup' | 'other' | 'rental' | 'demo'
type ChatMessage = { id: number; from: 'bot' | 'user'; text: string; checklist?: string[] }
type Choice = { label: string; topic: Topic | 'resolved' | 'unsolved' | 'troubleshoot' | 'consult' | 'pricing' }

const initialMessage: ChatMessage = {
  id: 0,
  from: 'bot',
  text: 'こんにちは。SMSサポート窓口です。ご相談内容をお選びください。',
}

const checks: Record<'print' | 'launch' | 'backup', { intro: string; items: string[] }> = {
  print: {
    intro: '印刷できない場合は、以下の項目をご確認ください。',
    items: ['プリンターの電源と接続を確認する', '用紙・インク切れや紙詰まりがないか確認する', 'プリンターを選び直し、印刷キューを確認する'],
  },
  launch: {
    intro: 'ソフトが起動しない場合は、以下の項目をお試しください。',
    items: ['パソコンを再起動する', 'ソフトの対応OSと空き容量を確認する', 'エラーメッセージがあれば控えておく'],
  },
  backup: {
    intro: 'バックアップについて、以下の項目をご確認ください。',
    items: ['保存先の空き容量と接続状態を確認する', 'バックアップの実行日時・完了状況を確認する', '大切なデータは別の場所にも複製しておく'],
  },
}

const mainChoices: Choice[] = [
  { label: '使い方・トラブル', topic: 'troubleshoot' },
  { label: '導入のご相談', topic: 'consult' },
  { label: '料金・購入について', topic: 'pricing' },
]

const troubleChoices: Choice[] = [
  { label: '印刷できない', topic: 'print' },
  { label: 'ソフトが起動しない', topic: 'launch' },
  { label: 'バックアップについて', topic: 'backup' },
  { label: 'その他のトラブル', topic: 'other' },
]

export function SupportChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [choices, setChoices] = useState<Choice[]>(mainChoices)
  const [showPhone, setShowPhone] = useState(false)
  const [nextId, setNextId] = useState(1)
  const transcriptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const transcript = transcriptRef.current
    if (transcript) transcript.scrollTop = transcript.scrollHeight
  }, [messages, choices, showPhone])

  function addMessage(from: ChatMessage['from'], text: string, checklist?: string[]) {
    setMessages((current) => [...current, { id: nextId, from, text, checklist }])
    setNextId((id) => id + 1)
  }

  function choose(choice: Choice) {
    addMessage('user', choice.label)
    setChoices([])

    if (choice.topic === 'troubleshoot') {
      addMessage('bot', 'どのようなことでお困りですか？')
      setChoices(troubleChoices)
      return
    }

    if (choice.topic === 'consult') {
      addMessage('bot', '導入をご検討中ですね。SMSでは、実際の業務に合わせてお試しいただける無料貸出と、画面を見ながらご説明するオンラインデモをご案内しています。')
      setChoices([
        { label: '無料貸出について', topic: 'rental' },
        { label: 'オンラインデモについて', topic: 'demo' },
        { label: '最初に戻る', topic: 'resolved' },
      ])
      return
    }

    if (choice.topic === 'pricing') {
      addMessage('bot', '料金・購入については、お客様のご利用内容に合わせてご案内します。お電話でサポートします。')
      setShowPhone(true)
      return
    }

    if (choice.topic === 'print' || choice.topic === 'launch' || choice.topic === 'backup') {
      const check = checks[choice.topic]
      addMessage('bot', check.intro, check.items)
      setChoices([
        { label: '解決しました', topic: 'resolved' },
        { label: '解決しません', topic: 'unsolved' },
      ])
      return
    }

    if (choice.topic === 'other' || choice.topic === 'unsolved') {
      addMessage('bot', 'お電話でサポートします。受付時間内にお電話ください。')
      setShowPhone(true)
      return
    }

    if (choice.topic === 'rental') {
      addMessage('bot', '無料貸出をご希望の場合は、お電話にて対象製品や期間をご相談ください。')
      setShowPhone(true)
      return
    }

    if (choice.topic === 'demo') {
      addMessage('bot', 'オンラインデモをご希望の場合は、お電話でご希望日時をお知らせください。')
      setShowPhone(true)
      return
    }

    addMessage('bot', '解決できてよかったです。ほかにもお困りのことがあれば、いつでもご相談ください。')
    setChoices([{ label: '最初に戻る', topic: 'resolved' }])
  }

  function resetChat() {
    setMessages([initialMessage])
    setChoices(mainChoices)
    setShowPhone(false)
    setNextId(1)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="サポートチャット"
          aria-modal="true"
          role="dialog"
          className="flex h-[min(620px,calc(100dvh-104px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-18px_rgba(7,26,51,0.4)]"
        >
          <header className="flex items-center justify-between bg-[#0b2d50] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10"><Headset aria-hidden="true" className="size-5" /></span>
              <div>
                <h2 className="text-sm font-bold">SMSサポート</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100"><span className="size-1.5 rounded-full bg-emerald-300" />サポート受付中</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" onClick={resetChat} aria-label="チャットを最初からやり直す" className="rounded-full p-2 text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"><RotateCcw aria-hidden="true" className="size-4" /></button>
              <button type="button" onClick={() => setOpen(false)} aria-label="チャットを閉じる" className="rounded-full p-2 text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"><X aria-hidden="true" className="size-5" /></button>
            </div>
          </header>

          <div ref={transcriptRef} className="flex-1 overflow-y-auto bg-slate-50 px-4 py-5" aria-live="polite" aria-relevant="additions">
            <div className="flex flex-col gap-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.from === 'bot' && <span className="mr-2 mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0b2d50] text-[10px] font-bold text-white">SMS</span>}
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-6 ${message.from === 'bot' ? 'rounded-tl-md border border-slate-200 bg-white text-slate-700 shadow-sm' : 'rounded-tr-md bg-[#0b2d50] text-white'}`}>
                    <p>{message.text}</p>
                    {message.checklist && (
                      <ul className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-2">
                        {message.checklist.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-[#1682b5]" />{item}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {showPhone && (
              <div className="ml-9 mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-center text-xs font-medium text-slate-600">受付時間：9:00〜17:00</p>
                <p className="mt-1 text-center text-xs font-medium text-slate-600">サポートセンター</p>
                <a href="tel:0734884008" className="mt-3 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#0b2d50] px-4 py-3 text-base font-bold text-white shadow-sm transition hover:bg-[#12436e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2d50]">
                  <Phone aria-hidden="true" className="size-5" />
                  TEL:073-488-4008
                </a>
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
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'サポートチャットを閉じる' : 'サポート受付を開く'}
        className="group flex min-h-14 items-center gap-2.5 rounded-full bg-[#0b2d50] px-6 text-sm font-bold tracking-wide text-white shadow-[0_8px_24px_-6px_rgba(7,26,51,0.5)] transition hover:-translate-y-0.5 hover:bg-[#12436e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1682b5]"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <MessageCircle aria-hidden="true" className="size-5" />}
        {open ? '閉じる' : 'サポート受付'}
      </button>
    </div>
  )
}
