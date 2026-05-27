import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';

export const useDeleteCoverMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (playlistId: string) => {
      const response = await client.DELETE('/playlists/{playlistId}/images/main', {
        params: {
          path: { playlistId },
        },
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
    onError: (error) => {
      console.error(error);
    },
  });
};
