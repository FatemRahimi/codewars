/* Small enough? - Beginner
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

const smallEnough = (a, limit) => (!(a.filter((e) => e > limit).length > 0));

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week2/Small_enough_Beginner.js

test('Return Negative', () => {
  expect(smallEnough([66, 101], 200)).toBe(true);
  expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false);
  expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true);
  expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true);
});