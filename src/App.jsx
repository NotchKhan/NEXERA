import { useEffect, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown,
  CreditCard, Globe2, Camera, Layers3, Menu, MessageCircle,
  ShieldCheck, ShoppingBag, Smartphone,
  Sparkles, X,
} from 'lucide-react'
import { SITE, waLink } from './site'
import Hero from './components/Hero'
import QuickNav from './components/QuickNav'

const copy = {
  ru: {
    nav: ['Решения', 'Как работаем', 'Тарифы', 'Дополнения', 'Контакты'],
    hero: {
      lines: ['Современные', 'цифровые', 'решения'],
      accent: ['для вашего', 'бизнеса'],
      description: 'Мы создаём сайты, автоматизацию и мобильные приложения, которые привлекают клиентов и помогают вашему бизнесу расти.',
      cta: 'Начать проект',
      result: 'Реальные решения для реальных результатов',
      proof: '100+ довольных клиентов',
      strap: 'ВАШ БИЗНЕС · БОЛЬШЕ КЛИЕНТОВ · БОЛЬШЕ ВОЗМОЖНОСТЕЙ',
    },
    services: [
      ['Сайты', 'От лендингов до интернет-магазинов'],
      ['Автоматизация', 'WhatsApp, заказы, CRM и аналитика'],
      ['Мобильные приложения', 'Android и iOS'],
      ['Поддержка', 'Мы рядом даже после запуска'],
    ],
    intro: {
      eyebrow: '01 / ЦИФРОВАЯ СИСТЕМА',
      title: 'Не просто сайт. Система, которая работает на бизнес.',
      description: 'Соединяем всё, что нужно клиенту для покупки, а вам — для удобного управления. Начните с одного решения и расширяйте его по мере роста.',
      steps: [
        ['Привлечь', 'Сильная первая страница и понятное предложение.'],
        ['Показать', 'Каталог, услуги и цены в удобном формате.'],
        ['Принять заказ', 'Корзина, заявка, WhatsApp или онлайн-оплата.'],
        ['Управлять', 'Заказы, товары и данные в одной системе.'],
      ],
    },
    example: {
      eyebrow: 'ПРИМЕР ИНТЕРФЕЙСА',
      title: 'Показываем продукт, а не набор технологий.',
      description: 'У каждого бизнеса свой путь клиента. Дизайн помогает быстро найти нужное, выбрать товар и оставить заявку.',
      caption: 'Лендинг для бренда десертов',
    },
    pricing: {
      eyebrow: '02 / ПАКЕТЫ',
      title: 'Выберите точку старта',
      description: 'Три понятных пакета. Объём и точную стоимость закрепляем после короткого разговора о задаче.',
      popular: 'Самый популярный',
      from: 'от',
      choose: 'Обсудить проект',
      included: 'В каждом сайте: адаптив, HTTPS, контакты, WhatsApp и базовая SEO-разметка.',
      plans: [
        {
          name: 'MINI',
          audience: 'Для экспертов, мастеров и небольших компаний.',
          price: '29 900 ₸',
          summary: 'Одна сильная страница, которая объясняет предложение и приводит к контакту.',
          features: ['Индивидуальная одностраничная подача', 'Услуги или мини-каталог до 6 позиций', 'Кнопки связи и карта', 'QR-код и подключение домена', 'Адаптив и базовая SEO-настройка'],
        },
        {
          name: 'BUSINESS',
          audience: 'Для магазинов, кафе, салонов и сервисов.',
          price: '69 900 ₸',
          summary: 'Сайт с каталогом и удобным оформлением заказа.',
          features: ['Индивидуальный дизайн', 'Каталог и категории до 100 позиций', 'Корзина и оформление заказа', 'Акции, контакты и соцсети', 'Базовая аналитика и SEO'],
        },
        {
          name: 'BUSINESS PRO',
          audience: 'Для бизнеса, которому важно управлять процессом.',
          price: '129 900 ₸',
          summary: 'Всё из BUSINESS плюс инструменты управления.',
          features: ['Админ-панель для товаров и цен', 'Просмотр и статусы заказов', 'Управление категориями и контентом', 'Акции и объявления', 'Базовая аналитика продаж'],
        },
      ],
    },
    extras: {
      eyebrow: '03 / ВОЗМОЖНОСТИ',
      title: 'Добавляйте только то, что нужно вашему бизнесу',
      description: 'Сайт может расти вместе с вами: от первой заявки до автоматизации продаж.',
      items: [
        ['WhatsApp Automation', 'Автоответы, меню, передача оператору и сценарии заказов.', 'от 29 900 ₸'],
        ['Онлайн-оплата', 'Приём платежей и связь оплаты с заказом.', 'от 25 000 ₸'],
        ['Русский + Қазақша', 'Вторая языковая версия сайта.', 'от 15 000 ₸'],
        ['Loyalty', 'Промокоды, акции и предложения для повторных покупок.', 'от 29 900 ₸'],
        ['Web App / PWA', 'Ваш сайт как приложение на телефоне.', 'от 49 900 ₸'],
        ['Android + iOS', 'Мобильное приложение с общей системой данных.', 'от 99 900 ₸'],
      ],
      more: [['Админ-панель отдельно', 'от 59 900 ₸'], ['Подключение CRM', 'от 30 000 ₸'], ['Расширенная аналитика', 'от 15 000 ₸'], ['+100 товаров', 'от 10 000 ₸']],
      note: 'Наполнение 100 товаров с обработкой материалов — от 20 000 ₸. Аккаунты Apple Developer и Google Play клиент оплачивает отдельно. Сложные интеграции рассчитываются индивидуально.',
    },
    process: {
      eyebrow: '04 / ПРОЦЕСС',
      title: 'От идеи до запуска — без сложных слов',
      steps: [
        ['01', 'Разговор', 'Узнаём, кто ваши клиенты и какое действие должен сделать посетитель.'],
        ['02', 'Структура', 'Собираем понятный путь: предложение, выбор, доверие, заявка.'],
        ['03', 'Разработка', 'Создаём дизайн и функциональность, показываем промежуточный результат.'],
        ['04', 'Запуск', 'Проверяем телефон и компьютер, подключаем аналитику и передаём проект.'],
      ],
    },
    care: {
      eyebrow: '05 / ПОСЛЕ ЗАПУСКА',
      title: 'Сайт живёт дальше. Мы остаёмся рядом.',
      monthly: '/ месяц',
      plans: [
        ['CARE', '9 900 ₸', 'Мониторинг, резервные копии, мелкие исправления и до 10 обновлений товаров или контента в месяц.'],
        ['CARE+', '24 900 ₸', 'Всё из CARE, до 30 обновлений, приоритетная поддержка, аналитика и ежемесячный отчёт.'],
      ],
      appNote: 'После сдачи проекта исправляем обнаруженные ошибки. Для регулярных обновлений выберите подходящий формат поддержки.',
    },
    faq: {
      eyebrow: 'ВОПРОСЫ',
      title: 'Коротко о важном',
      items: [
        ['Что входит в цену?', 'Состав выбранного пакета фиксируем до начала работы. Адаптив для телефона, HTTPS, контакты, кнопка связи и базовая SEO-разметка включены в каждый сайт.'],
        ['Можно начать с MINI и вырасти до PRO?', 'Да. Сначала запускаем нужный минимум, затем добавляем каталог, заказы, админ-панель и автоматизацию.'],
        ['Сколько длится разработка?', 'Срок зависит от материалов и функций. После короткого брифа назовём реалистичный план и этапы.'],
        ['Вы помогаете после запуска?', 'Да. Исправляем ошибки после сдачи и предлагаем CARE или CARE+ для регулярных обновлений.'],
      ],
    },
    contact: {
      eyebrow: 'ЕСТЬ ИДЕЯ?',
      title: 'Превратим её в работающий цифровой продукт.',
      description: 'Расскажите о бизнесе и задаче. Подскажем, с чего лучше начать, и предложим понятный объём работ.',
      cta: 'Обсудить в WhatsApp',
      secondary: 'Посмотреть тарифы',
      prompt: 'Здравствуйте! Хочу обсудить цифровой проект для моего бизнеса.',
      planPrompt: 'Здравствуйте! Интересует пакет ',
    },
    footer: 'Цифровые решения для вашего бизнеса',
    menu: 'Открыть меню',
    close: 'Закрыть меню',
    scroll: 'Листайте ниже',
  },
  kk: {
    nav: ['Шешімдер', 'Жұмыс барысы', 'Тарифтер', 'Қосымша', 'Байланыс'],
    hero: {
      lines: ['Заманауи', 'цифрлық', 'шешімдер'],
      accent: ['сіздің', 'бизнесіңізге'],
      description: 'Біз клиент тартып, бизнесіңіздің өсуіне көмектесетін сайттар, автоматтандыру және мобильді қосымшалар жасаймыз.',
      cta: 'Жобаны бастау',
      result: 'Нақты нәтижеге арналған нақты шешімдер',
      proof: '100+ риза клиент',
      strap: 'СІЗДІҢ БИЗНЕС · КӨБІРЕК КЛИЕНТ · КӨБІРЕК МҮМКІНДІК',
    },
    services: [
      ['Сайттар', 'Лендингтен интернет-дүкенге дейін'],
      ['Автоматтандыру', 'WhatsApp, тапсырыс, CRM және аналитика'],
      ['Мобильді қосымшалар', 'Android және iOS'],
      ['Қолдау', 'Іске қосылғаннан кейін де қасыңыздамыз'],
    ],
    intro: {
      eyebrow: '01 / ЦИФРЛЫҚ ЖҮЙЕ',
      title: 'Жай сайт емес. Бизнеске жұмыс істейтін жүйе.',
      description: 'Клиентке сатып алуға, сізге басқаруға қажет құралдарды біріктіреміз. Бір шешімнен бастап, бизнес өскен сайын кеңейтіңіз.',
      steps: [
        ['Тарту', 'Айқын ұсыныс пен әсерлі алғашқы экран.'],
        ['Көрсету', 'Ыңғайлы каталог, қызметтер және бағалар.'],
        ['Тапсырыс алу', 'Себет, өтінім, WhatsApp немесе онлайн-төлем.'],
        ['Басқару', 'Тапсырыстар, тауарлар мен деректер бір жүйеде.'],
      ],
    },
    example: {
      eyebrow: 'ИНТЕРФЕЙС ҮЛГІСІ',
      title: 'Технологияны емес, өнімді көрсетеміз.',
      description: 'Әр бизнестің клиент жолы бөлек. Дизайн керегін табуға, тауар таңдауға және өтінім қалдыруға көмектеседі.',
      caption: 'Десерт брендіне арналған лендинг',
    },
    pricing: {
      eyebrow: '02 / ПАКЕТТЕР',
      title: 'Бастапқы шешімді таңдаңыз',
      description: 'Үш түсінікті пакет. Нақты көлемі мен бағасын қысқа талқылаудан кейін бекітеміз.',
      popular: 'Ең танымал',
      from: 'бастап',
      choose: 'Жобаны талқылау',
      included: 'Әр сайтта: бейімделген дизайн, HTTPS, байланыс, WhatsApp және негізгі SEO белгілеуі.',
      plans: [
        { name: 'MINI', audience: 'Мамандарға, шеберлерге және шағын бизнеске.', price: '29 900 ₸', summary: 'Ұсынысыңызды түсіндіріп, клиентті байланысқа жетелейтін бір бет.', features: ['Жеке бір беттік дизайн', 'Қызметтер немесе 6 позицияға дейінгі шағын каталог', 'Байланыс батырмалары мен карта', 'QR-код және доменді қосу', 'Бейімдеу және негізгі SEO'] },
        { name: 'BUSINESS', audience: 'Дүкендерге, кафелерге, салондар мен сервистерге.', price: '69 900 ₸', summary: 'Каталогы және ыңғайлы тапсырыс рәсімдеуі бар сайт.', features: ['Жеке дизайн', '100 позицияға дейінгі каталог', 'Себет және тапсырыс рәсімдеу', 'Акциялар, байланыс және әлеуметтік желілер', 'Негізгі аналитика және SEO'] },
        { name: 'BUSINESS PRO', audience: 'Үдерісті басқарғысы келетін бизнеске.', price: '129 900 ₸', summary: 'BUSINESS ішіндегінің бәрі және басқару құралдары.', features: ['Тауар мен бағаға арналған әкімші панелі', 'Тапсырыстар мен мәртебелер', 'Санаттар мен мазмұнды басқару', 'Акциялар мен хабарландырулар', 'Сатудың негізгі аналитикасы'] },
      ],
    },
    extras: {
      eyebrow: '03 / МҮМКІНДІКТЕР',
      title: 'Бизнесіңізге қажет мүмкіндікті қосыңыз',
      description: 'Сайт сізбен бірге өседі: алғашқы өтінімнен сатуды автоматтандыруға дейін.',
      items: [
        ['WhatsApp Automation', 'Автожауаптар, мәзір, операторға беру және тапсырыс сценарийлері.', '29 900 ₸ бастап'],
        ['Онлайн-төлем', 'Төлем қабылдау және оны тапсырыспен байланыстыру.', '25 000 ₸ бастап'],
        ['Русский + Қазақша', 'Сайттың екінші тілдегі нұсқасы.', '15 000 ₸ бастап'],
        ['Loyalty', 'Қайта сатып алуға арналған промокодтар мен акциялар.', '29 900 ₸ бастап'],
        ['Web App / PWA', 'Сайтыңыз телефондағы қосымша ретінде.', '49 900 ₸ бастап'],
        ['Android + iOS', 'Ортақ деректер жүйесі бар мобильді қосымша.', '99 900 ₸ бастап'],
      ],
      more: [['Әкімші панелі бөлек', '59 900 ₸ бастап'], ['CRM қосу', '30 000 ₸ бастап'], ['Кеңейтілген аналитика', '15 000 ₸ бастап'], ['+100 тауар', '10 000 ₸ бастап']],
      note: '100 тауарды материалдарын өңдеп енгізу — 20 000 ₸ бастап. Apple Developer және Google Play аккаунттарын клиент бөлек төлейді. Күрделі интеграциялар жеке есептеледі.',
    },
    process: {
      eyebrow: '04 / ЖҰМЫС БАРЫСЫ',
      title: 'Идеядан іске қосуға дейін — түсінікті жол',
      steps: [
        ['01', 'Әңгіме', 'Клиенттеріңізді және келушінің не істеуі керегін анықтаймыз.'],
        ['02', 'Құрылым', 'Ұсыныс, таңдау, сенім және өтінім жолын құрамыз.'],
        ['03', 'Әзірлеу', 'Дизайн мен функцияларды жасап, нәтижені көрсетеміз.'],
        ['04', 'Іске қосу', 'Телефон мен компьютерді тексеріп, аналитиканы қосамыз.'],
      ],
    },
    care: {
      eyebrow: '05 / ІСКЕ ҚОСҚАННАН КЕЙІН',
      title: 'Сайт жұмысын жалғастырады. Біз жаныңыздамыз.',
      monthly: '/ ай',
      plans: [
        ['CARE', '9 900 ₸', 'Мониторинг, сақтық көшірме, шағын түзетулер және айына 10 мазмұн жаңартуы.'],
        ['CARE+', '24 900 ₸', 'CARE ішіндегінің бәрі, 30 жаңарту, басым қолдау, аналитика және айлық есеп.'],
      ],
      appNote: 'Жобаны тапсырғаннан кейін табылған қателерді түзетеміз. Тұрақты жаңартулар үшін ыңғайлы қолдау түрін таңдаңыз.',
    },
    faq: {
      eyebrow: 'СҰРАҚТАР',
      title: 'Маңыздысы қысқаша',
      items: [
        ['Бағаға не кіреді?', 'Пакет құрамын жұмыс басталғанға дейін бекітеміз. Бейімдеу, HTTPS, байланыс және негізгі SEO әр сайтта бар.'],
        ['MINI-ден PRO-ға өтуге бола ма?', 'Иә. Алдымен керегін іске қосып, кейін каталог, тапсырыс және автоматтандыру қосамыз.'],
        ['Әзірлеу қанша уақыт алады?', 'Мерзім материалдар мен функцияларға байланысты. Қысқа талқылаудан кейін нақты жоспар ұсынамыз.'],
        ['Іске қосқаннан кейін көмектесесіз бе?', 'Иә. Қателерді түзетіп, тұрақты жаңартуға CARE және CARE+ ұсынамыз.'],
      ],
    },
    contact: {
      eyebrow: 'ИДЕЯҢЫЗ БАР МА?',
      title: 'Оны жұмыс істейтін цифрлық өнімге айналдырайық.',
      description: 'Бизнесіңіз бен мақсатыңызды айтыңыз. Қайдан бастау керегін және жұмыс көлемін ұсынамыз.',
      cta: 'WhatsApp-та талқылау',
      secondary: 'Тарифтерді қарау',
      prompt: 'Сәлеметсіз бе! Бизнесім үшін цифрлық жобаны талқылағым келеді.',
      planPrompt: 'Сәлеметсіз бе! Мені қызықтыратын пакет: ',
    },
    footer: 'Бизнесіңізге арналған цифрлық шешімдер',
    menu: 'Мәзірді ашу',
    close: 'Мәзірді жабу',
    scroll: 'Төмен қараңыз',
  },
  en: {
    nav: ['Solutions', 'Process', 'Pricing', 'Add-ons', 'Contact'],
    hero: {
      lines: ['Modern', 'digital', 'solutions'],
      accent: ['for your', 'business'],
      description: 'We create websites, automation and mobile apps that attract customers and help your business grow.',
      cta: 'Start a project',
      result: 'Real solutions for real results',
      proof: '100+ happy clients',
      strap: 'YOUR BUSINESS · MORE CUSTOMERS · MORE POSSIBILITIES',
    },
    services: [
      ['Websites', 'From landing pages to online stores'],
      ['Automation', 'WhatsApp, orders, CRM and analytics'],
      ['Mobile apps', 'Android and iOS'],
      ['Support', 'Here for you after launch'],
    ],
    intro: {
      eyebrow: '01 / DIGITAL SYSTEM',
      title: 'More than a website. A system that works for your business.',
      description: 'We connect what customers need to buy with what you need to manage. Start small and expand as you grow.',
      steps: [
        ['Attract', 'A strong first impression and a clear offer.'],
        ['Present', 'Services, products and prices in a simple catalog.'],
        ['Take orders', 'Cart, form, WhatsApp or online payment.'],
        ['Manage', 'Orders, products and data in one system.'],
      ],
    },
    example: {
      eyebrow: 'INTERFACE EXAMPLE',
      title: 'We present the product, not a list of technologies.',
      description: 'Every business has a different customer journey. Design helps people find, choose and enquire.',
      caption: 'Landing page for a dessert brand',
    },
    pricing: {
      eyebrow: '02 / PACKAGES',
      title: 'Choose where to start',
      description: 'Three clear packages. We confirm the exact scope and price after a short conversation.',
      popular: 'Most popular',
      from: 'from',
      choose: 'Discuss a project',
      included: 'Every website includes responsive design, HTTPS, contacts, WhatsApp and basic SEO markup.',
      plans: [
        { name: 'MINI', audience: 'For experts, makers and small businesses.', price: '29 900 ₸', summary: 'One effective page that explains your offer and drives enquiries.', features: ['Custom one-page presentation', 'Services or mini catalog with up to 6 items', 'Contact buttons and map', 'QR code and domain setup', 'Responsive design and basic SEO'] },
        { name: 'BUSINESS', audience: 'For stores, cafés, salons and services.', price: '69 900 ₸', summary: 'A website with a catalog and simple ordering.', features: ['Custom design', 'Catalog and categories up to 100 items', 'Cart and checkout', 'Promotions, contacts and social links', 'Basic analytics and SEO'] },
        { name: 'BUSINESS PRO', audience: 'For businesses ready to manage the process.', price: '129 900 ₸', summary: 'Everything in BUSINESS plus management tools.', features: ['Admin panel for products and prices', 'Order view and statuses', 'Categories and content management', 'Promotions and announcements', 'Basic sales analytics'] },
      ],
    },
    extras: {
      eyebrow: '03 / CAPABILITIES',
      title: 'Add what your business actually needs',
      description: 'Your website can grow with you, from the first enquiry to automated sales.',
      items: [
        ['WhatsApp Automation', 'Auto replies, menu, operator handoff and order flows.', 'from 29 900 ₸'],
        ['Online payments', 'Accept payments and connect them to orders.', 'from 25 000 ₸'],
        ['Русский + Қазақша', 'A second language version of your website.', 'from 15 000 ₸'],
        ['Loyalty', 'Promos and offers for repeat purchases.', 'from 29 900 ₸'],
        ['Web App / PWA', 'Your website as a phone app.', 'from 49 900 ₸'],
        ['Android + iOS', 'A mobile app with shared business data.', 'from 99 900 ₸'],
      ],
      more: [['Separate admin panel', 'from 59 900 ₸'], ['CRM integration', 'from 30 000 ₸'], ['Advanced analytics', 'from 15 000 ₸'], ['+100 products', 'from 10 000 ₸']],
      note: 'Entering 100 products with material processing starts at 20 000 ₸. Apple Developer and Google Play accounts are paid for separately by the client. Complex integrations are quoted individually.',
    },
    process: {
      eyebrow: '04 / PROCESS',
      title: 'From idea to launch, clearly',
      steps: [
        ['01', 'Conversation', 'We learn who your customers are and what visitors should do.'],
        ['02', 'Structure', 'We map the path from offer and choice to trust and enquiry.'],
        ['03', 'Build', 'We develop the design and features, and share progress.'],
        ['04', 'Launch', 'We check mobile and desktop, set up analytics and hand over.'],
      ],
    },
    care: {
      eyebrow: '05 / AFTER LAUNCH',
      title: 'Your site keeps working. We stay close.',
      monthly: '/ month',
      plans: [
        ['CARE', '9 900 ₸', 'Monitoring, backups, small fixes and up to 10 content updates per month.'],
        ['CARE+', '24 900 ₸', 'Everything in CARE, up to 30 updates, priority support, analytics and a monthly report.'],
      ],
      appNote: 'We fix issues found after handover. Choose a care plan for regular updates and ongoing support.',
    },
    faq: {
      eyebrow: 'QUESTIONS',
      title: 'The essentials',
      items: [
        ['What does the price include?', 'We confirm the scope before work begins. Responsive design, HTTPS, contacts and basic SEO are included in every site.'],
        ['Can I grow from MINI to PRO?', 'Yes. We launch the essentials first, then add a catalog, orders, admin tools and automation.'],
        ['How long does it take?', 'Timing depends on materials and features. After a short brief, we share a realistic plan.'],
        ['Do you help after launch?', 'Yes. We fix post-launch issues and offer CARE or CARE+ for regular updates.'],
      ],
    },
    contact: {
      eyebrow: 'HAVE AN IDEA?',
      title: 'Let’s turn it into a digital product that works.',
      description: 'Tell us about your business and goal. We will suggest a sensible starting point and scope.',
      cta: 'Talk on WhatsApp',
      secondary: 'See pricing',
      prompt: 'Hello! I would like to discuss a digital project for my business.',
      planPrompt: 'Hello! I am interested in the ',
    },
    footer: 'Digital solutions for your business',
    menu: 'Open menu',
    close: 'Close menu',
    scroll: 'Scroll to explore',
  },
}

