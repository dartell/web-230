/*
============================================
; Title:  Discussion 4.4.js
; Author: Professor Krasso
; Date:   11 Mar 2020
; Modified by: Darius Dinkins
; Description: Predicates
===========================================
*/

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Assignment 4.4"));



//Start Program

var states = ['Alabama','Nebraska', 'Iowa','California', 'Nevada']

//function to display array
function displayState() {

  console.log("-- ORIGINAL ARRAY ITEMS --");
    for (var x = 0; x < states.length; x++) {

  console.log(states[x]);
  }
}

//function to display and sort array

function sortState() {
  console.log("-- SORTED ARRAY ITEMS --")
  for (var x = 0; x < states.length; x++) {
    states.sort();
    console.log(states[x]);
  }
}

//function with string parameters that selects a specific variable in the array using .filter
function getState(alley,oop) {

  var alley = ""; var oop = "";




  if (alley === oop) {
    return true;



  }

}

//Invoke Display function
displayState();

//Add a line break
console.log("");

//Invoke Sort display function
sortState();

//Add a line break
console.log("");

//Invoke Selected Value function

getState(states, "Iowa")

console.log(states.filter(getState))

