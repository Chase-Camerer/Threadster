import { isQuick } from "./time"

test('Should be quick: ', () => {
  expect(isQuick('10.05', '12.14')).toBe(true);
});
