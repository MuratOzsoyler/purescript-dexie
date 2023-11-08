import Dexie from "dexie";

export const _new = function (dbName) {
  return function () {
    return new Dexie(dbName);
  };
};

export const _delete = function (dbName) {
  return function () {
    return Dexie.delete(dbName);
  };
};

export const _getDatabaseNames = function () {
  return Dexie.getDatabaseNames();
};

export const _exists = function (dbName) {
  return function () {
    return Dexie.exists(dbName);
  };
};

export const _getDebug = function () {
  return Dexie.debug;
};

export const _setDebug = function (isDebug) {
  return function () {
    Dexie.debug = isDebug;
  };
};
