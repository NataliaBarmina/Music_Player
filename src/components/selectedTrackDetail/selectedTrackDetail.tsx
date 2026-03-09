import { useTranslation } from 'react-i18next';
import type { TTracks } from '@common/types';
import { h2Styles } from '../dashboard/styles';
import {
  warningStyle,
  selectedTrackTitleStyle,
  lyricHeaderStyle,
  lyricContentStyle,
} from './styles';
import { Preloader } from '@/common/preloader';
import { API_BASE_URL, API_HEADERS } from '@common/constants';
import { useEffect } from 'react';
import { useState } from 'react';
import type { TSelectedTrackDetail } from './selectedTrackDetailRoute';

export const SelectedTrackDetail = ({
  selectedTrackId,
  setSelectedTrackId,
}: TSelectedTrackDetail) => {
  const { t } = useTranslation();
  const [selectedTrack, setSelectedTrack] = useState<TTracks | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => setSelectedTrackId(null);
  }, [selectedTrackId]);

  useEffect(() => {
    if (!selectedTrackId) return;

    setIsLoading(true);

    fetch(`${API_BASE_URL}/${selectedTrackId}`, {
      headers: API_HEADERS,
    })
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
      .finally(() => setIsLoading(false));
  }, [selectedTrackId]);

  const isEmpty = !isLoading && !selectedTrack?.attributes.lyrics;
  const isReady = !isLoading;

  return (
    <div>
      <h2 className={h2Styles}>{t('header.detail')}</h2>
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
      {isEmpty && (
        <div className="text-center">
          <span className={warningStyle}>{t('warning.noText')}</span>
        </div>
      )}
    </div>
  );
};
