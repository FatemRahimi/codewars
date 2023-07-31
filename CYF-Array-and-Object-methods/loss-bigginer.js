/*
Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x) {
    return x.map((e) => e * 2);
  }
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS1-Week3/Beginner_Lost_Without_a_Map.js
  
  test('Use map() to double the values in an array', () => {
    expect(maps([1, 2, 3])).toStrictEqual([2, 4, 6]);
    expect(maps([4, 1, 1, 1, 4])).toStrictEqual([8, 2, 2, 2, 8]);
    expect(maps([2, 2, 2, 2, 2, 2])).toStrictEqual([4, 4, 4, 4, 4, 4]);
  });