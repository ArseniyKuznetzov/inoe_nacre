# Digital Portfolio for Inga

Одностраничное портфолио Инги Париловой на React, Vite и Tailwind CSS.

## Локальный запуск

Требуется Node.js 22 и npm:

```bash
npm install
npm run dev
```

## Production-сборка

```bash
npm run build
npm run preview
```

Готовые статические файлы появятся в папке `dist/`. Её можно загрузить на любой статический хостинг.

## Публикация

- **Vercel:** импортируйте репозиторий, оставьте настройки по умолчанию. Конфигурация находится в `vercel.json`.
- **Netlify:** импортируйте репозиторий или загрузите проект через CLI. Конфигурация находится в `netlify.toml`.
- **GitHub Pages / Cloudflare Pages:** команда сборки `npm run build`, папка публикации `dist`.

Для корректной работы ссылок на секции и прямых URL включён fallback на `index.html` для Vercel и Netlify.
