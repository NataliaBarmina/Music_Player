import { LoginButton } from '../login';
import { LogoutButton } from '../logout';
import { useMeQuery } from '../api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';

//  ПРОВЕРЯЕМ АВТОРИЗАЦИЮ ПОЛЬЗОВАТЕЛЯ

export const AccountBar = () => {
  const { data, isLoading } = useMeQuery();
  return (
    <div>
      {isLoading && <Preloader />}
      {data ? <LogoutButton login={data.login} /> : <LoginButton />}
    </div>
  );
};
