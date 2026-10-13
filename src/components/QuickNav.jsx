import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import './QuickNav.css'

const sectionIds = ['solutions', 'process', 'pricing', 'extras', 'contact']
const languages = ['ru', 'kk', 'en']
const labels = {
  ru: { sections: 'Разделы', navigation: 'Быстрый переход по разделам', language: 'Язык сайта' },
  kk: { sections: 'Бөлімдер', navigation: 'Бөлімдерге жылдам өту', language: 'Сайт тілі' },
  en: { sections: 'Sections', navigation: 'Quick section navigation', language: 'Website language' },
}

export default function QuickNav({ language, setLanguage, nav }) {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const navRef = useRef(null)
  const l = labels[language] || labels.ru

  useEffect(() => {
    let frame = 0
    const update = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
        setVisible(window.scrollY > 110)
        if (window.scrollY <= 110) setMenuOpen(false)
        setProgress(Math.min(100, Math.max(0, window.scrollY / maxScroll * 100)))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const close = (event) => {
      if (event.key === 'Escape' || (event.type === 'pointerdown' && !navRef.current?.contains(event.target))) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', close)
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', close)
    }
  }, [menuOpen])

  return (
    <div ref={navRef} className={'quick-nav' + (visible ? ' quick-nav--visible' : '')} inert={!visible} aria-hidden={!visible}>
      <a href="#top" className="quick-nav__brand" aria-label="NEXERA — top" onClick={() => setMenuOpen(false)}>
        <span className="quick-nav__brand-full">NE<span>X</span>ERA</span>
        <span className="quick-nav__brand-short">N<span>X</span></span>
      </a>

      <nav className="quick-nav__links" aria-label={l.navigation}>
        {nav.map((item, index) => <a key={sectionIds[index]} href={'#' + sectionIds[index]}>{item}</a>)}
      </nav>

      <button className="quick-nav__toggle" type="button" aria-expanded={menuOpen} aria-controls="quick-nav-menu" onClick={() => setMenuOpen((open) => !open)}>
        {l.sections}<ChevronDown size={15} aria-hidden="true" />
      </button>

      <div className="quick-nav__languages" role="group" aria-label={l.language}>
        {languages.map((code) => (
          <button key={code} type="button" lang={code === 'kk' ? 'kk' : code} className={language === code ? 'is-active' : ''} aria-pressed={language === code} onClick={() => { setLanguage(code); setMenuOpen(false) }}>
            {code === 'kk' ? 'KZ' : code.toUpperCase()}
          </button>
        ))}
      </div>

      {menuOpen && (
        <nav className="quick-nav__menu" id="quick-nav-menu" aria-label={l.navigation}>
          {nav.map((item, index) => (
            <a key={sectionIds[index]} href={'#' + sectionIds[index]} onClick={() => setMenuOpen(false)}>
              {item}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
      <span className="quick-nav__progress" style={{ width: progress + '%' }} aria-hidden="true" />
    </div>
  )
}
