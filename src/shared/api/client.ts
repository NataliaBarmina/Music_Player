import createClient, { type Middleware } from 'openapi-fetch';
import type { paths } from './schema';

// НАСТРОЙКА КЛИЕНТА ДЛЯ ВСЕХ ЗАПРОСОВ ПРИЛОЖЕНИЯ (чтобы писать просто client.GET('/auth/me'))

const authMiddleware: Middleware = {
  // срабатывает перед отправкой запроса:
  async onRequest({ request }) {
    const accessToken = localStorage.getItem('musicfun-access-token');

    if (accessToken) {
      request.headers.set('Authorization', 'Bearer ' + accessToken); // запрос уходит с заголовком Authorization: Bearer <token>
    }
    return request;
  },

  // выполняется после ответа сервера:
  onResponse({ response }) {
    if (!response.ok) {
      throw new Error(`${response.url}: ${response.status} ${response.statusText}`);
    }
  },
};

export const client = createClient<paths>({
  baseUrl: 'https://musicfun.it-incubator.app/api/1.0',
  headers: { 'api-key': 'ace00df7-2548-46cd-b290-b90853d266e5' },
});

client.use(authMiddleware);
