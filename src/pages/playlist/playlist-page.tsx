import { useMeQuery } from '../auth/api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';
import { MusicGenresList } from './music-genres-list';
import { Warning } from '@/shared/ui/warning';
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
