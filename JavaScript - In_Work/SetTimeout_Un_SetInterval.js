/* eslint-disable no-unused-vars */
'use strict';

/* Lai mēs varētu noteikt kādas funkcijas, metodes darbības laiku, aizturi, kad tā sāk darboties, mums ir jāizmanto tādas metodes kā setInterval() un setTimeout().Izskatīsim to izmantošanu piemēros: */

const btn = document.querySelector('.btn');
let timerId,
	i = 0;

// btn.addEventListener('click', () => {

// 	// const timerId = setTimeout(logger, 2000);

// 	timerId = setInterval(logger, 500);
// });

// function logger() {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	console.log('text');
// 	i++;
// }


/* Šeit mēs nosakām mainīgo, iekš tā liekam metodi: setTimeout() iekavās rakstām saiti uz funkciju: logger, aiz komata rakstām laika intervālu, pēc cik ilga laika izpildīsies funkcija: logger. Dotajā gadījumā pēc 2 sekundēm. Izpildot ša'du kodu konsolē vai pārlūka konsolē mēs redzam, ka konsolē izvadās: text pēc 2 sekundēm. */

/* Lai varētu noteikt, kuram elementam - mainīgajam kurš setTimeout() tiek izmantots, mēs nosakām katru reizi jaunu mainīgo, lai zinātu, kuram mainīgajam kurš setTimeout()  tiek izmantots. Tas ir vajadzīgs, kad mēs lietojam: setTimeout() vairākas reizes. Ja gribam setTimeout() izmantot tikai vienu reizi, tad varam to darīt bez mainīgā deklarēšanas. Noteikt setTimeout() mainīgos mums vajag, lai turpmāk pēc nepieciešamības varētu tos apstādināt. */

/* JavaScript programmēšanas valodā laiku, kad izpildās funkcija nosaka: milisekundēs. Dotajā piemērā mēs liekam funkcijai izpildīties pēc 2 sekundēm - 2000 milisekundēm. Izpildot šādu kodu mēs redzam, ka funkcija izpildās pēc 2 sekundēm. */

/* Lai noņemtu kādu funkciju ar setTimeout() mēs izmantojam metodi: clearInterval() iekavās norādot setTimeout mainīgo, kuram bijām noteikuši izpildīties. Dotajā piemērā mēs rakstām: clearInterval(timerid). */

/* Mums ir arī otra laika aiztures metode: setInterval(). Tā tiek izmantota augstāk piemērā. lai nebūtu kļūdas, mēs iepriekšējo kodu izslēdzam - aizkomentējam. lai mēs varētu lietot mainīgo: timerId mums tas ir jādeklarē skripta sākumā izmantojot: let, jo tas tiks mainīts. Mums jāizmanto deklarēšana izmantojot: let, lai mums kodā nebūtu kļūdas. Mums ir jādeklarē mainīgais globāli, lai mēs pēc tam varētu to izmantot. Tā kā šinī piemērā, lai mēs varētu apstādināt metode: setInterval() izpildi. */

/* lai mūsu funkcija darbotos pēc noteikta laika, lai tā nebūtu bezgalīga mums ir jānosaka mainīgais: i. Funkcijā: logger mēs nosakām nosacījumu,ka, ja i ir vienāds ar 3, tad funkcijas izpilde tiek apturēta. Funkcija izpildās tikai tad, ja mēs noklikšķinām uz pogas. Izpildot funkciju: logger mēs liekam i katru reizi palielināties par: +1. Izpildot šādu kodu pārlūka konsolē mēs redzam, ka funkcija izpildās četras reizes un pēc tam tā apstājās, jo mēs esam noteikuši metodi: clearInterval(). */

/* Darba intervijā mums var uzdot jautājumu: ar ko rekursīvais setTimeout ir labāks par parasto setInterval? Rekursīvais setTimeout tiek izmantots funkcijas rekursijā. tas ir tad, kad funkcija izsauc pati sevi. metodes: setTimeout() priekšrocība ir tā, ka tā iekš sevis var izsaukt piemēram: vēl vienu: setTimeout(). bet te var saskarties ar problēmu: Kad taimeris ar intervālu strādā, tas neņem vērā cik ilgi strādās funkcija iekš viņa, iekš setInterval(). Piemēram mums būs liela, apjomīga funkcija, un tā izpildīsies ilgāk, nekā setInterval() noteiktais laiks. Rezultātā mums var nojukt vis izpildes algoritms, jo metode: setInterval() domā, ka pussekunde jau ir pagājusi un atkal izpilda funkciju: logger. Lai atrisinātu šo problēmu, tiek izmantots rekursīvais: setTimeout(). Izskatīsim šādu iespējamību jaunā piemērā: */

// let id = setTimeout(function log() {
// 	console.log('Hello!');
// 	id = setTimeout(log, 500);
// }, 500);

/* Ar šādu pierakstu - pieeju mēs varam atrisināt problēmu, kad funkcija negaida izpildes laiku, bet sāk jau izpildīties. Bet šeit mēs stingri nosakām, ka funkcija: log izpildās tikai pēc pussekundes. Izpildot šādu kodu pārlūka konsolē mēs redzam, ka mūsu funkcija izpildās katru reizi ievērojot pussekundes intervālu. */

/* tagad, kad esam apguvuši teoriju, izmantosim to praktiski. Lai tālākais kods darbotos korekti, mums iepriekšējais kods jāizslēdz - jāiekomentē. Atstājot tikai deklarētos mainīgos koda sākumā. */

function myAnimation() {

	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);
	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;

			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);

/* Šeit mēs izpildām animācijas izveidi izmantojot tikai JavaScript kodu. Bet parasti animācijas veido CSS stilu failā, strādājot ar klasēm, kas izveidotas HTML dokumentā. Kā piemēram mēs darījām iepriekšējā projektāa ar animāciju: fade. Izveidojām animāciju CSS failā, un tad ar JavaScript failu pievienojām jeb noņēmām klases. Panākot Animācijas darbību. Šis ir vienkārš animācijas izveides piemērs. Tas nav vēl līdz galam pilnīgs. Strādājot tālāk mēs uzzināsim, ka izveidot pilnīgu animāciju. Jo šai animācijai ir trūkums: ja mēs nepārtraukti spiežam uz pogas, tad zilais kvadrātiņš raustās. Tālāk veidosim animācijas, kurām nebūs šādu nepilnību. */





