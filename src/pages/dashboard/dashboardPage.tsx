import { useState } from 'react';
import { blockStyle } from './styles';
import { TracksStatus } from './tracksStatus';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client';

// todo: спрятать ключ
// todo: алиасы сделать и проверить
// todo: кнопка резет селекшен - убрать?
// todo: одновременно проигрывать только одну песню
// todo: сделать компонент ошибки

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

  if (isError) {
    return <div>Ошибка: {error instanceof Error ? error.message : 'Что-то пошло не так'}</div>;
  }
  const isEmpty = !isLoading && tracks.length === 0;
  const isReady = !isLoading && tracks.length > 0;
  console.log(tracks[0]);
  return (
    <div className={blockStyle}>
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
