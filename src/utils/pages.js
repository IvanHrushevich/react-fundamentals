export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const createArrayOfDigits = (n) => [...Array(n + 1).keys()].slice(1);
