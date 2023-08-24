/* This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.
*/

const preFizz = (n) => [...Array(n)].map((e, i) => i + 1);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/Pre_FizzBuzz_Workout_1.js

test('Pre-FizzBuzz Workout #1', () => {
  expect(preFizz(1)).toStrictEqual([1]);
  expect(preFizz(2)).toStrictEqual([1, 2]);
  expect(preFizz(3)).toStrictEqual([1, 2, 3]);
  expect(preFizz(4)).toStrictEqual([1, 2, 3, 4]);
  expect(preFizz(5)).toStrictEqual([1, 2, 3, 4, 5]);
});