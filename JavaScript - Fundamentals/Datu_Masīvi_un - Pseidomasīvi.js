'use strict';

const arr = [1, 2, 3, 6, 8];

arr.pop();

console.log(arr);

/* Arī datu masīviem JavaScript ir dažādas metodes, kuras mēs savā darbā varam izmantot. Metode: pop() ļauj mums nodzēst pēdējo datu masīva elementu - vērtību. Redzam pēc dotā piemēra, ka izpildot šādu kodu, izpildot pēc tam konsoles izvadi mēs redzam datu masīvu, bet jau bez skaitļa: 8, jo tas ir nodzēsts. */

arr.push(10);
console.log(arr);

/* Bet, ja mēs gribam datu masīvam pievienot kādu elementu mēs izmantojam metodi: push() iekavās rakstot to vērtību, kuru vēlamies pievienot. Izpildot konsoles izvadi, mēs redzam, ka aiz skaitļa: 6, mums ir skaitlis: 10. Tas skaitlis, kuru norādījām metodes: push() iekavās. */

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

/* Ja mēs gribam izskatīt visus datu masīva elementus, mēs varam izmantot ciklu: for. Pie nosacījumiem i rakstot: arr.length, kas nozīmē, ka mēs ciklu izpildām tik ilgi, kamēr netiek iziets cauri visiem datu masīva elemetiem. Izpildot šādu kodu, pieprasot konsolē izvadīt: i, mēs redzam visus elementus no kuriem sastāv mūsu datu masīvs. */

for (let value of arr) {
	console.log(value);
}

/* Pārskatīt datu masīva elementus var arī izmantojot metodi: for of. Izpildot šādu kodu, mēs konsolē saņemsim tieši to pašu, ko ar iepriekšējo kodu. Mēs redzēsim visus elementus, no kuriem sastāv datu masīvs. Metodi: for of mēs varam izmantot tikai strādājot ar datu masīviem, rindiņtipa datiem, pseidomasīviem, bet trādājot ar objektiem mēs to nevaram izmantot. */

console.log(arr.lenght);

/* Metode: lenght ir jau mums ierasta metode, kad mēs gribam uzzināt no cik elemntiem sastāv kādi dati, šinī gadījumā - datu masīvs. izpildot šādu kodu, mēs konsolē redzam: 5. Redzam, ka mūsu datu masīvs sastāv no pieciem elemtiem. */

arr[99] = 0;
console.log(arr.lenght);

/* Strādājot ar datu masīviem mums ir jāievēro būtiska metodes: lenght īpašība. Ka tā skaita datu masīva elementus, pie pēdējā elementa pieskaitot: +1. par to pārliecināties varam izpildot šādu kodu konsolē. Mūsu gadījumā, mēs redzēsim skaitli: 100. Un tas pavisam neatbilst patiesībai. tādēļ ar metodes: lenght izmantošanu datu masīvos jābūt ļoti uzmanīgiem. */

console.log(arr);

