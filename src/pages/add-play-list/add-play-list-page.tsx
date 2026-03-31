import { Navigate } from '@tanstack/react-router';
import { useMeQuery } from '../auth/api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';
// import { AddPlayListForm } from './add-play-list-form';

export const AddPlayListPage = () => {
  const { data, isPending } = useMeQuery();

  if (!data) {
    <Navigate to="/" replace />;
  }

  return (
    <div className="w-full">
      <h1>Добавление плейлиста</h1>
      {isPending && <Preloader />}
      <div> AddPlayListForm</div> //todo -удалить, это просто временная заглушка
      {/* <AddPlayListForm /> */}
    </div>
  );
};
