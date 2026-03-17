export const DOTS = '...' as const;

type PaginationItem = number | typeof DOTS;

export const getPaginationPages = (
  current: number,
  pagesCount: number,
  siblingCount: number,
): PaginationItem[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (pagesCount <= totalPageNumbers) {
    return Array.from({ length: pagesCount }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblingCount, 1);
  const rightSiblingIndex = Math.min(current + siblingCount, pagesCount);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < pagesCount - 1;

  const firstPageIndex = 1;
  const lastPageIndex = pagesCount;

  if (!showLeftDots && showRightDots) {
    const leftItemCount = 3 + siblingCount * 2;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);

    return [...leftRange, DOTS, lastPageIndex];
  }

  if (showLeftDots && !showRightDots) {
    const rightItemCount = 3 + siblingCount * 2;
    const start = pagesCount - rightItemCount + 1;
    const rightRange = Array.from({ length: rightItemCount }, (_, i) => start + i);

    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (showLeftDots && showRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i,
    );

    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return [];
};
