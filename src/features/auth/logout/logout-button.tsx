import { buttonStyle } from '../styles';
import { useLogicMutation } from './use-logic-mutation';

export const LogoutButton = ({ login }: { login: string }) => {
  const mutation = useLogicMutation();

  return (
    <div className=" w-full text-right ">
      <div>{login ?? ''}</div>
      <button
        className={buttonStyle}
        onClick={() => {
          mutation.mutate();
        }}
      >
        Logout
      </button>
    </div>
  );
};
