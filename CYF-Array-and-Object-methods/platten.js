/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

const flatten = (array) => [].concat(...array);

// TESTS - run the following command to test this file:
// npm run test -- JS2-Week2/Flatten.js

test('Flatten', () => {
  expect(flatten([])).toStrictEqual([]);
  expect(flatten([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(flatten([[1, 2, 3], ['a', 'b', 'c'], [1, 2, 3]])).toStrictEqual([1, 2, 3, 'a', 'b', 'c', 1, 2, 3]);
  expect(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])).toStrictEqual([3, 4, 5, [9, 9, 9], 'a,b,c']);
  expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).toStrictEqual([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
});