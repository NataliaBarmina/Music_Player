export type TTracks = {
  id: number;
  title: string;
  url: string;
  duration?: number;
  attributes: {
    title: string;
    lyrics: string;
    attachments: { url: string }[];
  };
};
