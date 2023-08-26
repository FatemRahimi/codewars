/* 5 without numbers !!
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
*/

const unusualFive = () => 'abcde'.length;

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/5_without_numbers.js

test('5 without numbers !!', () => {
  expect(unusualFive()).toBe(5);
});