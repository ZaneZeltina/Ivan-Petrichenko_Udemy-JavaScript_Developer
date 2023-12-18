'use strict';

/* JavaScript programmēšanas valodā ir speciāla datu konstrukcija. Tā ir metode: set(). Vienkārši sakot: tas ir īpašs kolekciju veids, tas ir datu masīva veids, kur katra nozīme var atkārtoties tikai vienu reizi. Tas ir datu masīvs, kur katra nozīme ir tikai vienu reizi. izskatīsim to ar piemēru: */

const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const set = new Set(arr);
console.log(set);

/* Mēs nosakām jaunu mainīgo, kuram pievienojam jaunu Set() konstrukciju, tās iekavās () ierakstot datu masīva nosaukumu: arr. Izpildām konsoles izvadē mainīgo: set. Mēs redzam rezultātā konsolē objektu, kas kā vienmēr būtībā ir datu masīvs. Mēs redzam nosacītu objektu, kura atslēgas un to nozīmes katra ir tikai vienu reizi. Tas arī ir metodes: Set() darbības princips. */

/* iztēlosimies situāciju, kad mums no kādas datu bāzes atnāk saraksts ar stundentiem, kur viens no studentiem ir ierakstīts divas reizes. Izmantojot metodi; Set() mēs iegūstam datu masīvu, kur katrs students ir tikai vienu reizi. Mēs izpildot kodu konsolē redzam atkal šķietamu objektu, kas ir datu masīvs, kur katrs stundents ir ierakstīts vienu reizi. Izskatīsim to ar piemēru: */

const studentsArr = ['Zane', 'Livija', 'Alex', 'Zane'];

function unique(studentsArr) {
	return Array.from(new Set(studentsArr));
}

console.log(unique(studentsArr));

const studentsSet = new Set(studentsArr);

studentsSet.add('Ivan')
	.add('Oleg')
	.add('Livija');

console.log(studentsSet);

/* lai labāk saprastu kā katrs koda pieraksts darbojās, ieteicams to ir atvērt cur pārlūka konsoli. */

/* Tālāk mēs varam izmantot koandas: Set() iebūvētās metodes, kas ir ļoti līdzīgas ar komandas: Map() metodēm. Metode: add() ļauj mums pievienot komandai: set jaunus datus. Mēs izmantojot metodi: add() pievienojam trīs studentus, bet viens no studenta vārdiem atkārtojas, bet pateicoties komandai: Set() mums netiek dublēts studenta vārds. Izpildot kodu konsolē mēs redzam, ka dati neatkārtojās. Pievienojot jaunus datus ar vienu metodi, mēs varam kodu pierakstīt saīsināti, tā kā dotajā piemērā, kas ir augstāk. */

/* Arī strādājot ar cikliem un kartēm mēs varam izmantot šo komandu: set(). */

/* Šādu metodi var izmantot arī parastam datu masīvam, pirms metodes: push() izmantot metodi: Set(). Un, ja mēs neatrodam kādus datus jau esošus datu masīvā, tad izmantojot metodi: push(), ks iziet cauri datu masīvam, un, ja neatrod tādus datus, tad pievieno datus datu masīvam. */

/* To pašu varam realizēt izmantojot metodi, kas ir datu masīviem, metodi: find(), ar kuras palīdzību mēs varam meklēt kādus datus datu masīvā. */

/* Bet, lai mums nebūtu jāizmanto divas metodes, lai izpildītu vienu uzdevumu, mēs izmantojam uzreiz metodi: Set(). Šī metode arī darbojās daudz ātrāk, tādēļ arī iesakāms izmantot tieši to, nevis atsevišķi divas dažādas metodes. */

/* Tālāk seko jau bāzes funkcijas, kas ir metodei: Set(). Un Tās ir: */

// set.delete(value); - varam dzēst kādu vērtību;
// set.has(value); - pārbaudīt kāda vērtības esamību;
// set.clear(); - varam pilnībā notīrīt datus;
// set.size; - noteikt cik daudz elementu mums ir dots;

/* Tā pat kā strādājot ar kartēm, mēs varam šķirot mūsus datus - tie ir iterējami. Un šeit mums ir divi veidi kā mēs to varam darīt. Pirmais veids ir izmantojot konstrukciju: for of. izpildot kodu konsolē mēs iegūstam katras atslēgas nosaukumu. Šinī gadījumā, mēs iegūstam katra studenta vārdu. */

for (let value of studentsSet) {
	console.log(value);
}

/* Otrais variants kā mēs varam sašķirot datus ir izmantojot metodi: foreach(). izskatīsim piemēru: . */

studentsSet.forEach((value, valueAgaing) => {
	console.log(value, valueAgaing);
});

/* Ja mums ir nepieciešams katru īpašību izvadīt divas reizes, tad rakstām divus argumentus iekš metodes: forEach() iekavām, rakstām: value, aiz komata rakstām: valueAgaing. */

/* Tā pat kā metodei: map(), arī metodei: Set() ir vienādas iebūvētās metodes. Izskatīsim tās: . */

console.log(studentsSet.values());

/* izmantojot šo metodi mēs redzam datu masīva īpašības - atslēgu nosaukumus. */

console.log(studentsSet.keys());

/* Mēs varam izmantot arī šo metodi, bet dotajā gadījumā mums nav nozīmes to izmantot, jo mums ir datu masīvs, un mums nav atslēgu - īpašību vērtības. izpildot šo metodi konsolē mēs redzam atslēgu nosaukumus, to pašu ko izpildot iepriekšējo metodi: values(). Šī metode gan ir vairāk paredzēta, lai tas būtu saderīgs ar metodi: Map(). */

console.log(studentsSet.entries());

/* Šī metode arī ir paredzēta savienojamībai ar metodi: map() Izpildot to dotajā gadījumā ar datu masīvu, mēs iegūstam šinī gadījumā mums nevajadzīgu konstrukciju. */

/* reāli strādājot mums visas šīs iebūvētās metodes nav vajadzīgas, mums pietiek zināt divas metodes, kuras apskatījām iepriekš. Šķirošanas metodes: for of un forEach. */

/* Ja runājam par praktisku set pielietojumu, tad tas tiek izmantots, lai izveidotu funkciju: palīgu, kas filtrē jebkuru datu masīvu. Piemērs pierakstīts koda sākumā, aiz datu masīva: arr. Piemērā mēs izveidojam funkciju: unique, kas satur datu masīvu: sudentsArr, liekam tai atgriezt jaunu datu masīvu no masīva, izmantojot metodi: from() iekavās rakstot: new Set() iekavās rakstot datu masīva nosaukumu: studentsArr. Izpildot ša'du kodu mēs iegūstam datu masīvu, kas satur visas parastās datu masīva metodes, kuras mēs varam izmantot. */




