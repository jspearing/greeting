// Kieran Dillon
// Greet function npm testing

const { TestScheduler } = require('@jest/core');
var utils  = require('course-utilities');
var expect = require('expect.js');
var greet = utils.load('./greet.js', 'greet');

var name1 = "Enzo";
var name2 = null;
var name3 = "LUCA";
var name4 = ["Luca", "Enzo"];
var name5 = ["Luca","Enzo", "Gonzo"];

// Test 1 -> function returns "hello" + name

describe ('greeting', () =>  {

   // Test to return hello name
   test('function returns "hello" + name', () => {
     expect(greet(name1)).to.be("Hello " + name1);
    })

   // Test 2 -> if name === null return "hello there!"
   test('if name == null, return Hello there!', () => {
     expect(greet()).to.be("Hello there!");
   })

   // Test 3 -> case sensitivity if name == uppercase response == uppercase
   test('Name uppercase return greet uppercase', () => {
     expect(greet(name3)).to.be("HELLO " + name3 + "!")
   })

   // Test 4 -> handle a 2 name array
   test('handle multiple names in string', () => {
     expect(greet(name4)).to.be("Hello" + " " + name4[0] + ", " + name4[1]);
   })

   // Test 5 -> "name" is array of names
   test('can take array of names', () => {
     expect(greet(name5)).to.be("Hello " +  name5.join(", "));
   })

})

