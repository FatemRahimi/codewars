function findBall(scales) {
    function w(balls) {
      var l = balls.length;
      var p = Math.ceil(l/3);
      if (l === 1) {
        return balls[0];
      }
      var left = balls.slice(0,p);
      var right = balls.slice(-p);
      var middle = balls.slice(p,l-p);
      var result = scales.getWeight(left, right);
      return (result == -1) ? w(left) : (result == 1) ? w(right) : w(middle);
    }
      
    return w([0,1,2,3,4,5,6,7]);
  }describe("Tests", () => {
    it("test", () => {
  // these will pass
  Test.assertEquals(findBall(exampleScales_firstBallHeavier), 0);
  Test.assertEquals(findBall(exampleScales_secondBallHeavier), 1);
  
  // this will throw
  Test.assertEquals(findBall(exampleScales_lastBallHeavier), 7);
    });
  });
  