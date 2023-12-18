'use strict';

/* Šinī lekcijā mēs izskatīsim datu masīvu šķirošanas metodes, kuras mēs vēl neesam izskatījuši. */

/* tagad, kad mēs protam strādāt ar serveriem, mums var būt vajadzība sašķirot kādus datus, salikt tos noteiktā secībā. Izskatīsim visas datu masīvu šķirošanas metodes. */

/* Atceramies, kad mācījāmies par datu masīvu šķirošanas metodi: forEach(). Pats svarīgākais, kas mums ir jāatceras izmantojot metodi: forEach, ir tas, ka tā mums neatgriež jaunu datu masīvu. Tā vienkārši ņem kādu masīvu un to sašķiro. */

/* izskatīsim datu masīvu šķirošanas metodi: filter(). Izskatīsim to ar piemēru: . */

const names = ['Zane', 'Līvija', 'Aivars', 'Ilgvars'];
const shortNames = names.filter((name) => name.length < 5);
console.log(shortNames);

/* Metode: filter() filtrē datu masīva elementus. */

/* Izskatīsim datu masīvu šķirošanas metodi: map(). Izskatīsim to ar piemēru: . */

const answers = ['ZanE', 'LīviJA', 'AiVaRs'];
const result = answers.map(item => item.toLowerCase());
console.log(result);

/* Šo piemēru mēs varam pierakstīt izmantojot mainīgā deklarēšanu: let, kas ļauj mums mainīt mainīgā vērtību, rakstot vienādus tā nosaukumus. Piemēra pieraksts: . */

// let answers = ['ZanE', 'LīviJA', 'AiVaRs'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

/* Pareizāk rakstīt kodu izmantojot mainīgā deklarēšanu ar const, jo tad kods ir vieglāk lasāms, saprotamāks. Tādēļ jācenšas rakstīt, tā kā koda piemērā augstāk. */

/* Strādājot ar datu masīviem mēs varam sastapt vēl divas metodes. Metodes: every() un some(). Šīs abas metodes ir ļoti līdzīgas, tās izpilda gandrīz vienādu uzdevumu, un tām ir līdzīga struktūra. Abas šīs metodes atgriež mums Boolean datus: true vai false. Izskatīsim abas šīs metodes ar piemēriem: . */

const some = [4, 'Zane', 'Carnikava'];

// console.log(some.some(item => typeof(item) === 'number'));

/* izpildot šādu kodu mēs iegūstam: true, jo mūsu datu masīvā ir viens skaitlis. */

/* izskatīsim ar piemēru kā darbojās metode: every(). Lai redzētu tās darbību, mums iepriekšējās metodes izmantošanas koda rinda jāizslēdz. */

console.log(some.every(item => typeof(item) === 'number'));

/* Bet izpildot šādu kodu mēs iegūstam: false, jo mūsu datu masīvā visi elementi nav skaitļi. Tādēļ mēs iegūstam false. Mēs iegūtu true tikai tad, ja mums visi elementi būtu number datu tipa. */

/* Nākamā metode ko mēs izskatīsim ir metode: reduce(). Tā ir paredzēta, lai apvienotu masīvu, lai izveidotu vienu veselu masīvu. Itīpaši tas attiecās uz number tipa datiem, kad datu masīvā mums ir skaitļi. Izskatīsim to ar piemēru: . */

const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

/* Izpildot šādu kodu mēs iegūstam: 21, visu datu masīva elementu summu. Izmantojot metode: reduce() mums ir iespēja funkcijā pievienot trešo argumentu, skaitli ar kuru gribam sākt darbību. Ieliekot trešā argumenta vietā skaitli: 3, mēs rezultātā iegūstam skaitli: 24. */

/* Šādu pašu darbību mēs varam veikt ar datu masīviem, kur ir string rindu tipa dati. Izskatīsim to ar piemēru: . */

const array = ['apple', 'peach', 'plum'];

// const arrayResult = array.reduce((sum, current) => sum + ', ' + current);

/* Bet laba koda pierakstīšanas prakse būtu izmantojot interpolāciju. Lai redzētu kā tā darbojās, mums jāizslēdz iepriekšējā koda rinda. Tas izskatās šādi: . */

const arrayResult = array.reduce((sum, current) => `${sum}, ${current}`);
console.log(arrayResult);

/* Mēs ar abiem koda pierakstīšanas sintakses variantiem iegūstam vienādu rezultātu. Iegūstam parastu string datus, kas atdalīti ar komatu. */

/* izskatīsim kā vēl mēs varam izmantot, pielietot iegūtās zināšanas par šķirošanas metodēm. Mēs varam šķirot ne tikai datu masīvus, bet arī objektus. Objektā nedrīgst būt vienādas atslēgu vērtības, bet reizēm mēs no servera varam saņemt nestandarta objektu, un mums ir jāprot ar to strādāt, to pārveidot pareizā formātā. Izskatīsim to ar piemēru: . */

const object = {
	zane: 'person',
	līvija: 'person',
	cat: 'animal',
	dog: 'animal'
};

const newArray = Object.entries(object)
	.filter(item => item[1] === 'person')
	.map(item => item[0]);
console.log(newArray);

/* izpildot šādu kodu mēs iegūstam datu masīvus iekš datu masīva. */

/* Bet mēs varam izmantot metodi: filter(), lai filtrētu kādus elementus, jo mēs gribam iegūt tikai to atslēgu nosaukumus un vērtības, kur ir cilvēku vārdi. Lai redzētu kā tas darbojās, aiz (object) liekam: punktu un izmantojam metodi: filter(). */

/* izpildot šādu kodu mēs iegūstam datu masīvus iekš datu masīva, bet mēs redzam tikai tos datus, kuru vērtība ir: 'person'. Redzam, ka metode: filter() darbojās pareizi. */

/* Bet, ja mēs vēlamies iegūt tikai atslēgu nosaukumus: zane un līvija, tad mums ir jāizmanto metode: map(). izmantojam to mūsu piemērā. */

/* izpildot šādu kodu ar metodes: map() izmantošanu mēs iegūstam datu masīvu, kas satur abu atslēgu nosaukumus, kas satur tos atslēgu nosaukumus, kuru vērtība atbilst: 'person'. */

/* Izmantojot visas šīs datu masīva šķirošanas metodes mēs iegūstam jaunu datu masīvu. Otrā priekšrocība ir tā, ka mēs varam izpildīt šīs metodes pa ķēdīti, palaist vienu aiz otras. */
