'use strict';

let a = 5,
	b = a;
b = b + 5;

console.log(a);
console.log(b);

const obj = {
	a: 5,
	b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

/* Izpildot šādu kodu konsolē, mēs redzam, ka abi objekti, gan: copy, gan: obj ir vienādi, ka tie satur vienādas atslēgu vērtības. Tas ir tādēļ, ka mainīt kāda elementa vērtību, mēs varam strādājot tikaia r primitīvajiem datu tipiem. Tā kā pirmajā piemērā. Bet strādājot ar objekta tipa datiem, mainōt datu vērtību, jaunie dti tiek nodoti pēc saites, pēc saites uz galveno objektu. Struktūra: const copy = obj nenodod jaunu objektu, bet gan mainīgajā: copy tiek ielikta saite uz galveno objektu. Modificējot kopiju: copy, mēs modificējam arī sākotnējo objektu. Tādēļ izpildot šādu kodu konsolē mēs redzam, ka abos objektos ir mainījusies a atslēgas vērtība. S"'ada pieeja saucās - Nodošana pēc saites. */

function copy(mainObj) {
	let objCopy = {}
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

/* izmantojot šādu pierakstu mēs varam nokopēt - klonēt kādu objektu ar visām tā atslēgām un vērtībām. Izskatīsim ar piemēru kā tas darbojās: . */

const numbers = {
	a: 2,
	b: 6,
	c: {
		x: 1,
		k: 3
	}
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

/* Būtiska īpašība, ja mēs mainām objekta iekš objekta kādu vērtību, tad tā skaitās atkal saite uz galveno objektu. Tādēļ mainot ieliktā objekta atslēgas vērtību, tā mainās abos objektos, gan kopijā, gan sākotnējā objektā. Par to pārliecināties varam izpildot šādu kodu konsolē, redzam, ka abos objektos x atslēgas vērtība ir mainījusies uz: 10. Šādas pieejas pielietošana saucās - virspusējā kopēšana. Tad, kad mums ir saite uz objektu, bet vēl ir arī dziļā kopēšana. */

console.log(numbers);
console.log(newNumbers);

/* izpildot šādu kodu mēs konsolē redzam, gan iepriekšējo objektu, kuru klonējam, gan jauno objektu, ar jaunu atslēgas: a vērtību. */

const add = {
	d: 17,
	e: 20
}

/* lai savienotu vairākus objektus vienā objektā ir speciāli tam paredzēta metode, kas saucās: Object.assign(). metodes: assign() iekavās rakstām tā objekta nosaukumu, no kura vēlamies apvieenot datus, liekam komatu, aiz komata rakstot tā objekta nosaukumu, kurā vēlamies apvienot datus. */

console.log(Object.assign(numbers, add));

/* izpildot šādu kodu konsolē, mēs redzam, jauno objektu: add, ar iepriekšējā objekta datiem, un ar jaunā objekta datiem. Redzam, ka divi dažādi objekti ir apvienoti vienā - jaunajā objektā. Mēs esam izveidojuši neatkarīgu virspusējo kopiju. */

const clone = Object.assign({}, add);
clone.d = 20;

/* Šeit mēs nosakām jaunu mainīgo: clone, liekam piederības zīmi, un izmantojot metodi: Object.assign() iekavās rakstot tukšu objekto, liekot komatu, rakstot objektu, kuru vēlamies apvienot ar tukšo objektu. Mainām atslēgas: d vērtību uz 20. Izpildot šādu kodu konsolē mēs redzam, ka iepriekšējā objektā: add atslēgas: d vērtība nav mainījusies, bet jaunajā tukšajā objektā, kas tagad vairs nav tukš ir jaunā atslēgas: d vērtība: 20. Objektā: clone ir izveidota iepriekšējā objekta: add virspusēja kopija. */

console.log(add);
console.log(clone);

/* Tā pat kā objektiem, tā pat arī datu masīviem ir savas kopēšanas metodes. Un tās arī ir virspusējās kopēšanas metodes. Izskatīsiem to ar piemēru: . */

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Zane';

console.log(oldArray);
console.log(newArray);

/* Izpildot šādu kodu konsolē, izmantojot metodi: slice() mēs redzam, ka mums ir divi datu masīvi: oldArray, un tā kopija: newArray. Mēs redzam, ka esam mainījuši jaunajā datu masīvā otro elemetu. Un konsolē redzam, gan veco datu masīvu ar veco vērtību, gan jauno ar jauno vērtību. Mēs redzam divus dažādus datu masīvus. */

/* JavaScript ES6 tandartā parādījās operators: spread, kas ļāva strādāt ar datu masīviem, bet JavaScript standartā ES8 parādījās iespēja operatoru: spread izmantot arī objektiem. Operators: Spread saucās - izgriešanas operators. Jo tas izgriež kādu struktūru - datu masīva struktūru jeb objekta struktūru, pārvēršot tos kādā noteiktā datu tipā. Izskatīsim spread darbību piemēros: */

const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];
	
console.log(internet);

/* izmantojot operatoru: spread, kas pierakstā izskatās kā trīs punkti: ... aiz kuriem rakstās tie datu masīva nosaukumi, atdalīti ar komatu, un katram priekšā ... , kurus vēlamies apgriezt vienā citā - jaunā datu masīvā, un pievienojot vēl kādus datus. izpildot konsoles izvadi ar jaunā datu masīva nosaukumu mēs redzam, ka abi datu masīvi ir apvienoti jaunā datu masīvā. Redzam visas vērtības. */

/* Izskatīsim operatora: spread ... izmantošanu sarežģītākā piemērā: . */

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 8];

log(...num);

/* Šeit mēs izveodojam funkciju: log() iekavās ierakstot trīs funkcijas argumentus, liekam funkcijai konsolē izvadīt katru no šiem argumentiem. Nosakām mainīgo: num, kas mums ir datu masīvs. Tālāk aktivizējam šo funkciju: log() iekvās rakstot aperatoru: spread: ... liekot tam apgriezt datu masīvu: num. Izpildot šādu kodu konsolē, mēs redzam datu masīva: num vērtības. Šāda konstrukcija ir sastopama ļoti bieži. ES8 JavaScript stadartā operators: spread darbojās arī ar objektiem. */

/* Izskatīsim vēl ceturto iespēju izveidot virspusēju kopiju objektiem. Izskatīsim to ar piemēru: . */

const array = ['a, b'];
const newArray = [...array];

console.log(newArray);

/* Šeit mēs redzam, ka izmantojot operatoru: spread ... mēs izveidojam datu masīva virspusēju kopiju: newArray. Izpildot šādu kodu redzam, ka mūsu jaunais datu masīvs ir tieši tāds pats kā iepriekšējais. */

const object = {
	one: 1,
	two: 2
}

const newObj = { ...object };
console.log(newObj);

/* Tāds pats princips strādā arī ar objekta tipa datiem. Izveidojam objektu ar kādiem datiem, pēc tam izveidojam jaunu objektu, liekam piederības zīmi, iekavās{} rakstām ...object. Rakstām: spread un objekta nosaukumu, kuru vēlamies kopēt. Pēc tam izpildām konsoles izvadi ar jaunā objekta saturu. izpildot šādu kodu konsolē mēs redzam nokopēto jauno objektu. */

/* Daļa atjaunojumu JavaScript programmēšanas valodas standartos: ES8 un ES9 jau strādā pirms standartu apstiprināšanas. Operators: spread ... parādījās ES9 standartā. */

















