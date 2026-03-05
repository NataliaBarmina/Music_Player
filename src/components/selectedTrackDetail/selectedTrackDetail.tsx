import { useTranslation } from 'react-i18next';
import type { TTracks } from '@common/types';
import { columnStyles, h2Styles } from '../app/styles';
import {
  warningStyle,
  selectedTrackTitleStyle,
  lyricHeaderStyle,
  lyricContentStyle,
} from './styles';
import { Preloader } from '@/common/preloader';

type TSelectedTrackDetail = {
  selectedTrack: TTracks | null;
  isEmpty: boolean;
  isLoading: boolean | null;
  isReady: boolean | null;
};

export const SelectedTrackDetail = ({
  isEmpty,
  isLoading,
  isReady,
  selectedTrack,
}: TSelectedTrackDetail) => {
  const { t } = useTranslation();

  return (
    <div className={columnStyles}>
      <h2 className={h2Styles}>{t('header.detail')}</h2>

      {isEmpty && (
        <div className="text-center">
          <span className={warningStyle}>{t('warning.noSelectedTrack')}</span>
        </div>
      )}

      {isLoading && <Preloader />}

      {isReady && (
        <div>
          <h2 className={selectedTrackTitleStyle}>
            {selectedTrack?.attributes.title.slice(0, 40)}
          </h2>
          <h3 className={lyricHeaderStyle}>{t('header.lyrics')}</h3>
          <div className={lyricContentStyle}>{selectedTrack?.attributes.lyrics}</div>
        </div>
      )}
    </div>
  );
};
export default SelectedTrackDetail;
