import { useTranslation } from 'react-i18next';
import { h2Styles } from '../../pages/dashboard/styles';
import {
  warningStyle,
  selectedTrackTitleStyle,
  lyricHeaderStyle,
  lyricContentStyle,
} from './styles';
import { Preloader } from '@/components/preloader';
import { useEffect } from 'react';
import type { TSelectedTrackDetail } from './selectedTrackDetailRoute';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client';

export const SelectedTrackDetail = ({
  selectedTrackId,
  setSelectedTrackId,
}: TSelectedTrackDetail) => {
  const { t } = useTranslation();

  useEffect(() => {
    return () => setSelectedTrackId(null);
  }, [selectedTrackId]);

  const {
    data: selectedTrack,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['selectedTrack'],
    queryFn: async () => {
      if (selectedTrackId === null) return null;
      const response = await client.GET('/playlists/tracks/{trackId}', {
        params: {
          path: { trackId: selectedTrackId },
        },
      });
      return {
        lyrics: response.data?.data.attributes.lyrics,
        title: response.data?.data.attributes.title.slice(0, 40),
      };
    },
  });

  if (isError) {
    return <div>Ошибка: {error instanceof Error ? error.message : 'Что-то пошло не так'}</div>;
  }

  const isEmpty = !isLoading && !selectedTrack?.lyrics;
  const isReady = !isLoading;

  return (
    <div>
      <h2 className={h2Styles}>{t('header.detail')}</h2>
      {isLoading && <Preloader />}
      {isReady && (
        <div>
          <h2 className={selectedTrackTitleStyle}>{selectedTrack?.title}</h2>
          <h3 className={lyricHeaderStyle}>{t('header.lyrics')}</h3>
          <div className={lyricContentStyle}>{selectedTrack?.lyrics}</div>
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
