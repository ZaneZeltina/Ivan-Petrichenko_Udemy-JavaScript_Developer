'use strict';

const block = document.querySelector('.block');

console.log(block);

// console.log(block.textContent);  - Kods izraisīs kļūdu.

// if (block) {
// 	console.log(block.textContent);
// }

console.log(block?.textContent);
console.log(2 + 3);

/* Šinī piemērā mēs izpildām konsoles izvadi pārlūkā un redzam, ka mēs saņemam kļūdu, jo mēs izvadot text.content konsolē, saņemam: null, un tālāk mūsu kods netiek pildīts, mēs neredzam nākošo console.log() pieprasījuma izvadi. Šo ir būtiski atcerēties, jo gadījumā, ja mums vēl daudz cita koda, tas netiks izpildīts, jo tas pie pirmās koda kļūdas apstādina tālāko izpildi. */

/* Šādā gadījumā, lai izvairītos no kļūdas ir jāizmanto nosacījumu pieraksts, kas ir šāds: Skatīt augstāk piemēru. Izpildot šādu kodu, mēs redzam, ka mums kļūdu nav un, ka tiek arī izpildīts tālākais kods. */

/* Bet šāds pieraksts nav īpaši ērts izmantošanā. Tādēļ mums ir operators: opcionālās ķēdes salīdzināšanai: ?. Tas izskatās kā vienkārša jautājuma zīme. Pieraksta piemēru skatīt augstāk. */

/* Redzam, ka mūsu operators: ? salīdzināja mainīgā vērtību, kas ir pa kreisi un konsolē atgrieza mums: undefined. Operators: ? izvada block mainīgā vērtību, kas ir undefined, un tālāk tas neizpilda darbības. Tas neaiziet līdz īpašībai: tectContent. Šāds pieraksts mums ļauj saīsināt kodu, un mums nav jāizmanto nosacījumu pieraksts. */

/* Operatoram: ? ir būtisks nosacījums: mēs nevaram neko tanī ielikt iekšā, mēs nevaram tam pievienot kādu vērtību, jo tad mēs saņemsim kļūdu. Jo koda kreisajā pusē mums vērtība ir: undefined, un iekš undefined mēs nevaram ielikt nekādu vērtību. */

//block?.textContent = '123';  - Kļūda

/* Izskatīsim vēl vienu piemēru: . */

const userData = {
	name: 'Zane',
	age: 34,
	say: function () {
		console.log('Hello!');
	}
};

userData.say();
userData.hey?.();
// console.log(userData.skills.js);

/* Ja mēs izpildīsim šādu kodu, mēs saņemsim kļūdu, jo mums nav tādi objekti: skills un js. Lai šāds pieprasījums darbotos, mums ir atkal jāizmanto garais nosacījumu pieraksts: . */

// if (userData && userData.skills && userData.skills.js) {
// 	console.log(userData.skills.js);
// }

/* izpildot šādu kodu, mums nebūs kļūda, bet tas ir garš pieraksts un ikdienā to imantot nav ērti. izmantojot operatoru: ? mēs varam šādu koda gabalu pierakstīt daudz īsāk. Mēs liekam operatoram atgriezt vērtību, kas ir kreisajā pusē, kas šinī gadījumā ir: undefined, un tālāk kods neiet, tas apstājās. */

console.log(userData?.skills?.js);

/* Operatoru: ? mēs varam izmantot arī pirms iekavām: () un iekavām {}. Operatora: ? izmantošanu pirms iekavām skatīt augstāk piemērā. Ja mēs operatoru: ? izmantojam pirms iekavām, ļoti svarīgi ir ievērot pilno tā pierakstu: ?. Aiz tā ir jāliek punkts. */

/* Operatoru: ? ir ērti izmantot, kad mums ir potenciāli neeksistējošas īpašības, vērtības, funkcijas, jo, ja mēs neizmantojam operatoru: ?, tad mēs izpildot kādu neeksistējošu vērtību, funkciju, mēs saņemam kļūdu, bet operatora: ? izmantošana mums ļauj no tā izvairīties. */



