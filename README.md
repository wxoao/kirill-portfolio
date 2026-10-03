# Kirill (wxoao) — Product Creator & Full-Stack Developer

React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion, and Lucide React.

## Development

```sh
pnpm install
pnpm dev
```

## Production

```sh
pnpm build
pnpm preview
```

The production static site is generated in `dist/`.

All original images, layout classes, CSS, and motion effects are preserved. The six case studies reuse the original image sets. Project buttons open a modal containing the full description, technology stack, and existing images; public project URLs have not been supplied.

## Languages and content

`src/i18n.tsx` defines RU/EN translations and the language context. Russian is the default language. The header toggle updates the content immediately and saves the selection in `localStorage` under `wxoao-language`. The switch still works if storage is unavailable. Document language, title, description, accessible labels, and image descriptions are translated too.

`src/data.ts` contains the five services and six project case studies, including their summaries, full descriptions, and technology stacks. Brand names, supplied English service names, category tags, and technology names remain unchanged between languages. Contact links use `thekarchicyt@gmail.com` and `https://t.me/wxoao`.

Motion respects the visitor's reduced-motion preference. Marquee scrolling uses a passive listener and animation-frame updates, with tripled rows. The contact and project dialogs support Escape, keyboard focus containment, and backdrop dismissal.
