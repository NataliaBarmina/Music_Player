import { useState } from 'react';
import { blockStyle } from './styles';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { TracksList } from '../tracks-list';
import { SearchField } from '@/shared/ui/searchField';
import { useEffect } from 'react';

// todo: спрятать ключ
// todo: одновременно проигрывать только одну песню

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPage(1);
  }, [search]);

  const {
    data: { tracks = [], pagesCount = 0 } = {},
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: ['playlists', { page, search }], //при большом количестве параметров объединять их в объекты - поможет избежать путаницы
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

  return (
    <div className={blockStyle}>
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}
      <SearchField search={search} setSearch={setSearch} />

      {isSuccess && !selectedTrackId && (
        <TracksList
          tracks={tracks}
          setSelectedTrackId={setSelectedTrackId}
          current={page}
          pagesCount={pagesCount}
          changePageNumber={setPage}
        />
      )}
    </div>
  );
};
