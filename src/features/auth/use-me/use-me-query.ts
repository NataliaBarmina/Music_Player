import { useQuery } from '@tanstack/react-query';
import { tokenStorage } from '@/shared/api/token-storage';
import { client } from '@/shared/api/client/client';

// ЗАПРАШИВАЕМ АВТОРИЗАЦИОННЫЕ ДАННЫЕ - объект с айди и логином пользователя

export const useMeQuery = () => {
  return useQuery({
    queryKey: ['auth', 'me'],
    retry: false, // не перезапрашивать данные, если придет ошибка

    queryFn: async () => {
      const token = tokenStorage.accessToken;
      if (!token) return null;

      const { data, error } = await client.GET('/auth/me');

      if (error) return null;

      return data ?? null;
    },
  });
};
