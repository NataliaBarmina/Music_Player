import { useEffect } from 'react';

// СТРАНИЦА-ПОСРЕДНИК, ПРИНИМАЕТ РЕЗУЛЬТАТ OAUTH И ПЕРЕДАЕТ В ГЛАВНОЕ ПРИЛОЖЕНИЕ (http://localhost:5173)

export const OAuthCallbackPage = () => {
  // есть побочные эффекты связанные с жизненным циклом страницы
  useEffect(() => {
    const url = new URL(window.location.href); // текущий URL страницы
    const code = url.searchParams.get('code'); // извлекаем авторизационный код из URL параметров

    if (code && window.opener) {
      window.opener.postMessage({ code }, window.location.origin);
    } // отправляем код в родительское окно  через postMessage

    window.close();
  }, []);
  return <></>;
};
