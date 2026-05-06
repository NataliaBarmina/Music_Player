import { useState } from 'react';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { SearchField } from '@/shared/ui/searchField';
import { useMyPlayList } from './use-my-playlist';

export const MyTracksList = ({ userId }: { userId: string }) => {
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

      {/* && !selectedPlayListId */}
      {isSuccess && (
        <ul>
          {data.tracks.map((track, i) => (
            <li key={track.id}>
              <div className=" mt-8 text-black">
                <span>{i + 1}) </span>
                <span>{track.attributes.title}</span>
                <button className="bg-inherit border-none inline-block">🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
