import { useEffect } from 'react';

// СТРАНИЦА-ПОСРЕДНИК, ПРИНИМАЕТ РЕЗУЛЬТАТ OAUTH И ПЕРЕДАЕТ В ГЛАВНОЕ ПРИЛОЖЕНИЕ (http://localhost:5173)

export const OAuthCallbackPage = () => {
  // есть побочные эффекты связанные с жизненным циклом страницы
  useEffect(() => {
    const url = new URL(window.location.href); // текущий URL страницы
    const code = url.searchParams.get('code'); // извлекаем авторизационный код из URL параметров

    const error = url.searchParams.get('error');

    if (error) {
      console.warn('OAuth returned error:', error);
      return;
    }

    if (!code) {
      console.warn('No code in callback URL');
      return;
    }

    if (!window.opener) {
      console.warn('No window.opener');
      return;
    }

    window.opener.postMessage({ code }, window.location.origin);

    window.close();
  }, []);
  return <></>;
};
