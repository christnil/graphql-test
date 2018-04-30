import CacheFramework from './framework';
import Redis from './redis';
import InMemory from './inMemory';

export default class Cache {
  constructor() {
    this.framework = new CacheFramework();
    this.framework.use(new InMemory());
    this.framework.use(new Redis());
  }

  get = (keys
}

