export type TPlayList = { title: string; position: number };

export const PlayList = ({ title, position }: TPlayList) => {
  return (
    <div className=" mt-8 text-black">
      <span>{position}) </span>
      <span>{title}</span>
      <button className="bg-inherit border-none inline-block">🗑️</button>
    </div>
  );
};
