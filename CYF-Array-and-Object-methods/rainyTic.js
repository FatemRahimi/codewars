const S = "TACO"

function rainTacos(landscape) {
  let arr = landscape.split`\n`.map(x => [...x])
  for(let i = 0; i < arr[0].length; i++){
    let j = 0
    while(arr[j][i] == ' '){
      j++
      if(j == arr.length) break
    }
    if(j > 0) arr[j - 1][i] = S[i % 4]
  }
  return arr.map(x => x.join``).join`\n`
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function() {
  it("Empty String", function() {
    assert.deepEqual(rainTacos(""), "");
  });
  it("Flat Landscape", function() {
    assert.deepEqual(rainTacos("     \n     \nOOOOO"), "     \nTACOT\nOOOOO");
  });
  it("No Tacos", function() {
    assert.deepEqual(rainTacos("OOOOO\nOOOOO\nOOOOO"), "OOOOO\nOOOOO\nOOOOO");
  });
  it("Taco Island", function() {
    assert.deepEqual(rainTacos("       \n       \n   O   \n  OOO  \n TACOS "), "       \n   O   \n  COT  \n AOOOA \nTTACOSC");
  });
  it("Deep Trench", function() {
    assert.deepEqual(rainTacos("* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *"), "* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n*A*");
  });
  it("Long Landscape", function() {
    assert.deepEqual(rainTacos("              \n--------------"), "TACOTACOTACOTA\n--------------");
  });
  it("Floating Island", function() {
    assert.deepEqual(rainTacos("          \n    ==    \n          \n          \n          "), "    TA    \n    ==    \n          \n          \nTACO  COTA");
  });
});