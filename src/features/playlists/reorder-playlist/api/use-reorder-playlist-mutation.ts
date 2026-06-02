import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';
import type { SchemaReorderPlaylistsRequestPayload } from '@/shared/api/client/schema';

export const useReorderPlaylistMutation = (playlistId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: SchemaReorderPlaylistsRequestPayload) => {
      const response = await client.PUT('/playlists/{playlistId}/reorder', {
        params: {
          path: { playlistId },
        },
        body: payload,
      });

      if (response.error) {
        throw response.error;
      }
      return response.data;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: playlistKeys.all,
        refetchType: 'all', // обновить весть кэш по ключу (активные и неактивные квериес)
      });
    },
  });
};
