/*
============================================
; Title:  Discussion 5.1.js
; Author: Darius Dinkins
; Date:   16 Mar 2020
; Modified by:
; Description: Fixing advanced arrays
===========================================
*/

//Expected Output, "Carolina is the home of the Panthers"

var football = new Map();
football.get('Carolina', 'Panthers');
football.set('Jacksonville', 'Jaguars');
football.delete('Jacksonvile');


for (var [key, value] of football) {
  console.log(key + ' is the home of the ' + value);
}



