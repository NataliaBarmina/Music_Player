import { LoginButton } from '../login';
import { useQuery } from '@tanstack/react-query';
import { client } from '@shared/api/client.ts';
import { LogoutButton } from '../logout';

//  ПРОВЕРЯЕМ АВТОРИЗАЦИЮ ПОЛЬЗОВАТЕЛЯ

export const AccountBar = () => {
  const { data } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const response = await client.GET('/auth/me'); // возвращает объект с айди и логином пользователя
      return response.data;
    },
    retry: false, // не перезапрашивать данные, если придет ошибка
  });
  return <div>{!data ? <LoginButton /> : <LogoutButton login={data.login} />}</div>;
};
