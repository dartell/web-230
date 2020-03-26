/*
============================================
; Title:  Discussion 6.3.js
; Author: Professor Krasso
; Date:   25 Mar 2020
; Modified by: Darius Dinkins
; Description: Object Literals
===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//start program

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Exercise 6.3"));

//object literal for ticketing system
var systemTicket = {

  id: "id: 101",

  name: "name: Help Desk Support",

  requester: "requester: Bob Jones"

};

//output
console.log(systemTicket.id+ " " + systemTicket.name + " " + systemTicket.requester);

//end program


