import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';

export const useDeletePlaylistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (trackId: string) => {
      const response = await client.DELETE('/playlists/{playlistId}', {
        params: {
          path: { playlistId: trackId },
        },
      });

      if (response.error) {
        throw response.error;
      }

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['playlists'],
        refetchType: 'all', // обновить весть кэш по ключу (активные и неактивные квериес)
      });
    },
  });
};
