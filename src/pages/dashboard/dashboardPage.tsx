import { useEffect, useState } from 'react';
import { blockStyle } from './styles';
import type { TTracks } from '../../shared/types';
import { API_BASE_URL, API_HEADERS } from '../../shared/constants';
import { TracksStatus } from './tracksStatus';
import { Outlet } from 'react-router-dom';
// import { client } from '@/shared/client';

// todo: github actions

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [tracks, setTracks] = useState<TTracks[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTracks() {
      const res = await fetch(API_BASE_URL, {
        headers: API_HEADERS,
      });
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      const data = await res.json();

      setTracks(data.data);
      setIsLoading(false);
    }
    loadTracks();
  }, []);

  const isEmpty = !isLoading && tracks.length === 0;
  const isReady = !isLoading && tracks.length > 0;

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

// const response = await client.GET('/playlists/tracks');
// const data = response.data;
// setTracks(data?.data);
