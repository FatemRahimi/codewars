const b=2;
function add (a){
    return function(b){
        return a + b;
    }
}

/*const add = require('./add');

describe('add', () => {
  it('should return a function that adds x and y', () => {
    const addFive = add(5);
    expect(addFive(3)).toBe(8);
    expect(addFive(7)).toBe(12);
  });
});*/
  const addFive=add(5);
  console.log(addFive(3));