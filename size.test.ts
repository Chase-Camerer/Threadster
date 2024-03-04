import { isSmall } from "./size"

test.each([
    'asd',
    'asdfghjkl'
])('Should be small: %s', (text) => {
  expect(isSmall(text)).toBe(true);
});
