'use strict';

/* Mēs jau esam izskatījuši metodes, kā mēs varam mijiedarboties kā lietotājs ar lapu. Tagad izskatīsim lapas mijiedarbību ar lietotāju, kad tā ir mobilajā versijā. Notikumi mobilajā lapas versijā. Jo lietotāji visvairāk apmeklē lapas tieši no mobilajām ierīcēm. */

/* Mobilās ierīces mūsdienās jau izmanto tādus pārlūkus, kas veic tādas pašas darbības kā datora pārlūki. Ja mēs JavaScript kodā esam ierakstījuši notikumu: click, tad tas arī tiek izpildīts mobilo ierīču pārlūkos. */

/* Tagad izskatīsim kādi tad notikumu veidi var būt mobilajās ierīcēs. Tie ir tikai seši, tie ir: . */

// touchstart;
// touchmove;
// touchend;
// touchenter;
// touchleave;
// touchcancel;

/* Šie visi ir: Sensora Notikumi. */

/* izskatīsim trīs notikumus piemēros: . */

/* Tā pat arī sensora notikumiem ir savas objekta sensora notikumu īpašības. Ir trīs galvenās īpašības darbojoties ar sensora ierīcēm. Un tās ir: touches - izpildot šādu kodu mēs konsolē iegūstam objektu: TouchList, kas sevī satur dažādas īpašības un metodes. Īpašība: targetTouches - Izmantojot šo īpašību konsolē mēs redzam to pašu, ko pie īpašības: touches, tāpēc, ka izmantojot datoru mēs īsti neredzam kā šī īpašība darbojās. Īpašība: changedTouches - izmantojot šo īpašību mēs redzēsim konsolē sarakstu ar to pirkstu darbībām, kas tika veiktas kādā elementā, pat, ja noņemsim vienu pirkstu. Lai precīzi redzētu, ko konsolē izvada pēdējo divu īpašību izmantošana, mums ir jāskatās no mobilās ierīces, jo precīzi tas darbosies tikai no mobilās ierīces. */

// touches;
// targetTouches;
// changedTouches;

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (event) => {
		event.preventDefault();

		console.log('Strat');
		console.log(event.touches);
	});

	box.addEventListener('touchmove', (event) => {
		event.preventDefault();

		console.log('Move');
	});

	box.addEventListener('touchend', (event) => {
		event.preventDefault();

		console.log('End');
	});
});

/* Šīs Objektu notikumu īpašības mēs varam izmantot vēl ar papildus, daudzām un sarežģītām iespējām. Bet reālajos projektos tās vairs katrs savā kodā neapraksta, bet gan izmanto jau gatavus risinājumus, no gatavām kodu bibliotēkām, bet tos mēs apskatīsim vēlāk. */
