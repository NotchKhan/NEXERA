import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight, Menu, X, ChevronRight, Zap, Globe,
  Check, TrendingUp, Layers, Cpu, Star, Shield, Clock,
  Phone, MessageCircle,
} from 'lucide-react'
import { SITE, waLink } from './site'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'KZ' },
  { code: 'en', label: 'EN' },
]

const copy = {
  ru: {
    meta: {
      lang: 'ru',
      title: 'NEXERA — Студия цифровых систем | Сайты, SaaS, AI',
      description: 'NEXERA — агентство цифровых систем. Премиальные сайты, SaaS, AI-автоматизация и лендинги для бизнеса в Казахстане.',
    },
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      philosophy: 'Подход',
      team: 'Команда',
      pricing: 'Цены',
      home: 'Главная',
      contact: 'Цены и контакт',
      cta: 'Начать проект',
      mobileCta: 'Обсудить',
      sections: 'Разделы сайта',
      quick: 'Быстрая связь',
      call: 'Позвонить',
    },
    hero: {
      kicker: 'Студия цифровых систем',
      titleA: 'Один клик к',
      titleB: 'цифровому росту',
      text: 'Создаем премиальные сайты, SaaS-интерфейсы, AI-автоматизацию и чистые цифровые системы для бизнеса, который хочет выглядеть сильнее и расти быстрее.',
      primary: 'Начать проект',
      secondary: 'Смотреть услуги',
      nodes: [
        ['Защита', 'Запуски под контролем 24/7'],
        ['AI-автоматизация', 'Сценарии, которые экономят часы'],
        ['Глобальный охват', 'Сайты для любого рынка'],
        ['Продуктовые системы', 'Лендинги, SaaS, CRM, панели'],
      ],
    },
    cards: {
      sales: 'Интеллект продаж',
      salesDesc: 'Метрики в реальном времени для решений, которые растят бизнес.',
      salesItems: ['Рост выручки', 'Конверсия заявок', 'Выход на рынки'],
      level: 'Усилить продажи',
      live: 'LIVE',
      design: 'Дизайн-движок',
      feed: 'Живая лента',
      designDesc: 'Дизайн мирового уровня и опыт пользователя, который собирается в реальном времени.',
      terminal: [
        '> Собираем точный интерфейс...',
        '> Моушен-система запущена',
        '> Дизайн-токены применены: 48',
        '> Доступность: 100/100',
        '> Загружаем слой бренда...',
        '> Адаптивность: 5/5',
        '> Lighthouse: 98',
        '> Уровень вау-эффекта: максимум',
      ],
      log: ['> Дизайн-система запущена', '> UI-компоненты: 32 готовы'],
      planner: 'Планировщик автоматизации',
      plannerDesc: 'Автоматизация под ключ: расписание, запуск и доставка на автопилоте.',
      scheduled: 'Запланированные запуски',
      active: 'активно',
      save: 'Сохранить расписание',
      days: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
    },
    features: {
      label: 'Что мы создаем',
      titleA: 'Три основы',
      titleB: 'сильного результата',
      text: 'Каждый проект строится на измеримых результатах, сильной визуальной подаче и надежной реализации.',
    },
    philosophy: {
      label: 'Наш подход',
      p1: 'Большинство агентств делают вид, что заняты, крутят шаблоны и исчезают после запуска.',
      p2: 'Мы работаем иначе.',
      titleA: 'Мы создаем',
      titleB: 'цифровые инструменты',
      titleC: 'а не просто сайты. Каждый пиксель работает на задачу. Каждая анимация имеет смысл. Каждая строка кода усиливает ваш',
      titleD: 'рост.',
      values: [
        ['Без компромиссов', 'В качестве и сроках'],
        ['Быстрая доставка', 'Обычно 1-2 недели'],
        ['Внимание к деталям', 'То, что замечают клиенты'],
      ],
    },
    team: {
      label: 'Команда',
      titleA: 'Наши разработчики',
      titleB: 'больше, чем код',
      text: 'Победители олимпиад и участники хакатонов. Они используют 20+ AI-инструментов в ежедневной работе, пишут на сложных языках программирования и берутся за проекты, от которых многие команды отказываются.',
      badges: ['Победители олимпиад', 'Финалисты хакатонов', '20+ AI-инструментов', 'Сложные языки: Rust, Go, C++'],
      caseLabel: 'Избранный кейс в продакшене',
      note: '* Интерактивные веб-макеты кастомных продакшен-шаблонов.',
    },
    protocol: {
      label: 'Процесс',
      titleA: 'Как мы превращаем идеи',
      titleB: 'в запуск',
      text: 'Четкий путь от стратегии до релиза без хаоса и бесконечных переделок.',
      steps: [
        ['01', 'Аналитика и стратегия', 'Разбираем цели бизнеса, рынок и собираем цифровую стратегию, которая конвертирует.'],
        ['02', 'Дизайн и разработка', 'Точные интерфейсы на надежной инженерной базе. Каждый компонент сделан для результата.'],
        ['03', 'Запуск и рост', 'Запускаем, следим, улучшаем и помогаем масштабироваться. Это партнерство, а не разовая передача файлов.'],
      ],
    },
    pricing: {
      label: 'Инвестиция',
      titleA: 'Решения для',
      titleB: 'каждого этапа',
      text: 'От личных сайтов-подарков до бизнес-сайтов, SaaS-продуктов и AI-контента.',
      popular: 'Популярно',
      discount: 'Скидка ограничена',
      plans: [
        ['Сайты-подарки', 'От $25', '$80', '/ проект', 'Эмоциональные сайты для особенного человека, события или красивого вопроса.', ['Сайты-подарки и поздравления', 'Дни рождения и годовщины', 'Страницы “Будешь моей девушкой?”', 'Фото, музыка и личное сообщение', 'Романтичный мобильный дизайн', 'Быстрая доставка простых идей'], 'Заказать подарок'],
        ['Лендинги', 'От $150', '$300', '/ проект', 'Чистые сайты для малого бизнеса, где нужны доверие, ясность и заявки.', ['Бизнес-лендинг', 'Презентация услуги или продукта', 'Кнопки связи и форма заявки', 'Адаптив под все устройства', 'Базовое SEO и аналитика', 'Структура для рекламы и Instagram'], 'Собрать страницу'],
        ['SaaS-платформы', 'Индивидуально', '', '/ проект', 'Полноценные веб-продукты: кабинеты, оплаты, админки, базы данных и автоматизация.', ['SaaS-сайт или веб-приложение', 'Логин и личные кабинеты', 'Админ-панель и база данных', 'Оплаты или бронирования', 'Автоматизация и интеграции', 'Поддержка запуска и улучшений'], 'Обсудить SaaS'],
        ['AI-услуги', 'От $15', '$30', '/ задача', 'AI-креатив для контента, подарков, соцсетей и быстрых визуальных идей.', ['AI-видео и reels', 'AI-фото и редактирование', 'Мокапы продуктов и визуалы', 'Аватары и персонажи', 'Короткие промо-концепты', 'Быстрые креативные эксперименты'], 'Заказать AI'],
      ],
    },
    footer: {
      desc: 'Агентство, которое создает сайты, приложения, автоматизацию и AI-сервисы для бизнеса, готового расти.',
      status: 'Все системы работают',
      navigate: 'Навигация',
      contact: 'Контакты',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия сервиса',
    },
    floating: { open: 'Связаться', close: 'Закрыть', aria: 'Варианты связи' },
    trust: {
      items: ['Ответ за 1 час', 'Честные цены', 'Поддержка после запуска', 'Казахстан · Remote'],
    },
    a11y: { skip: 'Перейти к содержимому', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню' },
    legal: {
      privacyTitle: 'Политика конфиденциальности',
      privacyText: 'Мы собираем только данные, которые вы добровольно отправляете через WhatsApp, email или форму заявки. Контактные данные используются исключительно для связи по вашему проекту и не передаются третьим лицам без вашего согласия.',
      termsTitle: 'Условия сервиса',
      termsText: 'Сроки и стоимость фиксируются до начала работ. Предоплата согласовывается индивидуально. Мы предоставляем правки в рамках согласованного объёма и поддерживаем проект после запуска по отдельному договорённому плану.',
    },
  },
  kk: {
    meta: {
      lang: 'kk',
      title: 'NEXERA — Цифрлық жүйелер студиясы | Сайт, SaaS, AI',
      description: 'NEXERA — цифрлық жүйелер агенттігі. Премиум сайттар, SaaS, AI-автоматтандыру және бизнес лендингтері.',
    },
    nav: {
      services: 'Қызметтер',
      process: 'Процесс',
      philosophy: 'Көзқарас',
      team: 'Команда',
      pricing: 'Бағалар',
      home: 'Басты',
      contact: 'Баға және байланыс',
      cta: 'Жобаны бастау',
      mobileCta: 'Сөйлесу',
      sections: 'Сайт бөлімдері',
      quick: 'Жылдам байланыс',
      call: 'Қоңырау шалу',
    },
    hero: {
      kicker: 'Цифрлық жүйелер студиясы',
      titleA: 'Бір кликпен',
      titleB: 'цифрлық өсу',
      text: 'Біз бизнеске премиум сайттар, SaaS-интерфейстер, AI-автоматтандыру және таза цифрлық жүйелер жасаймыз. Мақсат: мықты көріну және тез өсу.',
      primary: 'Жобаны бастау',
      secondary: 'Қызметтерді көру',
      nodes: [
        ['Қорғаныс қабаты', 'Іске қосулар 24/7 бақылауда'],
        ['AI-автоматтандыру', 'Уақыт үнемдейтін сценарийлер'],
        ['Әлемдік қамту', 'Кез келген нарыққа арналған сайттар'],
        ['Өнімдік жүйелер', 'Лендинг, SaaS, CRM, панельдер'],
      ],
    },
    cards: {
      sales: 'Сату аналитикасы',
      salesDesc: 'Бизнесті өсіретін шешімдерге арналған нақты уақыт метрикалары.',
      salesItems: ['Табыстың өсуі', 'Өтінім конверсиясы', 'Нарыққа шығу'],
      level: 'Сатуды күшейту',
      live: 'LIVE',
      design: 'Дизайн қозғалтқышы',
      feed: 'Тікелей лента',
      designDesc: 'Әлемдік деңгейдегі дизайн және нақты уақытта жиналатын қолданушы тәжірибесі.',
      terminal: [
        '> Нақты интерфейс құрастырылуда...',
        '> Моушен жүйесі іске қосылды',
        '> Дизайн токендері қолданылды: 48',
        '> Қолжетімділік: 100/100',
        '> Бренд қабаты жүктелуде...',
        '> Адаптив: 5/5',
        '> Lighthouse: 98',
        '> Әсер деңгейі: максимум',
      ],
      log: ['> Дизайн жүйесі іске қосылды', '> UI компоненттері: 32 дайын'],
      planner: 'Автоматтандыру жоспары',
      plannerDesc: 'Автоматтандыру толық циклмен: кесте, іске қосу және жеткізу автопилотта.',
      scheduled: 'Жоспарланған іске қосулар',
      active: 'белсенді',
      save: 'Кестені сақтау',
      days: ['Д', 'С', 'С', 'Б', 'Ж', 'С', 'Ж'],
    },
    features: {
      label: 'Біз не жасаймыз',
      titleA: 'Мықты нәтиженің',
      titleB: 'үш тірегі',
      text: 'Әр жоба өлшенетін нәтижеге, әсерлі визуалға және сенімді іске асыруға сүйенеді.',
    },
    philosophy: {
      label: 'Біздің көзқарас',
      p1: 'Көп агенттік бос емес болып көрінеді, шаблондарды айналдырады және іске қосқаннан кейін жоғалады.',
      p2: 'Біз басқаша жұмыс істейміз.',
      titleA: 'Біз жай сайт емес,',
      titleB: 'цифрлық құралдар',
      titleC: 'жасаймыз. Әр пиксель мақсатқа қызмет етеді. Әр анимацияның мәні бар. Әр код жолы сіздің',
      titleD: 'өсуіңізді күшейтеді.',
      values: [
        ['Компромисс жоқ', 'Сапа мен мерзімде'],
        ['Жылдам жеткізу', 'Әдетте 1-2 апта'],
        ['Детальге назар', 'Клиент байқайтын ұсақтықтар'],
      ],
    },
    team: {
      label: 'Команда',
      titleA: 'Біздің әзірлеушілер',
      titleB: 'кодтан да жоғары',
      text: 'Олимпиада жеңімпаздары және хакатон қатысушылары. Олар күнделікті жұмыста 20+ AI-құрал қолданады, күрделі бағдарламалау тілдерінде жазады және көп команда бас тартатын жобаларды алады.',
      badges: ['Олимпиада жеңімпаздары', 'Хакатон финалистері', '20+ AI-құрал', 'Күрделі тілдер: Rust, Go, C++'],
      caseLabel: 'Продакшендегі таңдаулы кейс',
      note: '* Кастом продакшен-шаблондардың интерактивті веб-макеттері.',
    },
    protocol: {
      label: 'Процесс',
      titleA: 'Идеяны қалай',
      titleB: 'іске қосамыз',
      text: 'Стратегиядан релизге дейінгі анық жол: хаоссыз және шексіз түзетусіз.',
      steps: [
        ['01', 'Талдау және стратегия', 'Бизнес мақсаттарын, нарықты талдап, конверсияға жұмыс істейтін цифрлық стратегия құрамыз.'],
        ['02', 'Дизайн және әзірлеу', 'Сенімді инженерияға құрылған дәл интерфейстер. Әр компонент нәтижеге жұмыс істейді.'],
        ['03', 'Іске қосу және өсу', 'Іске қосамыз, бақылаймыз, жақсартамыз және масштабтауға көмектесеміз. Бұл бір реттік тапсыру емес, серіктестік.'],
      ],
    },
    pricing: {
      label: 'Инвестиция',
      titleA: 'Әр кезеңге',
      titleB: 'арналған шешімдер',
      text: 'Жеке сыйлық сайттарынан бизнес сайттарға, SaaS өнімдеріне және AI-контентке дейін.',
      popular: 'Танымал',
      discount: 'Шектеулі жеңілдік',
      plans: [
        ['Сыйлық сайттар', '$25 бастап', '$80', '/ жоба', 'Ерекше адамға, сәтке немесе әдемі сұраққа арналған эмоциялық сайттар.', ['Сыйлық және құттықтау сайттары', 'Туған күн және мерейтой беттері', '“Менің қызым боласың ба?” беттері', 'Фото, музыка және жеке хабарлама', 'Мобильге ыңғайлы романтикалық дизайн', 'Қарапайым идеяларға жылдам жеткізу'], 'Сыйлық сайтқа тапсырыс'],
        ['Лендингтер', '$150 бастап', '$300', '/ жоба', 'Сенім, түсінікті құрылым және өтінім керек шағын бизнеске арналған таза сайттар.', ['Бизнес лендинг', 'Қызмет немесе өнім презентациясы', 'Байланыс батырмалары және өтінім формасы', 'Барлық құрылғыға адаптив', 'Базалық SEO және аналитика', 'Жарнама мен Instagram үшін құрылым'], 'Парақша жасау'],
        ['SaaS платформалар', 'Жеке есеп', '', '/ жоба', 'Кабинеттері, төлемдері, админ панелі, дерекқоры және автоматтандыруы бар толық веб өнімдер.', ['SaaS сайт немесе веб-қосымша', 'Логин және жеке кабинеттер', 'Админ панель және дерекқор', 'Төлем немесе брондау ағымдары', 'Автоматтандыру және интеграциялар', 'Іске қосу қолдауы және жақсарту'], 'SaaS талқылау'],
        ['AI қызметтер', '$15 бастап', '$30', '/ тапсырма', 'Контентке, сыйлықтарға, әлеуметтік желіге және тез визуал идеяларға арналған AI-креатив.', ['AI видео және reels', 'AI фото жасау немесе өңдеу', 'Өнім мокаптары және визуалдар', 'Аватар немесе кейіпкер суреттері', 'Қысқа промо-концепттер', 'Жылдам креатив эксперименттері'], 'AI жұмысқа тапсырыс'],
      ],
    },
    footer: {
      desc: 'Өсуге дайын бизнеске сайттар, қосымшалар, автоматтандыру және AI-сервистер жасайтын агенттік.',
      status: 'Барлық жүйе жұмыс істеп тұр',
      navigate: 'Навигация',
      contact: 'Байланыс',
      rights: 'Барлық құқықтар қорғалған.',
      privacy: 'Құпиялылық саясаты',
      terms: 'Сервис шарттары',
    },
    floating: { open: 'Байланысу', close: 'Жабу', aria: 'Байланыс түрлері' },
    trust: {
      items: ['1 сағат ішінде жауап', 'Ашық баға', 'Іске қосудан кейін қолдау', 'Қазақстан · Remote'],
    },
    a11y: { skip: 'Мазмұнға өту', menuOpen: 'Менюді ашу', menuClose: 'Менюді жабу' },
    legal: {
      privacyTitle: 'Құпиялылық саясаты',
      privacyText: 'Біз WhatsApp, email немесе өтінім арқылы сіз жіберген деректерді ғана жинаймыз. Байланыс деректері тек жоба бойынша байланыс үшін қолданылады.',
      termsTitle: 'Сервис шарттары',
      termsText: 'Мерзімдер мен баға жұмыс басталмай тұрып келісіледі. Алдын ала төлем жеке келісіледі. Келісілген көлемде түзетулер және іске қосудан кейін қолдау беріледі.',
    },
  },
  en: {
    meta: {
      lang: 'en',
      title: 'NEXERA — Digital Systems Studio | Websites, SaaS, AI',
      description: 'NEXERA builds premium websites, SaaS platforms, AI automation, and landing pages for businesses ready to grow.',
    },
    nav: {
      services: 'Services',
      process: 'Process',
      philosophy: 'Philosophy',
      team: 'Our Team',
      pricing: 'Pricing',
      home: 'Home',
      contact: 'Pricing & Contact',
      cta: 'Start a Project',
      mobileCta: "Let's Talk",
      sections: 'Site Sections',
      quick: 'Quick Connect',
      call: 'Call Agency',
    },
    hero: {
      kicker: 'Digital systems studio',
      titleA: 'One-click for',
      titleB: 'Digital Growth',
      text: 'We build premium websites, SaaS interfaces, AI automation, and clean digital systems for businesses that want to look sharp and move fast.',
      primary: 'Start a Project',
      secondary: 'Discover More',
      nodes: [
        ['Security Layer', '24/7 protected launches'],
        ['AI Automation', 'Workflows that save hours'],
        ['Global Reach', 'Sites built for any market'],
        ['Product Systems', 'Landing, SaaS, CRM, dashboards'],
      ],
    },
    cards: {
      sales: 'Sales Intelligence',
      salesDesc: 'Real-time performance metrics powering your growth decisions.',
      salesItems: ['Revenue Growth', 'Lead Conversion', 'Market Expansion'],
      level: 'Level Up Your Sales',
      live: 'LIVE',
      design: 'Design Engine',
      feed: 'Live Feed',
      designDesc: 'World-class design & experience, shipped in real time.',
      terminal: [
        '> Crafting pixel-perfect interfaces...',
        '> Motion system initialized',
        '> Design tokens applied: 48 vars',
        '> Accessibility score: 100/100',
        '> Loading brand identity layer...',
        '> Responsive breakpoints: 5/5',
        '> Performance audit: 98 Lighthouse',
        '> User delight factor: maximum',
      ],
      log: ['> Design system initialized', '> UI components: 32 built'],
      planner: 'Automation Planner',
      plannerDesc: 'End-to-end automation: schedule, deploy, deliver on autopilot.',
      scheduled: 'Scheduled deployments',
      active: 'active',
      save: 'Save Schedule',
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    features: {
      label: 'What We Build',
      titleA: 'Three pillars of',
      titleB: 'excellence',
      text: 'Every engagement is built on measurable results, breathtaking craft, and bulletproof reliability.',
    },
    philosophy: {
      label: 'Our Philosophy',
      p1: 'Most agencies focus on looking busy, churning templates, and disappearing after launch.',
      p2: 'We focus on something different.',
      titleA: 'We build',
      titleB: 'digital instruments',
      titleC: 'that are not just websites. Every pixel earns its place. Every animation carries weight. Every line of code compounds your',
      titleD: 'growth.',
      values: [
        ['Zero Compromise', 'On quality or timeline'],
        ['Fast Delivery', '1-2 weeks maximum'],
        ['Obsessive Craft', 'Details that clients notice'],
      ],
    },
    team: {
      label: 'Our Team',
      titleA: 'Our developers are',
      titleB: 'more than code',
      text: 'Olympiad winners and hackathon participants. They use 20+ AI tools in daily work, write in complex programming languages, and take on projects most teams walk away from.',
      badges: ['Olympiad Winners', 'Hackathon Finalists', '20+ AI Tools', 'Hard Languages: Rust, Go, C++'],
      caseLabel: 'Featured Production Case',
      note: '* Interactive web mockups of custom production templates.',
    },
    protocol: {
      label: 'Process',
      titleA: 'How we turn ideas',
      titleB: 'into launch',
      text: 'A clear path from strategy to release, without chaos or endless rework.',
      steps: [
        ['01', 'Discovery & Strategy', 'We map your business goals, audit your market position, and architect a digital strategy that converts.'],
        ['02', 'Design & Engineering', 'Pixel-perfect interfaces built on solid engineering. Every component is crafted to delight and perform.'],
        ['03', 'Launch & Scale', 'We ship, monitor, optimize, then help you scale. Your success is an ongoing partnership, not a handoff.'],
      ],
    },
    pricing: {
      label: 'Investment',
      titleA: 'Built for',
      titleB: 'every stage',
      text: 'From personal gift pages to business websites, SaaS products, and AI content.',
      popular: 'Most Popular',
      discount: 'Limited discount',
      plans: [
        ['Custom Gifts', 'From $25', '$80', '/ project', 'Simple emotional websites made for one special person, one moment, or one beautiful question.', ['Gift and greeting websites', 'Birthday or anniversary pages', '"Will you be my girlfriend?" pages', 'Personal photos, music, and message', 'Mobile-friendly romantic layout', 'Fast delivery for simple ideas'], 'Order a Gift Site'],
        ['Landing Pages', 'From $150', '$300', '/ project', 'Clean, focused websites for small businesses that need trust, clarity, and client requests online.', ['Business landing page', 'Service or product presentation', 'Contact buttons and lead form', 'Responsive design for every device', 'Basic SEO and analytics setup', 'Clear structure for ads and Instagram'], 'Build My Page'],
        ['SaaS Platforms', 'Custom', '', '/ project', 'Full web products for serious ideas: dashboards, accounts, payments, admin panels, and automation.', ['Full SaaS website or web app', 'User login and dashboards', 'Admin panel and database', 'Payments or booking flows', 'Automation and integrations', 'Launch support and improvements'], 'Discuss SaaS'],
        ['AI Services', 'From $15', '$30', '/ task', 'Simple AI-powered creative work for content, gifts, social media, and fast visual ideas.', ['AI video clips and reels', 'AI photo creation or editing', 'Product mockups and visuals', 'Avatar or character images', 'Short promo concepts', 'Fast creative experiments'], 'Request AI Work'],
      ],
    },
    footer: {
      desc: 'The worldwide agency building websites, apps, automation systems & AI-powered services for businesses ready to grow and scale revenue.',
      status: 'All Systems Operational',
      navigate: 'Navigate',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    floating: { open: 'Contact Us', close: 'Close', aria: 'Contact options' },
    trust: {
      items: ['Reply within 1 hour', 'Transparent pricing', 'Post-launch support', 'Kazakhstan · Remote'],
    },
    a11y: { skip: 'Skip to content', menuOpen: 'Open menu', menuClose: 'Close menu' },
    legal: {
      privacyTitle: 'Privacy Policy',
      privacyText: 'We only collect information you voluntarily send via WhatsApp, email, or inquiry forms. Contact details are used solely to discuss your project and are not shared with third parties without consent.',
      termsTitle: 'Terms of Service',
      termsText: 'Timelines and pricing are agreed before work begins. Prepayment terms are set individually. Revisions are included within the agreed scope, with optional post-launch support plans.',
    },
  },
}

function LanguageSwitcher({ lang, setLang, compact = false }) {
  return (
    <div className={`language-switcher ${compact ? 'language-switcher-compact' : ''}`} aria-label="Language selector">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={lang === code ? 'active' : ''}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

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
function Navbar({ lang, setLang, t }) {
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

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const desktopLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#work' },
    { name: t.nav.philosophy, href: '#about' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.pricing, href: '#contact' },
  ]

  const mobileLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.process, href: '#work' },
    { name: t.nav.philosophy, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
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
          href="#hero"
          id="nav-logo"
          className="flex items-center gap-2 no-underline flex-shrink-0 z-50"
          style={{ transform: 'none' }}
          onClick={() => setMenuOpen(false)}
          aria-label="NEXERA — Home"
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

        {/* Language + CTA — desktop */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <a
            href="#contact"
            id="nav-cta"
            className="btn-magnetic btn-primary flex items-center gap-2 font-sans font-semibold text-sm px-5 py-2.5 rounded-xl no-underline"
          >
            <span className="btn-slide rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }} />
            {t.nav.cta}
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile — CTA + hamburger */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          <a
            href="#contact"
            id="nav-mobile-cta-pill"
            className="btn-magnetic btn-primary flex items-center gap-1.5 font-sans font-semibold text-xs px-3 py-2 rounded-xl no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <span className="btn-slide rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }} />
            {t.nav.mobileCta}
            <ArrowUpRight size={12} />
          </a>
          <button
            id="nav-mobile-toggle"
            className="p-1.5 rounded-lg border border-white/10 text-white/70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.a11y.menuClose : t.a11y.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            style={{ background: 'rgba(10,31,26,0.6)' }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Fullscreen Overlay) */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
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

          <div className="flex-shrink-0 px-2 pb-3">
            <LanguageSwitcher lang={lang} setLang={setLang} compact />
          </div>

          {/* Nav List */}
          <div className="flex-1 flex flex-col justify-center gap-2 overflow-y-auto py-4">
            <span className="font-data text-[10px] uppercase tracking-widest text-emerald-400/50 mb-2 px-2">
              {t.nav.sections}
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
                {t.nav.quick}
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={SITE.whatsapp}
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
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-950/80 border border-blue-500/20 text-blue-400 text-xs font-semibold no-underline"
                >
                  <Phone size={12} />
                  {t.nav.call}
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[10px] text-white/30 px-1 font-data">
              <a href={`mailto:${SITE.email}`} className="no-underline text-white/30 hover:text-emerald-400 transition-colors">{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="no-underline text-white/30 hover:text-emerald-400 transition-colors">{SITE.phoneDisplay}</a>
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
function Hero({ t }) {
  const heroRef = useRef(null)
  const textRefs = useRef([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      textRefs.current.forEach((el) => {
        if (el) {
          el.style.opacity = '1'
          el.style.transform = 'none'
        }
      })
      return
    }
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
  }, [reducedMotion])

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) textRefs.current.push(el)
  }

  const nodeIcons = [Shield, Cpu, Globe, Layers]
  const nodes = t.hero.nodes.map(([title, value], i) => ({
    pos: ['hero-node-left-top', 'hero-node-left-bottom', 'hero-node-right-top', 'hero-node-right-bottom'][i],
    icon: nodeIcons[i],
    title,
    value,
  }))

  return (
    <section
      ref={heroRef}
      id="hero"
      className="nexera-hero relative min-h-[100dvh] w-full overflow-hidden"
    >
      <picture className="absolute inset-0 z-0 block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.webp" type="image/webp" />
        <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.png" />
        <source srcSet="/hero-bg.webp" type="image/webp" />
        <img
          src="/hero-bg.png"
          alt=""
          role="presentation"
          width={1672}
          height={940}
          fetchPriority="high"
          decoding="async"
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
          <span>{t.hero.kicker}</span>
        </div>

        <h1 className="max-w-5xl font-sans text-[2.9rem] font-black leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span ref={addToRefs} className="block">{t.hero.titleA}</span>
          <span ref={addToRefs} className="block hero-title-muted">{t.hero.titleB}</span>
        </h1>

        <p
          ref={addToRefs}
          className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-white/68 md:text-base"
        >
          {t.hero.text}
        </p>

        <div ref={addToRefs} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            id="hero-cta-primary"
            className="btn-magnetic btn-primary flex items-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-bold no-underline"
          >
            <span className="btn-slide rounded-full" style={{ background: 'rgba(255,255,255,0.18)' }} />
            {t.hero.primary}
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#services"
            id="hero-cta-secondary"
            className="hero-ghost-btn flex items-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-semibold no-underline"
          >
            {t.hero.secondary}
            <ChevronRight size={15} />
          </a>
        </div>
      </div>

      <div className="hero-trust absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 md:flex">
        {t.trust.items.map((item) => (
          <span key={item} className="flex items-center gap-2 font-data text-[11px] uppercase tracking-wider text-white/42">
            <span className="h-1 w-1 rounded-full bg-emerald-400/70" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

// =============================================
// C1. DIAGNOSTIC SHUFFLER CARD
// =============================================
function DiagnosticShuffler({ t }) {
  const salesVals = ['+142%', '+3.8x', '12 Cities']
  const salesIcons = [TrendingUp, Zap, Globe]
  const salesColors = ['#00E5A0', '#3B9EFF', '#7B61FF']

  const [items, setItems] = useState(() =>
    t.cards.salesItems.map((label, i) => ({
      label,
      val: salesVals[i],
      icon: salesIcons[i],
      color: salesColors[i],
    }))
  )

  useEffect(() => {
    setItems(
      t.cards.salesItems.map((label, i) => ({
        label,
        val: salesVals[i],
        icon: salesIcons[i],
        color: salesColors[i],
      }))
    )
  }, [t])

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
          {t.cards.sales}
        </span>
      </div>
      <p className="font-sans text-xs mb-5 leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
        {t.cards.salesDesc}
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
        <span className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.28)' }}>{t.cards.level}</span>
        <span className="font-data text-xs" style={{ color: 'var(--neon-green)' }}>{t.cards.live}</span>
      </div>
    </div>
  )
}

// =============================================
// C2. TELEMETRY TYPEWRITER CARD
// =============================================
function TelemetryTypewriter({ t }) {
  const messages = t.cards.terminal

  const [displayText, setDisplayText] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [log, setLog] = useState(() => t.cards.log.map((text) => ({ text, done: true })))

  useEffect(() => {
    setDisplayText('')
    setMsgIdx(0)
    setCharIdx(0)
    setIsDeleting(false)
    setLog(t.cards.log.map((text) => ({ text, done: true })))
  }, [t])

  useEffect(() => {
    const current = messages[msgIdx]
    if (!current) return
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
  }, [charIdx, isDeleting, msgIdx, messages])

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
            {t.cards.design}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="live-dot" />
          <span className="font-data text-xs" style={{ color: 'var(--neon-green)' }}>{t.cards.feed}</span>
        </div>
      </div>
      <p className="font-sans text-xs mb-4 leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
        {t.cards.designDesc}
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
function CursorScheduler({ t }) {
  const days = t.cards.days
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
          {t.cards.planner}
        </span>
      </div>
      <p className="font-sans text-xs mb-4 leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
        {t.cards.plannerDesc}
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
          {t.cards.scheduled}
        </span>
        <span className="font-data text-xs" style={{ color: 'var(--neon-green)', fontSize: '0.65rem' }}>
          {activeDays.length} {t.cards.active}
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
        {t.cards.save}
      </button>
    </div>
  )
}

// =============================================
// C. FEATURES SECTION
// =============================================
function Features({ t }) {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
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
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 md:py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="features-header mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="section-label block mb-3">{t.features.label}</span>
          <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
            {t.features.titleA}{' '}
            <span className="font-drama gradient-text">{t.features.titleB}</span>
          </h2>
        </div>
        <p className="font-sans text-sm max-w-xs leading-relaxed md:text-right" style={{ color: 'rgba(239,246,242,0.45)' }}>
          {t.features.text}
        </p>
      </div>

      {/* Cards grid вЂ” stacked on mobile, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="feature-card-wrap"><DiagnosticShuffler t={t} /></div>
        <div className="feature-card-wrap"><TelemetryTypewriter t={t} /></div>
        <div className="feature-card-wrap"><CursorScheduler t={t} /></div>
      </div>
    </section>
  )
}

// =============================================
// D. PHILOSOPHY вЂ” "The Manifesto"
// =============================================
function Philosophy({ t }) {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
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
  }, [reducedMotion])

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
          background:
            'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(59,158,255,0.08) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 80% 70%, rgba(0,229,160,0.06) 0%, transparent 50%)',
          opacity: 0.9,
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
        <span className="section-label block mb-8 phil-line">{t.philosophy.label}</span>

        <p className="phil-line font-sans text-base md:text-lg font-light mb-2 leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
          {t.philosophy.p1}
        </p>
        <p className="phil-line font-sans text-base md:text-lg font-light mb-14 leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
          {t.philosophy.p2}
        </p>

        <h2 className="phil-accent font-sans font-black text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
          {t.philosophy.titleA}{' '}
          <span className="gradient-text">{t.philosophy.titleB}</span>
          {' '}{t.philosophy.titleC}{' '}
          <span className="gradient-text">{t.philosophy.titleD}</span>
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-14">
          {[
            { icon: Shield, label: t.philosophy.values[0][0], desc: t.philosophy.values[0][1] },
            { icon: Clock, label: t.philosophy.values[1][0], desc: t.philosophy.values[1][1] },
            { icon: Star, label: t.philosophy.values[2][0], desc: t.philosophy.values[2][1] },
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
function Developers({ t }) {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
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
  }, [reducedMotion])

  const badges = t.team.badges

  return (
    <section
      ref={sectionRef}
      id="team"
      className="developers-section relative w-full overflow-hidden flex items-center justify-center py-20 lg:py-0"
      style={{ minHeight: '100dvh' }}
    >
      <picture className="developers-bg absolute inset-0 w-full h-full z-0 block">
        <source srcSet="/developers-hero.webp" type="image/webp" />
        <img
          src="/developers-hero.png"
          alt=""
          role="presentation"
          width={1853}
          height={1040}
          loading="lazy"
          decoding="async"
          className="developers-bg h-full w-full object-cover"
        />
      </picture>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Developers Info */}
        <div className="dev-content w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="section-label block mb-5">{t.team.label}</span>

          <h2
            className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-5"
            style={{ color: 'var(--ivory)' }}
          >
            {t.team.titleA}{' '}
            <span className="font-drama gradient-text">{t.team.titleB}</span>
          </h2>

          <p
            className="font-sans text-sm sm:text-base leading-relaxed mb-8"
            style={{ color: 'rgba(239,246,242,0.78)' }}
          >
            {t.team.text}
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
            <span className="font-data text-xs text-white/45 uppercase tracking-wider">{t.team.caseLabel}</span>
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
              <img src="/work1.webp" alt="merey.bento creations" loading="lazy" decoding="async" className="w-full aspect-[16/11] object-cover rounded-b-2xl" />
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
              <img src="/work3.webp" alt="merey.bento checkout" loading="lazy" decoding="async" className="w-full aspect-[16/11] object-cover rounded-b-2xl" />
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
              <img src="/work2.webp" alt="merey.bento landing page" loading="lazy" decoding="async" className="w-full aspect-[16/11] object-cover rounded-b-2xl" />
            </div>

          </div>
          
          <span className="mt-6 font-data text-[9px] text-white/30 select-none text-center">
            {t.team.note}
          </span>
        </div>

      </div>
    </section>
  )
}

const protocolMeta = [
  {
    bg: 'linear-gradient(145deg, #080E12 0%, #0A1A14 100%)',
    img: '/photo1.jpg',
    imgFallback: '/photo1.jpg',
  },
  {
    bg: 'linear-gradient(145deg, #080E12 0%, #0B1420 100%)',
    img: '/photo2.jpg',
    imgFallback: '/photo2.jpg',
  },
  {
    bg: 'linear-gradient(145deg, #060C14 0%, #0A1820 100%)',
    img: '/photo3.jpg',
    imgFallback: '/photo3.jpg',
  },
]

function Protocol({ t }) {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
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
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-16 md:py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="protocol-header mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="section-label block mb-3">{t.protocol.label}</span>
          <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
            {t.protocol.titleA}{' '}
            <span className="font-drama gradient-text">{t.protocol.titleB}</span>
          </h2>
        </div>
        <p className="font-sans text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(239,246,242,0.45)' }}>
          {t.protocol.text}
        </p>
      </div>

      {/* Stacked cards */}
      <div className="flex flex-col gap-4">
        {t.protocol.steps.map(([num, title, desc], index) => {
          const step = { num, title, desc, ...protocolMeta[index] }
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
                <picture>
                  <source srcSet={step.img} type="image/webp" />
                  <img
                    src={step.imgFallback}
                    alt=""
                    role="presentation"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                    style={{ filter: 'grayscale(0.1) brightness(0.88) contrast(1.08)' }}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
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
const planMeta = [
  {
    slug: 'custom-gifts',
    featured: false,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересует%20пакет%20Custom%20Gifts.',
  },
  {
    slug: 'landing-pages',
    featured: true,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересует%20пакет%20Landing%20Pages.',
  },
  {
    slug: 'saas-platforms',
    featured: false,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересует%20пакет%20SaaS%20Platforms.',
  },
  {
    slug: 'ai-services',
    featured: false,
    href: 'https://wa.me/77020346468?text=Здравствуйте!%20Интересуют%20ИИ%20услуги.',
  },
]

function Pricing({ t }) {
  const plans = t.pricing.plans.map((plan, i) => ({
    name: plan[0],
    price: plan[1],
    oldPrice: plan[2] || undefined,
    period: plan[3],
    desc: plan[4],
    features: plan[5],
    cta: plan[6],
    ...planMeta[i],
  }))
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
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
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 md:py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="mb-10 md:mb-14 text-center">
        <span className="section-label block mb-3">{t.pricing.label}</span>
        <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: 'var(--ivory)' }}>
          {t.pricing.titleA}{' '}
          <span className="font-drama gradient-text">{t.pricing.titleB}</span>
        </h2>
        <p className="mt-3 font-sans text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(239,246,242,0.4)' }}>
          {t.pricing.text}
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
                  {t.pricing.popular}
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
                    {t.pricing.discount}
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
function Footer({ t }) {
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
            {t.footer.desc}
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
            <span className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.45)' }}>{t.footer.status}</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-data text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239,246,242,0.25)' }}>{t.footer.navigate}</p>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: t.nav.services, href: '#services' },
              { label: t.nav.process, href: '#work' },
              { label: t.nav.philosophy, href: '#about' },
              { label: t.nav.pricing, href: '#contact' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm no-underline transition-colors"
                  style={{ color: 'rgba(239,246,242,0.48)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-data text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239,246,242,0.25)' }}>{t.footer.contact}</p>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href={`mailto:${SITE.email}`} className="font-sans text-sm no-underline hover:text-[#00E5A0] transition-colors" style={{ color: 'rgba(239,246,242,0.48)' }}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone}`} className="font-sans text-sm no-underline hover:text-[#00E5A0] transition-colors" style={{ color: 'rgba(239,246,242,0.48)' }}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
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
                href={SITE.instagram}
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

      {/* Legal */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 pb-8" style={{ borderBottom: '1px solid rgba(239,246,242,0.05)' }}>
        <details id="privacy" className="legal-details rounded-2xl border border-white/5 p-4">
          <summary className="font-sans text-sm font-semibold cursor-pointer" style={{ color: 'rgba(239,246,242,0.65)' }}>
            {t.legal.privacyTitle}
          </summary>
          <p className="mt-3 font-sans text-xs leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
            {t.legal.privacyText}
          </p>
        </details>
        <details id="terms" className="legal-details rounded-2xl border border-white/5 p-4">
          <summary className="font-sans text-sm font-semibold cursor-pointer" style={{ color: 'rgba(239,246,242,0.65)' }}>
            {t.legal.termsTitle}
          </summary>
          <p className="mt-3 font-sans text-xs leading-relaxed" style={{ color: 'rgba(239,246,242,0.38)' }}>
            {t.legal.termsText}
          </p>
        </details>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-7">
        <p className="font-data text-xs" style={{ color: 'rgba(239,246,242,0.22)' }}>
          © {year} NEXERA Agency. {t.footer.rights}
        </p>
        <div className="flex items-center gap-5">
          <a href="#privacy" className="font-data text-xs no-underline" style={{ color: 'rgba(239,246,242,0.22)' }}>
            {t.footer.privacy}
          </a>
          <a href="#terms" className="font-data text-xs no-underline" style={{ color: 'rgba(239,246,242,0.22)' }}>
            {t.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  )
}

// =============================================
// FLOATING CONTACT SYSTEM вЂ” Glassmorphism Contacts FAB
// =============================================
function FloatingContact({ t }) {
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
      className="fixed bottom-6 right-6 z-50 flex w-[190px] flex-col items-center gap-3 font-sans floating-contact"
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
          href={SITE.whatsapp}
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
          href={`tel:${SITE.phone}`}
          className="flex w-full items-center justify-center gap-2.5 px-4 py-2.5 rounded-full border bg-blue-950/90 border-blue-500/30 text-blue-400 text-xs font-semibold shadow-lg hover:scale-105 hover:bg-blue-900 transition-all no-underline"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <Phone size={13} />
          <span>{SITE.phoneDisplay}</span>
        </a>

        {/* Instagram */}
        <a
          href={SITE.instagram}
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
        aria-label={t.floating.aria}
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
        <span>{open ? t.floating.close : t.floating.open}</span>
      </button>
    </div>
  )
}

// =============================================
// ROOT APP
// =============================================
export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'ru'
    const saved = localStorage.getItem('nexera-lang')
    return saved && copy[saved] ? saved : 'ru'
  })
  const t = copy[lang]

  const handleSetLang = useCallback((code) => {
    setLang(code)
    localStorage.setItem('nexera-lang', code)
  }, [])

  useEffect(() => {
    document.documentElement.lang = t.meta.lang
    document.title = t.meta.title

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', t.meta.description)
  }, [lang, t])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--void)' }}>
      <a href="#main-content" className="skip-link">{t.a11y.skip}</a>
      <Navbar lang={lang} setLang={handleSetLang} t={t} />
      <main id="main-content">
        <Hero t={t} />
        <Features t={t} />
        <Philosophy t={t} />
        <Developers t={t} />
        <Protocol t={t} />
        <Pricing t={t} />
      </main>
      <Footer t={t} />
      <FloatingContact t={t} />
    </div>
  )
}
