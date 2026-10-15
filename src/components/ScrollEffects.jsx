import { useEffect } from 'react'
import './ScrollEffects.css'

const revealSelectors = [
  'main .section-head', '.system-step', '.example-preview',
  '.plan-card', '.pricing-note', '.extra-card', '.extras-detail-list',
  '.process-step', '.care-card', '.faq-list details', '.contact-inner',
]

export default function ScrollEffects({ language }) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const elements = [...document.querySelectorAll(revealSelectors.join(', '))]
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    for (const element of elements) {
      element.classList.add('magic-reveal')
      const siblings = [...element.parentElement.children]
      const index = siblings.indexOf(element)
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`)
      observer.observe(element)
    }
    document.documentElement.classList.add('magic-ready')

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('magic-ready')
    }
  }, [language])

  return null
}
