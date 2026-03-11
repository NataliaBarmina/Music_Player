import { useState } from 'react';
import { blockStyle } from './styles';
import { TracksStatus } from './tracksStatus';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client';
import { ErrorPage } from '@/components/errorsPage';

// todo: спрятать ключ
// todo: кнопка резет селекшен - убрать?
// todo: одновременно проигрывать только одну песню

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);

  const {
    data: tracks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await client.GET('/playlists/tracks');
      return response.data?.data ?? [];
    },
  });

  const isEmpty = !isLoading && tracks.length === 0;
  const isReady = !isLoading && tracks.length > 0;

  return (
    <div className={blockStyle}>
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {(isLoading || isEmpty) && <TracksStatus isLoading={isLoading} isEmpty={isEmpty} />}
      {isReady && (
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
