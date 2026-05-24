import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { SchemaUpdatePlaylistRequestPayload } from '@/shared/api/client/schema';
import { client } from '@/shared/api/client/client';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';

export const useUpdatePlaylistMutation = (playlistId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SchemaUpdatePlaylistRequestPayload) => {
      const response = await client.PUT('/playlists/{playlistId}', {
        params: {
          path: {
            playlistId,
          },
        },
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
        refetchType: 'all', // обновить весть кэш по ключу (активные и неактивные квериес)
      });
    },
  });
};
