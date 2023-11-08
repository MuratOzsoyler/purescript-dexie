export const _abort = function (transaction) {
  return function () {
    return transaction.abort();
  };
};

export const _table = function (storeName) {
  return function (transaction) {
    return function () {
      return transaction.table(storeName);
    };
  };
};
