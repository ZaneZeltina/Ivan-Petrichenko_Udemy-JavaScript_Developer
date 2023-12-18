'use strict';

/* Mēs jau zinām, ka jeb kura funkcija var saturēt kādu citu funkciju. Bet kas notiks, ja mēs funkciju mēģināsim izsaukt iekš pašas funkcijas, iekš {} iekavām? . */

/* Rekursija: tas ir tad, kad funkcija izsauc pati sevi. kad iekš funkcijas {} iekavām tiek izsaukta funkcija. Izskatīsim klasisku piemēru, kas ir atrodams visās mācību grāmatās par JavaScript: . */


// function pov(x, n) {
// 	let result = 1;
// 	for (let i = 0; i < n; i++){
// 		result *= x;
// 	}
// 	return result;
// }

// console.log(pov(2, 1)); // 1;
// console.log(pov(2, 2)); // 4;
// console.log(pov(2, 3)); // 8;
// console.log(pov(2, 4)); // 16;


/* Klasisks funkciju izmantošanas veids, kad tiek noteiktas Number - Skaitļa datu tipa pakāpes. Izveidojam funkciju. Tās argumentus norādām x un n. Funkcijas {} iekavās nosakām mainīgo result, piešķiram tam vērtību: 1. Izmantojam ciklu: for, kas liek mums x reizināt ar result. Pēc tam atgriežam result. Izpildām konsoles izvadi, tās iekavās () izsaucam funkciju izmantojot dažādus skaitļus, pirmo rakstot skaitli, kam gribam noteikt pakāpi, otro: kādā pakāpē vēlamies redzēt pirmo skaitli. */

/* Mēs varam izmantot arī otru pieeju, kad iekš konkrētās funkcijas piemēra, mēs nerakstām ciklu, bet iekš funkcijas izsaucam funkciju. Mēs nosakām nosacījumus: ja, tad ..., citādi: ...un iekš: else mēs liekam atgriezt x reizinātu ar funkciju: pov, bet pie tās argumentiem rakstot () iekavās: x, n - 1. Izmantojam konsoles izvadi, lai redzētu vai mūsu funkcija strādā pareizi. Šī pieeja arī ir: Rekursija, kad funkcija palaiž pati sevi. Lai pilnvērtīgi redzētu kā darbojās otrā pieeja, mums jāizslēdz iepriekšējais kods to iekomentējot. Koda pierakstā tas būtu šādi: . */

function pov(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * pov(x, n - 1);
	}
}

console.log(pov(2, 1)); // 1;
console.log(pov(2, 2)); // 4;
console.log(pov(2, 3)); // 8;
console.log(pov(2, 4)); // 16;

/* izpildot šādu kodu mēs redzam, ka esam ieguvuši tieši norādītos rezultātus. */

/* izskatīsim dažus terminus, kurus mums ir jāzin un jāsaprot ko tas nozīmē. Bāzes Rekursija: Tas ir tāds gadījums, kas noved pie funkcijas apstāšanās, kad funkcija apstājās. Bāzes Rekursiju mēs redzam arī mūsu piemērā, pie nosacījumiem, ja n ir stingri vienāds ar 1, tad mums tiek atgriezts x. Un tas ir tikai vienā gadījumā, kas nozīmē, ka funkcija tiek izbeigta, ka tā beidz savu darbību. Nākošais termins: Soļa Rekursija: Tas ir tad, kad mēs izsaucam to pašu funkciju iekš funkcijas liekot tai katru reizi izpildīt kādu darbību. Tā arī ir: Soļu rekursija. Mūsu piemērā tas būtu: pov(x, n - 1); . Nākošais termins: Rekursijas Dziļums: Tas ir kopējais ielikto izsaukumu skaits, ieskaitot pašu pirmo. Šinī gadījumā tas būs vienāds ar: n. */

