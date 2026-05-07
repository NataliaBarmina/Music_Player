import { useMeQuery } from '../auth/api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';
import { MyPlayList } from './my-playlist';
import { Warning } from '@/shared/ui/warning';
import { useTranslation } from 'react-i18next';

export const MyPlayListPage = () => {
  const { data, isPending } = useMeQuery();
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h1>{t('playlists.title')}</h1>

      {isPending && <Preloader />}

      {!data?.userId && <Warning text={t('playlists.authRequiredToGetPlayList')} />}

      {data?.userId && <MyPlayList userId={data?.userId} />}
    </div>
  );
};
