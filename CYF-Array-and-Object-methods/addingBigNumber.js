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


  //test 
  describe("Add two numbers", function(){
    it("should pass basic tests", function() {
      Test.assertEquals(add("1", "1"), "2");
      Test.assertEquals(add("123", "456"), "579");
      Test.assertEquals(add("888", "222"), "1110");
      Test.assertEquals(add("1372", "69"), "1441");
      Test.assertEquals(add("12", "456"), "468");
      Test.assertEquals(add("101", "100"), "201");
      Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
    });
  });