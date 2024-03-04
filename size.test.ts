import { isSmall } from "./size"

test.each(['asd'])('See if value would work', (text) => {
  expect(isSmall(text)).toBe(true);
});
