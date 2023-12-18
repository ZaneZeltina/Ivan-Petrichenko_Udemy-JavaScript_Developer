'use strict';

/* Šinī lekcijā mēs parunāsim par interneta pārlūku. Kādas īpašības tam ir. */

/* Mēs jau zinām, ka ir tāda konsturkcija: document, ar kuras palīdzību mēs varam strādāt ar HTML dokumenta elementiem. Strādāt ar DOM koku. Dokument ir objekts, kas sevī satur visu HTML dokumenta struktūru. */

/* JavaScript programmēšanas valodā ir vēl viena svarīga konstrukcija: window - logs. To mēs jau esam izmantojuši dažas lekcijas atpakaļ. Logs window ir logs, kur tiek attēlots mūsu HTML dokuments. Kad mēs mainām pārlūka lielumu, mēs mainām tā logu, bet pats HTML dokuments paliek nemainīgs. Šo konstrukcju mēs izmantojām, kad veidojām uz window notikumu klausītāju, iekš tā rakstījām darbības ar documet. Darbības ar visu mūsu HTML lapu - ar tās DOM koku. */

/* Trešā konstrukcija, kas mums ir jāzin ir: screen - ekrāns. Praksē tas tiek izmantots ļoti reti, bet mums par tāda esamību ir jāzin. Screen ir vis mūsu monitors, tas, ko mēs redzam datorā. */

/* lai redzētu visu dokumenta saturu un visas metodes, ko tas satur, mums pārlūka konsolē jāizpilda komanda: . */

// console.dir(document);

/* Tagad izskatīsim praktisku piemēru, kur strādājam ar HTML dokumenta elementiem: . */

const box = document.querySelector('.box'),
	btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height);

/* Parastajā lapu izstrādē stilistikā - CSS tiek izmantoti stili: box-sizing: border-box.Šo īpašību izmantošana nedaudz izmaina mūsu skripta darbību. Atveram CSS failu un ierakstām īpašību: box-sizing: border-box. Rakstām to iekš .box klases. Izpildot šo darbību, mēs redzam, ka konsole izvada savādākus rādītājus: width un height. Tas ir tāpēc, ka šī īpašība maina bloka uzvedību un tiek ierēķināta arī īpašība: padding: 10px. Visos reālajos lapu izstrādes projektos tiek izmantota īpašība: box-sizing: border-box. */

/* Pateicoties šīm darbībām JavaScript mēs piekļūstam elementa: box: platumam un augstumam, un varam ar tiem strādāt tālāk mūsu kodā. */

/* Tā pat mēs varam strādāta ar offset metodēm. Lai redzētu kā tās strādā, mums iepriekšējo divu mainīgo deklarēšana jāizslēdz - jāiekomentē. */

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height);

/* Izmantojot konstrukcijas: offsetWidth un offsetHeight mēs konsolē redzm tieši tās vienības, ko noteicām CSS failā. */

/* Lai uzzinātu box elementa kopējo augstumu un platumu, ieskaitot: scroll - ritināšanu, mums jāizpilda konstrukcijas: scrollHeight un scrollWidth. Pierakstām to ar piemēriem, iepriekšējo kodu iekomentējot - izslēdzot. */

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

/* Izpildot šādu pierakstu mēs iegūstam pilnu elementa: box augstumu un platumu, ieskaitot scroll - ritināšanu. */

/* Izpildīsim darbību, lai tad, kad nospiežam uz pogas, mums atvērots viss elementa: box saturs, lai mēs redzētu visu tekstu. Pieraksta piemērs: . */

// btn.addEventListener('click', () => {
// 	box.style.height = box.scrollHeight + 'px';
// });

/* Praksē tiek ļoti bieži izmantotas konstrukcijas kā: scrollLeft un scrollTop. Pateicoties tām mēs varam redzēt cik pikseļus satur tā scroll - ritināšanas daļa, kuru mēs neredzam. Pateicoties šādai konstrukcijai mēs varam izmnatot tās, lai pievienotu scroll - ritināšanai kādu interaktīvu, piemēram: rādīt lietotājam, cik tļu viņš ir aizritinājis tekstu, cik vēl atlicis teksta ko ritināt utt. Izskatīsim piemēru kā mēs varam uzzināt cik daudz scroll mums vēl ir palicis. Lai redzētu kā kods darbojās, mums iepriekšējais kods ir jāizslēdz. */

