import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { SchemaCreatePlaylistRequestPayload } from '@/shared/api/client/schema';
import { client } from '@/shared/api/client/client';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';

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
        queryKey: playlistKeys.all,
        refetchType: 'all',
      });
    },
    // meta: { globalErrorHandler: 'on' }, // включить глобальную обработку ошибок для этой mutation
  });
};
