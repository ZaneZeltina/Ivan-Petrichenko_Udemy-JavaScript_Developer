'use strict';

const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

/* Mēs izveidojam mainīgo, vēršamies pie HTML dokumenta eleemnta: button izmantojot metodi: querySelectorAll. Pēc tam izpildām konsoles izvadē: btns, rakstām [] iekavās indeksu, pie kuras pogas mēs vēršamies. Pēc tam izmantojam konstrukciju: classList, kas atttēlo mums klases nosaukumus, liekam punktu un izmantojam metodi: lenght, lai uzzinātu konkrētās pogas klases garumu. Izpildot šādu kodu, mēs pārlūka konsolē redzam: 2, jo mūsu pogai ir divas klases. */

// console.log(btns[0].classList.item(0));

/* Bet, lai redzētu konkrētu klases nosaukumu, izmantojam metodi: item() iekavās liekot to indeksu, kura vērtību vēlamies uzzināt. Izpildot šādu kodu konsulē mēs redzam: blue. Redzam pirmo pirmās pogas klases nosaukumu. */

/* Īpašībai: classList ir trīs ļoti bieži lietojamas metodes, ar kurām mēs strādāsim ļoti bieži. Un tās ir: */

// add();
// remove();
// toggle();

/* Izskatīsim to pielietojumu ar piemēriem: . */

// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

/* Metode: toggle, ļauj mums žonglēt ar elementu klašu nosaukumiem. Ja dotā klase jau ir, tā tiks noņemta, bet, ja nav, tad tā tikš pievienota. Par šo metodi daudzi iesācēji aizmirst, bet velti, jo ir daudzas situācijas, kad tā var būt ļoti noderīga. */

/* Tā pat strādājot ar klasēm, mēs varam, pievienot, dzēst, žonglēt ar vairākām klasēm vienlaicīgi, rakstot tās iekš metodes () iekavām, katru liekot '' pēdiņās, atdalot ar komatu. */

/* Lai pārbaudītu vai kādam HTML dokumenta elementam ir kāda noteikta klase, mēs varam izmantot nosacījumus un metodi: contains() tās iekavās rakstot klases nosaukumu, kuru vēlamies atast. Izpildot šādu kodu mēs konsolē redzam: red, jo mums pogai ar indeksu: 1 ir klase: red. Piemēra pieraksts: . */

// if (btns[1].classList.contains('red')) {
// 	console.log('red');
// }

/* Tagad realizēsim mūsu projektā 'Menu Hamburgeru', un paskatīsimies kāds ir pareizs šādas funkcionalitātes koda pieraksts JavaScript programmēšanas valodā. Lai mēs redzētu kā darbojās šāda funkcija, mums iepriekšējais kods ir jāizslēdz - jāiekomentē, atstājam tikai pirmo koda rindu, jo tur mēs esam deklarējuši mainīgo: btns un pievienojuši tam HTML dokumenta elementu. */

btns[0].addEventListener('click', () => {
	if (!btns[1].classList.contains('red')) {
		btns[1].classList.add('red');
	} else {
		btns[1].classList.remove('red');
	}

	// btns[1].classList.toggle('red');

});

/* Izmntojot metodi: toggle, mēs varam ar daudz īsāku kodu panākt tieši tādu pašu darbību, pievienot jeb noņemt HTML elementam klasi. Bet svarīgi ir atcerēties, ka, ja mums ir sarežģīti skripti - kodi, tad pareizāk ir izmantot garo pierakstu, aprakstīt visas darbības no sākuma līdz beigām, kas mums ir vajadzīgas. Bet vienkāršos īsos skriptos mēs varam izmantot metodi: toggle. */

// console.log(btns[0].className);

/* Strādājot ar klasēm ir vēl viena metode: className, bet tā vairs netiek izmantota, jo tā ir novecojusi. Izmantojot to, mēs saņemam klašu nosaukumus vienā rindā, un līdz ar to mums ir grūtāk ar tiem strādāt. Jaunākajos projektos tiek izmantota metode: classList. Bet mums ir jāzin, ka ir arī: className, tā var būt vēl sastopama vecos kodos. */

/* Izskatīsim ļoti savrīgu pieeju: Notikumu Deliģēšana. Iedomājamies situāciju,kad mūsu lapā ir daudz pogas. Mēs vēlamies, lai pie klikšķa uz jebkuras pogas izpildītos vienāds notikums, izpildītos kāda darbība visām pogām, nospiežot uz jebkuras no pogām, kas ir mūsu lapā. Mēs protams varam katrai pogai atsevišķi aprakstīt kādu darbību, bet ir ļoti būtiska problēma: Ja tiks pievienotas vēl kādas jaunas pogas, bez mūsu ziņas - līdzdalības, tad tām vairs nebūs tā noteiktā darbība - tām nebūs konkrētais notikums. Priekš tam, mums ir: Notikumu Deliģēšana. Tās darbības princips ir tāds, ka mēs ņemam kopējo elementu, kas ietver visus elementus ar kuriem mēs gribam strādāt, un strādājam ar to. Liekam tam izpildīt konkrētu notikumu. Notikumu izpilda visi tie elementi, kas ir iekšā iekš kopīgā elementa. Mēs nosakām kādu funkciju, ko izpilda visi tie elementi, kas ir galvenā elementa iekšienē. */

