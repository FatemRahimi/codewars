* It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

Go show some truth who's boss!
*/

const ifChuckSaysSo = () => 0 === 1;

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/Chuck_Norris_VII_True_or_False_Beginner.js

test('Chuck Norris VII - True or False? (Beginner):', () => {
  expect(ifChuckSaysSo()).toBe(false);
});