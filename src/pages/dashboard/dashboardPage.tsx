import { useState } from 'react';
import { blockStyle } from './styles';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client';
import { ErrorPage } from '@/components/errorsPage';
import { Preloader } from '@/components/preloader';
import { RefreshingIndicator } from '@/components/refreshingIndicator';

// todo: спрятать ключ
// todo: кнопка резет селекшен - убрать?
// todo: одновременно проигрывать только одну песню

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);

  console.log('DashboardPage', selectedTrackId);

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
      {isSuccess && (
        <Outlet
          context={{
            tracks,
            selectedTrackId,
            setSelectedTrackId,
          }}
        />
      )}
    </div>
  );
};
