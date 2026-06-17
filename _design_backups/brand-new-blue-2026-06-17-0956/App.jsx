import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight, Menu, X, ChevronRight, Zap, Globe, Bot,
  Check, TrendingUp, Layers, Cpu, Star, Shield, Clock,
  Phone, MessageCircle,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// =============================================
// NEXERA LOGO вЂ” SVG Component (green-blue gradient)
// =============================================
function NexeraLogo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NEXERA logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5A0" />
          <stop offset="50%" stopColor="#3B9EFF" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E5A0" />
          <stop offset="100%" stopColor="#3B9EFF" />
        </linearGradient>
        {/* Network dots gradient */}
        <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B060FF" />
          <stop offset="100%" stopColor="#3B9EFF" />
        </radialGradient>
      </defs>

      {/* N letter left stroke */}
      <path
        d="M12 90 L12 30 L42 70 L42 30"
        stroke="url(#logoGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* X letter вЂ” right side */}
      <path
        d="M58 30 L95 90 M95 30 L58 90"
        stroke="url(#logoGrad2)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Network dots cluster */}
      <circle cx="46" cy="55" r="3.5" fill="url(#dotGrad)" opacity="0.9" />
      <circle cx="38" cy="45" r="2.5" fill="url(#dotGrad)" opacity="0.7" />
      <circle cx="34" cy="60" r="2" fill="url(#dotGrad)" opacity="0.6" />
      <circle cx="50" cy="68" r="2.5" fill="url(#dotGrad)" opacity="0.8" />

      {/* Network lines */}
      <line x1="46" y1="55" x2="38" y2="45" stroke="url(#dotGrad)" strokeWidth="1" opacity="0.5" />
      <line x1="46" y1="55" x2="34" y2="60" stroke="url(#dotGrad)" strokeWidth="1" opacity="0.5" />
      <line x1="46" y1="55" x2="50" y2="68" stroke="url(#dotGrad)" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