/* Izskatīsim ar piemēru kā notikumu deliģēšana strādā kodā: . */

wrapper.addEventListener('click', (event) => {

	// console.dir(event.target);

	if (event.target && event.target.tagName == 'BUTTON') {

		// if(event.target && event.target.classList.contains('blue')) {

		console.log('Hello!');
	}
});

/* Strādājam ar mainīgo: wrapper, ko esam noteikuši skripta - koda sākumā. */

/* Lai mēs varētu redzēt visas metodes, kas ir argumentam: event, mums jāizpilda metode: console.dir(event.target). Mēs redzam objektu, kas satur daudzas metodes, un viena no tām ir: tagName, kur norādīts HTML elementa - tega nosaukums. Tā tega nosaukums ar kuru mēs strādājam. Atcermaies, ka HTML dokumenta tegu nosaukumi pie metodēm tiek attēloti ar lielajiem burtiem. Šinī gadījumā mēs redzam: tagName: "BUTTON". */

/* Mums pie nosacījumiem jāraksta event.target, un event.target.tagName salīdzinot to == rakstot tega - HTML dokumenta elementa nosaukumu. Atceramies, ka HTML dokumenta elementa nosaukums jāraksta iekš '' pēdiņām un ar lielajiem burtiem. Jo, ja rakstisim vienkārši: event, tad mēs varam saņemt koda kļūdu. Jo HTML dokumentā ir tādi tegi - elementi, kuriem nav tādas metodes kā: event.target. Piemēram HTML dokumenta elements: br, kas tiek izmantots, lai pārietu jaunā rindā. */

/* izpildot šādu kodu, mēs redzam, ka, ja klikšķinām uz elementu, kas nav poga, mums nekas nenotiek, bet, ja klikšķinām uz pogas, tad redzam, ka konsolē parādās: Hello!. Un tas notiek klikšķinot uz jebkuras no pogām. Tas pats notiks arī, ja izmantosim otrā pieraksta variantu, tagName vietā rakstot: classList.contains('blue'). Bet šāds pieraksts strādās tikai ar vienu pogu, šinī gadījumā: ar zilo pogu, jo tikai tai ir klase: blue. Jo tā mēs esam ierakstīuši pie nosacījumiem, ka notikums strādās tikai tad, ja pogai ir klase: blue. Bet ja gribam visām pogām izmantot notikumu deliģēšanu, tad mums jāizpilda aktīvais kods, kas ir piemērā. */

/* Šis ir klasisks piemērs: notikumu deliģēšanai. */

/* Mēs varam pievienot jaunas pogas, nosakot mainīgo, un tās visas izpildīs notikumu, kuru esam augstāk aprakstījuši. Izpildot šādu kodu mēs redzam, ka katrai pogai, arī jaunajai pogai srādā notikums. Izpildās notikumu deliģēšana. tagad neatkarīgi no tā, kad parā'dijās poga, tas vienalga izpilda to pašu funkciju, ko pārējās pogas. Izskatīsim to ar koda piemēru: . */

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

/* Lai esošām pogām noteiktu izpildīt noteiktu notikumu - darbību, mēs varam izpildīt šādu kodu:

btns.foreach(btn => {
	btn.addEventListener('click', () => {
	console.log('Hello!')
	});
});

Bet ir būtiska problēma: ja mēs pēc tam pievienosim jaunas pogas, tad uz jaunajām pogām izmantojot šādu notikumu pierakstu, darbības netiks izpildītas. Izmantot metodi: forEach mēs varam tikai tad, ja skaidri zinām, ka jauni elementi - pogas netiks pievienotas. Tas ir tādēļ, ka šeit netiek izpildīta notikumu deliģēšana. Tagad mēs saprotam, kādēļ ir tik svarīgi noteikt notikumu deliģēšanu. */

/* Nosakot notikumu deliģēšanu mēs varam izmantot jau attīstītāku pieeju, ko ir iecienījuši izmantot Google izstrādātāji. Tā ir aiz konstrukcijas event.target izmantot metodi: matches() iekavās rakstot '' pēdiņās tā HTML dokumenta elementa nosaukumu ar kuru vēlamies noteikt sakritību, aiz elementa nosaukuma liekam punktu un rakstām klases nosaukumu. Šīnī gadījumā: red. Pilns šādas attīstītas pieejas notikumu deliģēšanai pilns koda piraksts būtu šāds: 

wrapper.addEventListener('click', (event) => {
	
	if (event.target && event.target.maches('button.red')) {
		console.log('Hello!');
	}
});

/* Notikumu deliģēšanas pieeja ir pati piemērotākā darbam ar DOM koku. Darbam ar Document Object Elements. Tā ir lieliski piemērota darbam ar daudziem elementiem vienlaicīgi. */











