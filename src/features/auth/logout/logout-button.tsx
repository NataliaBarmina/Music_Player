import { useLogicMutation } from './use-logic-mutation';
import { useTranslation } from 'react-i18next';

export const LogoutButton = ({ login }: { login: string }) => {
  const { t } = useTranslation();

  const mutation = useLogicMutation();

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
