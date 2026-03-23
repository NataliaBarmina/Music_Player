import { client } from '@/shared/api/client';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { callbackUrl } from './callback-URL';

// КАСТОМНЫЙ ХУК ДЛЯ ЛОГИНИЗАЦИИ ПОЛЬЗОВАТЕЛЯ ПОСЛЕ OAuth

// 1) получаем и отправляем code на backend
// 2) получаем от сервера accessToken и refreshToken
// 3) сохраняем их в localStorage
// 4) обновляем данные авторизации в React Query, чтобы приложение узнало, что пользователь теперь залогинен

export const useLogicMutation = () => {
  const queryClient = useQueryClient(); // чтобы потом обновить кэш запросов

  const mutation = useMutation({
    mutationFn: async ({ code }: { code: string }) => {
      const response = await client.POST('/auth/login', {
        body: {
          code,
          redirectUri: callbackUrl,
          accessTokenTTL: '1d',
          rememberMe: true,
        },
      });
      if (response.error) {
        throw new Error(response.error instanceof Error ? response.error.message : 'Login failed');
      }
      return response.data;
    },
    onSuccess: (data: { refreshToken: string; accessToken: string }) => {
      localStorage.setItem('musicfun-refresh-token', data.refreshToken);
      localStorage.setItem('musicfun-access-token', data.accessToken);
      queryClient.invalidateQueries({
        queryKey: ['auth', 'me'], // Сбрасываем кэш запроса ['auth', 'me'], чтобы запросить данные пользователя после логина.
      });
    },
  });
  return mutation;
};
