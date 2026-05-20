import { useTranslation } from 'react-i18next';
import { Preloader } from '@/shared/ui/loaders/preloader';
import { useSelectedTrack } from './use-selected-track';
import { QueryError } from '@/shared/ui/errors/queryError';
import { getRouteApi } from '@tanstack/react-router';
import { Warning } from '@/shared/ui/notices/warning';
import { TrackLyrics } from '@/entities/track-lyric';

const routeApi = getRouteApi('/tracks/$trackId');

export const TrackDetailPage = () => {
  const { t } = useTranslation();

  const { trackId } = routeApi.useParams();
  const selectedTrackId = String(trackId);

  const {
    data: selectedTrack,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useSelectedTrack(selectedTrackId);

  return (
    <div className="mx-auto h-[99vh] w-full">
      <h1>{t('trackDetails.title')}</h1>

      {isError && <QueryError error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}

      {isSuccess && (
        <TrackLyrics
          title={selectedTrack?.title}
          lyrics={selectedTrack?.lyrics}
          lyricsTitle={t('trackDetails.lyricsTitle')}
        />
      )}

      {isSuccess && !selectedTrack?.lyrics && <Warning text={t('trackDetails.empty')} />}
    </div>
  );
};
