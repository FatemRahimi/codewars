/* eslint-disable no-nested-ternary */
/* Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

const isSortedAndHow = (arr) => {
    if (arr.length < 2) return 'yes, descending';
    let direction;
    for (let i = 1; i < arr.length; i++) {
      const currDir = arr[i] - arr[i - 1] >= 0 ? 'a' : 'd';
      if (!direction) direction = currDir;
      if (direction !== currDir) return 'no';
    }
    return direction === 'a' ? 'yes, ascending' : 'yes, descending';
  };
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS3-Week3/Sorted_yes_no_how.js
  
  test('Sorted? yes? no? how?', () => {
    expect(isSortedAndHow([1, 2])).toBe('yes, ascending');
    expect(isSortedAndHow([15, 7, 3, -8])).toBe('yes, descending');
    expect(isSortedAndHow([4, 2, 30])).toBe('no');
  });