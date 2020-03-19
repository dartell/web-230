/*
============================================
; Title:  Discussion 5.3.js
; Author: Professor Krasso
; Date:   18 Mar 2020
; Modified by: Darius Dinkins
; Description: Object Collections
===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//start program

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Exercise 5.3"));

//array with four fields
var famousComposer = [

  {

  firstName: 'Mary',

  lastName: 'Beethoven',

  genre: 'Classical',

  rating: 8,

  },

  {

  firstName: 'Jack',

  lastName: 'Mozart',

  genre: 'Classical',

  rating: 10,

  },

  {

  firstName: 'Bob',

  lastName: 'Bach',

  genre: 'Classical',

  rating: 9,

      },
  {

  firstName: 'Nina',

  lastName: 'Haydn',

  genre: 'Classical',

  rating: 6,

  },
{

  firstName: 'Sarah',

  lastName: 'Schubert',

  genre: 'Classical',

  rating: 5,

  },

  ];

// Line break
console.log("")

//Iteration passing composer function into the forEach method
  famousComposer.forEach(function(composer) {console.log( "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating )});
