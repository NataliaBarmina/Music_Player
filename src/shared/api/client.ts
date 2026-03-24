import createClient, { type Middleware } from 'openapi-fetch';
import type { paths } from './schema';
import { API_KEY, BASE_URL } from './apiConfig';

// НАСТРОЙКА КЛИЕНТА ДЛЯ ВСЕХ ЗАПРОСОВ ПРИЛОЖЕНИЯ (чтобы писать просто client.GET('/auth/me'))

const authMiddleware: Middleware = {
  // срабатывает перед отправкой запроса:
  async onRequest({ request }) {
    const accessToken = localStorage.getItem('access-token');

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
  baseUrl: BASE_URL,
  headers: { 'api-key': API_KEY },
});

client.use(authMiddleware);
