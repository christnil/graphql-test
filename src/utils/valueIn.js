const INPUT_STRING_SPLIT = '.';

function toArr(path) {
  if (typeof path === 'string') {
    return path.split(INPUT_STRING_SPLIT);
  }

  if (Object.prototype.toString.call(path) === '[object Array]') {
    return [].concat(path);
  }

  return [];
}

function valueIn(target, path, notFound = undefined) {
  const pathArr = toArr(path);

  if (typeof target === 'undefined' || target === null) {
    return notFound;
  }

  if (!pathArr.length) {
    return target;
  }

  let ptr = target;

  while (pathArr.length) {
    if (ptr === undefined || ptr === null) {
      return notFound;
    }

    ptr = ptr[pathArr.shift()];
  }

  if (ptr === undefined || ptr === null) {
    return notFound;
  }
  return ptr;
}

valueIn.array = function valueInArray(array, key) {
  return !!array && !!array.indexOf && !!~array.indexOf(key); // eslint-disable-line no-bitwise
};

export default valueIn;
