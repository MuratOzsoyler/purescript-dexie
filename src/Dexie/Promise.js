import Dexie from "dexie";

function ensureError(error) {
  error = error != null ? error : new Error("Undefined error");
  error = typeof error !== "string" ? error : new Error(error);
  error = error instanceof Error ? error : new Error("Non-error thrown");
  return error;
}

function triggerThunks(promiseThunks) {
  return promiseThunks.map((promiseThunk) => promiseThunk());
}

function WrappedPromise(promise) {
  this.promise = promise;
}

// Avoid flattening promises by wrapping them first
function wrapIfPromise(value) {
  if (value == null) return value;
  if (value instanceof Dexie.Promise || typeof value.then === "function") {
    return new WrappedPromise(value);
  }
  return value;
}

function unwrap(value) {
  if (value == null) return value;
  if (value instanceof WrappedPromise) return value.promise;
  return value;
}

export const _new = function (callback) {
  return function () {
    return new Dexie.Promise(function (resolve, reject) {
      callback(function (value) {
        return function () {
          resolve(wrapIfPromise(value));
        };
      })(function (error) {
        return function () {
          reject(error);
        };
      })();
    });
  };
};

export const all = function (promiseThunks) {
  return function () {
    return Dexie.Promise.all(triggerThunks(promiseThunks));
  };
};

export const allSettled = function (promiseThunks) {
  return function () {
    return Dexie.Promise.allSettled(triggerThunks(promiseThunks));
  };
};

export const any = function (promiseThunks) {
  return function () {
    return Dexie.Promise.any(triggerThunks(promiseThunks));
  };
};

export const _catch = function (fn) {
  return function (promiseThunk) {
    return function () {
      try {
        return promiseThunk().catch(function (error) {
          return fn(ensureError(error))();
        });
      } catch (error) {
        return fn(ensureError(error))();
      }
    };
  };
};

export const _finally = function (fn) {
  return function (promiseThunk) {
    return function () {
      return promiseThunk().finally(fn);
    };
  };
};

export const race = function (promiseThunks) {
  return function () {
    return Dexie.Promise.race(triggerThunks(promiseThunks));
  };
};

export const reject = function (error) {
  return function () {
    return Dexie.Promise.reject(error);
  };
};

export const resolve = function (value) {
  return function () {
    return Dexie.Promise.resolve(wrapIfPromise(value));
  };
};

export const _then = function (fn) {
  return function (promiseThunk) {
    return function () {
      return promiseThunk().then(function (value) {
        return fn(unwrap(value))();
      });
    };
  };
};

export const _liftEffect = function (thunk) {
  return function () {
    return Dexie.Promise.resolve(wrapIfPromise(thunk()));
  };
};

export const _launch = function (thunk) {
  return thunk;
};

export const _join = function (launchedPromise) {
  return function () {
    return launchedPromise;
  };
};
