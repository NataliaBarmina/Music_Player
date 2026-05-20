import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';

export const useGetPlaylists = (userId: string) => {
  const query = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: ['playlists', userId],

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

      return {
        playlists: response.data?.data ?? [],
      };
    },

    placeholderData: keepPreviousData, // пока грузятся новые данные, показываются старые данные
  });

  return {
    ...query,
    playlists: query.data?.playlists ?? [],
  };
};
