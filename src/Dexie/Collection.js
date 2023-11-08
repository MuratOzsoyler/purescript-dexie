export const _and = function (filter) {
  return function (collection) {
    return function () {
      return collection.and(filter);
    };
  };
};

export const _clone = function (collection) {
  return function () {
    return collection.clone();
  };
};

export const _count = function (collection) {
  return function () {
    return collection.count();
  };
};

export const _delete = function (collection) {
  return function () {
    return collection.delete();
  };
};

export const _distinct = function (collection) {
  return function () {
    return collection.distinct();
  };
};

export const _each = function (callback) {
  return function (collection) {
    return function () {
      return collection.each(function (item) {
        callback(item)();
      });
    };
  };
};

export const _eachKey = function (callback) {
  return function (collection) {
    return function () {
      return collection.eachKey(function (key) {
        callback(key)();
      });
    };
  };
};

export const _eachPrimaryKey = function (callback) {
  return function (collection) {
    return function () {
      return collection.eachPrimaryKey(function (primaryKey) {
        callback(primaryKey)();
      });
    };
  };
};

export const _eachUniqueKey = function (callback) {
  return function (collection) {
    return function () {
      return collection.eachUniqueKey(function (uniqueKey) {
        callback(uniqueKey)();
      });
    };
  };
};

export const _filter = function (filter) {
  return function (collection) {
    return function () {
      return collection.filter(filter);
    };
  };
};

export const _first = function (collection) {
  return function () {
    return collection.first();
  };
};

export const _keys = function (collection) {
  return function () {
    return collection.keys();
  };
};

export const _last = function (collection) {
  return function () {
    return collection.last();
  };
};

export const _limit = function (count) {
  return function (collection) {
    return function () {
      return collection.limit(count);
    };
  };
};

export const _modify = function (changes) {
  return function (collection) {
    return function () {
      return collection.modify(changes);
    };
  };
};

export const _offset = function (count) {
  return function (collection) {
    return function () {
      return collection.offset(count);
    };
  };
};

export const _or = function (indexName) {
  return function (collection) {
    return function () {
      return collection.or(indexName);
    };
  };
};

export const _primaryKeys = function (collection) {
  return function () {
    return collection.primaryKeys();
  };
};

export const _raw = function (collection) {
  return function () {
    return collection.raw();
  };
};

export const _reverse = function (collection) {
  return function () {
    return collection.reverse();
  };
};

export const _sortBy = function (keyPath) {
  return function (collection) {
    return function () {
      return collection.sortBy(keyPath);
    };
  };
};

export const _toArray = function (collection) {
  return function () {
    return collection.toArray();
  };
};

export const _uniqueKeys = function (collection) {
  return function () {
    return collection.uniqueKeys();
  };
};

export const _until = function (filterFn) {
  return function (includeStopEntry) {
    return function (collection) {
      return function () {
        return collection.until(filterFn, includeStopEntry);
      };
    };
  };
};

//
// Helpers

export const _createModifyMapper = function (getModifyReplaceValue) {
  return function (isModifyIgnore) {
    return function (isModifyDelete) {
      return function (fn) {
        return function (value) {
          var modifyEffect = fn(value);
          if (isModifyIgnore(modifyEffect)) return;
          if (isModifyDelete(modifyEffect)) {
            delete this.value;
            return;
          }
          this.value = getModifyReplaceValue(modifyEffect);
        };
      };
    };
  };
};
