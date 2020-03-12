/*
============================================
; Title:  Discussion 4.4.js
; Author: Professor Krasso
; Date:   11 Mar 2020
; Modified by: Darius Dinkins
; Description: PRACTICE Predicates
===========================================
*/

function predicateExample(x) {

  return x > 8;

  }

var evenNumbers = [2, 4, 6, 8, 10];

var filteredNumbers = evenNumbers.filter(predicateExample);

console.log(filteredNumbers[0]);
