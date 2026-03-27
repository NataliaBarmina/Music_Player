import createClient from 'openapi-fetch';
import type { paths } from './schema';
import { API_KEY, BASE_URL } from '../apiConfig';
import { authMiddleware } from './auth-middleware';

// НАСТРОЙКА КЛИЕНТА ДЛЯ ВСЕХ ЗАПРОСОВ ПРИЛОЖЕНИЯ (чтобы писать просто client.GET('/auth/me'))

// 1) Создается клиент через вызов функции createClient
// 2) Указывается типизация - описываются доступные эндпоинты и их параметры
// 3) Указывается базовый URL, заголовки
// 4) При создании клиента к нему подключается middleware

export const client = createClient<paths>({
  baseUrl: BASE_URL,
  headers: { 'api-key': API_KEY },
});

client.use(authMiddleware);
