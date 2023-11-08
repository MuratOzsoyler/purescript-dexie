export const _version = function (versionNumber) {
  return function (db) {
    return function () {
      return db.version(versionNumber);
    };
  };
};

export const _table = function (storeName) {
  return function (db) {
    return function () {
      return db.table(storeName);
    };
  };
};

export const _tables = function (db) {
  return function () {
    return db.tables;
  };
};

export const _transaction = function (db) {
  return function (mode) {
    return function (tables) {
      return function (callback) {
        return function () {
          return db.transaction(mode, tables, function (transaction) {
            return callback(transaction)();
          });
        };
      };
    };
  };
};

export const _open = function (db) {
  return function () {
    return db.open();
  };
};

export const _close = function (db) {
  return function () {
    return db.close();
  };
};

export const _onBlocked = function (callback) {
  return function (db) {
    return function () {
      return db.on("blocked", callback);
    };
  };
};

export const _onReady = function (callback) {
  return function (db) {
    return function () {
      return db.on("ready", callback);
    };
  };
};

export const _onVersionChange = function (callback) {
  return function (db) {
    return function () {
      return db.on("versionchange", callback);
    };
  };
};
