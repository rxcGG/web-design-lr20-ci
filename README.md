# ЛР20. CI/CD для React

## Запуск

Встановити залежності: `npm ci`. Запустити сайт: `npm run dev`.
Перевірки: `npm run lint`, `npm run test:coverage`, `npm run build`.

## Автоматична перевірка

Workflow `.github/workflows/deploy.yml` перевіряє проєкт після push і pull request. Результати збірки та coverage зберігаються 7 днів.

Для публікації створити середовища `staging` і `production`, додати secrets `REACT_APP_API_URL`, `REACT_APP_ANALYTICS_ID`, `REACT_APP_ENV`, `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`. Для production налаштувати підтвердження перед публікацією. У змінних репозиторію встановити `NETLIFY_ENABLED=true` після налаштування Netlify.

Гілка `develop` публікується у staging, `main` у production. Після успішної production-публікації створюється GitHub Release.

Для повідомлень у погоджений канал Slack додати secret `SLACK_WEBHOOK` і змінну `SLACK_ENABLED=true`. Секретні значення зберігати в GitHub Secrets.
