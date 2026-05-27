import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';

export const useAddCoverMutation = (playlistId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();

      formData.append('file', file);

      const response = await client.POST('/playlists/{playlistId}/images/main', {
        params: {
          path: {
            playlistId,
          },
        },
        body: formData as unknown as { file: string },
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
