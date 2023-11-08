export const _above = function (lowerBound) {
  return function (whereClause) {
    return function () {
      return whereClause.above(lowerBound);
    };
  };
};

export const _aboveOrEqual = function (lowerBound) {
  return function (whereClause) {
    return function () {
      return whereClause.aboveOrEqual(lowerBound);
    };
  };
};

export const _anyOf = function (keys) {
  return function (whereClause) {
    return function () {
      return whereClause.anyOf(keys);
    };
  };
};

export const _anyOfIgnoreCase = function (keys) {
  return function (whereClause) {
    return function () {
      return whereClause.anyOfIgnoreCase(keys);
    };
  };
};

export const _below = function (upperBound) {
  return function (whereClause) {
    return function () {
      return whereClause.below(upperBound);
    };
  };
};

export const _belowOrEqual = function (upperBound) {
  return function (whereClause) {
    return function () {
      return whereClause.belowOrEqual(upperBound);
    };
  };
};

export const _between = function (lowerBound) {
  return function (upperBound) {
    return function (includeLower) {
      return function (includeUpper) {
        return function (whereClause) {
          return function () {
            return whereClause.between(
              lowerBound,
              upperBound,
              includeLower,
              includeUpper
            );
          };
        };
      };
    };
  };
};

export const _equals = function (key) {
  return function (whereClause) {
    return function () {
      return whereClause.equals(key);
    };
  };
};

export const _equalsIgnoreCase = function (key) {
  return function (whereClause) {
    return function () {
      return whereClause.equalsIgnoreCase(key);
    };
  };
};

export const _inAnyRange = function (ranges) {
  return function (includeLowers) {
    return function (includeUppers) {
      return function (whereClause) {
        return function () {
          return whereClause.inAnyRange(ranges, {
            includeLowers: includeLowers,
            includeUppers: includeUppers,
          });
        };
      };
    };
  };
};

export const _noneOf = function (keys) {
  return function (whereClause) {
    return function () {
      return whereClause.noneOf(keys);
    };
  };
};

export const _notEqual = function (key) {
  return function (whereClause) {
    return function () {
      return whereClause.notEqual(key);
    };
  };
};

export const _startsWith = function (prefix) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWith(prefix);
    };
  };
};

export const _startsWithAnyOf = function (prefixes) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWithAnyOf(prefixes);
    };
  };
};

export const _startsWithIgnoreCase = function (prefix) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWithIgnoreCase(prefix);
    };
  };
};

export const _startsWithAnyOfIgnoreCase = function (prefixes) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWithAnyOfIgnoreCase(prefixes);
    };
  };
};
