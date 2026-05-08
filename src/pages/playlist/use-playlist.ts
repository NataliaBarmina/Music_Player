import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';

export type TUsePlayListTracks = {
  search?: string;
  userId?: string;
};

export const usePlayList = ({ search, userId }: TUsePlayListTracks) => {
  const query = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: ['myPlaylists', { search, userId }], //при большом количестве параметров объединять их в объекты

    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists', {
        params: {
          query: {
            search,
            userId,
          },
        },
        signal,
      });
      if (response.error) {
        throw (response as unknown as { error: Error }).error;
      }

      return {
        tracks: response.data?.data ?? [],
      };
    },

    placeholderData: keepPreviousData, // пока грузятся новые данные, показываются старые данные
  });

  return {
    ...query,
    tracks: query.data?.tracks ?? [],
  };
};
