"use strict";

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  var string = n.toString();
  var array = Array.from(string).map(Number);
  array.reverse();
  return array;
}