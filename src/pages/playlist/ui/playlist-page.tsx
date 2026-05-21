import { useMeQuery } from '@/features/auth';
import { Preloader } from '@/shared/ui/loaders/preloader';
import { MusicGenresList } from '@/pages/playlist/ui/music-genres-list';
import { Warning } from '@/shared/ui/notices/warning';
import { useTranslation } from 'react-i18next';

export const PlayListPage = () => {
  const { data, isPending } = useMeQuery();
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h1>{t('playlists.title')}</h1>

      {isPending && <Preloader />}

      {!data?.userId && <Warning text={t('playlists.authRequiredToGetPlayList')} />}

      {data?.userId && <MusicGenresList userId={data?.userId} />}
    </div>
  );
};
