import { useEffect, useState } from 'react';
import { blockStyle } from './styles';
// import { playerStyle} from './styles';
import type { TTracks } from '@common/types';
import { TracksList } from '../tracksList';
import { API_BASE_URL, API_HEADERS } from '@common/constants';
// import { SelectedTrackDetail } from '../selectedTrackDetail';
import { TracksStatus } from './tracksStatus';
// import { client } from '@/shared/client';

//todo:сделать роутинг, в том числе страница ошибки
// todo: сделать навигац панель
// todo: разобраться со структурой
// todo: github actions

export function DashboardPage() {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<TTracks | null>(null);
  const [tracks, setTracks] = useState<TTracks[]>([]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTracks() {
      // const response = await client.GET('/playlists/tracks');
      // const data = response.data;
      // console.log(data?.data);
      // setTracks(data?.data);

      try {
        const res = await fetch(API_BASE_URL, {
          headers: API_HEADERS,
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        setTracks(data.data);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') setError(error.message);
      }
    }
    loadTracks();

    return () => {
      controller.abort();
    };
  }, []);
  // todo: если ошибка то переходим на TracksStatus, иначе на TracksList
  return (
    <div className={blockStyle}>
      {/* <TracksStatus loading={!tracks} error={error} isTracksEmpty={!tracks.length} /> */}

      {/* <div className={playerStyle}> */}
      <TracksList
        tracks={tracks}
        selectedTrackId={selectedTrackId}
        setSelectedTrackId={setSelectedTrackId}
        setSelectedTrack={setSelectedTrack}
      />

      {/* <SelectedTrackDetail
            selectedTrack={selectedTrack}
            isEmpty={!selectedTrack}
            isLoading={selectedTrack && selectedTrack?.id !== selectedTrackId}
            isReady={selectedTrack?.id === selectedTrackId}
          /> */}
      {/* </div> */}
    </div>
  );
}
