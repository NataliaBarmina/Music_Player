import { useEffect, useState } from 'react';
import { blockStyle } from './styles';
import type { TTracks } from '../../common/types';
import { TracksList } from '../tracksList';
import { API_BASE_URL, API_HEADERS } from '../../common/constants';
import { TracksStatus } from './tracksStatus';
// import { client } from '@/shared/client';

// todo: разобраться со структурой
// todo: github actions

export const DashboardPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<TTracks | null>(null);
  const [tracks, setTracks] = useState<TTracks[]>([]);

  useEffect(() => {
    async function loadTracks() {
      const res = await fetch(API_BASE_URL, {
        headers: API_HEADERS,
      });
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      const data = await res.json();
      console.log(data.data);
      setTracks(data.data);
    }
    loadTracks();
  }, []);

  return (
    <div className={blockStyle}>
      {!tracks || !tracks.length ? (
        <TracksStatus loading={!tracks} isTracksEmpty={!tracks.length} />
      ) : (
        <TracksList
          tracks={tracks}
          selectedTrackId={selectedTrackId}
          setSelectedTrackId={setSelectedTrackId}
          setSelectedTrack={setSelectedTrack}
          selectedTrack={selectedTrack}
        />
      )}
    </div>
  );
};

// const response = await client.GET('/playlists/tracks');
// const data = response.data;
// console.log(data?.data);
// setTracks(data?.data);
