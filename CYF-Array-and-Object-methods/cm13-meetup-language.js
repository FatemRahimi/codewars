/* eslint-disable no-return-assign */
/* Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.
*/

const isLanguageDiverse = (list) => {
    const langs = {};
    list.forEach((e) => langs[e.language] = !langs[e.language] ? 1 : langs[e.language] + 1);
    const arr = Object.values(langs).sort((a, b) => b - a);
    return arr[0] <= arr[arr.length - 1] * 2;
  };
  
  // TESTS - run the following command to test this file:
  // npm run test -- CYF-Array-and-Object-methods/CM_13_Is_the_meetup_language_diverse.js
  
  const list1 = [
    {
      firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python',
    },
    {
      firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby',
    },
    {
      firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby',
    },
    {
      firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript',
    },
    {
      firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript',
    },
    {
      firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript',
    },
  ];
  
  const list2 = [
    {
      firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python',
    },
    {
      firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby',
    },
    {
      firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript',
    },
    {
      firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript',
    },
    {
      firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript',
    },
  ];
  
  const list3 = [
    {
      firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python',
    },
    {
      firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby',
    },
    {
      firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript',
    },
    {
      firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript',
    },
  ];
  
  const list4 = [
    {
      firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python',
    },
    {
      firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby',
    },
    {
      firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript',
    },
  ];
  
  test('Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?', () => {
    expect(isLanguageDiverse(list1)).toBe(false);
    expect(isLanguageDiverse(list2)).toBe(false);
    expect(isLanguageDiverse(list3)).toBe(true);
    expect(isLanguageDiverse(list4)).toBe(true);
  });