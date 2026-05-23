import { useEditPlaylistData } from '../model/use-edit-playlist-data';
import { useUpdatePlaylistMutation } from '../api/use-update-playlist-mutation';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { PlaylistForm } from '../../shared/ui/playlist-form';
import type { PlaylistFormInputs } from '../../shared/types/types';

export const EditPlaylist = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { playlistTitle, playlistId } = useEditPlaylistData();

  const { mutateAsync } = useUpdatePlaylistMutation(playlistId);

  const onSubmit = async (data: PlaylistFormInputs) => {
    await mutateAsync({
      data: {
        type: 'playlists',
        attributes: {
          title: data.playlistTitle,
          description: null,
          tagIds: [],
        },
      },
    });
    navigate({ to: '/playlist' });
  };

  return (
    <PlaylistForm
      pageTitle={t('playlists.editPlaylist')}
      defaultTitle={playlistTitle}
      onSubmit={onSubmit}
    />
  );
};
