import read from './reader';
import json from './parser';

/**
 * @class GameSavingLoader
 */
class GameSavingLoader {
  /**
   * return new Promise(string)
   */
  static load() {
    return new Promise(
      (resolve, reject) => read()
        .then((data) => json(data))
        .then((result) => resolve(result))
        .catch((error) => reject(error)),
    );
  }
}

export default GameSavingLoader;
