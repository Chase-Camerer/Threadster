import { isSmall } from "./size"

test.each(['asd'])('Should be small: %s', (text) => {
  expect(isSmall(text)).toBe(true);
});
