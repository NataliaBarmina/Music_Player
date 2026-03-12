import { useTranslation } from 'react-i18next';
import { h2Styles } from '@/pages/dashboard';
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
import { ErrorPage } from '@/components/errorsPage';

export const SelectedTrackDetail = ({
  selectedTrackId,
  setSelectedTrackId,
}: TSelectedTrackDetail) => {
  const { t } = useTranslation();

  useEffect(() => {
    return () => setSelectedTrackId(null);
  }, [selectedTrackId]);

  console.log('SelectedTrackDetail', selectedTrackId);

  const {
    data: selectedTrack,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    staleTime: 0,
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

  return (
    <div>
      <h2 className={h2Styles}>{t('header.detail')}</h2>
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isSuccess && (
        <div>
          <h2 className={selectedTrackTitleStyle}>{selectedTrack?.title}</h2>
          <h3 className={lyricHeaderStyle}>{t('header.lyrics')}</h3>
          <div className={lyricContentStyle}>{selectedTrack?.lyrics}</div>
        </div>
      )}
      {!selectedTrack?.lyrics && (
        <div className="text-center">
          <span className={warningStyle}>{t('warning.noText')}</span>
        </div>
      )}
    </div>
  );
};