const extraIcons = [MessageCircle, CreditCard, Globe2, Sparkles, Smartphone, Layers3]
const sectionIds = ['solutions', 'process', 'pricing', 'extras', 'contact']

function Brand({ light = false }) {
  return (
    <a className={'brand' + (light ? ' brand-light' : '')} href="#top" aria-label="NEXERA — home">
      <span className="brand-name">NE<span className="brand-x">X</span>ERA</span>
      <span className="brand-tagline">DIGITAL SOLUTIONS</span>
    </a>
  )
}

function SectionHead({ eyebrow, title, description, light = false }) {
  return (
    <div className={'section-head' + (light ? ' section-head-light' : '')}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ContactLink({ children, message, className = '', icon = true }) {
  return (
    <a className={className} href={waLink(message)} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>{icon && <ArrowUpRight size={19} strokeWidth={2.1} aria-hidden="true" />}
    </a>
  )
}

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('nexera-language') || 'ru'
    } catch {
      return 'ru'
    }
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language] || copy.ru

  useEffect(() => {
    document.documentElement.lang = language === 'kk' ? 'kk' : language
    document.title = language === 'ru'
      ? 'NEXERA — цифровые решения для бизнеса'
      : language === 'kk'
        ? 'NEXERA — бизнеске арналған цифрлық шешімдер'
        : 'NEXERA — digital solutions for business'
    try { localStorage.setItem('nexera-language', language) } catch { /* storage may be unavailable */ }
  }, [language])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const projectMessage = t.contact.prompt
  const choosePlan = (planName) => t.contact.planPrompt + planName + '.'

  return (
    <div className="site" id="top">
      <Hero t={t} language={language} />
      <QuickNav language={language} setLanguage={setLanguage} nav={t.nav} />

      <main>
        <section className="section solutions-section" id="solutions">
          <div className="container">
            <SectionHead eyebrow={t.intro.eyebrow} title={t.intro.title} description={t.intro.description} />
            <div className="system-line" aria-label={t.intro.title}>
              {t.intro.steps.map(([title, description], index) => (
                <div className="system-step" key={title}>
                  <span className="system-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {index < 3 && <ArrowRight className="system-arrow" size={21} aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section example-section">
          <div className="container example-grid">
            <div className="example-copy">
              <SectionHead eyebrow={t.example.eyebrow} title={t.example.title} description={t.example.description} light />
              <a href="#pricing" className="text-link">{t.contact.secondary}<ArrowUpRight size={19} /></a>
            </div>
            <div className="example-preview">
              <div className="example-window"><span /><span /><span /></div>
              <img src="/work2.webp" alt={t.example.caption} loading="lazy" width="1024" height="512" />
              <span className="example-caption"><ShoppingBag size={18} />{t.example.caption}</span>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <SectionHead eyebrow={t.pricing.eyebrow} title={t.pricing.title} description={t.pricing.description} />
            <div className="pricing-grid">
              {t.pricing.plans.map((plan, index) => (
                <article className={'plan-card' + (index === 1 ? ' plan-featured' : '')} key={plan.name}>
                  {index === 1 && <span className="plan-badge"><Sparkles size={15} />{t.pricing.popular}</span>}
                  <div className="plan-top">
                    <span className="plan-index">0{index + 1} / 03</span>
                    <h3>{plan.name}</h3>
                    <p className="plan-audience">{plan.audience}</p>
                    <div className="plan-price">{index === 2 && <small>{t.pricing.from}</small>}{plan.price}</div>
                    <p className="plan-summary">{plan.summary}</p>
                  </div>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={17} strokeWidth={2.5} aria-hidden="true" />{feature}</li>)}</ul>
                  <ContactLink message={choosePlan(plan.name)} className={'plan-button' + (index === 1 ? ' plan-button-featured' : '')}>{t.pricing.choose}</ContactLink>
                </article>
              ))}
            </div>
            <p className="pricing-note"><ShieldCheck size={19} aria-hidden="true" />{t.pricing.included}</p>
          </div>
        </section>

        <section className="section extras-section" id="extras">
          <div className="container">
            <SectionHead eyebrow={t.extras.eyebrow} title={t.extras.title} description={t.extras.description} light />
            <div className="extras-grid">
              {t.extras.items.map(([title, description, price], index) => {
                const Icon = extraIcons[index]
                return (
                  <article className="extra-card" key={title}>
                    <span className="extra-icon"><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <strong>{price}</strong>
                  </article>
                )
              })}
            </div>
            <div className="extras-detail-list">
              {t.extras.more.map(([name, price]) => <div key={name}><span>{name}</span><strong>{price}</strong></div>)}
            </div>
            <p className="extras-note">{t.extras.note}</p>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />
            <div className="process-grid">
              {t.process.steps.map(([number, title, description]) => (
                <div className="process-step" key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section care-section" id="care">
          <div className="container care-grid">
            <div className="care-heading">
              <SectionHead eyebrow={t.care.eyebrow} title={t.care.title} light />
              <p>{t.care.appNote}</p>
            </div>
            <div className="care-cards">
              {t.care.plans.map(([name, price, description]) => (
                <article className="care-card" key={name}>
                  <span>{name}</span>
                  <h3>{price}<small>{t.care.monthly}</small></h3>
                  <p>{description}</p>
                  <ContactLink message={choosePlan(name)} className="care-link">{t.pricing.choose}</ContactLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
            <div className="faq-list">
              {t.faq.items.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<ChevronDown size={22} aria-hidden="true" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.description}</p>
            <div className="contact-actions">
              <ContactLink message={projectMessage} className="contact-button"><MessageCircle size={21} />{t.contact.cta}</ContactLink>
              <a href="#pricing" className="contact-secondary">{t.contact.secondary}<ArrowRight size={18} /></a>
            </div>
            <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
            <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div><Brand light /><p>{t.footer}</p></div>
          <div className="footer-links">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"><Camera size={18} />Instagram</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp</a>
            <a href={'tel:' + SITE.phone}>{SITE.phoneDisplay}</a>
          </div>
        </div>
        <div className="container footer-tools">
          <div className="language-switch" aria-label="Language">
            {['ru', 'kk', 'en'].map((code) => (
              <button key={code} type="button" className={language === code ? 'active' : ''} onClick={() => setLanguage(code)} aria-pressed={language === code}>
                {code === 'kk' ? 'KZ' : code.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="menu-button" type="button" aria-label={menuOpen ? t.close : t.menu} aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          {menuOpen && (
            <nav className="site-menu" id="site-menu" aria-label="Main navigation">
              {t.nav.map((item, index) => <a href={'#' + sectionIds[index]} key={item} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={17} /></a>)}
            </nav>
          )}
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} NEXERA</span><span>New Experience Era</span></div>
      </footer>
    </div>
  )
}

export default App
