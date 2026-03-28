export type TTrack = {
  id: string;
  title: string;
  url: string | undefined;
  setSelectedTrackId: (id: string) => void;
};

export type TTrackList = { userId?: string };

export type TUsePlayListTracks = {
  page: number;
  search?: string;
  userId?: string;
};
