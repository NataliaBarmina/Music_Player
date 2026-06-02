import { API_KEY } from '@/shared/config/apiConfig';

export const getApiKeyHeaders = (): Record<string, string> => {
  const isLocalhost = window.location.hostname === 'localhost';

  if (!isLocalhost || !API_KEY) {
    return {};
  }

  return {
    'api-key': API_KEY,
  };
};
