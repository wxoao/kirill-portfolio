import type { LocalizedText } from './i18n';

export const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const services = [
  { name: 'WEB & B2B SERVICES', description: { ru: 'Разработка веб-сайтов, B2B-сервисов и сложных цифровых платформ под задачи бизнеса.', en: 'Custom websites, B2B platforms, and digital services built for business growth.' } },
  { name: 'GAME DEV & INTERACTIVE 3D', description: { ru: 'Создание 2D/3D игр для WebGL, браузерных площадок и мобильных устройств.', en: '2D/3D game development for WebGL, browsers, and mobile platforms.' } },
  { name: 'TELEGRAM BOTS & AUTOMATION', description: { ru: 'Разработка ботов, автоматизированных систем, парсеров и скриптов взаимодействия.', en: 'High-load Telegram bots, custom scrapers, and workflow automation scripts.' } },
  { name: 'UI/UX & PRODUCT DESIGN', description: { ru: 'Проектирование понятных интерфейсов и визуального стиля, удерживающего пользователей.', en: 'User-centric UI/UX design and visual identities built for high engagement.' } },
  { name: 'FULL-CYCLE PRODUCT MANAGEMENT', description: { ru: 'Полный цикл: от идеи и архитектуры до быстрой сборки MVP, тестов и вывода в продакшн.', en: 'End-to-end management: from raw concept to rapid MVP launch and deployment.' } },
];

const image = (filename: string) => `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${filename}&w=1280&q=85`;

const projectImageSets: string[][] = [
  [
    image('hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png'),
    image('hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png'),
    image('hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png'),
  ],
  [
    image('hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png'),
    image('hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png'),
    image('hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png'),
  ],
  [
    image('hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png'),
    image('hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png'),
    image('hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png'),
  ],
];

