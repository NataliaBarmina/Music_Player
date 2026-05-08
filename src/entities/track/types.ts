export type TTrack = {
  id: string;
  title: string;
  url: string | undefined;
  setSelectedTrackId: (id: string) => void;
};
