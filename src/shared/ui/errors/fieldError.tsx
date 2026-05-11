export const FieldError = ({ message }: { message: string | undefined }) => {
  return <p className="text-red-500 font-bold mb-10 mx-auto">{message}</p>;
};
