/* Coding Meetup #10 - Higher-Order Functions Series - Create usernames
Given the following input array:
var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:
firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
*/

function addUsername(list) {
    const year = new Date().getFullYear();
    const un = (fn, ln, y) => (fn + ln).toLowerCase() + y;
    return list.map((e) => ({ ...e, username: un(e.firstName, e.lastName[0], year - e.age) }));
  }
  
  // TESTS - run the following command to test this file:
  // npm run test -- CYF-Array-and-Object-methods/CM_10_Create_usernames.js
  
  test('Coding Meetup #10 - Higher-Order Functions Series - Create usernames', () => {
    expect(addUsername([{
      firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python',
    }])).toStrictEqual([{
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 19,
      language: 'Python',
      username: 'harryk2003',
    }]);
    expect(addUsername([{
      firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure',
    }, {
      firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript',
    }, {
      firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby',
    }, {
      firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby',
    }, {
      firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C',
    }, {
      firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C',
    }, {
      firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python',
    }, {
      firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby',
    }, {
      firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP',
    }, {
      firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript',
    }])).toStrictEqual([{
      firstName: 'Sofia',
      lastName: 'P.',
      country: 'Italy',
      continent: 'Europe',
      age: 41,
      language: 'Clojure',
      username: 'sofiap1981',
    }, {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 29,
      language: 'JavaScript',
      username: 'kseniyat1993',
    }, {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
      username: 'jingx1983',
    }, {
      firstName: 'Noa',
      lastName: 'A.',
      country: 'Israel',
      continent: 'Asia',
      age: 40,
      language: 'Ruby',
      username: 'noaa1982',
    }, {
      firstName: 'Andrei',
      lastName: 'E.',
      country: 'Romania',
      continent: 'Europe',
      age: 59,
      language: 'C',
      username: 'andreie1963',
    }, {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 60,
      language: 'C',
      username: 'marias1962',
    }, {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 75,
      language: 'Python',
      username: 'lukasx1947',
    }, {
      firstName: 'Chloe',
      lastName: 'K.',
      country: 'Guernsey',
      continent: 'Europe',
      age: 88,
      language: 'Ruby',
      username: 'chloek1934',
    }, {
      firstName: 'Viktoria',
      lastName: 'W.',
      country: 'Bulgaria',
      continent: 'Europe',
      age: 98,
      language: 'PHP',
      username: 'viktoriaw1924',
    }, {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
      username: 'piotrb1894',
    }]);
  });