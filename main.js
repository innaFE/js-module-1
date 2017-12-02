const first = 'qwertyuiop[]';
const second = 'asdfghjkl;';
const third = 'zxcvbnm,./';

const one = first.length;
const two = second.length;
const three = third.length;


console.log( first.charAt(0) + first.charAt(11) );
console.log(second.charAt(0) + second.charAt(10) );
console.log(third.charAt(0) + third.charAt(9) );

let a = first.indexOf("[");
let b = first.indexOf("]");

console.log(`first = ${first},second = ${second}, third = ${third}, one = ${one}, two = ${two}, three = ${three}, a = ${a}, b = ${b}`);