'use strict';

// if(4 == 9) {
// 	console.log('OK!');
// } else {
// 	console.log('Error!');
// }

const num = 50;

// if (num<49){
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('A lot!');
// } else {
// 	console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');


switch (num) {
case 49:
	console.log('Error');
	break;
case 100:
	console.log('Mistake');
	break;
case 56:
	console.log('Correct!');
	break;
default:
	console.log('Next time');
	break;
}