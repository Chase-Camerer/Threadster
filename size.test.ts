import { isSmall } from "./size"

test.each([
    '1234',
    'asd',
    'asdfghjkl'
])('Should be small: %s', (text) => {
  expect(isSmall(text)).toBe(true);
});
