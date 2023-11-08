export const _add = function (item) {
  return function (nullableKey) {
    return function (table) {
      return function () {
        return table.add(item, nullableKey);
      };
    };
  };
};

export const _bulkAdd = function (items) {
  return function (nullableKeys) {
    return function (table) {
      return function () {
        return table.bulkAdd(items, nullableKeys, { allKeys: true });
      };
    };
  };
};

export const _bulkDelete = function (keys) {
  return function (table) {
    return function () {
      return table.bulkDelete(keys);
    };
  };
};

export const _bulkGet = function (keys) {
  return function (table) {
    return function () {
      return table.bulkGet(keys);
    };
  };
};

export const _bulkPut = function (items) {
  return function (nullableKeys) {
    return function (table) {
      return function () {
        return table.bulkPut(items, nullableKeys, { allKeys: true });
      };
    };
  };
};

export const _clear = function (table) {
  return function () {
    return table.clear();
  };
};

export const _count = function (table) {
  return function () {
    return table.count();
  };
};

export const _delete = function (key) {
  return function (table) {
    return function () {
      return table.delete(key);
    };
  };
};

export const _each = function (callback) {
  return function (table) {
    return function () {
      return table.each(function (item) {
        callback(item)();
      });
    };
  };
};

export const _filter = function (filterFn) {
  return function (table) {
    return function () {
      return table.filter(filterFn);
    };
  };
};

export const _get = function (indexQuery) {
  return function (table) {
    return function () {
      return table.get(indexQuery);
    };
  };
};

export const _onCreating = function (callback) {
  return function (table) {
    return function () {
      function listener(primaryKey, item, transaction) {
        var self = this;
        return callback({
          primaryKey,
          item,
          transaction,
          setOnSuccess: function (onSuccess) {
            return function () {
              self.onsuccess = function (primaryKey) {
                try {
                  return onSuccess(primaryKey)();
                } catch (error) {
                  console.error(error);
                }
              };
            };
          },
          setOnError: function (onError) {
            return function () {
              self.onerror = function (error) {
                try {
                  return onError(error)();
                } catch (error) {
                  console.error(error);
                }
              };
            };
          },
        })();
      }

      table.hook("creating", listener);

      return function () {
        table.hook("creating").unsubscribe(listener);
      };
    };
  };
};

export const _onDeleting = function (callback) {
  return function (table) {
    return function () {
      function listener(primaryKey, item, transaction) {
        var self = this;
        callback({
          primaryKey,
          item,
          transaction,
          setOnSuccess: function (onSuccess) {
            return function () {
              self.onsuccess = function () {
                try {
                  return onSuccess();
                } catch (error) {
                  console.error(error);
                }
              };
            };
          },
          setOnError: function (onError) {
            return function () {
              self.onerror = function (error) {
                try {
                  return onError(error)();
                } catch (error) {
                  console.error(error);
                }
              };
            };
          },
        })();
      }

      table.hook("deleting", listener);

      return function () {
        table.hook("deleting").unsubscribe(listener);
      };
    };
  };
};

export const _onReading = function (callback) {
  return function (table) {
    return function () {
      function listener(item) {
        return callback(item)();
      }

      table.hook("reading", listener);

      return function () {
        table.hook("reading").unsubscribe(listener);
      };
    };
  };
};

export const _onUpdating = function (callback) {
  return function (table) {
    return function () {
      function listener(modifications, primaryKey, item, transaction) {
        var self = this;
        return callback({
          modifications,
          primaryKey,
          item,
          transaction,
          setOnSuccess: function (onSuccess) {
            return function () {
              self.onsuccess = function (updatedItem) {
                try {
                  return onSuccess(updatedItem)();
                } catch (error) {
                  console.error(error);
                }
              };
            };
          },
          setOnError: function (onError) {
            return function () {
              self.onerror = function (error) {
                try {
                  return onError(error)();
                } catch (error) {
                  console.error(error);
                }
              };
            };
          },
        })();
      }

      table.hook("updating", listener);

      return function () {
        table.hook("updating").unsubscribe(listener);
      };
    };
  };
};

export const _limit = function (n) {
  return function (table) {
    return function () {
      return table.limit(n);
    };
  };
};

export const _name = function (table) {
  return function () {
    return table.name;
  };
};

export const _offset = function (n) {
  return function (table) {
    return function () {
      return table.offset(n);
    };
  };
};

export const _orderBy = function (index) {
  return function (table) {
    return function () {
      return table.orderBy(index);
    };
  };
};

export const _put = function (item) {
  return function (nullableKey) {
    return function (table) {
      return function () {
        return table.put(item, nullableKey);
      };
    };
  };
};

export const _reverse = function (table) {
  return function () {
    return table.reverse();
  };
};

export const _toArray = function (table) {
  return function () {
    return table.toArray();
  };
};

export const _toCollection = function (table) {
  return function () {
    return table.toCollection();
  };
};

export const _update = function (key) {
  return function (changes) {
    return function (table) {
      return function () {
        return table.update(key, changes);
      };
    };
  };
};

export const _whereClause = function (index) {
  return function (table) {
    return function () {
      return table.where(index);
    };
  };
};

export const _whereValues = function (valuesObject) {
  return function (table) {
    return function () {
      return table.where(valuesObject);
    };
  };
};