btn.addEventListener('click', () => {
	console.log(box.scrollTop);
});

/* Iepriekšējās īpašības mēs varējām tikai iegūt, mēs tās nevaram izmantot - modificēt, jo tās ir tikai lasāmas, bet īpašības: scrollTop un scrollLeft mēs varam izmantot - modificēt. */

/* Šobrīd mēs izskatām tieši piemērus, kas attiecās uz HTML lapas elementiem. Mēs vēl nestrādājam ar window jeb document. */

/* Mums bieži var gadīties situācija, kad mums vajag uzzināt kāda elementa, kas ir HTML lapā, elementa koordinātas. To mēs varam izdarīt šādi kā piemērā: . */

console.log(box.getBoundingClientRect());

/* kad mēs iegūstam koordinātas izmantojot JavaScript programmēšanas valodu, mums ir jāatcerās divas to īpatnības: koordināta: right tiek skaitīta no lapas augšējā kreisā stūra, no lapas kreisās puses, lidz elementa atrašanās vietai. Šī ir svarīga īpatnība, kas jāatcerās. Jo, kad izmantojam CSS stilus koordināta: right tiek skaitīta no lapas labās puses. Tāda pati īpatnība ir arī koordinātai: bottom. Jo, ja izmantojot CSS stilus mums tā tiek skaitīta no apakšas uz augšu, tad izmantojot Javascript tā tiek skaitīta no elementa aušējās robežas līdz elementa apakšējai robežai. */

/* Daži no pārlūkiem var nedaudz mainīt elementa koordinātas, jo tiem ir noklusējuma malu atstarpes. Padding un Margin, un līdz ar to elementu koordinātas var nedaudz mainīties. */

/* izmantojot šādu konstrukciju ar metodi: getBoundingClientRect() mēs iegūstam objektu. Līdz ar to mēs varam ar to strādāt, izmantojot visas objektam esošās metodes. Mēs varam to izmantot, piemēram, lai pievienotu kādu interaktīvu, animāciju. */

/* Ja mēs vēlamies iegūt tikai vienu konkrētu koordinātu, tad izmantojam šādu pierakstu: . */

// console.log(box.getBoundingClientRect().top);

/* Izmantojot šādu pierakstu, mēs konsolē redzam elementa koordināti no lapas augšējās  malas līdz elementa sākuma robežai. */

/* Tagad izskatīsim kā mēs varam iegūt kāda elementa stilus, kas tika izveidoti izmantojot CSS failu, CSS stilus. Kāpēc tas ir svarīgi? Iedomāsimies situāciju, kad mēs rakstām JavaScript kodu un mums ir ļoti svarīgi zināt, vai kāds elements šobrīd tiek attēlots HTML lapā - web lapā. Izskatīsim kā mēs to varam izdarīt: . */



/* Metode: getComputedStyle() ļauj mums redzēt kādi stili tiek izmantoti konkrētajam objektam, ar kuru mēs gribam strādāt iekš JavaScript. Piemēram vai tiek šobrīd izmantots: display: none, utt. Ja mēs iekš pārlūka atvērsim izstrādātāju rīkus, pāriesim uz sadaļu: Computed - Aprēķinātie stili, tad redzēsim katra HTML elementa stilus, kas tiek šobrīd izmantoti. Šos getComputedStyle() stilus mēs varam iegūt izmantojot JavaScript. Mēs varam tikai tos iegūt izmantojot metodes pierakstu: getComputedStyle(), bet mēs nevaram tos pa tiešo mainīt izmantojot šādu metodi, jo tie ir tikai lasāmi. Izskatīsim ar piemēru kā šī metode darbojās: . */

const style = window.getComputedStyle(box);
console.log(style);

/* Izpildot šādu kodu mēs konsolē saņemam objektu, kas satur ļoti daudz dažādus stilus. Mēs atverot iegūto objektu iegūstam visu stilu sarakstu, kādi vien ir CSS stilu valodā. Ja mums interesē kāda elementa konkrēts stils, tad izpildām šādu pierakstu: */

console.log(style.display);

