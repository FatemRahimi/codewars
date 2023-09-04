/* Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

const abbrevName = (name) => `${name[0].toUpperCase()}.${name[name.indexOf(' ') + 1].toUpperCase()}`;
// TESTS - run the following command to test this file:
// npm run test -- JS1-Week2/Abbreviate_a_Two_Word_Name.js

test('Basic Mathematical Operations', () => {
  expect(abbrevName('Sam Harris')).toBe('S.H');
  expect(abbrevName('Patrick Feenan')).toBe('P.F');
  expect(abbrevName('Evan Cole')).toBe('E.C');
  expect(abbrevName('P Favuzzi')).toBe('P.F');
});