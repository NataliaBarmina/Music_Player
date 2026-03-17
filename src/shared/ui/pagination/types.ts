export type TPagination = {
  current: number;
  pagesCount: number;
  changePageNumber: (page: number) => void;
};
