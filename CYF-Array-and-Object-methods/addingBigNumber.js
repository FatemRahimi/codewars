function add(a, b) {
    const length = Math.max(a.length, b.length);
    a = a.padStart(length, '0');
    b = b.padStart(length, '0');
    const aDigits = [...a];
    const bDigits = [...b];  
    const resultDigits = [];
    let carry = 0;
    for (let i = length - 1; i >= 0; i -= 1) {
      const result = +aDigits[i] +  +bDigits[i] + carry;
      if (result < 10) {
        resultDigits.unshift(result);
        carry = 0;
      } else {
        resultDigits.unshift(result % 10);
        carry = 1;
      }
    }
    if (carry) {
      resultDigits.unshift(carry);
    }
    return resultDigits.join('');
  }