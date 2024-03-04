import { isSmall } from "./size"

test('See if value would work',() => {
    expect(isSmall('asd')).toBe(true);
});
