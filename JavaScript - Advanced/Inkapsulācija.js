'use strict';

/* Šinī lekcijā mēs izskatīsim kas ir inkapsulācija un kā mēs to varam izmantot. */

/* Inkapsulācija ir viens no principiem uz objektiem orientētā programmēšanā. */

/* Kā reiz  programmas ārējās pasaules atdalīšana un izslēgšana tās iekšējā pasaulē, tās mainīgo deklarēšana, funkcijas, to arī sauc par inkapsulāciju. */

/* Iekš OP sapratnes tas nozīmē to, ka objekts glabā savu stāvokli privātā kārtībā. Un tikai objekta metodēm ir iespēja to mainīt. */

/* Kapēc tas tike darīts? Pirmkārt, lai izsargātos no lietotāja iejaukšanās. Viņš nevarēs ielīst iekšienē un kaut ko tur mainīt. Otrkārt: Mēs kā izstrādātāji vienmēr varēsim mainīt, uzlabot mūsu programmu, bez sekām. */

/* Tas ir ērti, kad kādas programmas iekšiene tiek slēpta, mēs kā lietotāji to vienkārši izmantojam. */

/* Informācijas aizslēgšana ir izplatīts veids, kas tiek izmantots daudzās citās programmēšanas valodās, kad objekta metodes un īpašības tiek glabātas kā privāti un aizsargāti faili. */


/* Šis ir sarežģīts materiāls, kura izpratne rodas tikai darbojoties praktiski, izpratne rodas tikai ar gadiem. */

/* JavaScript programmēšanas valodā mēs kaut ko līdzīgu varam tikai imitēt. Izskatīsim inkapsulāciju JavaScript programmēšanas valodā, ar vienkāršu piemēru: . */

// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function() {
// 		console.log(`Lietotāja vārds: ${this.name}, vecums: ${userAge}`);
// 	};

// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(age) {
// 		if(typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Nepieļaujami dati!');
// 		}
// 	};
// }

// const zane = new User('Zane', 34);
// console.log(zane.name);
// console.log(zane.getAge());

// zane.setAge(40);
// zane.setAge(400);
// zane.name = 'Santa';
// console.log(zane.getAge());

// zane.say();

/* Izpildot šādu kodu mēs konsolē redzam sākotnējos datus, bet pēc tam, kad izpildām funkciju: zane.say() mēs saņemam tekstu kur ir jau jaunie, mainītie dati. */

/* Šeit mēs redzam, ka ir notikusi iejaukšanās, dati ir mainīti. Tā jebkurš var iejaukties mūsu kodā un mainīt datus. Mums var salauzt visu kodu. Tādēļ mums ir jālabo šāda koda uzvedība. Tieši šeit mums ir vajadzīga inkapsulācija. Izmantosim to tieši mūsu piemērā. */

/* Mēs izveidojam mainīgo, izmantojot atslēgvārdu let, kas nozīmē, ka tas mums ir pieejams tikai iekšienē, tas mums nav pieejams ārēji. Tas ir pieejams lokāli, bet ne globāli. Mēs t nevaram vēlak mainīt. Izpildot šādu kodu mēs redzam, ka vecums: userAge nav mainījies, jo mēs pa tiešo nevaram to mainīt. Arī iekš komandas console.log(userAge) mēs saņemam undefined - ka dati nav atrasti, kas tikai apstiprina to, ka ārēji mēs šim mainīgajam nevaram piekļūt. Šī jau ir inkapsulācijas lietošana. Mēs īpašību userAge saglabājām iekš objekta, un ārēji tā mums vairs nav pieejama. */

/* Lai strādātu ar šādiem mainīgajiem mums ir jāizmanto getter un setter. Get un set atslēgvārdi. */

/* Mēs izskatīsim divas metodes, kas ļaus mums strādāt ar mainīgo: userAge, piekļūt tam no ārienes, globāli. Saņemt un mainīt tā datus. Skatīt piemēru augstāk. */

