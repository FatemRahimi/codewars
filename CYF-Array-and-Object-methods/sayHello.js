/* Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World" */

const say = (string1) => (string2) => `${string1} ${string2}`;

// TESTS - run the following command to test this file:
// npm run test -- JS3-Week2/Say_Hello_World_JS_Style.js

test('Say "Hello World" JS Style', () => {
  expect(say('Hello')('World')).toBe('Hello World');