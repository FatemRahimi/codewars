/*
Hells Kitchen
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

function gordon(a) {
    return `${a.toUpperCase().replace(/ /g, '!!!! ').replace(/A/g, '@').replace(/[EIOU]/g, '*')}!!!!`;
  }
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS1-Week3/Hells_Kitchen.js
  
  test('Logical calculator', () => {
    expect(gordon('What feck damn cake')).toBe('WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
    expect(gordon('are you stu pid')).toBe('@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
    expect(gordon('i am a chef')).toBe('*!!!! @M!!!! @!!!! CH*F!!!!');
  });