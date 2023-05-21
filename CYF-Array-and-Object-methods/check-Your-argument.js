
/*Bob has written a function to detect the type of an object.
 It receives any primitive values or objects, and returns its object type as a string. 
 But it seems to be working incorrectly. Can you figure out why, and fix the code for him?*/

function objectType(obj) {
    return Object.prototype.toString.call(arguments.length === 0 ? null : obj);
  }


















  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(objectType(42),'[object Number]','42 should return [object Number]');
  Test.assertEquals(objectType(false),'[object Boolean]','false should return [object Boolean]');
  Test.assertEquals(objectType(function(){return this;}),'[object Function]','function(){} should return [object Function]');
  Test.assertEquals(objectType('Hello World!'),'[object String]','\'Hello world\' should return [object string]');
  
  Test.assertEquals(objectType({foo:'bar'}),'[object Object]','Normal objects should return [object Object]');
  Test.assertEquals(objectType([1,4,6,4,1]),'[object Array]','Arrays should return [object Array]');
  Test.assertEquals(objectType(new Date(2012,11,21)),'[object Date]','Date object should return [object Date]');
  Test.assertEquals(objectType(new RegExp(/^_^/g)),'[object RegExp]','RegExp object should return [object RegExp]');
  Test.assertEquals(objectType(Math),'[object Math]','Math object should return [object Math]');
  Test.assertEquals(objectType(new Error('this kata is too awesome')),'[object Error]','Error object should return [object Error]');
  Test.assertEquals(objectType(Symbol('[native code]')),'[object Symbol]','Symbol object should return [object Symbol]');
  
  Test.assertEquals(objectType(NaN),'[object Number]','NaN should return [object Number]');
  Test.assertEquals(objectType(null),'[object Null]','null should return [object Null]');
  Test.assertEquals(objectType(undefined),'[object Undefined]','undefined should return [object Undefined]');
  Test.assertEquals(objectType(),'[object Null]','no arguments should return [object Null]');
    });
  });
  