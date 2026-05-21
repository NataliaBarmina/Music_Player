import { useMeQuery } from '@/features/auth';
import { Preloader } from '@/shared/ui/loaders/preloader';
import { AddPlayListForm } from '@/features/playlists/add-playlist/add-playlist-form';
import { Warning } from '@/shared/ui/notices/warning';
import { useTranslation } from 'react-i18next';

export const AddPlayListPage = () => {
  const { t } = useTranslation();

  const { data, isPending } = useMeQuery();

  return (
    <div className="w-full">
      <h1>{t('playlists.addPlayList')}</h1>

      {isPending && <Preloader />}

      {!data?.userId && <Warning text={t('playlists.authRequiredToAddPlayList')} />}

      {data?.userId && <AddPlayListForm />}
    </div>
  );
};
