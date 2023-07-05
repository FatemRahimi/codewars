/*
Use map() to double the values in an array
Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
For example:

var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]
*/

function double(array) {
    return array.map((e) => e * 2);
  }
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS1-Week3/Use_map_to_double_the_values_in_an_array.js
  
  test('Use map() to double the values in an array', () => {
    expect(double([1, 2, 3, 4, 5])).toStrictEqual([2, 4, 6, 8, 10]);
    expect(double([71, -548, 12.3, 31415])).toStrictEqual([142, -1096, 24.6, 62830]);
  });