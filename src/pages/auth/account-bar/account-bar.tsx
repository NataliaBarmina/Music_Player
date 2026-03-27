import { LoginButton } from '../login';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { LogoutButton } from '../logout';
import { tokenStorage } from '@/shared/api/token-storage';

//  ПРОВЕРЯЕМ АВТОРИЗАЦИЮ ПОЛЬЗОВАТЕЛЯ

export const AccountBar = () => {
  const { data } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const token = tokenStorage.accessToken;
      if (!token) return null;

      const { data, error } = await client.GET('/auth/me'); // возвращает объект с айди и логином пользователя
      if (error) return null;
      return data ?? null;
    },
    retry: false, // не перезапрашивать данные, если придет ошибка
  });
  return <div>{data ? <LogoutButton login={data.login} /> : <LoginButton />}</div>;
};
