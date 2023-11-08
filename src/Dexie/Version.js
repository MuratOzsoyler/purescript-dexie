export const _stores = function (storesObject) {
  return function (version) {
    return function () {
      return version.stores(storesObject);
    };
  };
};

export const _upgrade = function (callback) {
  return function (version) {
    return function () {
      return version.upgrade(function (trnx) {
        return callback(trnx)();
      });
    };
  };
};
