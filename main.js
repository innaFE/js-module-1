const firstLine = 'qwertyuiop[]';
const secondLine = 'asdfghjkl;';
const thirdLine = 'zxcvbnm,./';

const firstLineLengh = firstLine.length;
const secondLineLengh = secondLine.length;
const thirdLineLengh  = thirdLine.length;


let firstLineSymbols = firstLine.charAt(0) + firstLine.charAt(11) ;
let secondLineSymbols = secondLine.charAt(0) + secondLine.charAt(11) ;
let thirdLineSymbols = thirdLine.charAt(0) + thirdLine.charAt(9) ;

let searchLeftBracket = firstLine.indexOf("[");
let searchRightBracket = firstLine.indexOf("]");

console.log(`firstLine = ${firstLine},
             secondLine = ${secondLine}, 
             thirdLine = ${thirdLine}, 
             firstLineLengh= ${firstLineLengh},
             secondLineLengh= ${secondLineLengh},
             thirdLineLengh = ${thirdLineLengh}, 
             firstLineSymbols = ${firstLineSymbols},
             secondLineSymbols = ${secondLineSymbols},
             thirdLineSymbols = ${thirdLineSymbols},
             searchLeftBracket = ${searchLeftBracket}, 
             searchRightBracket = ${searchRightBracket}`);