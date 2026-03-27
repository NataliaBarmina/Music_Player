import { ACCESS_TOKEN, REFRESH_TOKEN } from './apiConfig';

export const tokenStorage = {
  get accessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  },

  get refreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  },

  clearTokens() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  },

  setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  },
};
