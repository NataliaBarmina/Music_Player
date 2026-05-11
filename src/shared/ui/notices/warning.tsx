export const Warning = ({ text }: { text: string }) => {
  return (
    <div className="text-center my-14">
      <span className="bg-red-500/80 px-4 py-6 rounded-xl text-lg font-bold">{text}</span>
    </div>
  );
};
