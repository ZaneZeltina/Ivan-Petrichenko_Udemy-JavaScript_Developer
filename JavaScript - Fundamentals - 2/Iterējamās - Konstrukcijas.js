'use strict';

/* Izskatīsim konstrukcijas: fo of un for in. Izskatīsim to atšķirības detalizēti. For of un for in, tās ir konstrukcijas, kas ļauj mums sašķirot datus. Izskatīsim šīs konstrukcijas ar piemēriem: */

const user = {
	name: 'Zane',
	surname: 'Zeltina',
	birthday: '30/09/1989',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
};

for (const key in user) {
	console.log(user[key]);
}

const arr = ['a', 'b', 'c'];

for (const key in arr) {
	console.log(arr[key]);
}

/* For in konstrukcija darbojās ar objektiem un datu masīviem, kuru īpašības var pārskatīt, sašķirot. Izskatīsim to ar piemēru: Skatīt kodu augstāk. */

/* Šinī piemērā mēs izmantojot konstrukciju: for in izvadām konsolē visas objekta atslēgas: key. Atceramies, ka key ir jāraksta iekš [] iekavām. */

/* Tāda pati pieeja attiecās arī uz datu masīviem. */

/* Šādu pieeju mēs varam izmantot arī gadījumos, kad mums jāpārskata kādi String - rindas tipa dati. Bet šeit ir būtiski ņemt vērā, ka String - rindas tipa dati var tikt attēloti citā secībā. Tas pats attiecās arī uz datu masīviem un objektiem. Bet, ja objektos mums nav tik būtiski, lai tiktu ievērota attēlojamo datu secība, tad datu masīvos un String datos mums tas ir ļoti būtiski. Tādēļ svarīgi ir atcerēties, ka konstrukcija: for in ne vienmēr attēlo datus ievērojot to secību. Tādēļ nav ieteicam konstrukciju: for in izmantot datu masīvu un String datu šķirošanai. Piemēram: . */

const str = 'string';

for (const key in str) {
	console.log(str[key]);
}

/* Lai atrisinātu šo problēmu, kad konstrukcija: for in nesašķiro datus noteiktajā kārtībā, ES6 JavaScript standartā tika ieviesta jauna konstrukcija: for of, kas sašķiro datus stingri ievērojot to secību. Izskatīsim to piemērā: . */

for (const key of arr) {
	console.log(key);
}

/* Svarīgi ir ievērot, ka izmantojot konstrukciju: for in mēs saņemam atslēgu - īpašību nosaukumus, bet, kad izmantojam konstrukciju: for of mēs saņemam atslēgu -īpašību vērtības. Būtiski iebvērot konstrukcijas: for of sintaksi. lai konsolē iegūtu atslēgu vērtības mums iekš console.log() iekavām jāieraksta: key. Jo, ja mēs izmantosim tādu pašu pierakstu, kā ar konstrukciju: for in, mēs konsolē saņemsim: undefined, nevēlamu rezultātu. */

/* Šīs abas konstrukcijas lieliski strādā ar datu masīviem un String - rindas tipa datiem, bet ar objektiem jau ir sarežģītāk. Jo datu masīvi un String dati ir šķirojami, tie ir iterējami, tiem varam izmantot konstrukcijas: for in un for of, bet objekti nav šķirojami, tie nav iterējami. */

/* Izmantojot konstrukciju: for of, mēs iegūstam priekšrocību, ak strādājot ar šķirojamiem datiem: datu masīviem un String - rindas tipa datiem, mums tiek attēloti tikai dati, īpašības, vērtības, bet, ja datu masīvā jeb String datos ir kāda metode, funkcija, mums tā netiek attēlota, mēs konsolē to neredzam. Bet, ja imantojam konstrukciju: for in, tad mums tiek attēloti visi dati un arī visas metodes un funkcijas. Konstrukcijas: for of izmantošana ir daudz piemērotāka. Lai redzētu koda darbību, mums iepriekšējais kods jāizslēdz. Izskatīsim to ar piemēriem: .*/

