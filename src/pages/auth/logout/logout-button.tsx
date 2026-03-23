import { useLogicMutation } from './use-logic-mutation';

export const LogoutButton = ({ login }: { login: string | undefined }) => {
  const mutation = useLogicMutation();

  const handleLogoutClick = () => {
    mutation.mutate();
  };

  return (
    <div className=" w-full text-right ">
      <div className="text-black ">{login}</div>
      <button className="inline-block mr-4" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};