// =============================================
// A. NAVBAR вЂ” "The Floating Island"
// =============================================
function Navbar() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const desktopLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#work' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Pricing', href: '#contact' },
  ]

  const mobileLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Our Process', href: '#work' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Pricing & Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <nav
        ref={navRef}
        className={`navbar-pill flex items-center justify-between gap-4 px-4 py-2.5 rounded-2xl border w-full transition-all ${
          scrolled || menuOpen
            ? 'navbar-scrolled border-emerald-500/20'
            : 'bg-transparent border-white/8'
        }`}
        style={{ maxWidth: '100%' }}
      >
        {/* Logo — top left */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-2 no-underline flex-shrink-0 z-50"
          style={{ transform: 'none' }}
          onClick={() => setMenuOpen(false)}
        >
          <NexeraLogo size={32} />
          <span
            className="font-sans font-black text-base tracking-tight leading-none"
            style={{
              background: 'linear-gradient(135deg, #00E5A0, #3B9EFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            NEXERA
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {desktopLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link font-sans text-sm font-medium no-underline"
                style={{ color: 'rgba(239,246,242,0.65)' }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <a
          href="#contact"
          id="nav-cta"
          className="btn-magnetic btn-primary hidden lg:flex items-center gap-2 font-sans font-semibold text-sm px-5 py-2.5 rounded-xl no-underline"
        >
          <span className="btn-slide rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }} />
          Start a Project
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile — CTA pill + hamburger */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          <a
            href="#contact"
            id="nav-mobile-cta-pill"
            className="btn-magnetic btn-primary flex items-center gap-1.5 font-sans font-semibold text-xs px-4 py-2 rounded-xl no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <span className="btn-slide rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }} />
            Let's Talk
            <ArrowUpRight size={12} />
          </a>
          <button
            id="nav-mobile-toggle"
            className="p-1.5 rounded-lg border border-white/10 text-white/70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'rgba(10,31,26,0.6)' }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Fullscreen Overlay) */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 w-screen h-screen z-40 flex flex-col justify-between p-6"
          style={{
            background: 'rgba(8,14,18,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            animation: 'fadeIn 0.25s ease forwards',
          }}
        >
          {/* Spacer for navbar height */}
          <div className="h-[5.5rem] flex-shrink-0" />

          {/* Nav List */}
          <div className="flex-1 flex flex-col justify-center gap-2 overflow-y-auto py-4">
            <span className="font-data text-[10px] uppercase tracking-widest text-emerald-400/50 mb-2 px-2">
              Site Sections
            </span>
            <ul className="flex flex-col gap-1.5">
              {mobileLinks.map((link, idx) => (
                <li
                  key={link.name}
                  style={{
                    animation: `slideIn 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                    animationDelay: `${idx * 0.05}s`,
                    opacity: 0,
                    transform: 'translateY(15px)',
                  }}
                >
                  <a
                    href={link.href}
                    id={`nav-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between font-sans text-lg font-bold no-underline py-3 px-4 rounded-2xl transition-all"
                    style={{
                      color: 'var(--ivory)',
                      background: 'rgba(239,246,242,0.02)',
                      border: '1px solid rgba(0,229,160,0.03)',
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-data text-[10px] text-emerald-400/40">0{idx + 1}</span>
                      {link.name}
                    </span>
                    <ChevronRight size={16} style={{ color: 'var(--neon-green)', opacity: 0.8 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Drawer at bottom */}
          <div
            className="mt-auto pt-5 flex flex-col gap-3.5 border-t border-white/5 flex-shrink-0"
            style={{
              animation: 'fadeIn 0.4s ease forwards',
              animationDelay: '0.35s',
              opacity: 0,
            }}
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-data text-[10px] uppercase tracking-widest text-emerald-400/50 px-1">
                Quick Connect
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/77020346468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/20 text-emerald-400 text-xs font-semibold no-underline"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.076-4.52 10.079-10.076.002-2.693-1.045-5.226-2.951-7.133C16.596 1.488 14.07 0.44 11.393 0.44c-5.56 0-10.081 4.52-10.084 10.076-.001 1.84.503 3.639 1.459 5.212L1.766 21.8l6.104-1.601c1.554.85 3.09 1.282 4.724 1.282zm9.155-7.397c-.253-.127-1.498-.739-1.73-.824-.233-.086-.403-.127-.573.127-.17.254-.658.824-.806.993-.148.169-.296.19-.55.064-1.347-.674-2.223-1.189-3.111-2.712-.236-.404.236-.375.674-1.25.076-.153.038-.287-.019-.403-.057-.116-.573-1.38-.785-1.89-.206-.497-.414-.429-.573-.429-.148 0-.317-.008-.486-.008-.17 0-.445.064-.678.317-.233.254-.89.871-.89 2.122 0 1.25.909 2.457 1.036 2.626.127.169 1.787 2.728 4.33 3.826.605.261 1.077.417 1.445.534.608.193 1.162.166 1.6.1.489-.073 1.498-.612 1.71-.1.212-.507.212-.93 0-1.015-.064-.085-.254-.127-.507-.253z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+77020346468"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-950/80 border border-blue-500/20 text-blue-400 text-xs font-semibold no-underline"
                >
                  <Phone size={12} />
                  Call Agency
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[10px] text-white/30 px-1 font-data">
              <span>kalabokalam@gmail.com</span>
              <span>+7 (702) 034-64-68</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// =============================================
// B. HERO вЂ” "The Opening Shot"
// =============================================
function Hero() {
  const heroRef = useRef(null)
  const textRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRefs.current,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.15,
        }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) textRefs.current.push(el)
  }

  const nodes = [
    { pos: 'hero-node-left-top', icon: Shield, title: 'Security Layer', value: '24/7 protected launches' },
    { pos: 'hero-node-left-bottom', icon: Cpu, title: 'AI Automation', value: 'Workflows that save hours' },
    { pos: 'hero-node-right-top', icon: Globe, title: 'Global Reach', value: 'Sites built for any market' },
    { pos: 'hero-node-right-bottom', icon: Layers, title: 'Product Systems', value: 'Landing, SaaS, CRM, dashboards' },
  ]

  return (
    <section
      ref={heroRef}
      id="hero"
      className="nexera-hero relative min-h-[100dvh] w-full overflow-hidden"
    >
      <picture className="absolute inset-0 z-0 block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.png" />
        <img
          src="/hero-bg.png"
          alt="NEXERA digital defense interface"
          className="nexera-hero-bg h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 z-10 nexera-hero-shade" />

      {nodes.map(({ pos, icon: Icon, title, value }) => (
        <div key={title} className={`hero-node ${pos}`}>
          <span className="hero-node-dot">
            <Icon size={16} />
          </span>
          <span className="hero-node-copy">
            <span>{title}</span>
            <small>{value}</small>
          </span>
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center px-5 pb-28 pt-28 text-center md:px-10">
        <div ref={addToRefs} className="hero-kicker mb-5">
          <span>NEXERA</span>
          <span>Digital systems studio</span>
        </div>

        <h1 className="max-w-5xl font-sans text-[2.9rem] font-black leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span ref={addToRefs} className="block">One-click for</span>
          <span ref={addToRefs} className="block hero-title-muted">Digital Growth</span>
        </h1>

        <p
          ref={addToRefs}
          className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-white/68 md:text-base"
        >
          We build premium websites, SaaS interfaces, AI automation, and clean digital
          systems for businesses that want to look sharp and move fast.
        </p>

        <div ref={addToRefs} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            id="hero-cta-primary"
            className="btn-magnetic btn-primary flex items-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-bold no-underline"
          >
            <span className="btn-slide rounded-full" style={{ background: 'rgba(255,255,255,0.18)' }} />
            Start a Project
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#services"
            id="hero-cta-secondary"
            className="hero-ghost-btn flex items-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-semibold no-underline"
          >
            Discover More
            <ChevronRight size={15} />
          </a>
        </div>
      </div>

      <div className="hero-partners absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-9 font-sans text-sm font-bold text-white/34 md:flex">
        {['Vercel', 'Loom', 'Cash App', 'Loops', 'Zapier', 'Raycast'].map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </section>
  )
}

// =============================================
// C1. DIAGNOSTIC SHUFFLER CARD
// =============================================
function DiagnosticShuffler() {
  const [items, setItems] = useState([
    { label: 'Revenue Growth', val: '+142%', icon: TrendingUp, color: '#00E5A0' },
    { label: 'Lead Conversion', val: '+3.8x', icon: Zap, color: '#3B9EFF' },
    { label: 'Market Expansion', val: '12 Cities', icon: Globe, color: '#7B61FF' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="feature-card flex flex-col h-full min-h-[300px]">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(0,229,160,0.12)' }}
        >
          <TrendingUp size={14} style={{ color: 'var(--neon-green)' }} />
        </div>
        <span className="font-sans font-semibold text-sm" style={{ color: 'var(--ivory)' }}>
          Sales Intelligence
        </span>
      </div>
      <p className="font-sans text-xs mb-5 leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
        Real-time performance metrics powering your growth decisions.
      </p>

      {/* Shuffler stack */}
      <div className="shuffler-stack flex-1">
        {items.map((item, i) => {
          const Icon = item.icon
          const yOffset = i * 36
          const scale = 1 - i * 0.05
          const opacity = 1 - i * 0.28
          return (
            <div
              key={item.label}
              className="shuffler-item flex items-center gap-3"
              style={{
                top: yOffset,
                transform: `scale(${scale})`,
                opacity,
                transformOrigin: 'top center',
                zIndex: items.length - i,
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}18` }}
              >
                <Icon size={14} style={{ color: item.color }} />
              </div>
              <div className="flex-1">
                <p className="font-sans text-xs" style={{ color: 'rgba(239,246,242,0.45)' }}>{item.label}</p>
                <p className="font-sans font-bold text-sm" style={{ color: 'var(--ivory)' }}>{item.val}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className="mt-3 pt-3 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(0,229,160,0.08)' }}
      >
        <span className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.28)' }}>Level Up Your Sales</span>
        <span className="font-data text-xs" style={{ color: 'var(--neon-green)' }}>LIVE</span>
      </div>
    </div>
  )
}

// =============================================
// C2. TELEMETRY TYPEWRITER CARD
// =============================================
function TelemetryTypewriter() {
  const messages = [
    '> Crafting pixel-perfect interfaces...',
    '> Motion system initialized вњ“',
    '> Design tokens applied: 48 vars',
    '> Accessibility score: 100/100 вњ“',
    '> Loading brand identity layer...',
    '> Responsive breakpoints: 5/5 вњ“',
    '> Performance audit: 98 Lighthouse',
    '> User delight factor: maximum вњ“',
  ]

  const [displayText, setDisplayText] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = messages[msgIdx]
    let timeout

    if (!isDeleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 45)
    } else if (!isDeleting && charIdx > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 20)
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false)
      setMsgIdx((m) => (m + 1) % messages.length)
    }

    setDisplayText(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, msgIdx])

  const [log, setLog] = useState([
    { text: '> Design system initialized вњ“', done: true },
    { text: '> UI components: 32 built', done: true },
  ])

  useEffect(() => {
    if (!isDeleting && charIdx === messages[msgIdx].length && charIdx > 0) {
      setLog((prev) => {
        const updated = [...prev, { text: messages[msgIdx], done: true }]
        return updated.slice(-4)
      })
    }
  }, [charIdx, isDeleting])

  return (
    <div className="feature-card flex flex-col h-full min-h-[300px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(59,158,255,0.12)' }}
          >
            <Layers size={14} style={{ color: 'var(--neon-blue)' }} />
          </div>
          <span className="font-sans font-semibold text-sm" style={{ color: 'var(--ivory)' }}>
            Design Engine
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="live-dot" />
          <span className="font-data text-xs" style={{ color: 'var(--neon-green)' }}>Live Feed</span>
        </div>
      </div>
      <p className="font-sans text-xs mb-4 leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
        World-class design & experience - shipped in real time.
      </p>

      {/* Terminal */}
      <div
        className="flex-1 rounded-2xl p-3 flex flex-col justify-end gap-1.5"
        style={{ background: 'rgba(0,0,0,0.45)', minHeight: 140 }}
      >
        {log.map((entry, i) => (
          <p key={i} className="font-data text-xs leading-snug break-all" style={{ color: 'rgba(239,246,242,0.3)' }}>
            {entry.text}
          </p>
        ))}
        <p className="font-data text-xs leading-snug break-all" style={{ color: 'var(--neon-green)' }}>
          {displayText}
          <span className="cursor-blink" />
        </p>
      </div>
    </div>
  )
}

// =============================================
// C3. CURSOR SCHEDULER CARD
// =============================================
function CursorScheduler() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [activeDays, setActiveDays] = useState([1, 3, 5])
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const [pressing, setPressing] = useState(null)
  const [savePressed, setSavePressed] = useState(false)
  const gridRef = useRef(null)
  const sequenceRef = useRef(null)

  const runSequence = useCallback(() => {
    if (!gridRef.current) return
    setCursorVisible(true)

    const cells = gridRef.current.querySelectorAll('.day-cell')
    const saveBtn = gridRef.current.querySelector('#sched-save-btn')
    const targets = [2, 4, 6]

    let delay = 500
    targets.forEach((dayIdx) => {
      const cell = cells[dayIdx]
      if (!cell) return
      const rect = cell.getBoundingClientRect()
      const gridRect = gridRef.current.getBoundingClientRect()

      setTimeout(() => {
        setCursorPos({
          x: rect.left - gridRect.left + rect.width / 2,
          y: rect.top - gridRect.top + rect.height / 2,
        })
      }, delay)

      delay += 600
      setTimeout(() => {
        setPressing(dayIdx)
        setTimeout(() => {
          setPressing(null)
          setActiveDays((prev) =>
            prev.includes(dayIdx) ? prev.filter((d) => d !== dayIdx) : [...prev, dayIdx]
          )
        }, 200)
      }, delay)

      delay += 700
    })

    setTimeout(() => {
      if (saveBtn) {
        const rect = saveBtn.getBoundingClientRect()
        const gridRect = gridRef.current.getBoundingClientRect()
        setCursorPos({
          x: rect.left - gridRect.left + rect.width / 2,
          y: rect.top - gridRect.top + rect.height / 2,
        })
      }
    }, delay)

    delay += 600
    setTimeout(() => {
      setSavePressed(true)
      setTimeout(() => setSavePressed(false), 300)
    }, delay)

    delay += 800
    setTimeout(() => setCursorVisible(false), delay)
    sequenceRef.current = setTimeout(runSequence, delay + 1500)
  }, [])

  useEffect(() => {
    sequenceRef.current = setTimeout(runSequence, 1000)
    return () => clearTimeout(sequenceRef.current)
  }, [runSequence])

  return (
    <div ref={gridRef} className="feature-card flex flex-col h-full min-h-[300px] relative">
      {cursorVisible && (
        <div
          className="sched-cursor z-30"
          style={{ left: cursorPos.x - 6, top: cursorPos.y - 6 }}
        >
          <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
            <path d="M0 0L0 18L5 13L8 20L10 19L7 12L13 12L0 0Z" fill="white" stroke="#080E12" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(123,97,255,0.12)' }}
        >
          <Cpu size={14} style={{ color: '#7B61FF' }} />
        </div>
        <span className="font-sans font-semibold text-sm" style={{ color: 'var(--ivory)' }}>
          Automation Planner
        </span>
      </div>
      <p className="font-sans text-xs mb-4 leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
        End-to-end automation - schedule, deploy, deliver on autopilot.
      </p>

      {/* Weekly grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((d, i) => (
          <div
            key={i}
            className={`day-cell flex flex-col items-center gap-1 p-1.5 rounded-xl border cursor-pointer ${
              pressing === i
                ? 'pressed'
                : activeDays.includes(i)
                ? 'active'
                : ''
            }`}
            style={{
              borderColor: activeDays.includes(i)
                ? 'rgba(0,229,160,0.35)'
                : 'rgba(239,246,242,0.08)',
            }}
            onClick={() =>
              setActiveDays((prev) =>
                prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
              )
            }
          >
            <span className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.4)', fontSize: '0.6rem' }}>{d}</span>
            <div
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ background: activeDays.includes(i) ? 'var(--neon-green)' : 'rgba(239,246,242,0.1)' }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-3 px-1">
        <span className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.35)', fontSize: '0.65rem' }}>
          Scheduled deployments
        </span>
        <span className="font-data text-xs" style={{ color: 'var(--neon-green)', fontSize: '0.65rem' }}>
          {activeDays.length} active
        </span>
      </div>

      <button
        id="sched-save-btn"
        className={`btn-magnetic w-full py-2 rounded-xl font-sans font-semibold text-sm transition-all ${
          savePressed ? 'scale-95' : ''
        }`}
        style={{
          background: savePressed
            ? 'linear-gradient(135deg, rgba(0,229,160,0.3), rgba(59,158,255,0.3))'
            : 'rgba(0,229,160,0.1)',
          color: 'var(--neon-green)',
          border: '1px solid rgba(0,229,160,0.22)',
        }}
      >
        <span className="btn-slide rounded-xl" style={{ background: 'rgba(0,229,160,0.12)' }} />
        Save Schedule
      </button>
    </div>
  )
}

// =============================================
// C. FEATURES SECTION
// =============================================
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.features-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.features-header', start: 'top 88%' },
        }
      )
      gsap.fromTo(
        '.feature-card-wrap',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: '.feature-card-wrap', start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 md:py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="features-header mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="section-label block mb-3">What We Build</span>
          <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
            Three pillars of{' '}
            <span className="font-drama gradient-text">excellence</span>
          </h2>
        </div>
        <p className="font-sans text-sm max-w-xs leading-relaxed md:text-right" style={{ color: 'rgba(239,246,242,0.45)' }}>
          Every engagement is built on measurable results, breathtaking craft, and bulletproof reliability.
        </p>
      </div>

      {/* Cards grid вЂ” stacked on mobile, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="feature-card-wrap"><DiagnosticShuffler /></div>
        <div className="feature-card-wrap"><TelemetryTypewriter /></div>
        <div className="feature-card-wrap"><CursorScheduler /></div>
      </div>
    </section>
  )
}

// =============================================
// D. PHILOSOPHY вЂ” "The Manifesto"
// =============================================
function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.phil-line',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      )
      gsap.fromTo(
        '.phil-accent',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--void) 0%, #061218 50%, var(--void) 100%)' }}
    >
      {/* Texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1400&q=70')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
          filter: 'saturate(0)',
        }}
      />

      {/* Glow accents */}
      <div
        className="absolute z-0 rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          bottom: '-20%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(59,158,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute z-0 rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-12 lg:px-24">
        <span className="section-label block mb-8 phil-line">Our Philosophy</span>

        <p className="phil-line font-sans text-base md:text-lg font-light mb-2 leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
          Most agencies focus on: looking busy, churning templates, disappearing after launch.
        </p>
        <p className="phil-line font-sans text-base md:text-lg font-light mb-14 leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
          We focus on something different.
        </p>

        <h2 className="phil-accent font-sans font-black text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
          We build{' '}
          <span className="gradient-text">digital instruments</span>
          {' '}that are not just websites. Every pixel earns its place. Every animation carries weight. Every line of code compounds your{' '}
          <span className="gradient-text">growth.</span>
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-14">
          {[
            { icon: Shield, label: 'Zero Compromise', desc: 'On quality or timeline' },
            { icon: Clock, label: 'Fast Delivery', desc: '1-2 weeks maximum' },
            { icon: Star, label: 'Obsessive Craft', desc: 'Details that clients notice' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="phil-line flex items-start gap-3 flex-1 min-w-[180px]">
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.15)' }}
              >
                <Icon size={16} style={{ color: 'var(--neon-green)' }} />
              </div>
              <div>
                <p className="font-sans font-semibold text-sm" style={{ color: 'var(--ivory)' }}>{label}</p>
                <p className="font-sans text-xs mt-0.5" style={{ color: 'rgba(239,246,242,0.38)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// E. PROTOCOL вЂ” Sticky Stacking Cards
// =============================================
function Developers() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.dev-content > *',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const badges = [
    'Olympiad Winners',
    'Hackathon Finalists',
    '20+ AI Tools',
    'Hard Languages: Rust, Go, C++',
  ]

  return (
    <section
      ref={sectionRef}
      id="team"
      className="developers-section relative w-full overflow-hidden flex items-center justify-center py-20 lg:py-0"
      style={{ minHeight: '100dvh' }}
    >
      <img
        src="/developers-hero.png"
        alt="NEXERA developer team"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40 lg:opacity-100"
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(8,14,18,0.8) 0%, rgba(8,14,18,0.45) 55%, rgba(8,14,18,0.7) 100%)',
        }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Developers Info */}
        <div className="dev-content w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="section-label block mb-5">Our Team</span>

          <h2
            className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-5"
            style={{ color: 'var(--ivory)' }}
          >
            Our developers are{' '}
            <span className="font-drama gradient-text">more than code</span>
          </h2>

          <p
            className="font-sans text-sm sm:text-base leading-relaxed mb-8"
            style={{ color: 'rgba(239,246,242,0.78)' }}
          >
            Olympiad winners and hackathon participants. They use 20+ AI tools in
            daily work, write in complex programming languages, and take on projects
            most teams walk away from.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 max-w-xl">
            {badges.map((badge) => (
              <span
                key={badge}
                className="font-data text-[10px] sm:text-xs px-3.5 py-2 rounded-full uppercase tracking-wider"
                style={{
                  color: 'rgba(239,246,242,0.85)',
                  background: 'rgba(0,229,160,0.08)',
                  border: '1px solid rgba(0,229,160,0.22)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Work Examples Showcase */}
        <div className="w-full lg:w-[48%] flex flex-col items-center justify-center">
          {/* Label for works */}
          <div className="flex items-center gap-2 mb-6 lg:self-start">
            <span className="font-data text-xs text-white/45 uppercase tracking-wider">Featured Production Case</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Premium cascading mockups */}
          <div className="relative w-full max-w-[520px] h-[420px] md:h-[500px] flex items-center justify-center select-none">
            
            {/* Card 1 - Bottom Left (Cakes Grid) */}
            <div 
              className="absolute w-[210px] sm:w-[290px] rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:z-30 hover:scale-105"
              style={{
                background: 'rgba(10,31,26,0.6)',
                transform: 'translateX(-90px) translateY(55px) rotate(-7deg)',
                zIndex: 10,
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/8 rounded-t-2xl">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <img src="/work1.jpg" alt="merey.bento creations" className="w-full aspect-[16/11] object-cover rounded-b-2xl" />
            </div>

            {/* Card 2 - Bottom Right (Contact) */}
            <div 
              className="absolute w-[210px] sm:w-[290px] rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:z-30 hover:scale-105"
              style={{
                background: 'rgba(10,31,26,0.6)',
                transform: 'translateX(90px) translateY(-40px) rotate(6deg)',
                zIndex: 11,
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/8 rounded-t-2xl">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <img src="/work3.png" alt="merey.bento checkout" className="w-full aspect-[16/11] object-cover rounded-b-2xl" />
            </div>

            {/* Card 3 - Center Top (Hero) */}
            <div 
              className="absolute w-[230px] sm:w-[310px] rounded-2xl border border-emerald-500/30 shadow-2xl transition-all duration-500 hover:z-30 hover:scale-105"
              style={{
                background: 'rgba(8,14,18,0.6)',
                transform: 'translateY(-65px) rotate(-1deg)',
                zIndex: 12,
                boxShadow: '0 24px 60px rgba(0, 229, 160, 0.18)',
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-emerald-500/15 bg-emerald-500/8 rounded-t-2xl">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="font-data text-[8px] text-white/40 ml-auto truncate max-w-[90px]">merey.bento</span>
              </div>
              <img src="/work2.png" alt="merey.bento landing page" className="w-full aspect-[16/11] object-cover rounded-b-2xl" />
            </div>

          </div>
          
          <span className="mt-6 font-data text-[9px] text-white/30 select-none text-center">
            * Interactive web mockups of custom production templates.
          </span>
        </div>

      </div>
    </section>
  )
}

const protocolSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We map your business goals, audit your market position, and architect a digital strategy that converts.',
    bg: 'linear-gradient(145deg, #080E12 0%, #0A1A14 100%)',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
  },
  {
    num: '02',
    title: 'Design & Engineering',
    desc: 'Pixel-perfect interfaces built on solid engineering. Every component crafted to delight and perform.',
    bg: 'linear-gradient(145deg, #080E12 0%, #0B1420 100%)',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    num: '03',
    title: 'Launch & Scale',
    desc: 'We ship, monitor, optimise - then help you scale. Your success is an ongoing partnership, not a handoff.',
    bg: 'linear-gradient(145deg, #060C14 0%, #0A1820 100%)',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
]

function Protocol() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.protocol-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.protocol-header', start: 'top 88%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-16 md:py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="protocol-header mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="section-label block mb-3">Our Process</span>
          <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
            The{' '}
            <span className="font-drama gradient-text">NEXERA</span>
            {' '}Protocol
          </h2>
        </div>
        <p className="font-sans text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
          A battle-tested process forged across 124 successful digital transformations.
        </p>
      </div>

      {/* Stacked cards */}
      <div className="flex flex-col gap-4">
        {protocolSteps.map((step, index) => {
          return (
            <div
              key={step.num}
              className="protocol-card relative flex flex-col md:flex-row items-stretch overflow-hidden"
              style={{
                background: step.bg,
                top: `${72 + index * 18}px`,
                borderColor: 'rgba(0,229,160,0.1)',
              }}
            >
              {/* Image bg */}
              <div className="relative md:w-2/5 min-h-[200px] md:min-h-[340px] overflow-hidden flex-shrink-0">
                <img
                  src={step.img}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                  style={{ filter: 'grayscale(0.1) brightness(0.88) contrast(1.08)' }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 hidden md:block"
                  style={{
                    background: 'linear-gradient(to right, transparent 20%, rgba(8,14,18,1) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 block md:hidden"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 20%, rgba(8,14,18,1) 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center p-6 md:p-10 relative z-10">
                <span
                  className="font-data font-bold leading-none mb-4 select-none"
                  style={{ fontSize: '3rem', color: 'rgba(0,229,160,0.15)' }}
                >
                  {step.num}
                </span>
                <h3 className="font-sans font-black text-xl md:text-2xl mb-3 leading-tight" style={{ color: 'var(--ivory)' }}>
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed max-w-md" style={{ color: 'rgba(239,246,242,0.48)' }}>
                  {step.desc}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-5 h-px" style={{ background: 'var(--neon-green)' }} />
                  <span className="font-data text-xs" style={{ color: 'rgba(0,229,160,0.55)' }}>Phase {step.num}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// =============================================
// F. PRICING
// =============================================
const plans = [
  {
    name: 'Custom Gifts',
    slug: 'custom-gifts',
    price: 'From $25',
    oldPrice: '$80',
    period: '/ project',
    desc: 'Simple emotional websites made for one special person, one moment, or one beautiful question.',
    features: [
      'Gift and greeting websites',
      'Birthday or anniversary pages',
      '"Will you be my girlfriend?" pages',
      'Personal photos, music, and message',
      'Mobile-friendly romantic layout',
      'Fast delivery for simple ideas',
    ],
    cta: 'Order a Gift Site',
    featured: false,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересует%20пакет%20Custom%20Gifts.',
  },
  {
    name: 'Landing Pages',
    slug: 'landing-pages',
    price: 'From $150',
    oldPrice: '$300',
    period: '/ project',
    desc: 'Clean, focused websites for small businesses that need trust, clarity, and client requests online.',
    features: [
      'Business landing page',
      'Service or product presentation',
      'Contact buttons and lead form',
      'Responsive design for every device',
      'Basic SEO and analytics setup',
      'Clear structure for ads and Instagram',
    ],
    cta: 'Build My Page',
    featured: true,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересует%20пакет%20Landing%20Pages.',
  },
  {
    name: 'SaaS Platforms',
    slug: 'saas-platforms',
    price: 'Custom',
    period: '/ project',
    desc: 'Full web products for serious ideas: dashboards, accounts, payments, admin panels, and automation.',
    features: [
      'Full SaaS website or web app',
      'User login and dashboards',
      'Admin panel and database',
      'Payments or booking flows',
      'Automation and integrations',
      'Launch support and improvements',
    ],
    cta: 'Discuss SaaS',
    featured: false,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересует%20пакет%20SaaS%20Platforms.',
  },
  {
    name: 'AI Services',
    slug: 'ai-services',
    price: 'From $15',
    oldPrice: '$30',
    period: '/ task',
    desc: 'Simple AI-powered creative work for content, gifts, social media, and fast visual ideas.',
    features: [
      'AI video clips and reels',
      'AI photo creation or editing',
      'Product mockups and visuals',
      'Avatar or character images',
      'Short promo concepts',
      'Fast creative experiments',
    ],
    cta: 'Request AI Work',
    featured: false,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересуют%20ИИ%20услуги.',
  },
]

function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.pricing-card', start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 md:py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="mb-10 md:mb-14 text-center">
        <span className="section-label block mb-3">Investment</span>
        <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
          Built for{' '}
          <span className="font-drama gradient-text">every stage</span>
        </h2>
        <p className="mt-3 font-sans text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(239,246,242,0.4)' }}>
          From personal gift pages to business websites, SaaS products, and AI content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            id={`pricing-${plan.slug}`}
            className={`pricing-card ${plan.featured ? 'pricing-featured' : ''}`}
            style={!plan.featured ? { background: 'rgba(10,31,26,0.5)' } : {}}
          >
            {plan.featured && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <span
                  className="font-data text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-green), var(--neon-blue))',
                    color: 'var(--void)',
                  }}
                >
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-5">
              <h3
                className="font-sans font-black text-lg mb-1"
                style={{ color: plan.featured ? 'var(--neon-green)' : 'rgba(239,246,242,0.85)' }}
              >
                {plan.name}
              </h3>
              <p className="font-sans text-xs leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
                {plan.desc}
              </p>
            </div>

            <div className="mb-7">
              {plan.oldPrice && (
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="font-data text-[10px] uppercase font-bold tracking-widest"
                    style={{ color: 'rgba(255,66,66,0.85)' }}
                  >
                    Limited discount
                  </span>
                  <span className="discount-old-price font-sans font-black text-2xl">
                    {plan.oldPrice}
                  </span>
                </div>
              )}
              <div>
                <span className="font-sans font-black text-3xl" style={{ color: plan.oldPrice ? '#ff3b3b' : 'var(--ivory)' }}>{plan.price}</span>
                <span className="font-data text-xs ml-1" style={{ color: 'rgba(239,246,242,0.28)' }}>{plan.period}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5 mb-7">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,229,160,0.12)' }}
                  >
                    <Check size={9} style={{ color: 'var(--neon-green)' }} />
                  </div>
                  <span className="font-sans text-sm" style={{ color: 'rgba(239,246,242,0.58)' }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.href || "mailto:kalabokalam@gmail.com"}
              target={plan.href?.startsWith('http') ? '_blank' : undefined}
              rel={plan.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              id={`pricing-cta-${plan.slug}`}
              className={`btn-magnetic flex items-center justify-center gap-2 w-full py-3 rounded-xl font-sans font-semibold text-sm no-underline ${
                plan.featured ? 'btn-primary' : ''
              }`}
              style={!plan.featured ? {
                background: 'rgba(0,229,160,0.07)',
                color: 'rgba(239,246,242,0.75)',
                border: '1px solid rgba(0,229,160,0.15)',
              } : {}}
            >
              <span
                className="btn-slide rounded-xl"
                style={{ background: plan.featured ? 'rgba(255,255,255,0.15)' : 'rgba(0,229,160,0.1)' }}
              />
              {plan.cta}
              <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

// =============================================
// G. FOOTER
// =============================================
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="relative mt-8 pt-14 pb-8 px-5 md:px-12 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, var(--void), #040810)',
        borderRadius: '2.5rem 2.5rem 0 0',
        borderTop: '1px solid rgba(0,229,160,0.1)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 200,
          background: 'radial-gradient(ellipse, rgba(0,229,160,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 pb-10" style={{ borderBottom: '1px solid rgba(239,246,242,0.05)' }}>
        {/* Brand */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <NexeraLogo size={28} />
            <span
              className="font-sans font-black text-lg tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #00E5A0, #3B9EFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              NEXERA
            </span>
          </div>
          <p className="font-sans text-sm leading-relaxed max-w-xs mb-5" style={{ color: 'rgba(239,246,242,0.38)' }}>
            The worldwide agency building websites, apps, automation systems & AI-powered services for businesses ready to grow and scale revenue.
          </p>
          {/* System Status */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-full w-fit"
            style={{
              border: '1px solid rgba(0,229,160,0.12)',
              background: 'rgba(0,229,160,0.05)',
            }}
          >
            <div className="status-dot" />
            <span className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.45)' }}>All Systems Operational</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-data text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239,246,242,0.25)' }}>Navigate</p>
          <ul className="flex flex-col gap-2.5">
            {['Services', 'Work', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-sm no-underline transition-colors"
                  style={{ color: 'rgba(239,246,242,0.48)' }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-data text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239,246,242,0.25)' }}>Contact</p>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="mailto:kalabokalam@gmail.com" className="font-sans text-sm no-underline hover:text-[#00E5A0] transition-colors" style={{ color: 'rgba(239,246,242,0.48)' }}>
                kalabokalam@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+77020346468" className="font-sans text-sm no-underline hover:text-[#00E5A0] transition-colors" style={{ color: 'rgba(239,246,242,0.48)' }}>
                +7 (702) 034-64-68
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/77020346468"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm no-underline hover:text-[#00E5A0] transition-colors"
                style={{ color: 'rgba(239,246,242,0.48)' }}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nexeraasia/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm no-underline hover:text-[#00E5A0] transition-colors"
                style={{ color: 'rgba(239,246,242,0.48)' }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-7">
        <p className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.22)' }}>
          В© {year} NEXERA Agency. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {['Privacy Policy', 'Terms of Service'].map((link) => (
            <a key={link} href="#" className="font-data text-xs no-underline" style={{ color: 'rgba(239,246,242,0.22)' }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// =============================================
// FLOATING CONTACT SYSTEM вЂ” Glassmorphism Contacts FAB
// =============================================
function FloatingContact() {
  const [open, setOpen] = useState(false)
  const widgetRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50 flex w-[190px] flex-col items-center gap-3 font-sans"
    >
      {/* Contact drawers */}
      <div
        className={`flex flex-col gap-2.5 transition-all duration-300 transform origin-bottom ${
          open
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/77020346468"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 px-4 py-2.5 rounded-full border bg-emerald-950/90 border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg hover:scale-105 hover:bg-emerald-900 transition-all no-underline"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.076-4.52 10.079-10.076.002-2.693-1.045-5.226-2.951-7.133C16.596 1.488 14.07 0.44 11.393 0.44c-5.56 0-10.081 4.52-10.084 10.076-.001 1.84.503 3.639 1.459 5.212L1.766 21.8l6.104-1.601c1.554.85 3.09 1.282 4.724 1.282zm9.155-7.397c-.253-.127-1.498-.739-1.73-.824-.233-.086-.403-.127-.573.127-.17.254-.658.824-.806.993-.148.169-.296.19-.55.064-1.347-.674-2.223-1.189-3.111-2.712-.236-.404.236-.375.674-1.25.076-.153.038-.287-.019-.403-.057-.116-.573-1.38-.785-1.89-.206-.497-.414-.429-.573-.429-.148 0-.317-.008-.486-.008-.17 0-.445.064-.678.317-.233.254-.89.871-.89 2.122 0 1.25.909 2.457 1.036 2.626.127.169 1.787 2.728 4.33 3.826.605.261 1.077.417 1.445.534.608.193 1.162.166 1.6.1.489-.073 1.498-.612 1.71-.1.212-.507.212-.93 0-1.015-.064-.085-.254-.127-.507-.253z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:+77020346468"
          className="flex w-full items-center justify-center gap-2.5 px-4 py-2.5 rounded-full border bg-blue-950/90 border-blue-500/30 text-blue-400 text-xs font-semibold shadow-lg hover:scale-105 hover:bg-blue-900 transition-all no-underline"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <Phone size={13} />
          <span>+7 702 034 6468</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/nexeraasia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 px-4 py-2.5 rounded-full border bg-fuchsia-950/90 border-fuchsia-500/30 text-fuchsia-400 text-xs font-semibold shadow-lg hover:scale-105 hover:bg-fuchsia-900 transition-all no-underline"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <span>Instagram</span>
        </a>
      </div>

      {/* Main floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#00f5a8] text-void font-sans font-black text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 z-10"
        style={{
          boxShadow: '0 0 34px rgba(0,245,168,0.85), 0 12px 24px rgba(0,0,0,0.35)',
          border: '2px solid rgba(255,255,255,0.95)',
        }}
        aria-label="Contact options"
      >
        {/* Pulsing indicator */}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
          </span>
        )}

        <div className={`transition-transform duration-300 ${open ? 'rotate-90 scale-90' : 'rotate-0'}`}>
          {open ? <X size={16} /> : <MessageCircle size={16} />}
        </div>
        <span>{open ? 'Close' : 'Contact Us'}</span>
      </button>
    </div>
  )
}

// =============================================
// ROOT APP
// =============================================
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--void)' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Developers />
        <Protocol />
        <Pricing />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
