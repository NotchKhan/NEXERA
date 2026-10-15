import { ArrowRight, Smartphone, Zap } from 'lucide-react'
import './Hero.css'

const heroCopy = {
  ru: {
    eyebrow: 'Современные решения',
    firstLine: 'Всё для вашего',
    secondLine: 'бизнеса в',
    description: ['Создаём сайты, автоматизируем процессы', 'и разрабатываем приложения для вашего бизнеса.'],
    contact: 'Обсудить проект',
    services: 'Цифровые решения для бизнеса',
    cards: [
      { title: ['WhatsApp', 'Автоматизация'], description: ['Бот, который отвечает', 'клиентам и принимает', 'заказы 24/7.'] },
      { title: ['Лендинг-сайт'], description: ['Стильный одностраничный', 'сайт для презентации', 'вашего бизнеса.'] },
      { title: ['Каталог / Меню'], description: ['Сайт с товарами, корзиной', 'и онлайн-заказами.'] },
      { title: ['Админ-панель'], description: ['Управляйте товарами,', 'заказами, ценами', 'и контентом.'] },
      { title: ['Приложения'], description: ['Мобильные приложения', 'для Android и iOS.'] },
    ],
  },
  kk: {
    eyebrow: 'Заманауи шешімдер',
    firstLine: 'Бизнесіңізге қажет',
    secondLine: 'барлығы —',
    description: ['Сайттар жасаймыз, процестерді автоматтандырамыз', 'және бизнесіңізге арналған қосымшалар әзірлейміз.'],
    contact: 'Жобаны талқылау',
    services: 'Бизнеске арналған цифрлық шешімдер',
    cards: [
      { title: ['WhatsApp', 'Автоматтандыру'], description: 'Клиенттерге жауап беріп, тәулік бойы тапсырыс қабылдайтын бот.' },
      { title: ['Лендинг-сайт'], description: 'Бизнесіңізді таныстыратын стильді бір беттік сайт.' },
      { title: ['Каталог / Мәзір'], description: 'Тауарлар, себет және онлайн тапсырыстары бар сайт.' },
      { title: ['Басқару панелі'], description: 'Тауарларды, тапсырыстарды, бағалар мен контентті басқарыңыз.' },
      { title: ['Қосымшалар'], description: 'Android және iOS жүйелеріне арналған мобильді қосымшалар.' },
    ],
  },
  en: {
    eyebrow: 'Modern solutions',
    firstLine: 'Everything for your',
    secondLine: 'business in',
    description: ['We build websites, automate processes', 'and develop applications for your business.'],
    contact: 'Discuss a project',
    services: 'Digital solutions for business',
    cards: [
      { title: ['WhatsApp', 'Automation'], description: 'A bot that answers customers and takes orders around the clock.' },
      { title: ['Landing page'], description: 'A stylish one-page website to introduce your business.' },
      { title: ['Catalog / Menu'], description: 'A website with products, a shopping cart and online orders.' },
      { title: ['Admin panel'], description: 'Manage your products, orders, prices and content.' },
      { title: ['Applications'], description: 'Mobile applications for Android and iOS.' },
    ],
  },
}

const cardTypes = ['violet', 'pink', 'blue', 'green', 'orange']
const cardLinks = ['#whatsapp-automation', '#plan-mini', '#plan-business', '#plan-business-pro', '#mobile-applications']
const cardIcons = [WhatsAppIcon, LandingIcon, CartIcon, AdminIcon, Smartphone]

function LandingIcon() {
  return <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="26" height="7" rx="2.5" /><rect x="3" y="12" width="8" height="17" rx="2" /><rect x="13" y="12" width="16" height="17" rx="2" /></svg>
}

function CartIcon() {
  return <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M3 4h4l5 20h14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 7h21a1 1 0 0 1 1 1.3l-3.3 11a2 2 0 0 1-1.9 1.4H11.5Z" /><circle cx="13" cy="28" r="2.5" /><circle cx="25" cy="28" r="2.5" /></svg>
}

function AdminIcon() {
  const teeth = Array.from({ length: 48 }, (_, i) => {
    const radius = i % 6 < 3 ? 14 : 11
    const angle = i * Math.PI / 24
    return `${16 + Math.cos(angle) * radius},${16 + Math.sin(angle) * radius}`
  }).join(' ')
  return <svg viewBox="0 0 32 32" aria-hidden="true"><polygon points={teeth} fill="currentColor" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><circle cx="16" cy="16" r="5.5" fill="var(--icon)" /></svg>
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M27 15.6a11 11 0 0 1-16.5 9.5L5 26.7l1.6-5.3A11 11 0 1 1 27 15.6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m11.2 9.5 2 4-1.4 1.5c1 2.1 2.5 3.6 4.8 4.5l1.5-1.6 3.8 1.8c-.3 2.8-2.6 3.4-5.3 2.3-4.1-1.7-7.2-4.8-8.2-8.3-.5-2 .4-4 2.8-4.2Z" fill="currentColor" transform="translate(1 -1) scale(.94)" />
  </svg>
}

