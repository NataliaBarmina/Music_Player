import { type Middleware } from 'openapi-fetch';
import { refreshAccessToken } from './make-refresh-token';
import { tokenStorage } from '../token-storage';

// Функция для автоматического добавления access token в запросы, обновления токена

// 1) перед запросом (onRequest)
//    - получаем токен из хранилища,
//    - устанавливаем заголовки для запроса с полученным токеном (запрос с заголовком Authorization: Bearer <token>)
//    - сохраняем копию исходного запроса в нестандартном свойстве - для повтора запроса позже, если токен истёк и сервер вернул 401

// 2) выполняется после ответа сервера (onResponse)
//    - анализируем ответ сервера, пробрасываем ошибки
//    - если пришла 401 ошибка -Unauthorized, то:
//      - делаем попытку обновить токен
//      - достаем копию исходного запроса
//      - создаем новый запрос для повтора
//      - добавляем в этот новый запрос новый access token

export const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const accessToken = tokenStorage.accessToken;

    if (accessToken) {
      request.headers.set('Authorization', 'Bearer ' + accessToken);
    }
    return request;
  },

  async onResponse({ request, response }) {
    if (response.ok) return response;
    if (!response.ok && response.status !== 401) {
      throw new Error(`${response.url}: ${response.status} ${response.statusText}`);
    }

    try {
      await refreshAccessToken();

      const originalRequest: Request = request.clone();

      const retryRequest = new Request(originalRequest, {
        headers: new Headers(originalRequest.headers),
      });

      retryRequest.headers.set('Authorization', 'Bearer ' + tokenStorage.accessToken);

      return fetch(retryRequest);
    } catch {
      return response;
    }
  },
};
