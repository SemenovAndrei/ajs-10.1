import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

/**
 * @class GameSavingLoader
 */
class GameSavingLoader {
  /**
   * return new Promise(string)
   */
  static load(data) {
    return new Promise(
      (resolve, reject) => read(data)
        .then((readData) => json(readData))
        .then((jsonData) => new GameSaving(JSON.parse(jsonData)))
        .catch((error) => reject(error))
        .then((result) => resolve(result)),
    );
  }
}

export default GameSavingLoader;
