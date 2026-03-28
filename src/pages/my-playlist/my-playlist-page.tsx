import { useMeQuery } from '../auth/api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';
import { Navigate } from '@tanstack/react-router';
import { TracksList } from '../tracks-list';

export const MyPlayListPage = () => {
  const { data, isPending } = useMeQuery();

  return (
    <div className="w-full">
      <h1>Мои плейлисты</h1>

      {isPending && <Preloader />}

      {!data && <Navigate to="/" replace />}
      <TracksList userId={data?.userId} />
    </div>
  );
};
