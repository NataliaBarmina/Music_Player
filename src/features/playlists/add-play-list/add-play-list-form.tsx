import { useForm } from 'react-hook-form';
import { useAddPlaylistMutation } from './use-add-play-list-mutation';
import { fieldStyle, buttonStyle } from './styles';
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
      console.warn(error);

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
      {errors.data?.attributes?.title && (
        <p className="bg-red-400">{errors.data.attributes.title.message}</p>
      )}

      <button type="submit" disabled={isSubmitting} className={buttonStyle}>
        {isSubmitting ? 'отправка...' : 'отправить'}
      </button>

      {errors.root?.server && <p className="bg-red-400">{errors.root?.server.message}</p>}
    </form>
  );
};
