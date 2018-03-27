const firstLine = 'qwertyuiop[]';
const secondLine = 'asdfghjkl;';
const thirdLine = 'zxcvbnm,./';

const firstLineLengh = firstLine.length;
const secondLineLengh = secondLine.length;
const thirdLineLengh  = thirdLine.length;


const firstLineSymbols = firstLine.charAt(0) + firstLine.charAt(firstLineLengh - 1) ;
const secondLineSymbols = secondLine.charAt(0) + secondLine.charAt(secondLineLengh - 1) ;
const thirdLineSymbols = thirdLine.charAt(0) + thirdLine.charAt(thirdLineLengh - 1) ;

const searchLeftBracket = firstLine.indexOf("[");
const searchRightBracket = firstLine.indexOf("]");

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