import { useMeQuery } from '../auth/api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';
import { AddPlayListForm } from './add-play-list-form';
import { Warning } from '@/shared/ui/warning';
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
