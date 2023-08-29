/* Unique Sum
Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null
Good Luck!
*/

const uniqueSum = (lst) => [...new Set(lst)].reduce((a, cv) => a + cv, null);

/* Unique Sum
Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null
Good Luck!
*/

const uniqueSum = (lst) => [...new Set(lst)].reduce((a, cv) => a + cv, null);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/Unique_Sum.js

test('Unique Sum', () => {
  expect(uniqueSum([1, 2])).toBe(3);
  expect(uniqueSum([1, 2, 3])).toBe(6);
  expect(uniqueSum([1, 3, 8, 1, 8])).toBe(12);
  expect(uniqueSum([-1, -1, 5, 2, -7])).toBe(-1);
  expect(uniqueSum([])).toBe(null);
});