import { useForm } from 'react-hook-form';
import { useAddPlaylistMutation } from './use-add-play-list-mutation';
import { fieldStyle } from './styles';
import type { SchemaCreatePlaylistRequestPayload } from '@/shared/api/client/schema';

export const AddPlayListForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SchemaCreatePlaylistRequestPayload>({
    defaultValues: {
      data: {
        type: 'playlists',
        attributes: {
          title: '',
          description: '',
        },
      },
    },
  });

  const { mutateAsync } = useAddPlaylistMutation();

  const onSubmit = async (data: SchemaCreatePlaylistRequestPayload) => {
    try {
      await mutateAsync(data);

      reset();
    } catch (error) {
      console.log(error);

      setError('root.server', {
        type: 'server',
        message: 'Что-то пошло не так',
      });
      setError('data.attributes.title', {
        type: 'server',
        message: 'Такой плейлист уже существует',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] mx-auto">
      <input
        placeholder="введите название плейлиста"
        {...register('data.attributes.title', {
          required: 'Введите название плейлиста',
        })}
        className={fieldStyle}
      />
      {errors.data?.attributes?.title && <p>{errors.data.attributes.title.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'отправка...' : 'отправить'}
      </button>

      {errors.root?.server && <p>{errors.root?.server.message}</p>}
    </form>
  );
};
