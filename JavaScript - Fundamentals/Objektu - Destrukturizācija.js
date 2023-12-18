/* eslint-disable no-unused-vars */
'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('Test!');
	}
};

/* Šinī piemērā mēs izveidjam objektu, ar atslēgām un to vērtību. Ja vēlamies piekļūt kādas atslēgas vērtībai, tad izmantojot console.log() iekavās rakstām objekta nosaukumu, liekam punktu aiz kura rakstām tās atslēgas nosaukumu, kuru vēlamies uzzināt. Bet, ja mēs vēlamies, kādu atslēgu un tās vērtību izdzēst, tad izmantojam metodi: delete, rakstām objekta nosaukumu, liekam punktu aiz kura rakstām to atslēgu, kuru vēlamies izdzēst. Pēc tam izpildot console.log() rakstām objekta nosaukumu, un redzam, ka konkrētā atslēga: name mūsu objektā vairāk nav. */

console.log(options['colors']['border']);
options.makeTest();

/* Lai redzētu kāda objekta iekš objekta atslēgas vērtību, mums ir jāizmanto [] [] dubultiekavas, vienu aiz otra, tajās rakstot konkrētā objekta iekš objekta nosaukumu, un otrajās [] iekvās tās īpašības nosaukumu, kuras vērtību mēs vēlamies redzēt. Atceramies par sintaksi, ka nosaukumiem jābūt uzrakstītiem iekš '' pēdiņām. */

// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;

for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Īpašība: ${i}, nozīme: ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Īpašība: ${key}, nozīme: ${options[key]}`);
		counter++;
	}
}

console.log(counter);

/* Lai redzētu objekā katras atslēgas nosaukumu un vērtību - īpašību, izmantojam ciklu: for. iekavās () rakstām: let key in object - objekta nosaukumu, liekam ciklam: for izvadīt konsolē īpašību - atslēgu: key, un tās nozīmi, rakstot: ${options[key]}. Lai mūsu kods darbotos pareizi ievērojam sintakses nosacījums un pierakstu. Izpildot šādu kodu mēs redzam mūsu objekta visas īpašības un to vērtības. */

/* Lai saskaitītu cik īpašības mums ir kādā objektā mums ir jāpieraksta, jādeklarē skaitītājs - counter, izmantojot mainīgā deklarēšānu caur: let. Un liekot saskaitīt cik īpašības ir katrā objektā, arī objektā iekš objekta. Beigās ārpuss visām iekavām izpildām konsoles izvadi, kur prasām izvadīt: counter. Izpildot šādu kodu, mēs dotajā piemērā konsolē redzam: 5. */

console.log(Object.keys(options));

/* Lai redzētu kādas īpašības ir konkrētajā objektā, mēs varam izmantot metodi: Object.keys() iekavās norādot objekta nosaukumu. Izpildot šādu kodu mēs konsolē redzēsim datu masīvu, kas attēlots [] iekavās ar visām objekta īpašībām. Bet mēs neredzēsim īpašību nozīmi. Mēs redzēsim tikai objekta atslēgas, bez to vērtības. Un mēs redzēsim šinī piemērā arī ieliktā objekta nosaukumu, bet neredzēsim tā atslēgu nosaukumus. Šinī piemērā izpildot kodu konsolē mēs redzam sekojošo: [ 'name', 'width', 'height', 'colors' ] . */

console.log(Object.keys(options).length);

/* Ja mēs vēlamies redzēt kāda objekta atslēgu skaitu, tad izmantojam metodi: .lenght. Mūsu piemērā aiz (options) liekam punktu un rakstām: lenght. Izpildot šādu kodu mēs konsolē redzam: 4. */

/* Mēs jebkuram objektam varam likt izpildīt ne tikai noklusētās metodes, bet arī mūsu pašu rakstītas metodes. Mēs aiz pirmajām noslēdzošajām } iekavām, kas mums ir izveidojot objektu liekam komatu, pēc tam rakstām: mūsu izdomātās metodes nosaukumu. Šinī gadījumā: makeTest, tālāk pierakstām funkciju, kas konkrētajai metodei ir jādara. Šinī piemērā, mēs liekam konsolē izvadīt: Test!.*/

/* Objektu destrukturizācija nozīmē to, ka mēs no objekta jeb datu masīva izvelkam kādu daļu. Mēs izmantojot mainīgā deklarēšanu, liekam {} iekavās tās īpašības, kuras vēlamies redzēt, liekam to nosaukumus, atdalot vienu no otra ar komatu, pēc tam liekam piederības zīmi rakstām: options, liekma punktu, aiz kura rakstām objekta daļas nosaukumu, kuru vēlamies izvilkt - destrukturizēt. Izpildot šādu kodu konsolē mēs redzam: black. Pareizs pieraksts objektu destrukturizācijai ir šāds: */

const { border, bg } = options.colors;
console.log(border);

