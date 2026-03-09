import { warningBlockStyle, warningStyle } from './styles';
import { Preloader } from '@/components/preloader';
import { useTranslation } from 'react-i18next';

type TTracksStatus = {
  isLoading: boolean;
  isEmpty: boolean;
};

export const TracksStatus = ({ isLoading, isEmpty }: TTracksStatus) => {
  const { t } = useTranslation();
  return (
    <>
      {isLoading && <Preloader />}

      {!isLoading && isEmpty && (
        <h2 className={warningBlockStyle}>
          <span className={warningStyle}>{t('warning.noTracks')}</span>
        </h2>
      )}
    </>
  );
};
