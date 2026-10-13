import { ArrowRight, ArrowUpRight, Headphones, Monitor, Settings, Smartphone } from 'lucide-react'
import './Hero.css'

const serviceIcons = [Monitor, Settings, Smartphone, Headphones]
const serviceLinks = ['#pricing', '#extras', '#extras', '#care']
const descriptionLines = {
  ru: ['Мы создаём сайты, автоматизацию', 'и мобильные приложения, которые', 'привлекают клиентов и помогают', 'вашему бизнесу расти.'],
  kk: ['Біз клиенттерді тартып, бизнесіңізді', 'дамытуға көмектесетін сайттар,', 'автоматтандыру және мобильді', 'қосымшалар жасаймыз.'],
  en: ['We build websites, automation', 'and mobile apps that attract', 'customers and help your', 'business grow.'],
}

export function HeroWordmark() {
  return (
    <a className="ref-wordmark" href="#top" aria-label="NEXERA — Digital Solutions">
      <svg viewBox="0 0 230 30" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 25V5l28 20V5M67 5H45v20h22M45 15h19M146 5h-23v20h23M123 15h20M160 25V5h18c13 0 13 12 0 12h-18m17 0 13 8M200 25l13-20h3l13 20" />
          <path d="m82 5 24 20M106 5 82 25" stroke="#1262ff" />
        </g>
      </svg>
      <span>DIGITAL SOLUTIONS</span>
    </a>
  )
}

function HeroProof({ t }) {
  return (
    <div className="ref-proof">
      <span className="ref-proof-arrow" aria-hidden="true"><ArrowUpRight /></span>
      <div className="ref-proof-bars" aria-hidden="true"><i /><i /><i /><i /></div>
      <p>{t.hero.result}</p>
      <div className="ref-proof-promise">
        <span className="ref-proof-avatars" aria-hidden="true"><img src="/nexera-portrait-sprite.webp" alt="" width="1672" height="941" loading="lazy" /></span>
        <span><strong>100+</strong>{t.hero.proof.replace('100+ ', '')}</span>
      </div>
    </div>
  )
}

function HeroServices({ t }) {
  return (
    <div className="ref-services">
      {t.services.map(([title, description], index) => {
        const Icon = serviceIcons[index]
        return (
          <a className="ref-service" href={serviceLinks[index]} key={title}>
            <span className="ref-service-icon"><Icon aria-hidden="true" /></span>
            <span className="ref-service-copy"><strong>{title}</strong><span>{description}</span></span>
          </a>
        )
      })}
    </div>
  )
}

export default function Hero({ t, language }) {
  const lines = descriptionLines[language] || descriptionLines.ru
  return (
    <section className={'reference-hero ref-lang-' + language} aria-labelledby="hero-title">
      <div className="ref-stage">
        <div className="ref-visual">
          <picture className="ref-scene" aria-hidden="true">
            <source media="(max-width: 900px)" srcSet="/nexera-tall-480.webp 480w, /nexera-tall-853.webp 853w" sizes="100vw" />
            <img src="/nexera-wide-1672.webp" srcSet="/nexera-wide-960.webp 960w, /nexera-wide-1672.webp 1672w" sizes="100vw" width="1672" height="941" alt="" fetchPriority="high" decoding="async" />
          </picture>
          <header className="ref-header"><HeroWordmark /></header>
          <div className="ref-copy">
            <h1 id="hero-title">
              {t.hero.lines.map(line => <span key={line}>{line}</span>)}
              {t.hero.accent.map(line => <span className="ref-accent" key={line}>{line}</span>)}
            </h1>
            <p>{lines.map((line, index) => <span key={line}>{line}{index < lines.length - 1 ? ' ' : ''}</span>)}</p>
            <a href="#contact" className="ref-cta"><span>{t.hero.cta}</span><span className="ref-cta-arrow"><ArrowRight aria-hidden="true" /></span></a>
          </div>
        </div>
        <HeroProof t={t} />
        <HeroServices t={t} />
        <div className="ref-signature"><span>NEXERA</span><i aria-hidden="true" /><span>{t.hero.strap}</span></div>
      </div>
    </section>
  )
}
