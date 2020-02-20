/*
============================================
; Title: Assignment 1.5
; Author: Darius Dinkins   
; Date: 16 Feb 2020
; Modified By: Darius Dinkins
; Description: This program demonstrates the
; use of JavaScript variables, types, and values
;===========================================
*/ 

//start program



/*
  Expected output:
  Employee 1  
  First name
  Last name
  Address
  Pay Rate
  Hire Date

  Employee 2
  First name
  Last name
  First name
  Last name
  Address
  Pay Rate
  Hire Date

  Employee 3
  First name
  Last name
  First name
  Last name
  Address
  Pay Rate
  Hire Date
*/ 

//Variable assignments

// Employee 1
var firstName = "John";
var lastName = "Matrix";
var address = "29 Woodland Drive";
var payRate = 120.4;
    payRate.toFixed(1);
var date = new Date(1985,9,4); //code to set the date
    var hireDate = date.toLocaleDateString() //code to change date format
  
 

console.log(firstName);
console.log(lastName);
console.log(address);
console.log(payRate);
console.log(hireDate);

// Employee 2
var firstName1 = "Harry";
var lastName1 = "Tasker";
var address1 = "111 Frame Drive";
var payRate1 = 80.4;
    payRate1.toFixed(1)  //Code to change to one decimal
var date1 = new Date(1994,6,14); //Code to set the date
    var hireDate1 = date1.toLocaleDateString(1994,6,14) ; //code to change date format
  

console.log(firstName1);
console.log(lastName1);
console.log(address1);
console.log(payRate1);
console.log(hireDate1);

// Employee 3
var firstName2 = "Kimble";
var lastName2 = "Kimble";
var address2 = "123 Natahtumor Park";
var payRate2 = 50.4;
    payRate2.toFixed(1) //Code to change to one decimal
var date2 = new Date(1990,11,21); //code to set the date
    var hireDate2 = date2.toLocaleDateString(1990,11,21) ; //code to change date format

console.log(firstName2);
console.log(lastName2);
console.log(address2);
console.log(payRate2);
console.log(hireDate2);

