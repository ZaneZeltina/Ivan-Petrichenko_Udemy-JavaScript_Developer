'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

console.log(boxesQuery[0].closest('.wrapper'));

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
	const div = document.createElement('div');
	div.classList.add('box');
	document.body.append(div);

	// boxesGet[boxesGet].lenght = div;  - Kļūda

}

console.log(boxesQuery);
console.log(boxesGet);
console.log(document.body.children);

/* izpildot konsoles izvadi pārlūkā mēs redzam divus dažādus pseidomasīvus. Bet tiem ir būtiska atšķirība. Kad mēs izmantojam metodi: querySelectorAll mēs iegūstam pseidomasīvu, kuram ir dažādas metodes, kuras mēs strādājot ar JavaScript kodu varam izmantot. Bet izmantojot otro metodi: getElementByClassName mēs iegūstam arī pseidomasīvu, bet tam praktiski nav nekādas metodes ar kurām mēs varētu strādāt, kā tikai metode: lenght. Tādēļ vienmēr labāk ir izmantot pirmo metodi: querySelectorAll, jo tā savā lietošanā ir universāla. Ir vēl viena metode kā mēs varam iegūt pseidomasīvu. Tā ir: izpildot konsoles izvadi, iekavās () rakstām: document.body.children. Rezultātā mēs iegūstam pseidomasīvu, kas satur visus elementus, kas ir HTML dokumentā iekš tega: body. Mēs iegūstam četrus elementus. */

/* Izmantojot šādas metodes, kad mēs iegūstam konsolē šādas kolekcijas sauc par: dzīvajām un statistiskām kolekcijām. Paskatīsimies kā tas ir realitātē. Skatīt augstāk piemērā. */

/* Mēs konsolē redzam interesantu situāciju. Kaut esam likuši noņemt pirmo box elementu, tas nav noņemts, jo šī metode attēlo to saturu, kas ir uz to brīdi, kad tā ir uzrakstīta. Tā attēlo to, kas ir uz to brīdi, kad rakstām: querySelectorAll. Un tā nezina, ka vēlāk kāds no elementiem tiks izņemts. Kaut gan paskatoties HTML dokumentu, mēs redzam, ka ir palicis tikai viens box elements. Jo mēs esam izpildījuši metodi: remove() divas reizes, tādēļ arī mums paliek tikai viens elements. Šāda metodes: querySelectorAll uzvedība parāda, ka tā ir statistiska kolekcija. Bet otra metode: getElementByClassName mums attēlo situāciju uz esošo momentu. Tā parāda mums, ka mums ir palicis tikai viens box elements. Un tā saucās: Dzīvā kolekcija. Jo šī dzīvā metode seko pašreizējām darbībām - pašreizējām izmaiņām. */

/* prakstiski strādājot ar kodu visuniversālākā izmantošanā ir metode: querySelectorAll. Jo tā mums der gandrīz jebkurā situācijā. Bet reizēm ir nepieciešams redzēt, kas tieši notiek dotajā brīdī ar HTML dokumenta DOM koku. Atceramies, ka DOM: Document Element Module. Tad var noderēt dzīvās kolekcijas. */

/* Atceramies, ka pseidomasīviem, kas tiek iegūti ar HTMLCollection metodēm, nav pieejamas metodes, kuras mēs varētu izmantot tālāk darbojoties ar kodu. Bet ir dažas iespējas, kā mēs tomēr varam strādāt ar iegūtajiem pseidomasīviem. Izskatīsim to ar piemēriem: . */

console.log(Array.from(boxesGet));

/* Lai mēs varētu strādāt ar pseidomasīvu kā ar parastu datu masīvu mums ir jāizmanto metode: Array.from() iekavās rakstot to elementu no kura vēlamies iegūt masīvu. Izpildot šādu kodu konsolē mēs redzam parastu datu masīvu, kam ir visas parasto datu masīvu metodes. Mēs ieguvām statistisku kolekciju, kas neseko HTML dokumenta DOM kokam, tas neizseko nekādas izmaniņas. */

/* Izskatīsim vēl vienu pieeju kā mēs varam strādāt ar statistiskām un dzivām kolekcijām. Mēs varam uzrakstīt ciklu: for, kas liek izveidot četrus jaunus elementus: div. Pierakstām elementu pievienošanu izmantojot ciklu: for: Skatīt augstāk piemērā. */

/* Izpildot ša'du piemēru mēs redzam, ka statistiskajā kolekcijā mums tā pat kā bija ir trīs elementi: div, bet dzīvajās kolekcijās mums ir seši elementi: div. Gan kolekcijā, kur tiek izmantota metode: getElementByClassName, gan tanī kolekcijā, kur izmantojam parasta datu masīva iegūšanas metodi: Array.from(boxesGet). */

/* Būtiski ir ievērot elementu izveidošanas sintaksi JavaScript pierakstā, jo iesācēji bieži pieļauj kļūdas, neievērojot JavaScript sintakses nosacījumus, rakstot tā kā parādīts augstāk piemērā iekomentētajā tekstā. Ja mēs izpildīsim tādu kodu, mēs saņemsim kļūdu, jo strādāt pa tiešu ar HTMLCollection mēs nevaram, jo tā ir noteikts Javascript standartā. */

/* darbojoties realitātē ar projektiem, mēs visbiežāk izmantosim metodi: querySelectorAll, jo tā der praktiski jebkuros gadījumos, bet vajag arī zināt, ka ir citas metodes. Un jāsaprot katras metodes darbība un loģika. Par dzīvo kolekciju izmantošanu un darbību arī var prasīt intervijā. Bet tagad atbildi mēs zinam. */

/* izskatīsim vēl divas metodes ar kurām mēs tālāk strādāsim. Pirmā metode: matches(), kuras iekavās rakstām klases nosaukumu, rakstām priekšā liekot punktu. To pierakstām izmantojot nosacījuma pierakstu, izmantojot mainīā nosaukumu, rakstot metodi: forEach() iekš iekavām rakstot bultiņfunkciju, bet tās argumenta vietā rakstām vienkārši: box. Šādu pieeju mēs varam izmantot, tikai vienā gadījumā: kad mums jāstrādā ar CSS selektoru. Lai redzētu vai šāda metode strādā izpildām konsoles izvadi, kur varam izvadītu kādu tekstu jeb arī konkrēto elementu, bet to darām iekš funkcijas. */

/* Otrā metode, kuru mēs varam izmantot, lai iegūtu kādu konkrētu elemetu ir: closest(). To pierakstām aiz boxesQuery liekot punktu un rakstot: closest() iekavās rakstot ar punktu tās klases nosaukumu, kuru vēlamies iegūt. Lai redzētu to konsolē, rakstām to visu iekš: console.log() iekavām. Piemēra pieraksts pierakstīts augstāk, lai pareizi darbotos JavaScript kods. Lai pilnvērtīgi redzētu kā šī metode darbojās mums ir jāizslēdz - jāiekomentē pārējo darbību kods. Izpildot šo metodi mēs konsolē redzam elemntu: wrapper ar visu tā saturu, ar visiem trim box elementiem. */

boxesQuery.forEach(box => {
	if (box.matches('.this')) {
		console.log(box);
	}
});






