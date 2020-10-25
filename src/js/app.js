import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

console.log(GameSavingLoader.load());

GameSavingLoader.load()
  .then((saving) => console.log(new GameSaving(JSON.parse(saving))))
  .catch((error) => {
    throw new Error(error);
  });
