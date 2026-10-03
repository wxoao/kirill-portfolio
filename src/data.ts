import type { LocalizedText } from './i18n';

const image = (filename: string) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`;

export const marqueeImages = [
  "3dgameschool — 2026-10-03 в 18.13.03.png",
  "3dgameschool — 2026-10-03 в 18.13.31.png",
  "3dgameschool — 2026-10-03 в 18.15.01.png",
  "3dgameschool — 2026-10-03 в 18.16.38.png",
  "3dgameschool — 2026-10-03 в 18.17.45.png",
  "3dgameschool — 2026-10-03 в 18.19.17.png",
  "3dgameschool — 2026-10-03 в 18.19.58.png",
  "3dgameschool — 2026-10-03 в 18.20.27.png",
  "3dgameschool — 2026-10-03 в 18.23.40.png",
  "3dgameschool — 2026-10-03 в 18.24.46.png",
  "3dgameschool — 2026-10-03 в 18.27.57.png",
  "3dgameschool — 2026-10-03 в 18.29.38.png",
  "3dgameschool — 2026-10-03 в 18.30.25.png",
  "3dgameschool — 2026-10-03 в 18.31.07.png",
  "3dgameschool — 2026-10-03 в 18.31.44.png",
  "3dgameschool — 2026-10-03 в 18.33.16.png",
  "3dgameschool — 2026-10-03 в 18.37.03.png",
  "3dgameschool — 2026-10-03 в 18.38.30.png",
  "3dgameschool — 2026-10-03 в 18.38.54.png",
  "3dgameschool — 2026-10-03 в 18.40.50.png",
  "3dgameschool — 2026-10-03 в 18.43.04.png",
  "icliker1.jpg",
  "icliker10.png",
  "icliker11.png",
  "icliker12.png",
  "icliker13.png",
  "icliker14.png",
  "icliker15.png",
  "icliker16.png",
  "icliker17.png",
  "icliker19.png",
  "icliker2.jpg",
  "icliker20.jpg",
  "icliker3.png",
  "icliker4.png",
  "icliker5.png",
  "icliker6.png",
  "icliker7.png",
  "icliker9.png",
  "kotiki1.jpg",
  "kotiki3.png",
  "kotiki4.png",
  "kotiki5.png",
  "kotiki6.png",
  "kotiki7.png",
  "maxkino1.png",
  "maxkino7.png"
].map(image);

export const services = [
  { name: 'WEB & B2B SERVICES', description: { ru: 'Разработка веб-сайтов, B2B-сервисов и сложных цифровых платформ под задачи бизнеса.', en: 'Custom websites, B2B platforms, and digital services built for business growth.' } },
  { name: 'GAME DEV & INTERACTIVE 3D', description: { ru: 'Создание 2D/3D игр для WebGL, браузерных площадок и мобильных устройств.', en: '2D/3D game development for WebGL, browsers, and mobile platforms.' } },
  { name: 'TELEGRAM BOTS & AUTOMATION', description: { ru: 'Разработка ботов, автоматизированных систем, парсеров и скриптов взаимодействия.', en: 'High-load Telegram bots, custom scrapers, and workflow automation scripts.' } },
  { name: 'UI/UX & PRODUCT DESIGN', description: { ru: 'Проектирование понятных интерфейсов и визуального стиля, удерживающего пользователей.', en: 'User-centric UI/UX design and visual identities built for high engagement.' } },
  { name: 'FULL-CYCLE PRODUCT MANAGEMENT', description: { ru: 'Полный цикл: от идеи и архитектуры до быстрой сборки MVP, тестов и вывода в продакшн.', en: 'End-to-end management: from raw concept to rapid MVP launch and deployment.' } },
];

const previewImageSets: string[][] = [
  [
    "icliker1.jpg",
    "icliker2.jpg",
    "icliker3.png",
    "icliker4.png",
    "icliker5.png"
  ],
  [
    "3dgameschool — 2026-10-03 в 18.24.46.png",
    "3dgameschool — 2026-10-03 в 18.27.57.png",
    "3dgameschool — 2026-10-03 в 18.30.25.png",
    "3dgameschool — 2026-10-03 в 18.31.07.png"
  ],
  [
    "browser1.png",
    "browser2.png",
    "browser3.png",
    "browser4.png"
  ],
  [
    "kotiki1.jpg",
    "kotiki3.png",
    "kotiki4.png",
    "kotiki5.png"
  ],
  [
    "osdkino1.jpg",
    "osdkino2.jpg",
    "osdkino3.jpg"
  ],
  [
    "maxkino1.png",
    "maxkino2.jpg",
    "maxkino3.jpg",
    "maxkino5.jpg"
  ]
].map(files => files.map(image));

const projectImageSets: string[][] = [
  [
    "icliker1.jpg",
    "icliker2.jpg",
    "icliker3.png",
    "icliker4.png",
    "icliker5.png",
    "icliker6.png",
    "icliker7.png",
    "icliker9.png",
    "icliker10.png",
    "icliker11.png",
    "icliker12.png",
    "icliker13.png",
    "icliker14.png",
    "icliker15.png",
    "icliker16.png",
    "icliker17.png",
    "icliker19.png",
    "icliker20.jpg"
  ],
  [
    "3dgameschool — 2026-10-03 в 18.24.46.png",
    "3dgameschool — 2026-10-03 в 18.13.03.png",
    "3dgameschool — 2026-10-03 в 18.13.31.png",
    "3dgameschool — 2026-10-03 в 18.15.01.png",
    "3dgameschool — 2026-10-03 в 18.16.38.png",
    "3dgameschool — 2026-10-03 в 18.17.45.png",
    "3dgameschool — 2026-10-03 в 18.19.17.png",
    "3dgameschool — 2026-10-03 в 18.19.58.png",
    "3dgameschool — 2026-10-03 в 18.20.27.png",
    "3dgameschool — 2026-10-03 в 18.23.40.png",
    "3dgameschool — 2026-10-03 в 18.27.57.png",
    "3dgameschool — 2026-10-03 в 18.29.38.png",
    "3dgameschool — 2026-10-03 в 18.30.25.png",
    "3dgameschool — 2026-10-03 в 18.31.07.png",
    "3dgameschool — 2026-10-03 в 18.31.44.png",
    "3dgameschool — 2026-10-03 в 18.33.16.png",
    "3dgameschool — 2026-10-03 в 18.37.03.png",
    "3dgameschool — 2026-10-03 в 18.38.30.png",
    "3dgameschool — 2026-10-03 в 18.38.54.png",
    "3dgameschool — 2026-10-03 в 18.40.50.png",
    "3dgameschool — 2026-10-03 в 18.43.04.png"
  ],
  [
    "browser1.png",
    "browser2.png",
    "browser3.png",
    "browser4.png"
  ],
  [
    "kotiki1.jpg",
    "kotiki3.png",
    "kotiki4.png",
    "kotiki5.png",
    "kotiki6.png",
    "kotiki7.png"
  ],
  [
    "osdkino1.jpg",
    "osdkino2.jpg",
    "osdkino3.jpg"
  ],
  [
    "maxkino1.png",
    "maxkino2.jpg",
    "maxkino3.jpg",
    "maxkino5.jpg",
    "maxkino6.jpg",
    "maxkino7.png"
  ]
].map(files => files.map(image));

export interface Project {
  id: string;
  name: LocalizedText;
  category: string;
  summary: LocalizedText;
  description: LocalizedText;
  stack: string;
  images: string[];
  previewImages: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'iphone-clicker',
    url: 'https://yandex.ru/games/app/545388?lang=ru',
    name: { ru: 'Айфон Кликер: Симулятор Перекупа', en: 'iPhone Clicker: Reseller Simulator' },
    category: 'WebGL Game / Yandex Games',
    summary: { ru: 'Популярная экономическая игра-кликер с баттл-пассом, Trade-In и активными обновлениями.', en: 'Popular economic clicker game featuring Battle Pass, Trade-In system, and active updates.' },
    description: { ru: 'Продуктовая HTML5-игра для платформы Яндекс Игры. Игрок проходит путь от покупки первых моделей до масштабного бизнеса: прогрессия моделей iPhone, система пассивного дохода, сервис-центр, Trade-In механика, Battle Pass, реклама и внутриигровые покупки. Проект постоянно поддерживается, развиваются новые фичи и масштабируется база игроков.', en: 'A featured HTML5 game on Yandex Games. Players build an iPhone reselling empire with model progression, passive income streams, repair shop, Trade-In mechanics, Battle Pass, and in-game monetization. The project is actively maintained, updated with new content, and scaling continuous player retention.' },
    stack: 'HTML5, CSS3, JavaScript (ES Modules), Web Audio API, Yandex Games SDK.',
    images: projectImageSets[0],
    previewImages: previewImageSets[0],
  },
  {
    id: 'school-horror',
    name: { ru: '3D Хоррор: Ночная смена в школе', en: '3D Horror: School Night Shift' },
    category: '3D WebGL Game / Unity 6',
    summary: { ru: 'Атмосферный 3D-хоррор от первого лица с сюжетом, 10 миссиями и 3 концовками.', en: 'Atmospheric first-person 3D horror game with narrative, 10 missions, and 3 endings.' },
    description: { ru: 'Сюжетный 3D-хоррор от первого лица для ПК и мобильных устройств под платформу WebGL / Яндекс Игры. Игрок исследует заброшенную школу и выполняет поручения охранника Васи. Реализовано 10 сюжетных миссий, инвентарь, интерактивные предметы, система оружия, враги с AI, облачные сохранения и 3 финальные концовки.', en: 'First-person story-driven 3D horror game built for PC & Mobile WebGL (Yandex Games). Players explore an abandoned school completing 10 narrative quests for guard Vasya. Features item inventory, weapons, AI enemies, cloud saves, and 3 distinct storyline endings.' },
    stack: 'Unity 6.3 LTS (URP 17.3), C#, PluginYG2 SDK, WebGL.',
    images: projectImageSets[1],
    previewImages: previewImageSets[1],
  },
  {
    id: 'wxoao-browser',
    name: { ru: 'wxoaoBrowser — Браузер для Apple Watch', en: 'wxoaoBrowser — Apple Watch Browser' },
    category: 'watchOS App / Swift',
    summary: { ru: 'Полноценный и быстрый автономный веб-браузер для смарт-часов Apple Watch.', en: 'Native, standalone full-featured web browser designed for Apple Watch.' },
    description: { ru: 'Нативное мобильное приложение под watchOS, позволяющее с комфортом серфить интернет прямо с экрана Apple Watch. Специально адаптированный UI/UX под компактный дисплей, оптимизированная загрузка страниц и управление вкладками.', en: 'Native watchOS app enabling full web browsing functionality directly on Apple Watch screens. Features UI/UX tailored for compact displays, fast page rendering, and seamless interaction.' },
    stack: 'Swift, SwiftUI, WebKit, watchOS SDK.',
    images: projectImageSets[2],
    previewImages: previewImageSets[2],
  },
  {
    id: 'cute-cats-merge',
    url: 'https://yandex.ru/games/app/sliianie-milykh-kotikov-547369?utm_source=app_page',
    name: { ru: 'Слияние Милых Котиков', en: 'Cute Cats Merge' },
    category: 'HTML5 Casual / Yandex Games',
    summary: { ru: 'Головоломка с реалистичной физикой столкновений и коллекцией из 35 котиков.', en: 'Physics-based merge puzzle game featuring 35 collectible unique cats.' },
    description: { ru: 'Казуальная HTML5-игра с механиками Suika и физическим движком Matter.js. Цепочка эволюции из 35 уникальных котов, динамический спавн, галерея коллекций, магазин фонов и кастомизация, таблицы лидеров и облачная синхронизация.', en: 'Casual HTML5 puzzle game powered by Matter.js physics. Includes a 35-cat evolution chain, collection gallery, background store, leaderboard integration, and cloud state saves via Yandex Games SDK.' },
    stack: 'HTML5, JavaScript, Matter.js, Web Audio API, Yandex Games SDK.',
    images: projectImageSets[3],
    previewImages: previewImageSets[3],
  },
  {
    id: 'stranger-things-cinema',
    name: { ru: 'ОСД Кинотеатр — Telegram Mini App', en: 'Stranger Things Telegram Cinema' },
    category: 'Telegram Mini App / Viral Product',
    summary: { ru: 'Виральный Telegram-сервис с 6 000+ пользователей, привлеченных без бюджета на рекламу.', en: 'Viral Telegram Mini App that reached 6,000+ organic users with zero ad spend.' },
    description: { ru: 'Специализированный онлайн-кинотеатр внутри Telegram с каталогом серий, адаптивным видеоплеером и таймером обратного отсчета до премьер. Проект показал взрывной органический рост, собрав аудиторию в 6 000+ человек благодаря продуманному UX и шерингу.', en: 'Feature-rich online cinema built inside Telegram Web Apps framework. Includes structured season catalog, integrated video player, and countdown timers. Achieved viral organic growth reaching 6,000+ users without advertising expenditure.' },
    stack: 'Telegram Web Apps API, JavaScript, Node.js, Express, Nginx.',
    images: projectImageSets[4],
    previewImages: previewImageSets[4],
  },
  {
    id: 'max-movie-universe',
    url: 'https://max.ru/se13781011_bot',
    name: { ru: 'MAX Кино — Витрина Фильмов', en: 'MAX Movie Universe' },
    category: 'Mini App / Web Service',
    summary: { ru: 'Агрегатор кино с автоматическим обновлением каталога через Kinopoisk API.', en: 'Automated movie discovery platform powered by Kinopoisk API integration.' },
    description: { ru: 'Веб-сервис и Mini App на платформе MAX для удобного поиска и выбора фильмов. Автоматический парсинг метаданных, фильтрация по жанрам, годам и рейтингу, система кэширования и ссылки на легальные онлайн-кинотеатры.', en: 'Mini App and web showcase for movie streaming on the MAX platform. Features automated metadata indexing via API, dynamic filtering, caching, and direct routing to official streaming services.' },
    stack: 'Node.js, Express, SQLite, MAX Bridge API, PM2, Nginx.',
    images: projectImageSets[5],
    previewImages: previewImageSets[5],
  },
];
