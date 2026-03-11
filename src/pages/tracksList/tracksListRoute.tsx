import { useOutletContext } from 'react-router-dom';
import { TracksList } from './tracksList';

type TTracks = {
  id: string;
  attributes: {
    attachments: {
      url: string;
    }[];
    title: string;
  };
};

export type TTracksList = {
  tracks: TTracks[];
  selectedTrackId: string | null;
  setSelectedTrackId: React.Dispatch<React.SetStateAction<string | null>>;
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
