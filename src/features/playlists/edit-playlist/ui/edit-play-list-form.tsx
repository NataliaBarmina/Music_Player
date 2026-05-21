import { useForm } from 'react-hook-form';
import { useEditPlaylistData } from '../model/use-edit-playlist-data';
import { useUpdatePlaylistMutation } from '../api/use-update-playlist-mutation';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { FieldError } from '@/shared/ui/errors/fieldError';
import { FormButton } from '@/shared/ui/buttons/form-button';

type Inputs = {
  playlistTitle: string;
};

export const EditPlayListForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { playlistTitle, playlistId } = useEditPlaylistData();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      playlistTitle,
    },
  });

  const { mutateAsync } = useUpdatePlaylistMutation(playlistId);

  const onSubmit = async (data: Inputs) => {
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
  const titleError = errors.playlistTitle;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto text-center mt-10">
      <h1>{t('playlists.editPlaylist')}</h1>

      <input {...register('playlistTitle', { required: true })} className="input mb-14 " />

      {titleError && <FieldError message={t('form.titleRequired')} />}

      <FormButton isSubmitting={isSubmitting} />
    </form>
  );
};
