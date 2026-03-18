import { type ChangeEvent } from 'react';

type TSearchField = {
  search: string;
  setSearch: (search: string) => void;
};

const containerStyle = 'text-center pt-6 pb-10';
const inputStyle = ' text-green-950 px-4 py-3 w-[50%] border-[2px] border-pink-950 ';

export const SearchField = ({ search, setSearch }: TSearchField) => {
  return (
    <div className={containerStyle}>
      <input
        value={search}
        placeholder={'search...'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
        className={inputStyle}
      ></input>
    </div>
  );
};