/* Pēc veiktajām izmaiņām mūsu kods ir kļuvis daudz drošāks, jo mēs esam uzrakstījuši nelielu inkapsulāciju. Mūsu kods ārēji vairs nav pieejams, tas ir kļuvis daudz drošāks. */

/* Tagad izskatīsim kā mēs varam pielietot inkapsulāciju klasēm. Izskatīsim to ar piemēru: . Lai iepriekšējais kods mums netraucētu darbību - izslēdzam to. */

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'Zeltiņa';

	say = () => {
		console.log(`Lietotāja vārds: ${this.name} ${this.#surname}, vecums: ${this._age}`);
	};

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('Nepieļaujami dati!');
		}
	}
}

const zane = new User('Zane', 34);
console.log(zane.surname);

/* Izpildot šādu kodu mēs konsolē redzam: undefined, kas nozīmē, ka vērtība nav atrasta, jo mēs tai nevaram ārēji piekļūt. Ja izmantojam console.log() mēs saņemam undefined - vērtība nav atrasta. Jo šī īpašība ir kļuvusi privāta */

zane.say();

/* Bet tālāk, izmantojot funkciju: say() mēs redzam, ka mūsu privātās īpašība: #surname ieguva nozīmi, kuru mēs varam izvadīt, redzēt konsolē. */

/* Šeit mēs saglabājam visus tos pašus inkapsulācijas principus. Izmantojam klasē get un set. */

/* Šai sintaksei ir arī savas nepilnības. Pirmā: ka lai noteiktu mainīgo, lai tiktu ievērots inkapsulācijas princips mums tas bija jāraksta izmantojot pasvītrojumu: _age. To mēs darām, kad skaidri zinām, ka mēs neiemaisīsimies īpašības darbībā. Otrā: ja mēs esam slikti programmētāji mēs pie konsoles izsaukšanas un mainīgā: age vērtības mainīšanas ierakstām mainīgo: age ar visu pasvītrojumu priekšā: _age, un šādi mēs apejam getter un setter. Tā ir nepareiza pieeja, bet diemžēl šāda iespēja pastāv. Tas ir saistīts ar ka sākumā JavaScript programmēšanas valodā netika paredzēts, ka tiks izmantotas klases. Tās tika ieviestas salīdzinoši nesen: 2015 gadā. Ja iepriekš strādājot ar objektu mēs varējām izveidot funkcijas, kurām ārēji nevar piekļūt, tad strādājot ar klasēm mums šādas iespējas nav. */

/* Salīdzinoši nesen ir parādījusies iespēja: izmantot klases laukus, kas ļauj ērti ierakstīt klašu metodes un klašu īpašības. Šo sintaksi pamatīgāk mēs izpētīsim kad strādāsim ar bibliotēku: React. Izmantojam šo iespēju mūsu piemērā, kas ir augstāk. */

/* Izmantojot jaunākās sintakses iespējas, mēs tagad varam izmantot bultiņu funkcijas iekš klases metodēm, pierakstot kā piemērā, kas ir augstāk. */

/* Galvenā šī bultiņu funkcijas izmantošanas īpatnība ir tā, ka tā balstīsies uz funkcijas izsaukuma kontekstu, kas ir: this. Par to sīkāk mēs runāsim tālākajās lekcijās, kas ir mūsu kursā. */

/* Galvenā iespēja, kas mums tiek dota izmantojot šādu sintaksi ir tā: ka tagad mēs varam iekš klasēm veidot privātas īpašības. Tieši tā pat kā tas tiek darīts citās programmēšanas valodās. */

/* kad mēs izmantojam mainīgā deklarēšanu iekš funkcijas, mums ir jāievēro būtiska sintakses īpašība, mums mūsu mainīgais: surname jāraksta šādi: #surname. Izmantojot šādu sintaksi mūsu īpašība kļūst privāta. */

/* Kapēc tas mums būs vajadzīgs praksē, mēs izskatīsim nākošajās divās lekcijās. */