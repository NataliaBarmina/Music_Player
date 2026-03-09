import { SelectedTrackDetail } from './selectedTrackDetail';
import { useOutletContext } from 'react-router-dom';

export type TSelectedTrackDetail = {
  selectedTrackId: string | null;
  setSelectedTrackId: React.Dispatch<React.SetStateAction<string | null>>;
};
export const SelectedTrackDetailRoute = () => {
  const { selectedTrackId, setSelectedTrackId } = useOutletContext<TSelectedTrackDetail>();
  return (
    <SelectedTrackDetail
      selectedTrackId={selectedTrackId}
      setSelectedTrackId={setSelectedTrackId}
    />
  );
};
