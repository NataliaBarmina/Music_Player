import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';

export const useSelectedTrack = (selectedTrackId: string) => {
  return useQuery({
    queryKey: ['selectedTrack', selectedTrackId],

    staleTime: 0,
    enabled: Boolean(selectedTrackId),

    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists/tracks/{trackId}', {
        params: {
          path: { trackId: selectedTrackId },
        },
        signal,
      });
      return {
        lyrics: response.data?.data.attributes.lyrics,
        title: response.data?.data.attributes.title,
      };
    },
  });
};
