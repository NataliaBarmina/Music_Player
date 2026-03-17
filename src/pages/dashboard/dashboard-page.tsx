import { useState } from 'react';
import { blockStyle } from './styles';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { TracksList } from '../tracks-list';

// todo: спрятать ключ
// todo: одновременно проигрывать только одну песню

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const {
    data: { tracks = [], pagesCount = 0 } = {},
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: ['playlists', page],
    queryFn: async () => {
      const response = await client.GET('/playlists/tracks', {
        params: {
          query: {
            pageNumber: page,
          },
        },
      });
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
