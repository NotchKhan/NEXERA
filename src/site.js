export const SITE = {
  name: 'NEXERA',
  tagline: 'New Experience Era',
  url: 'https://nexeraasia.vercel.app',
  email: 'kalabokalam@gmail.com',
  phone: '+77020346468',
  phoneDisplay: '+7 (702) 034-64-68',
  whatsapp: 'https://wa.me/77020346468',
  instagram: 'https://www.instagram.com/nexera.asia/',
  locale: 'ru_KZ',
}

export const LEGAL = {
  privacy: '#privacy',
  terms: '#terms',
}

export function waLink(text) {
  return `${SITE.whatsapp}?text=${encodeURIComponent(text)}`
}
