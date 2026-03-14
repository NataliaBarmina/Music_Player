export const ErrorPage = ({ error }: { error: Error | null }) => {
  return <div>Ошибка: {error?.message ?? 'Что-то пошло не так'}</div>;
};
