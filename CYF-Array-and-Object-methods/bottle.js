/* eslint-disable no-nested-ternary */
/* 99 Bottles of Beer
Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Example
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]
 */

  const sing = () => {
    const answer = [];
    for (let i = 99; i > 0; i--) {
      let text = i === 1 ? '1 bottle' : i === 0 ? 'no more bottles' : `${i} bottles`;
      answer.push(`${text} of beer on the wall, ${text} of beer.`);
      text = i - 1 === 1 ? '1 bottle' : i - 1 === 0 ? 'no more bottles' : `${i - 1} bottles`;
      answer.push(`Take one down and pass it around, ${text} of beer on the wall.`);
    }
    answer.push(
      'No more bottles of beer on the wall, no more bottles of beer.',
      'Go to the store and buy some more, 99 bottles of beer on the wall.',
    );
    return answer;
  };
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS2-Week2/99_Bottles_of_Beer.js
  
  test('99 Bottles of Beer', () => {
    expect(sing()[0]).toBe('99 bottles of beer on the wall, 99 bottles of beer.');
    expect(sing()[199]).toBe('Go to the store and buy some more, 99 bottles of beer on the wall.');
  });