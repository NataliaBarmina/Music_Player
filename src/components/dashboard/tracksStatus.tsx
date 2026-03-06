import { warningBlockStyle, warningStyle } from './styles';
import { Preloader } from '@common/preloader';
import { useTranslation } from 'react-i18next';

type TTracksStatus = {
  isLoading: boolean;
  isTracksEmpty: boolean;
  // error: string | null;
};

export const TracksStatus = ({ isLoading, isTracksEmpty }: TTracksStatus) => {
  const { t } = useTranslation();
  return (
    <>
      {isLoading && <Preloader />}

      {/* {error && (
            <h2 className={warningBlockStyle}>
            <span className={warningStyle}>{error}</span>
            </h2>
        )} */}

      {!isLoading && isTracksEmpty && (
        <h2 className={warningBlockStyle}>
          <span className={warningStyle}>{t('warning.noTracks')}</span>
        </h2>
      )}
    </>
  );
};
