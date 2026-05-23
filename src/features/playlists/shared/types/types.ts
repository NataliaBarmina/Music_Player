export type PlaylistFormInputs = {
  playlistTitle: string;
};

export type TPlaylistForm = {
  pageTitle: string;
  placeholder?: string;
  defaultTitle?: string;
  onSubmit: (data: PlaylistFormInputs) => Promise<void>;
};
