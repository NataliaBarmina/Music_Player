import { useOutletContext } from 'react-router-dom';
import { TracksList } from './tracksList';
import type { TTracks } from '@/common/types';

type DashboardOutletContext = {
  tracks: TTracks[];
  selectedTrackId: number | null;
  selectedTrack: TTracks | null;
  setSelectedTrackId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedTrack: React.Dispatch<React.SetStateAction<TTracks | null>>;
};

export const TracksListRoute = () => {
  const { tracks, selectedTrackId, setSelectedTrackId, selectedTrack, setSelectedTrack } =
    useOutletContext<DashboardOutletContext>();
  return (
    <TracksList
      tracks={tracks}
      selectedTrackId={selectedTrackId}
      selectedTrack={selectedTrack}
      setSelectedTrackId={setSelectedTrackId}
      setSelectedTrack={setSelectedTrack}
    />
  );
};
