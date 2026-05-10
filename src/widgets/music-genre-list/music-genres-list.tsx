import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { usePlayList } from '@/pages/playlist/use-playlist';
import { Warning } from '@/shared/ui/warning';
import { useTranslation } from 'react-i18next';
import { MusicGenreItem } from '@/entities/music-genre';

export const MusicGenresList = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();

  // const [selectedPlayListId, setSelectedPlayListId] = useState<string | null>(null);

  const { data, isLoading, isError, error, isSuccess, isFetching } = usePlayList(userId);

  return (
    <div className="w-[90%] mx-auto">
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}

      {isSuccess && !data.tracks.length && <Warning text={t('playlists.emptyTracks')} />}

      {/* && !selectedPlayListId */}
      {isSuccess && (
        <ul>
          {data.tracks.map((track, i) => (
            <li key={track.id}>
              <MusicGenreItem title={track.attributes.title} position={i + 1} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
