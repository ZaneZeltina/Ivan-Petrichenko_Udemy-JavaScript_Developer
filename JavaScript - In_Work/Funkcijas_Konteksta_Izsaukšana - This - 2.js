'use strict';

/* Tagad pielietosim iegūtās zināšanas praktiski, izmantojot funkcijas izsaukšanas kontekstu: this. Izmantosim notikumu klausītāju: addEventListener(). Izskatīsim ar praktiskiem piemēriem: . */

const btn = document.querySelector('button');

// btn.addEventListener('click', function () {

// 	// console.log(this);

// 	this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (event) => {
	event.target.style.backgroundColor = 'red';
});

/* Izpildot šādu piemēru mēs redzam, ka funkcijas izsaukšanas konteksts: this ir tas pats elements, kurā notiek notikums. */

/* Svarīgi atcerēties, kad mums notikumu klausītājs ir pierakstīts klasiskajā funkciju pierakstā, tad funkcijas izsaukšanas konteksts būs pats elements, kurā notiek notikums. Funkcijas izsaukšanas konteksts: this darbosies tieši tā pat kā kontrukcija: event.target. Par to pārliecināties mēs varam izmantojot: this mainot pogas krāsu. */

/* Bet praksē visbiežāk tiek izmantots notikumu objekts, nevis funkcijas izsaukšanas konteksts. Kas nozīmē, ka izmantojot metodi: addEventListener() tiek izmantotas bultiņveida funkcijas. */

/* Tagad izskatīsim kā funkciju izsaukšanas konteksts strādā ar bultiņveida funkcijām. */

/* Atceramies, ka mēs vienmēr varam izmantot bultiņveida funkcijas, kur vien tas ir iespējams, bet mums ir jāatcerās svarīga to sintakses īpašība: Bultiņveida funkcijām nav sava funkcijas izsaukšanas konteksta. Funkcijas izsaukšanas kontekstu tā ņems no līmeņa augstāk, no tā objekta, metodes, mainīgā, kurā tiek izmantota šī bultiņveida funkcija. */

/* izskatīsim kā tas darbojās JavaScript kodā, un pēc tam pāriesim uz tā darbu ar web lapu: . */

const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this);

			// console.log(this.num) - iegūstam objekta atslēgas vērtību;

		};
		say();
	}
};

obj.sayNumber();

/* Mēs izveidojam objektu, pievienojam am īpašību, pievienojam metodi: sayNumber, iekš kuras izveidojam bultiņveida funkciju. Atceramies, ja iekš objekta metodes mēs izveidojam funkciju, tad funkcijas konteksts nemainīsies, jo tai nav funkcijas izsaukšanas konteksta. Tā ņem funkcijas izsaukšanas kontekstu no līmeņa augstāk: no metodes: sauNumber. Svukārt metode ņem kontekstu no obejkta, uz kura tā balstās. Ja mēs iekš metodes: sayNumber izmantotu parasto funkcijas izsaukšanu - pierakstu, tad funkcijas konteksta: this izmantošana mums konsolē atgrieztu: undefined. Izpildot kodu pārlūka konsolē, mēs redzam, ka mums tiek atgriezts obejkts, kas satur īpašību: num un metodi: sayNumber. */

/* Šie nosacījumi ir universāli, jo tie darbosies jebkurā kodā ar ko mēs sastapsimies. */

/* Ja mums ir vajadzība iegūt kāda objekta konkrētas atslēgas vērtību, tad izpildām šādu darbību: console.log(this.num). Mēs konkrētajā piemērā iegūstam atslēgas: num vērtību: 5. */

/* Bultiņveida funkcijas ļoti bieži tiek izmantotas, lai modificētu kādu elementu. Tai ir dažas būtiskas sintakses īpašības. Bultiņveida funkcijas tikai izstrādātās, lai saīsinātu koda pierakstu. Izskatīsim to ar piemēru: */

const double = a => a * 2;
console.log(double(4));

/* Šeit mēs nosakām mainīgo, kas būs funkcija: double. Tā satur argumentu: a, kas rakstīts iekš funkcijas () iekavām, un tā mums atgriež elementu: a reizinātu ar: 2. Ja mēs izmantojam šādu bultiņveida funkcijas pieraksta sintaksi, mums jāzin, ka tā vienmēr izmanto metodi return, kuru tā jau ieliek funkcijā automātiski. Izpildot konsoles izvadi mēs redzam skaitli: 8. Redzam, ka funkcija strādā pareizi. Garāks šīs funkcijas pieraksts būtu šāds: . */

// const doeuble = (a) => {
// 	return a * 2;
// };

/* Pareis bultiņveida funkciju pieraksts ir pēc iespējas īsāks. ja redzam tādu pierakstu, kā aktīvajā kodā, tad zinām, ka tur tiek izmantots: return. */

/* ja mūsu darbības, izmantojot bultiņveida funkciju ietilpst vienā koda rindā, tad mēs to varam pierakstīt tā kā piemērā, kas ir augstāk. */

/* Kā arī, lai tā būtu vēl īsāka, mēs: ja mums ir tikai viens funkcijas arguments: varam to nelikt () iekavās. Un tad koda pieraksts sanāk vēl īsāks. Jo īsāku pierakstu mēs izmantojam, jo pareizāk. */

/* Tagad atgriezīsimies pie piemēra, kur izmantojam notikuma klausītāj: addEventListener(). Kā mēs varam šeit izmantot bultiņveida funkciju? Skatīt piemēru pašā augšā. */

/* Ja mēs parasto funkcijas pierakstu vienkārši aizstāsim ar bultiņveida funkciju, tad mēs konsolē saņemsim kļūdu, jo tiek zaudēts funkcijas izsaukšanas kontekst: this. Jo bultiņveida funkcijām nav sava izsaukšanas konteksta. */

/* Tādēl svarīgi ir atcerēties: Ja mēs iekš notikuma klausītāja: addEventListener() izmantojam bultiņveida funkciju, tad mēs zaudējam funkcijas izsaukšanas kontekstu: this. Bet mēs varam izmantot iekš notikuma klausītāju bultiņveida funkciju, ja mēs izmantojam pierakstu, kur iekš funkcijas argumenta rakstām: event jeb vienkārši burtu: e, un iekš funkcijas {} iekavām izmantojam konstrukciju: event.target. Šādas konstrukcijas izmantošana būs pareiza, un neradīs kļūdu. */

/* Visbiežāk strādājot ar notikumu klausītāju: addEventListener() tiek izmantotas tieši bultiņveida funkcijas pieraksts, kur tiek izmantota konstrukcija: event.target. Ļoti reti, kad tiek izmantots funkcijas izsaukšanas kontekts: this. lai izmantotu funkcijas izsaukšanas kontekstu: this, mums ir jāizpilda parasts funkcijas pieraksts. Izpildām pareizu pierakstu izmantojot bultiņveida funkciju un konstrukciju: event.target. Skatīt pašā augšā aktīvo kodu: . */

