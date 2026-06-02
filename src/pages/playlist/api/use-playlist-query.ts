import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { playlistKeys } from '@/shared/api/keys-factories/playlist-keys-factories';

export const usePlaylistsQuery = (userId?: string) => {
  const query = useQuery({
    refetchInterval: 5 * 60 * 1000,

    queryKey: playlistKeys.myList(userId),

    enabled: Boolean(userId),

    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists', {
        params: {
          query: {
            userId,
          },
        },
        signal,
      });
      if (response.error) {
        throw (response as unknown as { error: Error }).error;
      }

      const playlists = response.data?.data ?? [];
      return {
        playlists: playlists.toSorted((a, b) => a.attributes.order - b.attributes.order),
      };
    },

    placeholderData: keepPreviousData, // пока грузятся новые данные, показываются старые данные
  });

  return {
    ...query,
    playlists: query.data?.playlists ?? [],
  };
};
