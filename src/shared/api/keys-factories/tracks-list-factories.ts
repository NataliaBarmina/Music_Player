import type { TUseTracksListQuery } from '@/pages/public-tracks/types';

export const tracksListKeys = {
  all: ['generalTracks'],

  list: (params: TUseTracksListQuery) => [...tracksListKeys.all, params],

  detail: (trackId: string) => [...tracksListKeys.all, trackId],
};
