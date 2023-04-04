/* Coding Meetup #11 - Higher-Order Functions Series - Find the average age
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:
var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).
Notes:
The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
*/

const getAverageAge = (list) => Math.round(list.reduce((a, e) => e.age + a, 0) / list.length);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/CM_11_Find_the_average_age.js

const list1 = [
  {
    firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java',
  },
  {
    firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python',
  },
];

const list2 = [
  {
    firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby',
  },
  {
    firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C',
  },
];

test('Coding Meetup #11 - Higher-Order Functions Series - Find the average age', () => {
  expect(getAverageAge(list1)).toBe(50);
  expect(getAverageAge(list2)).toBe(21);
});