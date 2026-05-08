import { useState } from 'react';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { SearchField } from '@/shared/ui/searchField';
import { usePlayList } from './use-playlist';
import { Warning } from '@/shared/ui/warning';
import { useTranslation } from 'react-i18next';
import { MusicGenreItem } from '../selected-music-genre.tsx/music-genre-item';

export const MusicGenresList = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();

  // const [selectedPlayListId, setSelectedPlayListId] = useState<string | null>(null);

  const [search, setSearch] = useState('');

  const { data, isLoading, isError, error, isSuccess, isFetching } = usePlayList({
    search,
    userId,
  });

  return (
    <div className="w-[90%] mx-auto">
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}

      <SearchField search={search} setSearch={setSearch} />

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
