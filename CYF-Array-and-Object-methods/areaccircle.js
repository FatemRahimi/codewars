var circleArea = function(radius) {
    if(isNaN(radius) || radius <= 0) return false;
    return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
  };// You can use `chai` for assertions.
 
  
  describe("Solution", function() {
    it("should test for something", function() {
      // Test.assertEquals(1 + 1, 2);
      // assert.strictEqual(1 + 1, 2);
    });
  });
  