import createClient from 'openapi-fetch';
import type { paths } from './schema';
import { BASE_URL } from '../../config/apiConfig';
import { authMiddleware } from './auth-middleware';
import { getApiKeyHeaders } from './get-api-key-headers';

// НАСТРОЙКА КЛИЕНТА ДЛЯ ВСЕХ ЗАПРОСОВ ПРИЛОЖЕНИЯ (чтобы писать просто client.GET('/auth/me'))

// 1) Создается клиент через вызов функции createClient
// 2) Указывается типизация - описываются доступные эндпоинты и их параметры
// 3) Указывается базовый URL, заголовки
// 4) При создании клиента к нему подключается middleware

// добавляем api-key только при dev сборке

export const client = createClient<paths>({
  baseUrl: BASE_URL,
  headers: getApiKeyHeaders(),
});

client.use(authMiddleware);
