import type { SchemaPlaylistListItemResource } from '@/shared/api/client/schema';

export type TGetReorderPayload = {
  isMovingUp: boolean;
  selectedPlaylistIndex: number;
  playlists: SchemaPlaylistListItemResource[];
};

export type TReorderPlaylistButton = {
  playlistId: string;
  direction: 'up' | 'down';
};