export function HeroWordmark() {
  return <a className="nexera-wordmark" href="#top" aria-label="NEXERA — Digital Solutions">
    <svg viewBox="0 0 230 30" fill="none" aria-hidden="true">
      <defs><linearGradient id="nexera-brand-x" x1="82" y1="25" x2="106" y2="5" gradientUnits="userSpaceOnUse"><stop stopColor="#aeeeff" /><stop offset=".5" stopColor="#f4fbff" /><stop offset=".51" stopColor="#188bdf" /><stop offset="1" stopColor="#64d9ff" /></linearGradient></defs>
      <g stroke="currentColor" strokeWidth="4.1" strokeLinecap="square" strokeLinejoin="round">
        <path d="M3 25V5l28 20V5M67 5H45v20h22M45 15h19M146 5h-23v20h23M123 15h20M160 25V5h18c13 0 13 12 0 12h-18m17 0 13 8M200 25l13-20h3l13 20" />
        <path d="m82 5 24 20M106 5 82 25" stroke="url(#nexera-brand-x)" />
      </g>
    </svg>
    <span>DIGITAL SOLUTIONS</span>
  </a>
}

function PerspectiveGrid() {
  return <svg className="digital-grid" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="digital-grid-fade"><stop stopColor="white" /><stop offset=".31" stopColor="black" /><stop offset=".69" stopColor="black" /><stop offset="1" stopColor="white" /></linearGradient>
      <mask id="digital-grid-mask"><rect width="1672" height="941" fill="url(#digital-grid-fade)" /></mask>
    </defs>
    <g fill="none" stroke="#2449b4" strokeWidth=".8" mask="url(#digital-grid-mask)">
      {[12, 84, 150, 212, 268, 320, 369, 414].map(x => <path key={x} d={`M${x} 0V941 M${1672 - x} 0V941`} />)}
      {[110, 192, 274, 356, 438, 520, 602, 684, 766, 848].map((y, index) => <path key={y} d={`M0 ${y} 650 ${280 + index * 38} M1672 ${y} 1022 ${280 + index * 38}`} />)}
    </g>
  </svg>
}

export default function Hero({ language }) {
  const l = heroCopy[language] || heroCopy.ru
  return <section className="digital-hero" aria-labelledby="hero-title" lang={language}>
    <div className="digital-atmosphere" aria-hidden="true" />
    <PerspectiveGrid />
    <header className="digital-header">
      <HeroWordmark />
      <a className="digital-contact" href="#contact"><span>{l.contact}</span><ArrowRight aria-hidden="true" /></a>
    </header>

    <div className="digital-intro">
      <p className="digital-eyebrow"><Zap aria-hidden="true" fill="currentColor" strokeWidth={0} /><span>{l.eyebrow}</span></p>
      <h1 id="hero-title"><span>{l.firstLine}</span><span>{l.secondLine}{' '}<em>Digital</em></span></h1>
      <p className="digital-description">{l.description.map(line => <span key={line}>{line}</span>)}</p>
    </div>

    <ul className="digital-cards" aria-label={l.services}>
      {l.cards.map((card, index) => {
        const Icon = cardIcons[index]
        return <li className={`digital-card-slot digital-card-slot--${cardTypes[index]}`} key={cardTypes[index]}>
          <a className="digital-card" href={cardLinks[index]} aria-labelledby={`digital-card-title-${index}`} aria-describedby={`digital-card-description-${index}`}>
            <img className="digital-card-art" src={`/hero-${cardTypes[index]}.webp`} alt="" width="800" height="1000" decoding="async" fetchPriority={index === 2 ? 'high' : 'auto'} draggable="false" />
            <div className="digital-card-content">
              <span className="digital-card-icon"><Icon aria-hidden="true" strokeWidth={2.8} /></span>
              <h2 id={`digital-card-title-${index}`}>{card.title.map(line => <span key={line}>{line}</span>)}</h2>
              <p id={`digital-card-description-${index}`}>{Array.isArray(card.description) ? card.description.map((line, lineIndex) => <span key={line}>{lineIndex > 0 && ' '}{line}</span>) : card.description}</p>
            </div>
            <span className="digital-card-arrow" aria-hidden="true"><ArrowRight /></span>
          </a>
        </li>
      })}
    </ul>

    <div className="digital-floor" aria-hidden="true" />
    <div className="digital-orb digital-orb--back" aria-hidden="true" />
    <div className="digital-orb digital-orb--back-right" aria-hidden="true" />
    <div className="digital-orb digital-orb--left" aria-hidden="true" />
    <div className="digital-orb digital-orb--right" aria-hidden="true" />
  </section>
}
