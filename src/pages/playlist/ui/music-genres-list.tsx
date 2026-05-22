import { QueryError } from '@/shared/ui/errors/queryError';
import { Preloader } from '@/shared/ui/loaders/preloader';
import { RefreshingIndicator } from '@/shared/ui/loaders/refreshing-indicator';
import { usePlaylistsQuery } from '../api/use-playlist-query';
import { Warning } from '@/shared/ui/notices/warning';
import { useTranslation } from 'react-i18next';
import { MusicGenreItem } from '@/entities/music-genre';
import { AddPlaylistButton } from '@/features/playlists';

export const MusicGenresList = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();

  // const [selectedPlayListId, setSelectedPlayListId] = useState<string | null>(null);

  const { data, isLoading, isError, error, isSuccess, isFetching } = usePlaylistsQuery(userId);

  const length = data?.playlists.length ?? 0;

  return (
    <div>
      {isError && <QueryError error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}

      {isSuccess && !data.playlists.length && <Warning text={t('playlists.emptyTracks')} />}

      {isSuccess && (
        <ul>
          {length < 10 && <AddPlaylistButton />}

          {data.playlists.map((playlist, i) => (
            <li key={playlist.id}>
              <MusicGenreItem
                title={playlist.attributes.title}
                position={i + 1}
                playlistId={playlist.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
