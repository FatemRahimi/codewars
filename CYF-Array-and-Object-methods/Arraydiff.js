/* Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/Array.diff.js

test('Array.diff', () => {
  expect(arrayDiff([], [4, 5])).toStrictEqual([]);
  expect(arrayDiff([3, 4], [3])).toStrictEqual([4]);
  expect(arrayDiff([1, 8, 2], [])).toStrictEqual([1, 8, 2]);
  expect(arrayDiff([1, 2, 3], [1, 2])).toStrictEqual([3]);
});