/* Rezultātā mēs iegūstam elementa: box diplay stilu, display vērtību, kas šinī gadījumā ir: block. Iegūstot konkrēta elementa konkrētu stilu, mēs zinot tā stilu varam ar to strādāt tālāk JavaScript. */

/* Metodei: getComputedStyle ir divas būtiskas īpatnības. Pirmā: Mēs izmantojot šo metodi varam iegūt pseidoelementa stilus. Atceramies, ka tie ir tādi kā piemēram: before, after utt. Mēs izmantojot JavaScript nevaram strādāt ar CSS pseidoelementiem, bet iegūt to stilus mēs varam. Otrā: Daudzi iesācēji jauc metodi: getComputedStyle() ar parasto style metodi. Šīs abas metodes nav vienādas, jo metode: getComputedStyles() ņem sākotnējos stilus no CSS faila, bet metode: style ir inline - iekš stili, kuri rakstās tieši iekš HTML dokumenta tega - HTML dokumenta elementa. Inline stiliem ir visaugstākā izpildes prieoritāte, bet Computed - Aprēķinātajiem stiliem ir zemāka izpildes prioritāte. Kā arī izmantojot inline stilus, mēs varam tos pārrakstīt, mainīt, varam tos izmantot - strādāt ar tiem, bet izmantojot metodi: getComputedStyle() mēs varam tikai iegūt stilu vērtības, mēs nevaram tos izmantot - ar tiem tālāk strādāt. */

/* Apskatīsim vēl konstrukciju: document un window īpatnības. konstrukcijai: document nav tādas metodes kā scrollTop. Lai iegūtu koordinātas izmantojot konstrukciju: document, mums ir jāpieraksta tas šādi: . */

console.log(document.documentElement.clientWidth);

/* Izpildot šādu komandu mēs iegūstam kopējo HTML dokumenta platumu. */

/* Īpašību: scrollTop mēs varam iegūt rakstot tādu pašu konstrukciju, piemērs: . */

console.log(document.documentElement.scrollTop);

/* Izpildot šādu pierakstu mēs konsolē iegūstam cik mēs noaugšas esam izmantojuši scroll - ritināšanu, dotajā gadījumā konsolē redzam: 0, jo ielādējot lapu mēs ne cik neesam elementu ritinājuši, un tādēļ scrollTop ir: 0. */

/* Galvenā atšķirība starp scrollTop un pārējām metrikām ir tā, ka mēs varam pašrocīgi tās mainīt, piemēram ieejot kādā web lapā, mēs varam konsolē irakstīt: document.documentElement.scrollTop komandu un mēs tiksim atvirzīti atpakaļ uz lapas sākumu. Šādu konstrukciju mēs varam izmantot JavaScript kodā, kad vēlamies atgriezt lietotāju lapas sākumā. Tas pats arī attecās uz pārējām metrikas konstrukcijām. */

/* Ir vēl divas metodes, kas maina lapas stāvokli. Pirmā metode: scrollBy(), kas tiek izmantota iekš konstrukcijas: window liekot punktu un akstot: scrollBy() metodi. Iekš metodes () iekavām mums jānorāda divas koordinātas: X un Y. Izmantojot šo metodi mēs varam noteikt cik tālu lapa būs aizritināta. Atverot jebkuru lapu konsolē mēs varam  ierakstīt šādi: . */

window.scrollBy(0, 400);

/* Redzam, ka horizontāli scroll nemainās, jo tur ir noteikta: 0, bet vertikāli lapa ir aizritināta uz leju pa 400 px. Šī metode darbojās no tekošās lapas daļas, bet, lai ietekmētu visu lapu kopsummā, mums ir jāizmanto metode: scrollTo() tās iekavās norādot X un Y koordinātas. Rakstām konstrukciju, izmantojot: window, piemērs: . */

window.scrollTo(0, 400);

/* Izpildot šo kodu tieši kādā lapā, izstrādātāju rīku konsolē, mēs redzam, ka HTML lapa ir atritināta gandrīz uz pašu lapas saķumu, jo 400 px ir atskaitīti no pašas lapas augšas. */

/* Šīs abas metodes ir izdevīgi izmantot, kad mums nepieciešams lietotāju pārvietot uz konkrētu lapas daļu. */
