// DESCRIPTION:
// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

// ;)

function hammingWeight(x) {
    let i = 0
    while (x > 0) {
      i += x & 1
      x >>= 1
    }
    return i
  }
  const { expect } = require('chai');

describe("Sample Test Cases", () => {
  it("should return 2 for binary number 10", () => {
    const result = hammingWeight(10);
    expect(result).to.equal(2);
  });

  it("should return 3 for binary number 21", () => {
    const result = hammingWeight(21);
    expect(result).to.equal(3);
  });
});