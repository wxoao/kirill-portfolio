import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'ru' | 'en';
export type LocalizedText = Record<Language, string>;
export const languageStorageKey = 'wxoao-language';

// A narrow space keeps the longer name within the original heading typography.
const heroHeading = "HI,\u200aI'M KIRILL";

const translations = {
  ru: {
    navLabel: 'Основная навигация',
    navAbout: 'Обо мне',
    navProjects: 'Кейсы',
    navContact: 'Связь',
    about: 'Обо мне',
    services: 'Услуги',
    projects: 'Проекты',
    contact: 'Контакты',
    heroHeading,
    heroSubtitle: 'Product Creator & Full-Stack Разработчик. Превращаю идеи в готовые IT-продукты, сервисы и игры под ключ.',
    aboutText: 'Привет! Я Кирилл (wxoao) — продукт-креатор и fullstack-разработчик. Мой профиль — сборка любых цифровых продуктов под ключ: от коммерческих B2B-сервисов и ботов автоматизации до WebGL-игр и веб-платформ. Я объединяю чистый Full-Stack код, современный UI/UX дизайн и понимание маркетинга, благодаря чему беру задачу целиком — от первичного концепта и архитектуры до готового релиза. За плечами опыт запуска собственных коммерческих проектов на Яндекс Играх, Telegram-сервисов, олимпиады и хакатоны. Если вам нужен рабочий инструмент для бизнеса, я сделаю это четко, быстро и с фокусом на результат.',
    contactButton: 'Связаться',
    liveProjectButton: 'Подробнее',
    contactTitle: "LET'S CREATE TOGETHER.",
    contactDescription: 'Есть идея для проекта или нужно разработать готовый сервис? Напишите мне — обсудим задачи и подберем лучшее решение.',
    closeContact: 'Закрыть контакты',
    closeProject: 'Закрыть описание проекта',
    copyEmail: 'Скопировать email',
    emailCopied: 'Email скопирован',
    projectLink: 'Открыть проект',
    projectPreview: 'Превью проекта · ссылка появится позже.',
    techStack: 'Стек',
    visual: 'иллюстрация',
    firstDetail: 'первая деталь',
    secondDetail: 'вторая деталь',
    mainVisual: 'основная иллюстрация',
    marqueeLabel: 'Подборка визуальных работ',
    showcase: 'Анимированная работа',
    portraitAlt: 'Стилизованный 3D-портрет Кирилла с темными скульптурными волосами',
    switchLanguage: 'Switch to English',
    pageTitle: 'Кирилл (wxoao) — Product Creator & Full-Stack Разработчик',
    pageDescription: 'Кирилл (wxoao) — продукт-креатор и fullstack-разработчик. Веб-сервисы, B2B-платформы, Telegram-боты и WebGL-игры под ключ.',
  },
  en: {
    navLabel: 'Main navigation',
    navAbout: 'About',
    navProjects: 'Projects',
    navContact: 'Contact',
    about: 'About me',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    heroHeading,
    heroSubtitle: 'Product Creator & Full-Stack Developer. Turning ideas into complete digital products, services, and games.',
    aboutText: 'Hi! I’m Kirill (wxoao) — a product creator & full-stack developer. I specialize in building end-to-end digital products: from B2B platforms and automation bots to WebGL games and web applications. I combine solid full-stack engineering, sleek UI/UX design, and a strong marketing mindset to take projects from raw concept and architecture all the way to a finished release. My background includes launching commercial games on Yandex Games, Telegram services, tech olympiads, and hackathons. Whether you need a custom digital service for your business or an interactive game, I will deliver it fast, clean, and results-focused.',
    contactButton: 'Contact Me',
    liveProjectButton: 'Live Project',
    contactTitle: "LET'S CREATE TOGETHER.",
    contactDescription: 'Have a project in mind or need a custom digital service? Get in touch to bring your idea to life.',
    closeContact: 'Close contact',
    closeProject: 'Close project preview',
    copyEmail: 'Copy email address',
    emailCopied: 'Email copied',
    projectLink: 'Open project',
    projectPreview: 'Project preview · live link coming soon.',
    techStack: 'Tech stack',
    visual: 'visual',
    firstDetail: 'first detail',
    secondDetail: 'second detail',
    mainVisual: 'main visual',
    marqueeLabel: 'A selection of creative visual work',
    showcase: 'Animated design showcase',
    portraitAlt: "Kirill's stylized 3D portrait with dark sculptural hair",
    switchLanguage: 'Переключить на русский',
    pageTitle: 'Kirill (wxoao) — Product Creator & Full-Stack Developer',
    pageDescription: 'Kirill (wxoao) is a product creator and full-stack developer building complete web services, B2B platforms, Telegram bots, and WebGL games.',
  },
};

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations[Language];
  localize: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem(languageStorageKey) === 'en' ? 'en' : 'ru';
    } catch {
      return 'ru';
    }
  });
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.pageDescription);
    try {
      localStorage.setItem(languageStorageKey, language);
    } catch {
      // Language switching remains available when browser storage is disabled.
    }
  }, [language, t]);

  return <LanguageContext.Provider value={{ language, t, toggleLanguage: () => setLanguage(current => current === 'ru' ? 'en' : 'ru'), localize: text => text[language] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  return <button type="button" onClick={toggleLanguage} aria-label={t.switchLanguage} aria-pressed={language === 'en'} className="shrink-0 whitespace-nowrap uppercase tracking-wider transition-opacity duration-200 hover:opacity-70">[ <span className={language === 'ru' ? 'font-medium' : 'opacity-50'}>RU</span> / <span className={language === 'en' ? 'font-medium' : 'opacity-50'}>EN</span> ]</button>;
}
