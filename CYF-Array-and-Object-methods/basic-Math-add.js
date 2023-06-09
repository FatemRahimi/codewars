/* Basic Math (Add or Subtract)
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

const calculate = (str) => {
    const arr = str.split(/plus|minus/);
    const operators = str.split(/\d/).filter((e) => e);
    let answer = parseInt(arr[0], 10);
    for (let i = 1; i < arr.length; i++) {
      answer += operators[i - 1] === 'plus' ? parseInt(arr[i], 10) : -parseInt(arr[i], 10);
    }
    return answer.toString();
  };
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS2-Week2/Basic_Math_Add_or_Substract.js
  
  test('Basic Math (Add or Subtract)', () => {
    expect(calculate('1plus2plus3plus4')).toBe('10');
    expect(calculate('1minus2minus3minus4')).toStrictEqual('-8');
    expect(calculate('1plus2plus3minus4')).toStrictEqual('2');
  });