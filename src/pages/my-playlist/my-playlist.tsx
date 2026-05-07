import { useState } from 'react';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { SearchField } from '@/shared/ui/searchField';
import { useMyPlayList } from './use-my-playlist';
import { Warning } from '@/shared/ui/warning';
import { useTranslation } from 'react-i18next';
import { PlayList } from './playlist';

export const MyPlayList = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();

  // const [selectedPlayListId, setSelectedPlayListId] = useState<string | null>(null);

  const [search, setSearch] = useState('');

  const { data, isLoading, isError, error, isSuccess, isFetching } = useMyPlayList({
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
              <PlayList title={track.attributes.title} position={i + 1} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
