/*
============================================
; Title:  Discussion 5.2.js
; Author: Professor Krasso
; Date:   16 Mar 2020
; Modified by: Darius Dinkins
; Description: ES5 Built-In Functions
===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date
  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

//start program

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Exercise 5.2"));


//array with favorite foods
var food = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

food.forEach(function(foodz) {
  console.log(foodz);
});

//End Program


