import { useTranslation } from 'react-i18next';
import { h2Styles } from '@/pages/dashboard';
import {
  warningStyle,
  selectedTrackTitleStyle,
  lyricHeaderStyle,
  lyricContentStyle,
} from './styles';
import { Preloader } from '@/shared/ui/preloader';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client';
import { ErrorPage } from '@/shared/ui/error-page';
import { getRouteApi } from '@tanstack/react-router';

const routeApi = getRouteApi('/tracks/$trackId');

export const SelectedTrackDetail = () => {
  const { trackId } = routeApi.useParams();
  const selectedTrackId = String(trackId);
  const { t } = useTranslation();

  const {
    data: selectedTrack,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    staleTime: 0,
    queryKey: ['selectedTrack', selectedTrackId],
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
