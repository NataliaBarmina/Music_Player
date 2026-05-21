import { LoginButton } from '@/features/auth/ui/login';
import { LogoutButton } from '@/features/auth';
import { useMeQuery } from '@/features/auth';
import { Preloader } from '@/shared/ui/loaders/preloader';

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
