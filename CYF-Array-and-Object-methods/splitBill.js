/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/*
It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20,
    B: 15,
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/

const splitTheBill = (x) => {
    const cost = (Object.values(x).reduce((a, b) => a + b) / Object.keys(x).length).toFixed(2);
    Object.keys(x).map((k) => x[k] = parseFloat((x[k] - cost).toFixed(2)));
    return x;
  };
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS2-Week3/Split_The_Bill.js
  
  test('Split The Bill', () => {
    expect(splitTheBill({
      A: 40, B: 25, C: 10, D: 153, E: 58,
    })).toStrictEqual({
      A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8,
    });
    expect(splitTheBill({ A: 40, B: 25, X: 10 })).toStrictEqual({ A: 15, B: 0, X: -15 });
  });