export default class CacheFramework {
  constructor(fetch) {
    this.layers = [];
    this.fetch = fetch;
  }

  use = (name, callBack) {
    this.layers.push([name, callBack]);
  }

  _getFromLayers = (index, cacheInfo) => async (keys, options) => {
    const start = +new Date();
    let data = [];
    if (!this.layers[index]) {
      data = await  this.fetch(keys);
    } else {
      data = await this.layers[index][1](keys, options, this._getFromLayers(index + 1, cacheInfo));
    }
    const stop = +new Date();
    cacheInfo[this.layer[index][0]] = stop - start;
    return data;
  }

  get = async (keys, options = {}, caheInfo = {}) => {
    let single = !Array.isArray(keys);
    const normalizedKeys = single ? [keys] : keys;
    const result = await this._getFromLayers(0, cacheInfo)(normalizedKeys, options);
    if (single) {
      return result[0];
    }
    return result;
  }
}

