import { useQuery } from '@tanstack/react-query';
import { client } from '@/shared/api/client/client';
import { tracksListKeys } from '@/shared/api/keys-factories/tracks-list-factories';

export const useSelectedTrackQuery = (selectedTrackId: string) => {
  return useQuery({
    queryKey: tracksListKeys.detail(selectedTrackId),

    enabled: Boolean(selectedTrackId), // срабатывает только когда есть selectedTrackId

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
