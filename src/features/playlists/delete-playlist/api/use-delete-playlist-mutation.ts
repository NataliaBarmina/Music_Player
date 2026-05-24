import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import type { SchemaPlaylistListItemResource } from '@/shared/api/client/schema';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';

type PlaylistsCache = {
  playlists: SchemaPlaylistListItemResource[];
};

export const useDeletePlaylistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (playlistId: string) => {
      const response = await client.DELETE('/playlists/{playlistId}', {
        params: {
          path: { playlistId },
        },
      });

      if (response.error) {
        throw response.error;
      }

      return response.data;
    },

    onSuccess: (_, playlistId) => {
      queryClient.setQueriesData<PlaylistsCache>({ queryKey: playlistKeys.all }, (oldData) => {
        if (!oldData) {
          return oldData;
        }
        return {
          ...oldData,
          playlists: oldData.playlists.filter((playlist) => playlist.id !== playlistId),
        }; // вручную из кэша удаляем наш плэйлист
      });
    },
  });
};
