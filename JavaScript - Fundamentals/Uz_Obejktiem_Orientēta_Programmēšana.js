'use strict';

/* JavaScript programmēšanas valoda ir uz objektiem orientēta programmēšanas valoda. Kā arī uz prototipiem orientēta programmēšanas valoda. */

/* Pat strādājot ar String tipa datiem, ja izmantojam metodes, tad String tipa dati kļūst par objektu. izskatīsim šo teoriju ar piemēru: . */

let str = 'Some';
let strObj = new String(str);

console.log(typeof str);
console.log(typeof strObj);

/* izpildot šo kodu konsolē mēs redzam, ka neizmantojot nekādu metodi string datu tipas nemainās, bet ko līdz mēs izmantojam kādu metodi, tā string datu tips mainās uz objekta tipa datiem. */

/* Izveidojot kādu datu masīvu, tas kļūst par prototipu. izskatīsim to ar piemēru: . */

console.dir([1, 2, 3]);

/* Šo kodu ir jāizpilda pārlūka konsolē, lai redzētu kādas iespējas - metodes satur šis datu masīvs. Redzam, ka tas ir prototips, kas satur daudz metodes un īpašības. Beigās mēs redzam atkal, ka tas ir prototips, bet jau kā objekts. Izskatīsim šo teoriju ar piemēriem: */

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log('Hello!')
	}
};

// const john = {
// 	health: 100
// };

/* Šādi tik gari aprakstot katru jaunu eksemplāru nav pareizi, pareizi rakstīt kodu strādājot ar prototipiem un izveidojot jaunus eksemplārus, pieraksts būtu šāds: . */

const john = Object.create(soldier);

/* Kas šeit notiek? Mēs izveidojam jaunu mainīgo, liekam piederības zīmi, rakstām metodi: Object.create() iekavās rakstot tā prototipa nosaukumu no kura vēlamies izveidot jaunu eksemplāru. */

// john.__proto__ = soldier;  - Šī ir novecojusi metode.

// Object.setPrototypeOf(john, soldier);

/* Šī ir jauna plaši lietojama metode, lai no esošā prototipa, tanī esošās īpašības nodotu jaunajam eksemplāram. () Iekavās rakstām jaunā eksemplāra nosaukumu, liekam komatu un rakstām prototipa nosaukumu. Izpildot šādu kodu mēs iegūstam vineādu rezultātu, kā tad, kad izmantojām novecojušu metodi. */

console.log(john.armor);
john.sayHello();

/* Izpildot šādu kodu konsolē mēs redzam, ka john pateicoties prototipam soldier piemīt tādas pašas īpašības. Lai izveidotu prototipu, mums ir jāraksta mainīgā nosaukums, kuram vēlamies izveidot prototipu, liekot punktu aiz kura rakstām: __proto__, liekam piederības zīmi, rakstot iepriekšējā prototipa nosaukumu. izpildām konsoles izvadi console.log() iekavās rakstot tā mainīgā nosaukumu, kuram vēlamies nodot visas īpašības no prototipa, liekam punktu aiz kura rakstām tās īpašības nosaukumu un vērtību, kuru vēlamies redzēt konsolē. */

/* Šāds pieraksts, ar šādu sintaksi ir vēl sastopams, bet tas jau ir novecojies. Vecajos projektos mēs tādu vēl varam sastapt, bet reālajos jaunajos projektos tas vairs netiek izmantots. */

/* Tā pat mēs kādam jaunam elementam varam nodot izmantojot: __proto__ metodi funkcijas, liekot izpildīt kādu darbību, tā kā šinī piemērā. Neaizmirstam, kad vēlamies to nodot rakstīt mainīgā nosaukumu, kam mēs vēlamies to nodot, liekot punktu, aiz kura rakstām funkcijas nosaukumu un liekam () iekavas. */



