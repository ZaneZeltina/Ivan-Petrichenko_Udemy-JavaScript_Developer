'use strict';

/* Izskatīsim jaunu iespēju JavaScript izmantošanā, kas parādījās tikai 2020 gadā, jaunajā ES11 standartā. */

/* Tagad izskatīsim operatoru: Nulles saplūšana: Nullish, kas JavaScript koda pierakstā izskatās kā divas jaytājuma zīmes: ?? . */

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
	elem.style.height = `${h ?? 200}px`;
	elem.style.width = `${w ?? 200}px`;
	elem.innerHTML = h ?? 200 * w ?? 200;
}

changeParams(box, newHeight, newWidth);

/* Šinī piemērā mēs mainām elementa: box parametrus: augstumu un platumu, izmantojot JavaScript. Mēs nosakām divus mainīgos. Pēc tam izmantojot funkciju, iekš tās {} iekavām mainot elementa: box stilus: augstumu un platumu. Izsaucam funkciju () iekavās rakstot elementa nosaukumu un abu noteikto mainīgo nosaukumus. Darbību rezultātu redzam pārlūkā.*/

/* Pie funkcijas interpolācijas mēs varam izmantot operatoru: vai - : ||, kas ļauj mums gadījumā, ja mums nav noteiktas vērtības izmantot noklusēto vērtību, ko esam norādījuši izmantojot operatoru: vai. Pārbaudīt operatora: || darbību mēs varam izslēdzot abus mainīgos - tos iekomentējot. izpildot šādu darbību, mēs redzam, ka darbojās tās vērtības, kas rakstītas aiz operatora: || . Lai mums pārlūka konsolē nebūtu kļūda, mums no funkcijas izsaukšanas iekavām () jāizņem abi mainīgo nosaukumi. */

/* Mēdz būt tādi mainīgie, kuru vērtībā mums tiek atgriezta nepatiesa vērtība, piemēram: 0. Ja mēs kādam mainīgajam norādam vērtību: nulle - : 0, tad mums tiek izpildāta tā vērtība, kas ir aiz operatora: ||, jo nulle ir nepatiesa vērtība, un tā netiek izpildīta. Piemērs, kur tiek izmantots operators: ||. : */

// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
// 	elem.style.height = `${h || 200}px`;
// 	elem.style.width = `${w || 200}px`;
// }

// changeParams(box, newHeight, newWidth);

/* Operators Nulish: ?? reaģē tikai uz divām nepatiesajām vērtībām: null un undefined. Šinī piemērā, mēs redzam, ka mums iekš mainīgā: userName ir undefined vērtība, bet izmantojot operatoru: ?? - Nulish, kas izpildās tikai divos gadījumos, kad vērtība ir: null vai undefined, tas izpilda noteiktu darbību, kuru mēs esam norādījuši aiz operatora: ??. Mūsu piemērā mēs norādām: 'User'. Izpildot šādu kodu konsolē mēs redzam: User. Bet, ja mēs pie vērtības norādīsim skaitli: 0 vai tukšu rindiņu, tad to mēs arī saņemsim konsolē. */

let userName;
let userKey;
console.log(userName ?? userKey ?? 'User');

/* lai mums nevajadzētu JavaScript kodā rakstīt daudzus nosacījumus, mēs izmantojam pierakstu ar operatoru: ??. Skatīt augstāk piemērā. */

/* Operatoram: ?? ir savas Nianses. Ir situācijas, kad mums ir vairākas vērtības. Mums ir vajadzīgs, lai vismaz viena no tām pastāvētu. Papildinām mūsu piemēru ar vēl vienu mainīgo ar undefined vērtību. Mainīgā nosaukumu ierakstām arī iekš console.log() iekavām, aiz katra mainīgā nosaukuma liekot operatoru: ??. */

/* Izmantojot operatoru: ?? mums jābūt uzmanīgiem, jo kad izmantojam vēl citus operatorus, mums ir jāatcerās par to izpildījumu prioritātēm. Izskatām piemēru: . */

// elem.innerHTML = h ?? 200 * w ?? 200;

/* Ja mēs izpildām šādu piemēru, mums ir jāņem vērā operatoru izpildīšanās prioritātes. Šinī gadījumā mums vis pirms izpildās reizināšana, jo reizinātāja operatoram ir augstāka prioritāte. Mēs redzam, ka tiek 100 sareizināts ar 400. Atverot pārlūku mēs redzam iegūto rezultātu. Bet, ja mēs vēlamies, lai vispirms izpildītos darbības ar operatoru: ??, tad mums dotais piemērs ir jāpieraksta šādi: izmantojot (), jo tām pēc to izpildījuma kārtības ir visaugstākā prioritāte. */

// elem.innerHTML = (h ?? 200) * (w ?? 200);

/* Vēl viena būtiska nianse, ka operatoru: ?? mēs nevaram izmantot kombinācijā ar logīskajiem operatoriem. Mēs nevaram izmantot operatoru: vai, kas ir šāds: &&. Tas ir pieņemts JavaScript tādēļ, lai izstrādātāji strādājot ar kodu nepalaistu garām tādas kombinācijas. Ja mēs ipildīsim tādu kodu ar operatoru kombinēšanu konsolē, mēs saņemsim kļūdu. */