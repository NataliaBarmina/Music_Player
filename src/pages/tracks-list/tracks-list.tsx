import { useState } from 'react';
import { blockStyle } from './styles';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { ErrorPage } from '@/shared/ui/error-page';
import { Preloader } from '@/shared/ui/preloader';
import { RefreshingIndicator } from '@/shared/ui/refreshing-indicator';
import { SearchField } from '@/shared/ui/searchField';
import { useEffect } from 'react';
import { Pagination } from '@/shared/ui/pagination';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { Track } from '@/shared/ui/track';

// todo: спрятать ключ
// todo: одновременно проигрывать только одну песню

export type TTracks = {
  id: string;
  attributes: {
    attachments: { url: string }[];
    title: string;
  };
};

export type TTracksList = {
  tracks: TTracks[];
  setSelectedTrackId: (trackId: string | null) => void;
  current: number;
  pagesCount: number;
  changePageNumber: (page: number) => void;
};

export const TracksList = ({ userId }: { userId?: string }) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPage(1);
  }, [search]);

  const {
    data: { tracks = [], pagesCount = 0 } = {},
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery({
    refetchInterval: 5 * 60 * 1000,
    queryKey: ['playlists', { page, search, userId }], //при большом количестве параметров объединять их в объекты - поможет избежать путаницы
    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists/tracks', {
        params: {
          query: {
            pageNumber: page,
            search,
            userId,
          },
        },
        signal,
      });
      if (response.error) {
        throw (response as unknown as { error: Error }).error;
      }
      return {
        tracks: response.data?.data ?? [],
        pagesCount: response.data?.meta.pagesCount ?? 0,
      };
    },
    placeholderData: keepPreviousData, // пока грузятся новые данные, показываются старые данные
  });

  return (
    <div className={blockStyle}>
      {isError && <ErrorPage error={error instanceof Error ? error : null} />}
      {isLoading && <Preloader />}
      {isFetching && <RefreshingIndicator />}
      <SearchField search={search} setSearch={setSearch} />

      {isSuccess && !selectedTrackId && (
        <Tracks
          tracks={tracks}
          setSelectedTrackId={setSelectedTrackId}
          current={page}
          pagesCount={pagesCount}
          changePageNumber={setPage}
        />
      )}
    </div>
  );
};

export const Tracks = ({
  tracks,
  setSelectedTrackId,
  current,
  pagesCount,
  changePageNumber,
}: TTracksList) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setSelectedTrackId(id);
    navigate({
      to: '/tracks/$trackId',
      params: { trackId: id },
    });
  };

  return (
    <div className="w-full">
      <h1>{t('header.tracksList')}</h1>

      <Pagination current={current} pagesCount={pagesCount} changePageNumber={changePageNumber} />

      <ul className="text-center">
        {tracks.map((track) => (
          <Track
            key={track.id}
            id={track.id}
            title={track.attributes.title.slice(0, 40)}
            url={track.attributes.attachments?.[0]?.url}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};
