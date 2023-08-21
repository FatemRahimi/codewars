/* Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

const findOdd = (A) => {
    const counts = {}
    A.forEach(e=> counts[e] ? counts[e]++ : counts[e] = 1);
    for (const key of Object.keys(counts)) {
      if (counts[key] % 2 !== 0){
        return parseInt(key)
      }
    }
}
// TESTS - run the following command to test this file:
// npm run test -- JS3-Week2/Find_the_odd_int.js

test('Find the odd int', () => {    
    expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5);
    expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toBe(-1); 
    expect(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])).toBe(5); 
    expect(findOdd([10])).toBe(10); 
    expect(findOdd([1,1,1,1,1,1,10,1,1,1,1])).toBe(10); 
    expect(findOdd([5,4,3,2,1,5,4,3,2,10,10])).toBe(1);
});
