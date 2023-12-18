'use strict';

const number = 1;

(function(){
	let number = 2;
	console.log(number);
	console.log(number + 3);
}());

console.log(number);

/* Mēs deklarējam mainīgos globāli. Pēc tam izmantojam anonīmu pašizsaukšanas funkciju. Lai izsauktu anonīmu funkciju, mums tā ir jāieraksta iekš () iekavām, jo savādāk tā būs parasta funkcijas deklarēšana, kas šajā gadījumā radīs kļūdu, jo funkcijas deklarēšana, deklarēta funkcija nevar būt anonīma. Funkcija, kas ierakstīta iekš () iekavām saucās: function expression - ekspress funkcija. Funkcionālai izteiksmei var nebūt nosaukuma. Ar šādas funkcijas palīdzību mēs varam izveidot personīgo redzamības lauku. */

/* Lai mēs pārliecinātos, ka mums ir dažādi mainīgie: number, mēs izpildām konsoles izvadi iekš anonīmās funkcijas, un izpildām konsoles izvadi ārpus anonīmās funkcijas. */

/* izmantojot šādu konstrukciju mēs esam izveidojuši atsevišķu moduli, kam ir savs redzamības lauks. Un visas tās darbības, kas ir modulī - konstrukcijā tiek normāli izpildītas. */

/* Otrs veids kā mēs varam izveidot moduļus ir: izveidot objekta interface - objekta vidi. Mēs mūsu moduli ierakstām iekš mainīgā, un tajā atgriežam metodes, kas kļūst pieejamas ārēji, no ārienes. Izmantojot šādu moduļa konstrukciju mēs varam izmantot objekta metodes ārēji, ārpus moduļa - ārpus funkcijas. Mēs varam izmantot tās metodes, kas tika eksportētas no objekta vides. */

const user = (function(){
	const privat = function() {
		console.log('I am privat!');
	};

	return {
		sayHello: privat
	};
}());

user.sayHello();

/* Vienkārši sakot tas nozīmē to, ka mūsu anonīmā pašizsaukšanas funkcija izveido objektu un tā eksportē tās metodes un īpašības, kas mums būs vajadzīgas ārēji. Lai mēs tām varētu piekļūt, izmantot ārēji. Mēs izveidoto objektu ierakstām iekš mainīgā: user un vēlāk mēs caur punktu varam vērsties pie metodēm jeb īpašībām. */

/* Ar klasēm tas darbojās gandrīz tieši tā pat. Nākošajās mācību stundās, mēs redzēsim kā tieši tas darbojās. */

/* Šādās anonīmās funkcijās mēs varam ielikt daļu no funkcionāla. Piemēram: daļu no kalkulatora funkcionalitātes jeb slaidera funkcionalitātes. Un tie kļūs par atsevišķiem moduļiem. */

/* Ir jau gatavi instrumenti, kas izpilda daļu no funkcionalitātes. Piemēram instruments: WebPack. To mēs apgūsim nākamajās mācību stundās. Tas mums sniedz iespēju veidojot jaunus projektus nepārrakstīt visu funkcionalitāti, nesākt visu no nulles, jo tas jau daļu no funkcionalitātes izpilda mūsu vietā, tādējādi ietaupot mūsu laiku. */