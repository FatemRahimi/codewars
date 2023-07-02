/*
Numbers to Objects
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
*/

function numObj(s) {
    return s.map((e) => ({ [e]: String.fromCharCode(e) }));
  }
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS2-Week1/Numbers_to_Objects.js
  
  test('Numbers to Objects', () => {
    expect(numObj([118, 117, 120])).toStrictEqual([{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }]);
    expect(numObj([101, 121, 110, 113, 113, 103])).toStrictEqual([{ 101: 'e' }, { 121: 'y' }, { 110: 'n' }, { 113: 'q' }, { 113: 'q' }, { 103: 'g' }]);
  });