/* Kuru no pieraksta varieantiem mums labāk izmantot, jo saprotam, ka abi ir pareizi? Būtībā, mēs varam paši izvēlēties, bet nu programmēšanas valodai vieglāk ir izmantot to metodi, kur ir cikls. Šinī gadījumā: pirmo piemēru, pirmo pierakstu. Bet, kad mēs izmantojam rekursiju, mūsu koda pieraksts kļūst vienkāršāks. Bet profesionāļi - programmētāji tomēr dod priekšroku rekursijas izmantošanai. Paksatīsimies kādēļ tā, izmantojot piemēru no reāla projekta, kur mums ir dati par studentiem, no dažādiem kursiem un katram no tiem ir dažāds progress. Un mums ir nepieciešams noteikt kopējo visu studentu progresu mācībās. Izpildīsim doto uzdevumu divos variantos: izmantojot cikla pierakstu un rekursijas pierakstu: */

let students = {
	js: [{
		name: 'John',
		progress: 100
	}, {
		neme: 'Ivan',
		progress: 60
	}],
	
	html: {
		basic: [{
			name: 'Peter',
			progress: 20
		}, {
			neme: 'Ann',
			progress: 18
		}],
		
		pro: [{
			name: 'San',
			progress: 10
		}],
		semi: {
			students: [{
				neme: 'Test',
				progress: 100
			}]
		}
	}
};

function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++){
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;

				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}
	return total / students;
}

console.log(getTotalProgressByIteration(students));

/* Mēs izmantojam jaunu metodi: values(), kas ļauj no objekta izvilkt tikai vērtības, uzzināt kādas vērtības satur kāds objekts. Šinī piemērā mēs izmantojam metodi: values(), lai uzzinātu kādas vērtības satur objekts: students. Izmantojot metodi: Object.values(), mums tiek atgriezts datu masīvs, kas satur visas objekta īpašību vērtības. */

/* Mēs izmantojam vēl vienu jaunu metodi: Array.isArray(), kas nosaka, ka datu masīvs ir datu masīvs. */

/* Izpildot šādu kodu, mēs konsolē redzam, ka kopējais visu studentu progress visos kursos ir: 41.6 . */

/* Bet šāds risinājums nav universāli izmantojams, jo iedomājamies situāciju, ja mums pie datiem klāt nāk kāds objekts, iekš objekta: students mums parādās vēl viens objekts. Tad mūsu rakstītā funkcija būs nederīga, jeb arī, tā būs jāpapildina ar daudzām darbībām, daudzām jaunām kodu rindām. Vienkārši sakot mums tā būs jāpārtaisa. tas arī ir galvenais iemesls kādēļ šāds risinājums nav gluži piemērots. Lai mums nebūtu šādu problēmu, mums ir jāizmanto: Rekursija. */

/* Tagad izskatīsim šo pašu uzdevumu, bet risināsim izmantojot: Rekursijas pierakstu. */

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}
		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArray = getTotalProgressByRecursion(subData);
			total[0] += subDataArray[0];
			total[1] += subDataArray[1];
		}
		return total;
	}
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

/* Lai pilnvērtīgi redzētu, vai otrais atrisinājuma piemērs, kur tiek izmantota Rekursija darbojās, mums ir jāizslēdz pirmā piemēra atrisinājums */

/* Izpildot konsolē otro atrisinājuma kodu, mēs redzam, ka rezultāts ir tieši tāds pats kā iepriekš: 41.6. Redzam, ka rekursijas pierakstu esam izpildījuši pareizi. */

/* Tālāk pārbaudām abus atrisinājuma variantus uz nosacījumu, ja mums papildinās dati, šīnī gadījumā, ja mums parādās jauns objekts. Redzam, ka pirmais atrisinājuma variants vairs nedarbojas, kods ir salūzis, jo mēs izpildot šādu kodu konsolē iegūstam: NaN - Not a Number, ka tas nav cipars.  Bet otrs variants, kur ir izmantots rekursijas pieraksts, turpina darboties, dodot jaunus rezultātus. Tādēļ svarīgi ir izmantot tieši rekursijas pierakstu. Izpildot konsoles izvadi otrajam risinājumam, kur mēs izmantojam Rekursijas pierakstu, mēs iegūstam jaunus datus, mēs redzam konsolē: 51.333333333333336. Redzam, ka pat tad, ja tiek pievienoti jauni dati, mūsu funkcija turpina darboties, dodot jaunus rezultātus. */
