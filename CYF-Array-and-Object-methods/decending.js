/* Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

const descendingOrder = (n) => parseInt(n.toString().split('').sort((a, b) => parseInt(b, 10) - parseInt(a, 10)).join(''), 10);

// TESTS - run the following command to test this file:
// npm run test -- JS2-Week2/Descending_Order.js

test('Descending Order', () => {
  expect(descendingOrder(0)).toBe(0);
  expect(descendingOrder(1)).toBe(1);
  expect(descendingOrder(111)).toBe(111);
  expect(descendingOrder(15)).toBe(51);
  expect(descendingOrder(1021)).toBe(2110);
  expect(descendingOrder(123456789)).toBe(987654321);
});