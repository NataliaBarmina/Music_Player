import { LoginButton } from '../login';
import { LogoutButton } from '../logout';
import { useMeQuery } from '../api/use-me-query';
import { Preloader } from '@/shared/ui/preloader';

//  ПРОВЕРЯЕМ АВТОРИЗАЦИЮ ПОЛЬЗОВАТЕЛЯ

export const AccountBar = () => {
  const { data, isLoading } = useMeQuery();

  return (
    <div className="w-[70%] mx-auto h-24 bg-green-950/50  border-green-950/10 border-8">
      {isLoading && <Preloader />}
      {data ? <LogoutButton login={data.login} /> : <LoginButton />}
    </div>
  );
};
