export type TMusicGenreItem = { title: string; position: number };

export const MusicGenreItem = ({ title, position }: TMusicGenreItem) => {
  return (
    <div className=" mt-8 text-black">
      <span>{position}) </span>
      <span>{title}</span>
      <button className="bg-inherit border-none inline-block">🗑️</button>
    </div>
  );
};
