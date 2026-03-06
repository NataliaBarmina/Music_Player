import { SelectedTrackDetail } from './selectedTrackDetail';
import { useOutletContext } from 'react-router-dom';
import type { TTracks } from '@/common/types';

type DashboardOutletContext = {
  selectedTrack: TTracks | null;
  isLoading: boolean;
  isEmpty: boolean;
  isReady: boolean;
};
export const SelectedTrackDetailRoute = () => {
  const { isEmpty, isLoading, isReady, selectedTrack } = useOutletContext<DashboardOutletContext>();
  return (
    <SelectedTrackDetail
      selectedTrack={selectedTrack}
      isLoading={isLoading}
      isEmpty={isEmpty}
      isReady={isReady}
    />
  );
};
