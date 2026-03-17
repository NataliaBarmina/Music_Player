import { getPaginationPages, DOTS } from './getPaginationPages';
import { containerStyle, currentButtonStyle, buttonStyle } from './styles';
import type { TPagination } from './types';

const SIBLING_COUNT = 1; // сколько страниц показывать слева и справа

export const Pagination = ({ current, pagesCount, changePageNumber }: TPagination) => {
  const pages = getPaginationPages(current, pagesCount, SIBLING_COUNT);
  return (
    <div className={containerStyle}>
      {pages.map((item: number | '...', i: number) =>
        item === DOTS ? (
          <span key={i}>...</span>
        ) : (
          <button
            key={i}
            className={item === current ? currentButtonStyle : buttonStyle}
            onClick={() => item !== current && changePageNumber(item)}
            type="button"
            disabled={item === current}
          >
            {item}
          </button>
        ),
      )}
    </div>
  );
};
