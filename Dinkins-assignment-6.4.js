/*
============================================
; Title:  Discussion 6.4.js
; Author: Professor Krasso
; Date:   25 Mar 2020
; Modified by: Darius Dinkins
; Description: Object Literals
===========================================
*/

/*
  Expected output

  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//start program

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Exercise 6.4"));

//nested object literal
var ticket = {

  id: 105,

  name: "Bob Jones",

  dateCreated: "3/25/2020",

  priority: 1,

  person: {  //nested portion of the object literal

     id: 105,

     firstName: "Bob",

     lastName: " Jones",

     jobTitle: " (Programmer I)"

  }

};

//output
console.log("ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee "  + ticket.person.firstName + ticket.person.lastName + ticket.person.jobTitle);

//end program
