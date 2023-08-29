/* eslint-disable no-restricted-syntax */
/* The takeWhile Function
Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

takeWhile(seq, isEven) // -> [2,4,6,8]
Your task is to implement the takeWhile function.

If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.
*/

const takeWhile = (arr, pred) => {
  const answer = [];
  for (const el of arr) {
    if (!pred(el)) break;
    answer.push(el);
  }
  return answer;
};

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/The_takeWhile_Function.js

function isEven(num) {
  return num % 2 === 0;
}

const isEvenTests = [
  [[2, 6, 4, 10, 1, 5, 4, 3], [2, 6, 4, 10]],
  [[998, 996, 12, -1000, 200, 0, 1, 1, 1], [998, 996, 12, -1000, 200, 0]],
  [[2, 4, 10, 100, 64, 78, 92], [2, 4, 10, 100, 64, 78, 92]]];

test('The takeWhile Function', () => {
  expect(takeWhile(isEvenTests[0][0], isEven)).toStrictEqual(isEvenTests[0][1]);
  expect(takeWhile(isEvenTests[1][0], isEven)).toStrictEqual(isEvenTests[1][1]);
  expect(takeWhile(isEvenTests[2][0], isEven)).toStrictEqual(isEvenTests[2][1]);
});