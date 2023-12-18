'use strict';

/* Pirmais uzdevums: Ko mums izdos konsole kā rezultātu katrā no šiem piemēriem? */

console.log(NaN || 2 || undefined);
//Atbilde: konsole izvadīs: 2.
console.log(NaN && 2 && undefined);
//Atbilde: konsole izvadīs: NaN.
console.log(1 && 2 && 3);
//Atbilde: konsole izvadīs: 3.
console.log(!1 && 2 || !3);
//Atbilde: konsole izvadīs: false.
console.log(25 || null && !3);
//Atbilde: konsole izvadīs: 25.
console.log(NaN || null || !3 || undefined || 5);
//Atbilde: konsole izvadīs: 5.
console.log(NaN || null && !3 && undefined || 5);
//Atbilde: konsole izvadīs: 5.
console.log(5 === 5 && 3 > 1 || 5);
//Atbilde: konsole izvadīs: true.

/* Otrais uzdevums: Vai izpildīsies dotie nosacījumi? */

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log('Done!');
}
/* Atbilde: Jā, nosacījums tiks izpildīts un mēs konsolē saņemsim: Done! . */