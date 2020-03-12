/*
============================================
; Title:  Discussion 4.2.js
; Author: Professor Krasso
; Date:   11 Mar 2020
; Modified by: Darius Dinkins
; Description: Arrays
===========================================
*/

const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Assignment 4.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

// start program
var fruit = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

// function
function getFruit(arr) {

  for (var k = 0; k < arr.length; k++) {

    console.log(arr[k]);
  }

}

getFruit(fruit);
