'use strict';

/* Lai mēs varētu strādāt ar lapām, saņemt, apstrādāt datus, mums ir jāsaprot elementu darbības pašos pamatos. Mums ir jāsaprot kā JavaScript darbojās lapā. */

/* Pirmais svarīgākais, kas mums ir jāzin, tas ir: DOM - Document Object Module. Tas ir Dokumenta Objekta Modelis. Lai pilnvērtīgi iemācītos un saprastu kā tas strādā, mums ir jāzin HTML un CSS pamati. Jo šo visu apgūsim strādājot ar tiem. Strādājot ar jeb kuru HTML lapu, tā ir kā parasts dokuments, kuru mēs varam iztēloties kā Objektu. Tāpēc arī ir tāds nosaukums: Dokumenta Objekta Modelis. Un kā jeb kuram objektam, arī šeit mums ir dažādas metodes, kuras mēs izmantosim, lai piekļūtu katram HTML lapas elementam. */

/* Izskatīsim ar dažādiem piemēriem, kur tiek izmantotas jau senas metodes, kā arī samērā jaunas. Sāksim ar pirmajām. lai piekļūtu kādam HTML lapas elementam, mēs rakstām: . */

const box = document.getElementById('box');
console.log(box);

/* Šo metodi mēs izmantojam tad, kad mums HTML dokumentā ir kādi elementi ar id. Mēs jau zinām, ka HTML lapai dažādiem elementiem mēs varam izveidot unikālus id. Šinī piemērā mēs arī to izmantojam. Mums HTML dokumentā ir id="box". Izpildīt šādu kodu VS Code konsolē mēs nevaram, jo saņemsim kļūdu. Mums tas ir jāizpilda caur pārlūku, caur konsoli. */

const buttons = document.getElementsByTagName('button');
console.log(buttons[2]);

/* Izpildot šādu kodu pārlūka konsolē mēs saņemam: HTMLCollection(5), kurā iekšā ir visas piecas button. Mēs ieguvām datu masīva tipa elementu, un tas nesatur nekādas metodes, īpašības, izņemot metodi: lenght. Jo mēs neiguvām tieši datu masīvu, mēs ieguvām pseidomasīvu. Atceramies, ar ko atšķirās masīvs no pseidomasīva. Atšķirība ir tāda, ka masīvam ir visas metodes un īpašības, bet pseidomasīvam tādu nav. */

/* bet, lai mēs varētu iegūt konkrētu elementu, ja tie mums ir vairāki, tad mums ir jāvēršas pie tā caur [] iekavām, iekavās liekot to indeksu, kura elemetu vēlamies iegūt. Šinī piemērā mēs rakstām: [1], kā rezultātā iegūstam otro button. */

/* Otra metode kā vērsties pie konkrēta elementa, ja lapā tie ir vairāki, ir: kad izpildām konsoles izvadi, tad uzreiz aiz mainīgā nosaukuma, iekš () iekavām, liekam [] iekavas rakstot tā elementa indeksu, kuru vēlamies iegūt. Dotajā piemērā, tas ir: [2] . */

/* Atceramies, ka katru reizi vēršoties pie kāda elementa, kādā no metodēm, mēs to varam izmantot vienu reizi, jo savādāk mums būs kļūda. */

/* Šī metode: getElementsByTagName darbosies arī tad, ja mums būs tikai viens eleemnts HTML dokumentā. Mēs konsolē vienalga iegūsim: HTMLCollection, tikai tagad jau tas saturēs tikai vienu elementu, un tas būs pseidomasīvs. */

const circles = document.getElementsByClassName('circle');
console.log(circles);

/* Šī metode: getElementByClassName ļauj mums iegūt kādu elementu pēc tā klases nosaukuma. Atceramies, ka izmantojot šo metodi mums iekavās () jāliek tikai klases nosaukums, bez punkta priekšā, jo šī metode jau zin, ka mēs izmantojam klasi. Citos gadījumos, kad netiek lietota šī metode, mums ir pirms klases nosaukuma iekš '' pēdiņām jāliek punkts. Izpildot doto koda piemēru pārlūka konsolē, mēs redzam, ka mums tiek izvadīts : HTMLCollection(3), kas satur datu masīvu, krā ir redzams katrs no elementiem, atdalīti ar komatu. */

/* ja mēs uzmanīgi ieskatāmies katras metodes nosaukumā, tad redzam, ka getElementById ir noteikts vienskaitļa formā, jo Id mums var būt tikai viens, bet pārējās metodes ir getElements - daudzskaitlī, kas nozīmē, ka mūsu dokumentā HTML tādi var būt vairāki - daudzskaitlī. */

/* Šīs visas ir standartmetodes, kas parādījās jau sen, bet tagad apskatīsim metodes, kuras tiek lietotas jaunajos projektos, un šobrīd ļoti daudz sastopamas, kuras parādījās samērā nesen: . */

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

/* Šīs metodes galvenā priekšrocība ir tā, ka mēs varam izmantot tanī visus CSS faila īpašības, id, utt. Metode: querySelectorAll būtiska īpatnība ir tā, ka tā var izmantot vienu metodi, kad tiek lietoti pseidomasīvi. Pseidomasīvi var izmantot metodi: foreEach. Ievērojam savrīgu nosacījumu, ka ja rakstam klases nosaukumu izmantojot šo metodi, tad pirms nosaukuma mums ir jāliek punkts, lai metode zinātu, ka mēs vēršamies tieši pie elementa klases. Izpildot šādu kodu pārlūka konsolē mēs redzam: NodeList(3). Mēs iegūstam atkal datu masīvu ar visiem elementiem, kas ir pēc dotā nosaukuma. Un mēs redzam, ka šai metodei ir īpašība: forEach, kā arī ierakstā īpašība: lenght. */

hearts.forEach(item => {
	console.log(item);
});

/* Izmantojot metodi: forEach mēs iekavās () rakstām: item, izmantojam bultiņveida funkciju, iekavās {} izpildām konsoles izvadi liekot izvadīt (item). Izpildot šādu funkciju mēs pārlūka konsolē, redzam katru HTML dokumenta elementu: heart. */

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

/* izmantojot metodi: querySelector mēs tā pat varam izmantot visas CSS īpašības. Atšķirībbā no iepriekšējās metodes, šeit mums tiek izvadīts pirmais HTML dokumenta objekts, kas atbilst () iekavās ierakstītajam nosaukumam. Ja mums HTML dokumentā ir daudzi elementi ar vienādu nosaukumu, mēs redzēsim pirmo. */

