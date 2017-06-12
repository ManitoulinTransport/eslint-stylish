'use strict';
var semi = true;
let nosemi = false
const nospace="hello";
const singlequotes = ' world';
const anObject = {
	attr: 0,
}
function testFunction( bad,  format){
	console.log(bad,format)

}
testFunction(nospace, singlequotes)
