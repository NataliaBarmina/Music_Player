import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { SchemaCreatePlaylistRequestPayload } from '@/shared/api/client/schema';
import { client } from '@/shared/api/client/client';

export const useAddPlaylistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SchemaCreatePlaylistRequestPayload) => {
      const response = await client.POST('/playlists', {
        body: data,
      });

      if (response.error) {
        throw response.error;
      }

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['playlists'],
        refetchType: 'all',
      });
    },
    // meta: { globalErrorHandler: 'on' }, // включить глобальную обработку ошибок для этой mutation
  });
};
