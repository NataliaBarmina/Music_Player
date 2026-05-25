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

      {isSuccess && !length && <Warning text={t('playlists.emptyTracks')} />}

      {isSuccess && (
        <ul>
          {length < 10 && <AddPlaylistButton />}

          {data.playlists.map((playlist) => {
            const coverURL = playlist.attributes.images.main?.[0]?.url;
            const title = playlist.attributes.title;
            const id = playlist.id;

            return (
              <li key={id}>
                <MusicGenreItem title={title} playlistId={id} coverURL={coverURL} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
