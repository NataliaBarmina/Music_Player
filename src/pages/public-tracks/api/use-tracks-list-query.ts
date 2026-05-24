import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import type { TUseTracksListQuery } from '../types';
import { tracksListKeys } from '@/shared/api/keys-factories/tracks-list-factories';

export const useTracksListQuery = ({ page, search }: TUseTracksListQuery) => {
  const query = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: tracksListKeys.list({ page, search }), //при большом количестве параметров объединять их в объекты - поможет избежать путаницы

    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists/tracks', {
        params: {
          query: {
            pageNumber: page,
            search,
          },
        },
        signal,
      });
      if (response.error) {
        throw (response as unknown as { error: Error }).error;
      }

      return {
        tracks: response.data?.data ?? [],
        pagesCount: response.data?.meta.pagesCount ?? 0,
      };
    },

    placeholderData: keepPreviousData, // пока грузятся новые данные, показываются старые данные
  });

  return {
    ...query,
    tracks: query.data?.tracks ?? [],
    pageCount: query.data?.pagesCount ?? 0,
  };
};
