import { useOutletContext } from 'react-router-dom';
import { TracksList } from './tracksList';
import type { TTracks } from '@/common/types';

export type TTracksList = {
  tracks: TTracks[];
  selectedTrackId: number | null;
  setSelectedTrackId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const TracksListRoute = () => {
  const { tracks, selectedTrackId, setSelectedTrackId } = useOutletContext<TTracksList>();
  return (
    <TracksList
      tracks={tracks}
      selectedTrackId={selectedTrackId}
      setSelectedTrackId={setSelectedTrackId}
    />
  );
};
