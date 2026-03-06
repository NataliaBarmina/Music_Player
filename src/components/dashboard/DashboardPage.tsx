import { useEffect, useState } from 'react';
import { blockStyle } from './styles';
import type { TTracks } from '../../common/types';
import { API_BASE_URL, API_HEADERS } from '../../common/constants';
import { TracksStatus } from './tracksStatus';
import { Outlet } from 'react-router-dom';
// import { client } from '@/shared/client';

// todo: разобраться со структурой
// todo: github actions

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<TTracks | null>(null);
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
      {!tracks || !tracks.length ? (
        <TracksStatus isLoading={isLoading} isTracksEmpty={!tracks.length} />
      ) : (
        <Outlet
          context={{
            tracks,
            selectedTrackId,
            setSelectedTrackId,
            selectedTrack,
            setSelectedTrack,
            isLoading,
            isEmpty,
            isReady,
          }}
        />
      )}
    </div>
  );
};

// const response = await client.GET('/playlists/tracks');
// const data = response.data;
// console.log(data?.data);
// setTracks(data?.data);
