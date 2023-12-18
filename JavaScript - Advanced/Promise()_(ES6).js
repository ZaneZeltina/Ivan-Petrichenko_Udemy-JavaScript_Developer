/* eslint-disable no-unused-vars */
'use strict';

/* Promise(): Apsolījumi. Bez šīs tehnoloģijas ir grūti iedomāties FrontEnd. Tā dod mums iespēju darboties ar dažādām asinhronām operācijām. Asinhrons kods mums ir kad liekam: timeout, servera pieprasījumiem. Kad mēs nezinam pēc cik ilga laika serveris atbildēs, mums operācijas tiek izpildītas asinhroni. */

/* Mēs savā darbā gribam, lai kādas darbības tiktu izpildītas noteiktā secībā, darbības tiek izpildītas kā pa ķēdīti. Mēs liekam kaut ko izpildīt un apsolām, ka pēc tam izpildīsies nākošā darbība. */

/* Savā ikdienā mēs ar to sastopamies, kad strādājam ar lapām. Mēs izpildām notikumu: click, un gribam, lai tikai šajā gadījumā notiktu kāda darbība. Mēs izmantojam callBack funkcijas: Atpakaļ izsaukšanas funkcijas. */

/* Mums var būt daudz atpakaļ izsaukšanas funkcijas vienā kodā, un šāds kods kļūs grūti lasāms. Tādu kodu sauc par: callBack hell. Izskatīsim to ar nelielu piemēru: . */

console.log('Datu pieprasījums...');

const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Datu sagatavošana...');

		const product = {
			name: 'TV',
			price: 2000
		};

		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'ordered';
			resolve(product);
		}, 2000);
	});
}).then(data => {
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
}).catch(() => {
	console.error('Kļūda!');
}).finally(() => {
	console.log('Finally!');
});

// Šis kods ir asinhrons;

/* Izmantojot šādu koda pierakstu mēs nonākam callBack hell, jo mums ir daudz callBack funkcijas. Šis ir tikai īss koda piemērs, bet kad mums ir garš kods, tad situācija ir vēl sliktāka. Lai tā nebūtu, mums ir jāizmanto: Promise().  Izskatīsim promise izmantošanu mūsu piemērā: . */

/* Mums rodas jautājums, ko mums dot Promise() izmantošana. Jo mēs tik un tā izmantojam callBack funkcijas. Galvenā priekšrocība ir tā, ka kods darbojas sinhroni. Mēs izpildām vienu sinhronu operāciju, pēc tam nākošo utt. */

/* Mēs varam izmantot metodi: return, liekot atgriezt jaunu apsolījumu, jaunu Promise(). Skatīt mūsu koda piemērā: . */

/* Izskatīsim vēl divas Promise() metodes. Šīs metodes ir: all() un race(). Izskatīsim tās ar piemēru: . */

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All done!');
// });

Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All done!');
});

/* Lai redzētu otrās Promise metodes: race() darbību, mums metode: all() jāizslēdz - aizkomentējot kodu, kur tā tiek izmantota. */