Array.prototype.someMethod = function () { };

for (const key in arr) {
	console.log(key);
}

for (const key of arr) {
	console.log(key);
}

/* Lai labāk saprastu kā katrs koda piemērs darbojās, mums tas ir jāatver caur pārlūka konsoli. */

/* Tagad mēs saprotam, kādi dati - objekti ir iterējami un kādi nav iterējami. Iterējami - Šķirojami. Šķirojami objekti ir visi tie, kas satur Iteratoru. */

/* Bet tagad paskatīsimies vēl dziļāk: Reizēm mums ir nepieciešams sašķirot arī objektus. Lai mēs varētu šķirot objektu, mums ir tam jāizveido iterators. Jo pēc būtības objekti nav šķirojami, bet mēs to varam mainīt. Iepriekšējais objekta piemērs ir tāds, ko diez vai mums nāksies šķirot. Izveidosim jaunu objektu, ar tādiem datiem, kurus varētu būt vajadzība šķirot: */

const salaries = {
	john: 500,
	ivan: 1000,
	ann: 5000,
	sayHello: function () {
		console.log('Hello!');
	}
};

salaries[Symbol.iterator] = function () {
	return {
		current: this.john,
		last: this.ann,
		next() {
			if (this.current < this.last) {
				this.current = this.current + 500;
				return { done: false, value: this.current };
			} else {
				return { done: true };
			}
		}
	};
};

for (let res of salaries) {
	console.log(res);
}

/* lai mēs varētu sašķirot kādu objektu, tā īpašību vērtības noteiktā secībā mums ir nepieciešams izveidot pašiem objekta iteratoru, izveidojot tam piederībā funkciju, kas atgriež mums vērtību: ar kuru sākt šķirošanu un ar kuru beigt šķirošanu. Parasti to dara sākot no mazākās vērtības un beidzot ar lielāko. Izveidojam metodi: next() {} iekavās rakstot nosacījumus: liekot tekošajai vērtībai katru reizi palielināties par: + 500. Tas attiecās uz konkrēto piemēru, jo izmantojot funkciju un metodi: next() {} iekavās mēs varam norādīt katrai situācijai atbilstošus nosacījumus. Liekam atgriezt datus, kas tiek izvadīti katru reizi ciklam atkārtojoties, datiem palielinoties par: +500. Tik ilgi kamēr nostrādā nosacījums, kas dotajā piemērā ir lielākā vērtība. Tālāk jau mēs varam izmantot konstrukcijuL for of, kas izvada mums konsolē rezultātu. */

/* Bez iteratora izveidošanas, bez funkcijas un metodes: next() konstrukciju: for of mēs nevaram izmantot, jo tā nedarbosies, mēs saņemsim kļūdu, kur būs rakstīts, ka objekts nav iterējams - nav šķirojams. Tādēļ mums iterators ir jāizveido pašiem, ievērojot JavaScript sintaksi. */

/* Reālajā dzīvē gan šādi uzdevumi, kad vajag sašķirot kādu objektu gadās ļoti reti, bet par tādu esamību ir jāzin. */

/* Mēs varam arī pašrocīgi izsaukt metodi: next(). Lai to izdarītu mums ir jāizpilda šāds pieraksts: . */

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

/* Mēs nosakām mainīgo: iterator, pievienojam tam objekta nosaukumu, Symbol un iterator, aiz [] iekavām liekam () iekavas, kas nozīmē, ka mēs to izsaucam. Pēc tam rakstām metodi: console.log() tās iekavās rakstot mainīgā nosaukumu: iterator, liekam punktu un izsaucam metodi: next(). Rezultātā konsolē mēs iegūstam objektu, kas satur: done: false un value: 1000. */

/* Šāds pieraksts mums dod plašākas iespējas, jo mēs varam izmantot tādas metodes kā: break, continue, varam dažādi uzstādīt savus nosacījumus iteratoram. Bet ar konstrukciju: for of mums nav tik plašas iespējas. */
