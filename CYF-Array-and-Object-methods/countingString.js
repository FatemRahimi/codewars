function countSubsequences(needle, haystack) {
  // returns the number of subsequences as an integer
  // write your solution here ... 

    var m = haystack.length;
    var n = needle.length;
 

    var lookup = Array(m + 1);
    for(var i = 0; i < m + 1; i++)
        lookup[i] = Array(n + 1).fill(0);
 
    for(i = 0; i <= n; ++i)
        lookup[0][i] = 0;
 
    for(i = 0; i <= m; ++i)
        lookup[i][0] = 1;
 

    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
        {
             
            if (haystack.charAt(i - 1) == needle.charAt(j - 1))
                lookup[i][j] = lookup[i - 1][j - 1] +
                               lookup[i - 1][j];
            else

                lookup[i][j] = lookup[i - 1][j];
        }
    }
    return lookup[m][n];
}
describe("countSubsequences", function(){
    it ("should return 1 for `appyh appy birth day`", function(){
   
 SKIP     Test.assertEquals(countSubsequences("happy birthday", "appyh appy birth day"), 1);
    });
    
    it ("should return 0 for `happybirthday`", function(){
        Test.assertEquals(countSubsequences("happy birthday", "happybirthday"), 0);
    });
    
    it ("should return 2048 for `hhaappyy bbiirrtthhddaayy`", function(){
        Test.assertEquals(countSubsequences("happy birthday", "hhaappyy bbiirrtthhddaayy"), 2048);
    });