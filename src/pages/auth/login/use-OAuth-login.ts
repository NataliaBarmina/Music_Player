import { callbackUrl } from './callback-URL';
import { useLogicMutation } from './use-logic-mutation';

//КАСТОМНЫЙ ХУК -ОРКЕСТРАТОР OAuth-ПРОЦЕССА НА КЛИЕНТЕ

//1) открывает popup-окна
//2) получает code через postMessage
//3) запускает  mutation.mutate({ code })

export const useOAuthLogin = () => {
  const mutation = useLogicMutation();

  const handleLogicClick = () => {
    window.addEventListener('message', handleOAuthMessage); // ждет сообщение из popup-окна
    window.open(
      `https://musicfun.it-incubator.app/api/1.0/auth/oauth-redirect?callbackUrl=${callbackUrl}`, // URL для OAuth-авторизации.
      'apihub-oauth2', // Имя popup-окна
      'width=500, height=600', // Popup размером 500x600px
    );
  };

  function handleOAuthMessage(event: MessageEvent) {
    window.removeEventListener('message', handleOAuthMessage); // удаляем слушатель

    if (event.origin !== document.location.origin) {
      console.warn('origin is not match'); //Проверяем, что сообщение пришло с того же origin, что и текущее приложение
      return;
    }

    const code = event.data.code; // Достаём code из сообщения
    if (!code) {
      console.warn('no code in message');
      return;
    }
    mutation.mutate({ code }); //Если код есть, запускаем mutation
  }

  return { handleLogicClick };
};
