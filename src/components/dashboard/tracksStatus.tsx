import {
  warningBlockStyle,
  warningStyle,
} from './styles';
import { Preloader } from '@common/preloader';
import { useTranslation } from 'react-i18next';

type TTracksStatus ={
  loading: boolean;
  isTracksEmpty: boolean;
  error: string | null;
}

export const TracksStatus= ({loading, error, isTracksEmpty}:TTracksStatus)=> {
  const { t } = useTranslation();
  return (
    <>
        {loading && <Preloader />}

        {error && (
            <h2 className={warningBlockStyle}>
            <span className={warningStyle}>{error}</span>
            </h2>
        )}

        {isTracksEmpty && (
            <h2 className={warningBlockStyle}>
            <span className={warningStyle}>{t('warning.noTracks')}</span>
            </h2>
        )}
    </>
  )
}