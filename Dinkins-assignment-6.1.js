/*
============================================
; Title:  Discussion 6.1.js
; Author: Darius Dinkins
; Date:   23 Mar 2020
; Modified by:
; Description: Objects and Built-In Objects
===========================================
*/

/*Expected Output:
Darius
Brown
32
33

*/

var person = new Object();

person.name = Darius;
person.eyeColor = "Brown";
person.age = 32;
person.updateAge = function() {
  return ++person.age;
}

console.log(person.name)
console.log(eyeColor)
console.log(person.age);
person.updateAge();
console.log(person.age);