export interface Project {
  id: string;
  name: LocalizedText;
  category: string;
  summary: LocalizedText;
  description: LocalizedText;
  stack: string;
  images: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'iphone-clicker',
    name: { ru: 'Айфон Кликер: Симулятор Перекупа', en: 'iPhone Clicker: Reseller Simulator' },
    category: 'WebGL Game / Yandex Games',
    summary: { ru: 'Популярная экономическая игра-кликер с баттл-пассом, Trade-In и активными обновлениями.', en: 'Popular economic clicker game featuring Battle Pass, Trade-In system, and active updates.' },
    description: { ru: 'Продуктовая HTML5-игра для платформы Яндекс Игры. Игрок проходит путь от покупки первых моделей до масштабного бизнеса: прогрессия моделей iPhone, система пассивного дохода, сервис-центр, Trade-In механика, Battle Pass, реклама и внутриигровые покупки. Проект постоянно поддерживается, развиваются новые фичи и масштабируется база игроков.', en: 'A featured HTML5 game on Yandex Games. Players build an iPhone reselling empire with model progression, passive income streams, repair shop, Trade-In mechanics, Battle Pass, and in-game monetization. The project is actively maintained, updated with new content, and scaling continuous player retention.' },
    stack: 'HTML5, CSS3, JavaScript (ES Modules), Web Audio API, Yandex Games SDK.',
    images: projectImageSets[0],
  },
  {
    id: 'school-horror',
    name: { ru: '3D Хоррор: Заброшенная Школа', en: '3D Horror: School Night Shift' },
    category: '3D WebGL Game / Unity 6',
    summary: { ru: 'Атмосферный 3D-хоррор от первого лица с сюжетом, 10 миссиями и 3 концовками.', en: 'Atmospheric first-person 3D horror game with narrative, 10 missions, and 3 endings.' },
    description: { ru: 'Сюжетный 3D-хоррор от первого лица для ПК и мобильных устройств под платформу WebGL / Яндекс Игры. Игрок исследует заброшенную школу и выполняет поручения охранника Васи. Реализовано 10 сюжетных миссий, инвентарь, интерактивные предметы, система оружия, враги с AI, облачные сохранения и 3 финальные концовки.', en: 'First-person story-driven 3D horror game built for PC & Mobile WebGL (Yandex Games). Players explore an abandoned school completing 10 narrative quests for guard Vasya. Features item inventory, weapons, AI enemies, cloud saves, and 3 distinct storyline endings.' },
    stack: 'Unity 6.3 LTS (URP 17.3), C#, PluginYG2 SDK, WebGL.',
    images: projectImageSets[1],
  },
  {
    id: 'wxoao-browser',
    name: { ru: 'wxoaoBrowser — Браузер для Apple Watch', en: 'wxoaoBrowser — Apple Watch Browser' },
    category: 'watchOS App / Swift',
    summary: { ru: 'Полноценный и быстрый автономный веб-браузер для смарт-часов Apple Watch.', en: 'Native, standalone full-featured web browser designed for Apple Watch.' },
    description: { ru: 'Нативное мобильное приложение под watchOS, позволяющее с комфортом серфить интернет прямо с экрана Apple Watch. Специально адаптированный UI/UX под компактный дисплей, оптимизированная загрузка страниц и управление вкладками.', en: 'Native watchOS app enabling full web browsing functionality directly on Apple Watch screens. Features UI/UX tailored for compact displays, fast page rendering, and seamless interaction.' },
    stack: 'Swift, SwiftUI, WebKit, watchOS SDK.',
    images: projectImageSets[2],
  },
  {
    id: 'cute-cats-merge',
    name: { ru: 'Слияние Милых Котиков', en: 'Cute Cats Merge' },
    category: 'HTML5 Casual / Yandex Games',
    summary: { ru: 'Головоломка с реалистичной физикой столкновений и коллекцией из 35 котиков.', en: 'Physics-based merge puzzle game featuring 35 collectible unique cats.' },
    description: { ru: 'Казуальная HTML5-игра с механиками Suika и физическим движком Matter.js. Цепочка эволюции из 35 уникальных котов, динамический спавн, галерея коллекций, магазин фонов и кастомизация, таблицы лидеров и облачная синхронизация.', en: 'Casual HTML5 puzzle game powered by Matter.js physics. Includes a 35-cat evolution chain, collection gallery, background store, leaderboard integration, and cloud state saves via Yandex Games SDK.' },
    stack: 'HTML5, JavaScript, Matter.js, Web Audio API, Yandex Games SDK.',
    images: projectImageSets[0],
  },
  {
    id: 'stranger-things-cinema',
    name: { ru: 'ОСД Кинотеатр — Telegram Mini App', en: 'Stranger Things Telegram Cinema' },
    category: 'Telegram Mini App / Viral Product',
    summary: { ru: 'Виральный Telegram-сервис с 6 000+ пользователей, привлеченных без бюджета на рекламу.', en: 'Viral Telegram Mini App that reached 6,000+ organic users with zero ad spend.' },
    description: { ru: 'Специализированный онлайн-кинотеатр внутри Telegram с каталогом серий, адаптивным видеоплеером и таймером обратного отсчета до премьер. Проект показал взрывной органический рост, собрав аудиторию в 6 000+ человек благодаря продуманному UX и шерингу.', en: 'Feature-rich online cinema built inside Telegram Web Apps framework. Includes structured season catalog, integrated video player, and countdown timers. Achieved viral organic growth reaching 6,000+ users without advertising expenditure.' },
    stack: 'Telegram Web Apps API, JavaScript, Node.js, Express, Nginx.',
    images: projectImageSets[1],
  },
  {
    id: 'max-movie-universe',
    name: { ru: 'MAX Кино — Витрина Фильмов', en: 'MAX Movie Universe' },
    category: 'Mini App / Web Service',
    summary: { ru: 'Агрегатор кино с автоматическим обновлением каталога через Kinopoisk API.', en: 'Automated movie discovery platform powered by Kinopoisk API integration.' },
    description: { ru: 'Веб-сервис и Mini App на платформе MAX для удобного поиска и выбора фильмов. Автоматический парсинг метаданных, фильтрация по жанрам, годам и рейтингу, система кэширования и ссылки на легальные онлайн-кинотеатры.', en: 'Mini App and web showcase for movie streaming on the MAX platform. Features automated metadata indexing via API, dynamic filtering, caching, and direct routing to official streaming services.' },
    stack: 'Node.js, Express, SQLite, MAX Bridge API, PM2, Nginx.',
    images: projectImageSets[2],
  },
];
