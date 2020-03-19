/*
============================================
; Title:  Discussion 5.3.js
; Author: Professor Krasso
; Date:   18 Mar 2020
; Modified by: Darius Dinkins
; Description: Filtering/Reducing Complex Data Structures
===========================================
*/



//start program

//header
const header = require('./Dinkins-header.js');

console.log(header.display("Darius", "Dinkins", "Exercise 5.4"));

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




//filter function that separates last name from array
var filterLastName = famousComposer.filter(function (person, ball, hat) {

  if (ball === hat) {

    return true;

  }

  return person.lastName;
})

//map function that maps ratings
var ratings = famousComposer.map(function (ratingReturn) {


return  ratingReturn.rating;


  });


//map function that maps genres
var genres = famousComposer.map(function (genreReturn) {

return genreReturn.genre

      });


//Assignment Output begins

console.log("") //line break

console.log("-- COMPOSER BY RATING --");



ratings.forEach(function(zebra) { console.log(zebra + filterLastName)});



console.log("") //linebreak

console.log("-- COMPOSER BY GENRE --")

genres.forEach(function(duck) { console.log(duck + filterLastName)});


//end program
