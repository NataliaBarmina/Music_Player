import { useLogicMutation } from './use-logic-mutation';

export const LogoutButton = ({ login }: { login: string }) => {
  const mutation = useLogicMutation();

  return (
    <div className=" w-full text-right ">
      <div>{login ?? ''}</div>
      <button
        className="inline-block mr-4"
        onClick={() => {
          mutation.mutate();
        }}
      >
        Logout
      </button>
    </div>
  );
};
