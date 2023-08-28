/* Build a square
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

function generateShape(integer) {
    return `${'+'.repeat(integer)}\n`.repeat(integer).slice(0, -1);
  }
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS2-Week1/Build_a_square.js
  
  test('Build a square', () => {
    expect(generateShape(8)).toBe('++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
  });

