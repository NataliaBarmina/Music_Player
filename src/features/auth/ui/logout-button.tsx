import { useLogoutMutation } from '../api/use-logout-mutation';
import { useTranslation } from 'react-i18next';

export const LogoutButton = ({ login }: { login: string }) => {
  const { t } = useTranslation();

  const mutation = useLogoutMutation();

  return (
    <div className=" w-full text-right ">
      <div>{login ?? ''}</div>
      <button
        className="button-primary"
        onClick={() => {
          mutation.mutate();
        }}
      >
        {t('button.logout')}
      </button>
    </div>
  );
};
