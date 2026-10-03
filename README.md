# Jack — 3D Creator

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

All requested images are used at their supplied URLs. Edit contact details in `src/components.tsx`. Add an optional `url` to each project in `src/data.ts` to connect the Live Project button to a public project; until then it opens a full image preview.

Navigation's Price link points to the requested Services section. No prices were supplied.

Motion respects the visitor's reduced-motion preference. Marquee scrolling uses a passive listener and animation-frame updates, with tripled rows. The contact and project dialogs support Escape, keyboard focus containment, and backdrop dismissal.
