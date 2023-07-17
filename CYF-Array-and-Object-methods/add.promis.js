/* A Promise is a Promise 
Create a resolved javascript Promise that will return 'Hello World!'.
*/

const promiseHelloWorld = async () => 'Hello World!'; 

// TESTS - run the following command to test this file:
// npm run test -- JS3-Week2/A_Promise_is_a_Promise.js

test('A Promise is a Promise', () => {
    promiseHelloWorld().then(res=>{
        expect(res).toBe('Hello World!');  
    })   
});
  