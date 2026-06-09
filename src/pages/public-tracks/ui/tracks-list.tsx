import { useState } from 'react';
import { blockStyle } from './styles';
import { QueryError } from '@/shared/ui/errors/queryError';
import { Preloader } from '@/shared/ui/loaders/preloader';
import { RefreshingIndicator } from '@/shared/ui/loaders/refreshing-indicator';
import { SearchField } from '@/shared/ui/fields/searchField';
import { useEffect } from 'react';
import { Pagination } from '@/shared/ui/pagination';
import { useTranslation } from 'react-i18next';
import { Track } from '@/entities/track';
import { useTracksListQuery } from '../api/use-tracks-list-query';

export const TracksList = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // чтобы запрос уходил не на каждый символ, а после 500 мс после остановки ввода
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const {
    data: { tracks = [], pagesCount = 0 } = {},
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useTracksListQuery({ page, search });

  return (
    <div className={blockStyle}>
      {isError && <QueryError error={error instanceof Error ? error : null} />}

      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}

      <SearchField search={search} setSearch={setSearch} />

      {isSuccess && (
        <div className="w-full">
          <h1>{t('tracks.title')}</h1>

          <Pagination current={page} pagesCount={pagesCount} changePageNumber={setPage} />

          <ul className="text-center">
            {tracks.map((track) => (
              <Track
                key={track.id}
                id={track.id}
                title={track.attributes.title.slice(0, 40)}
                url={track.attributes.attachments?.[0]?.url}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
