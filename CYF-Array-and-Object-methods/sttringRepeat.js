/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

const repeatStr = (n, s) => s.repeat(n);

/ TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/String_repeat.js

test('String Repeat: (3, "*") must return ***', () => {
  expect(repeatStr(3, '*')).toBe('***');
});
test('String Repeat: (5, "#") must return #####', () => {
  expect(repeatStr(5, '#')).toBe('#####');
});
test('String Repeat: (2, "ha ") must return ha ha', () => {
  expect(repeatStr(2, 'ha ')).toBe('ha ha ');
});
