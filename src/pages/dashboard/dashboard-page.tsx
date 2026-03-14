import { useState } from 'react';
import { blockStyle } from './styles';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { TracksList } from '../tracks-list';

// todo: спрятать ключ
// todo: одновременно проигрывать только одну песню

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const {
    data: tracks = [],
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await client.GET('/playlists/tracks');
      return response.data?.data ?? [];
    },
  });

  return (
    <div className={blockStyle}>
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}
      {isSuccess && !selectedTrackId && (
        <TracksList tracks={tracks} setSelectedTrackId={setSelectedTrackId} />
      )}
    </div>
  );
};
