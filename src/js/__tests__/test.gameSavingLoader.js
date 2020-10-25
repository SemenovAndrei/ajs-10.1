import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

describe('success load()', () => {
  test('load data', () => {
    const expect = GameSavingLoader.load()
      .then((saving) => {
        // eslint-disable-next-line no-new
        new GameSaving(JSON.parse(saving));
        const result = new GameSaving(JSON.parse(data));
        expect(expect).toEqual(result);
        // eslint-disable-next-line no-undef
        done();
      });
  });
});
