import { client } from '@/shared/api/client';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { CALLBACK_URL } from '@shared/api/apiConfig';
import type { TCode, TData } from './types';

// КАСТОМНЫЙ ХУК ДЛЯ ЛОГИНИЗАЦИИ ПОЛЬЗОВАТЕЛЯ ПОСЛЕ OAuth

// 1) отправляем code на backend
// 2) получаем от сервера accessToken и refreshToken
// 3) сохраняем их в localStorage
// 4) обновляем данные авторизации в React Query, чтобы приложение узнало, что пользователь теперь залогинен

export const useLogicMutation = () => {
  const queryClient = useQueryClient(); // чтобы потом обновить кэш запросов

  const mutation = useMutation({
    mutationFn: async ({ code }: TCode) => {
      const { error, data } = await client.POST('/auth/login', {
        body: {
          code,
          redirectUri: CALLBACK_URL,
          accessTokenTTL: '1d',
          rememberMe: true,
        },
      });
      if (error) {
        throw new Error(error instanceof Error ? error.message : 'Login failed');
      }
      return data;
    },
    onSuccess: (data: TData) => {
      localStorage.setItem('refresh-token', data.refreshToken);
      localStorage.setItem('access-token', data.accessToken);

      queryClient.invalidateQueries({
        queryKey: ['auth', 'me'], // Сбрасываем кэш запроса ['auth', 'me'], чтобы запросить данные пользователя после логина.
      });
    },
  });
  return mutation;
};
