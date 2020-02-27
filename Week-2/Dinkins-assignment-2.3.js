/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   26 February 2020
; Modified By: Darius Dinkins
; Description: Displays the use basic use of functions
;===========================================
*/

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Assignment 2.3"));

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  26 February 2020

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//function properties go here...
myName.darius = "Darius";
lastName.dinkins = "Dinkins";

// function

/* *Params: none
   *Response: function property value
   *Description: returns the value assigned to a function property
 */
function myName() {
    return myName.darius;
}


/* *Params: none
   *Response: function property value
   *Description: returns the value assigned to a function property
 */
function lastName() {
    return lastName.dinkins;
}


//output
(console.log("Hello "+myName()+ " " + lastName()))
