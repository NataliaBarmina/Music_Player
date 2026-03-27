import { API_KEY, BASE_URL } from '../apiConfig';
import { tokenStorage } from '../token-storage';

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ACCESS ТОКЕНА С ПОМОЩЬЮ REFRESH ТОКЕНА

let refreshPromise: Promise<void> | null = null; // чтобы не отправлять несколько одинаковых запросов на refresh одновременно при 401 ошибке

export function refreshAccessToken() {
  if (!refreshPromise) {
    //
    refreshPromise = (async () => {
      const refreshToken = tokenStorage.refreshToken;

      if (!refreshToken) throw new Error('No refresh token');

      const response = await fetch(BASE_URL + '/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        tokenStorage.clearTokens();
        throw new Error(`Refresh failed: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      tokenStorage.setTokens(result.accessToken, result.refreshToken);
      //
    })().finally(() => (refreshPromise = null));
  }
  return refreshPromise;
}
