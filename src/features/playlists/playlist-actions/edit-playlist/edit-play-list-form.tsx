import { useForm } from 'react-hook-form';
import { getPlayListTitle } from './get-playlist-title';
import { useUpdatePlaylist } from './use-update-playlist';
import { useNavigate } from '@tanstack/react-router';

//todo -обработка ошибок, трай кетч, проброс ошибок, компоненты ошибок
//todo - ай 18 некст
//todo стили и типы вынести

type Inputs = {
  playlistTitle: string;
};

export const EditPlayListForm = () => {
  const navigate = useNavigate();

  const { playlistTitle, playlistId } = getPlayListTitle();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      playlistTitle,
    },
  });

  const { mutateAsync } = useUpdatePlaylist(playlistId);

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
    navigate({ to: '/playlist-page' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto text-center mt-10">
      <h1>Редактирование плейлиста</h1>

      <input {...register('playlistTitle', { required: true })} className="input mb-14 " />

      {errors.playlistTitle && <span>This field is required</span>}

      <button type="submit" className="button">
        отправить
      </button>
    </form>
  );
};
