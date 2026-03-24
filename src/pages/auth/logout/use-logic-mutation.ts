import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '@/shared/api/client';

//КАСТОМНЫЙ ХУК ДЛЯ LOGOUT

// 1) отправляем на сервер запрос на выход из аккаунта
// 2) передаем refreshToken
// 3) после успешного выхода удаляем токены из localStorage
// 4) сбрасываем данные текущего пользователя в React Query

export const useLogicMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await client.POST('/auth/logout', {
        body: {
          refreshToken: localStorage.getItem('refresh-token')!,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      localStorage.removeItem('refresh-token');
      localStorage.removeItem('access-token');
      queryClient.resetQueries({
        queryKey: ['auth', 'me'],
      });
    },
  });
  return mutation;
};
