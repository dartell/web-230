/*
============================================
; Title:  Discussion 7.2.js
; Author: Professor Krasso
; Date:   25 Mar 2020
; Modified by: Darius Dinkins
; Description: Constructor Functions
===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//start program

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Exercise 7.2"));

//Constructor object
function Employee(id,firstName,lastName,title){

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;
}

//array that adds new properties to the constructor object
var employees = [

  new Employee(1, "Thomas", "Edison","Software Engineer"),

  new Employee(2, "Benjamin", "Franklin","Programmer"),

  new Employee(3, "Nikola", "Tesla","Project Manager"),

  new Employee(4, "Charles", "Babbage","Project Manager"),

  new Employee(5, "Alexander", "Bell","Business Analyst")
];

//for loop that starts with an index of 1.  We will use the employee ID instead of index
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + '. ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' + employees[x].title)

}

//end program
