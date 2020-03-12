/*
============================================
; Title:  Assignment 3.2
; Author: Darius Dinkins
; Date:   03 Mar 2020
; Description: Displays Loops and Statements
;===========================================
*/



/*
  Expected output:
  FirstName LastName
  Exercise 3.2
  Today's Date
  // output from the match() function
  false
  true
  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/


// Function parameters

var concrete = "concrete"
var Wood = "Wood"
var Bamboo = "Bamboo"

match(concrete,concrete);
logMismatch(Wood,Bamboo);

//function that matches
function match(Material1,Materia2){

  if(Material1 === Materia2) {

    return true;

} else {

    return false;
}

}



//function that doesn't match
function logMismatch(Material3,Material4) {

    console.log(Material3 + " " + "and" + " " + Material4 + ' do not match!')  ;

}









