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
