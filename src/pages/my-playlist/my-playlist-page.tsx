import { useMeQuery } from '../auth/api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';
import { Navigate } from '@tanstack/react-router';
import { MyTracksList } from './my-tracks-list';

export const MyPlayListPage = () => {
  const { data, isPending } = useMeQuery();

  if (!data?.userId) {
    return <Navigate to="/add-play-list-page" />;
  }
  return (
    <div className="w-full">
      <h1>Мои плейлисты</h1>

      {isPending && <Preloader />}
      <MyTracksList userId={data?.userId} />
    </div>
  );
};
