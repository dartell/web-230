/*
============================================
; Title:  Discussion 4.3.js
; Author: Professor Krasso
; Date:   11 Mar 2020
; Modified by: Darius Dinkins
; Description: Filtering
===========================================
*/

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Assignment 4.3"));

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

//start program

var vehicles = ['Car','Truck','Motorcycle','Airplane','Bus'];

//function
function getValue(arr,val) {
    for (var k = 0; k < arr.length; k++) {

        if (arr[k] === val)
            console.log(arr[k]);

    }
}

// Output

console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++) {

  console.log(vehicles[x]);
}

// new line
console.log("");

// Output of selected value
console.log(" -- SELECTED VALUE -- ");
getValue(vehicles, "Motorcycle")
