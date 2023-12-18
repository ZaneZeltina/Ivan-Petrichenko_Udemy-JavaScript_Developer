'use strict';

/* Šinī mācību stundā izskatīsim kā mēs varam saglabāt datus, neizmantojot datu bāzes, nepārlādējot lapu. Mēs varam saglabāt datus pat, ja aiztaisām pārlūku. To mēs varam izdarīt izmantojot: local Storage, kas ir mūsu datorā. */

/* Vienkārši sakot, tas ir objekts, kas ir jau iebūvēts pārlūkā, un tas var glabāt dažādus datus. Ja skatīties smalkāk, tad tā ir globāla objekta: window īpašība. */

/* Katrs objekts: window ir unikāls, katram domēnam savs. Tas ir darīts dēļ drošības. Jo mēs zinām, ka JavaScript strādā tikai ar vienu lapu, tas pats JavaScript fails nevar strādāt ar citu lapu. Tas vis tiek darīts, lai ievērotu drošību.  */

/* Local Storage ir objekts. Tas ir paredzēts, lai lietotājs varētu mainīt iestatījumus, kādus datus. Tie tiks saglabāti Local Storage. Local Storage mēs varam atrast atverot Google Izstrādātāju rīkus, sadaļā: Lietojumprogramma. */

/* Local Storage mēs varam saglabāt nelielus datus, liela izmēra datu bāzes mēs tur nevaram saglabāt. Izskatīsim ar koda piemēru kā darbojas Local Storage: . */

// localStorage.setItem('number', 5);

/* pat, ja mēs pārlādēsim lapu, jeb to aizvērsim, tā turpinās glabāt šos datus. */

/* Local Storage ir vēl cita metode: getItem(), ar kuras palīdzību mēs varam iegūt datus. Piemērs: . */

// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));

/* Local Storage ir metode: removeItem(), ar kuras palīdzību mēs varam noņemt kādus datus. Piemērs augstāk kodā: . */

/* Lai pilnībā attīrītu Local Storage mums jāizmanto komanda: clear(). Lai kods darbotos mums jāizslēdz koda rinda ar removeItem izmantošanu. Piemērs augstāk kodā: . */

/* Tagad pastrādāsim ar šo mini projektu. lai redzētu kā rakstītais kods darbojās, mums iepriekšējās koda rindas ir jāizslēdz. */

const checkBox = document.querySelector('#checkbox'),
	form = document.querySelector('form'),
	change = document.querySelector('#color');

if(localStorage.getItem('isChecked')) {
	checkBox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

checkBox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
	if(localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'white';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

const persone = {
	name: 'Zane',
	age: 34
};

// const serializedPersone = JSON.stringify(persone);

localStorage.setItem('Zane', persone);

console.log(localStorage.getItem('Zane'));

