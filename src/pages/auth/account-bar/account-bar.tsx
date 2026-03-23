import { LoginButton } from '../login/login-button.tsx';
import { useQuery } from '@tanstack/react-query';
import { client } from '@shared/api/client.ts';
import { LogoutButton } from '../logout/logout-button.tsx';

//  ПРОВЕРЯЕМ АВТОРИЗАЦИЮ ПОЛЬЗОВАТЕЛЯ

export const AccountBar = () => {
  const query = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const response = await client.GET('/auth/me'); // возвращает объект с айди и логином пользователя
      return response.data;
    },
    retry: false, // не перезапрашивать данные, если придет ошибка
  });
  return <div>{!query.data ? <LoginButton /> : <LogoutButton login={query.data!.login} />}</div>;
};