/* izpildot konsoles izvadi, mēs redzam sekojošo: [ 1, 2, 3, 6, 10, <94 empty items>, 0 ]. Mēs redzam, ka mūsu datu masīvā ir 94 tukši indeksi - tukšas vērtības. Tādēļ vērtības datu masīvam ir jāpievieno loģiski, ievērojot indeksus un to vērtības. Jo atceramies, ka datu masīviem ir stingra elementu kārtība, tādēļ, mēs nevaram aiz skaitļa: 8 pievienot skaitli: 0. Jo tādā veidā mēs sagraujam visu datu masīva loģiku. */

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} datu masīvā ${arr}`);
});

/* Ja mēs gribam redzēt detalizētu datu masīva saturu, ar visiem indeksiem un vērtībām, tad mēs varam izmantot metodi: forEach, iekvaās rakstot funkciju, pie funkcijas argumentiem rakstot: item, i, arr, liekot konsolē izvadīt indeksu - iteratoru, datu masīva elementu, pēc tam tekstu, kuru esam norādījuši. Izpildot šādu kodu mēs konsolē redzam detalizētu datu masīva aprakstu. */

/* Metodei: for( let of) ir sava priekšrocība izmantošanā. Mēs šinī metodē varam izmantot tādus atslēgvārdus kā: break un continue. Bet visbiežāk programmēšanā tiek lietota metode: forEach. */

/* Ciklu izmantošana ir ļoti svarīga, tad, kad mums vajag kādu darbību atkārtot noteiktas reizes. Pie kādām vērtībām apstādināt ciklu, turpināt. Bet metodē: forEach mēs nevaram izmantot: break jeb continue. Tā ir vienīgā atšķirība starp šīm abām metodēm. */

const str = prompt('', '');
const products = str.split(', ');
console.log(products);

/* Izmantojot metodi: split() mēs varam iegūt datu masīvu. Lai redzētu kā strādā šāda pieeja, mums ir jāatver pārlūks, un lodziņā jāievada kādi dati, atdalot tos ar komatu. Rezultātā pārlūka konsolē mēs iegūsim datu masīvu. Bet šai metodei ir īpatnība, kad tā strādā ar Number - skaitļa tipa datu masīvu. Izskatīsim šādu īpatnību pēc dotā piemēra. Ja izmantosim šo metodi, lai sašķirotu datu masīvu, kas satāv no skaitļiem, tad mēs iegūsim interesantu rezultātu. izpildot šādu kodu, mēs konsolē redzēsim sekojošo: [ 10, 13, 2, 26, 8 ]. Mēs redzam, ka datu masīvs ir sašķirots nevis pēc katra skaitļa lieluma, bet pēc pirmā cipara lieluma. Šāda datu masīva metodes: sort() īpatnība mums ir jāatcerās, kad strādājam ar Number tipa datu masīviem. Šī īpatnība notiek tādēļ, ka metode: sort() šīro Number tipa datus kā String datus. */

const array = [2, 13, 26, 8, 10];
array.sort(compareNumb);
console.log(array);

/* Izmantojot metodi: sort() mēs atverot pārlūku, konsolē redzam, ka mūsu ievadītie dati ir sašķiroti alfabēta kārtībā. Neskatoties uz to, kā mēs esam ievadījuši datus tie tiek sašķiroti. Šai metodei ir sava īpašība, tā sašķiro datu masīvu attēlojot to kā rindiņtipa datus - String. Bet metode: sort() sašķiro alfabēta kārtībā tikai String veida datus. To ir ļoti svarīgi atcerēties, jo ar Number tipa datiem metode: sort() darbojās citādāk. */

/* Lai metode: sort() darbotos tieši kā mēs gribam, mēs iekš tās () iekavām varam izmantot callback funkciju, un likt datus sašķirot tieši tā kā vajag mums. Izskatīsim to ar iemēru: . */

function compareNumb(a, b) {
	return a - b;
}

/* Šeit mēs izveidojam funkciju, kurai ir divi argumenti: a un b, liekam tai atgriezt a - b. Tālāk iekš metodes: sort() iekavām rakstām izveidotās funkcijas nosaukumu. Tikai nosaukumu, bez () iekavām. Izpildotšādu kodu konsolē mēs redzam, ka mūsu datu masīvs ir sašķirots, sākot ar mazāko skaitļi. Redzam, ka tagad vis ir tieši tā kā mēs gribējām. Kā darbojās šī funkcija? Šī funkcija darbojās izmantojot ātrās šķirošanas algoritmu. */

console.log(array);

console.log(products.join('; '));

/* Izpildot šādu kodu pārlūkā, mēs redzam, ka izmantojot metodi: join() mēs no datu masīva iegūstam rindiņtipa datus, kas atdalīti ar ; . */

/* Ikdienā strādājot par FrontEnd izsrādātāju mēs bieži saskarsimies ar pseidomasīviem. Kad mēs strādājam ar elementiem kādā lapā, mēs saņemsim pseidomasīvus. Tā ir objektu struktūra, kas sakrīt ar datu masīvu struktūru. Datu masīva struktūra būs tieši tāda pati, bet ir būtiska atšķirība. Mēs nevarēsim izmantot metodes, kas ir parastajiem datu masīviem. Jo tā ir vienkārši struktūra, kura glabā datus pēc kārtas. */

