'use strict';

/* Atceramies, ka JavaScript programmēšanas valodā mums ir dažādi datu tipi. Gan primitīvi dati, gan objekta datu tipi. Dinamiskā datu tipizācija nozīmē to, ka mēs no viena datu tipa pārvēršam datus citā datu tipā. Izskatīsim piemēru, kad mēs kādus datus pārvēršam par String - rindiņtipa datiem:  */

console.log(tupeof(String(null)));

/* Dotajā piemērā mēs redzam, ka izmantojot šādu metodi: typeog(String(null)), mēs nulles tipa datus pārvēršam par String - rindiņtipa datiem. Izpildot šādu kodu konsolē mēs redzam: String. */

console.log(String(null));

/* Bet izpildot šādu kodu mēs konsolē redzam: null. Redzam, ka datu tips nav mainījies. */

console.log(tyoeof(String(4)));

/* Tas pats notiek, ja mēs izmantojam Number - skaitļa tipa datus. Atceramies izmantot metodi: String. */

/* Bet šāda pieeja nav īsti ērta un nav pareizākais variants. */

/* Ir vēl viens variants kā iegūt String datus. Izmantojot elementu konkatizāciju, vairāku datu apvienošanu vienā rindā. Savienojoot datus. Bet tas notiek tikai tad, ja kaut viens elements ir pierakstīts kā String dati, jo tad arī visi pārējie kļūst par String tipa datiem. Tas darbojās tikai tad, ja izmantojam metodi: typeof. */

console.log(typeof (4 + ''));

/* izskatīsim kā mums vairāku elementu ar dažādiem datu tipiem savienošana vienā rindā var noderēt. Šī gan jau ir novecojusi metode, bet kodā vēl ļoti bieži sastopama. Nosakām mainīgo: 5. Pēc tam izpildām konsoles izvadi rakstot kādas mājas lapas adresi, leikam operatoru + un rakstām mainīgā nosaukumu. Izpildot šādu kodu mēs redzam, ka mājas lapas adrese un skaitlis: 5 ir vienā rindā. */

const num = 5;
console.log('https://www.vk.com/catalog/' + num);

const fontSize = 24 + 'px';
console.log(fontSize);

/* tāda pati pieeja tiek izmantota arī šinī piemērā. */

/* tagad izskatīsim variantus kā mēs jeb kāda tipa datus varam pārvērst par Number tipa datiem: . */

console.log(typeof (Number('4')));

/* Šinī piemērā mēs redzam, kā izmantojot metodi: typeof () iekvaās rakstot: Number ('4'), mēs redzam, ka mēs String tipa datus varam pārvērst par Number tipa datiem. Bet šī metode tiek lietota vēl retāk, nekā metode: String, jo ir daudz vienkāršāks veids kā to izdarīt. Izskatīsim to ar piemēru: */

console.log(typeof (+'5'));

/* Šīs metodes izmantošanu sauc par: unāro plusu. Šāds pieraksts ir īsāks, ērtāks, un dod tieši tādu pašu rezultātu kā iepriekšējā metode. */

console.log(typeof (parseInt('15px', 10)));

/* Šī ir trešā metode, kā mēs varam iegūt Number tipa datus. Šī ir: parseInt metode, kura no String datiem atgriež Number tipa datus. Bet šī metode arī netiek plaši izmantota, tā ir reti sastopama. */

let answer = +prompt('Hello!', '');

/* Lai mēs varētu iegūt datus no lietotāja, izmantojot metodi: prompt(), kur iekavās lietotājs ievadīs kādus datus. Izmantojot pirms metodes: prompt: + mēs panākam to, ka ja lietotājs ir ievadījis dažādu tipu datus. Bet ļoti svarīgi ir atcerēties: lai kādus datus lietotājs ir ievadījis, mums tiks atgriezti tie kā: String - rindas tipa dati. Tas attiecās uz metodi: promt, kā arī uz forms utt. Bet citreiz mums būs nepieciešams no datiem: String iegūt cita tipa datus. */

/* Nākošais datu veids, ko mēs varam tipizēt ir: boolean tipa dati. Atceramies, ka tiem ir tikai divas nozīmes: true un false. Pierakstīsim visus datu tipus, kas vienmēr būs: false - nepatiesība: . */

0, '', null, undefined, NaN;

/* Visi šie dati vienmēr būs ar vērtību: false. */

/* Visi pārējie datu tipi, kas ir JavaScript valodā: vienmēr būs: true - patiesība. */

/* Izskatīsim to ar reāliem piemēriem, kurus mēs varam sastapt programmās: . */

let switcher = null;
if (switcher) {
	console.log('working...');
}

/* Ja mēs izpildīsim šādu kodu, mēs neredzēsim neko, jo mainīgais: switcher satur nulles tipa datus, un tas nozīmē, ka izpildās false un netiek izpildīti nosacījumi. Redzam, ka nekas netiek izpildīts, jo sākotnējā vērtība ir: false. */

switcher = 1;

if (switcher) {
	console.log('working...');
}

/* Bet, ja mēs mainām mainīgā: switcher vērtību uz: 1, mēs uzreiz iegūstam vērtību: true, un tiek izpildīti mūsu nosacījumi. Izpildot šādu kodu mēs konsolē redzam: working... Jo sākotnējā vērtība ir: true. Tas bija pirmais veids kā mēs varam strādāt ar boolean datu tipiem, izskatīsim vēl divus veidus, kā mēs ar tiem varam strādāt: */

console.log(typeof (Boolean('4')));

/* Šinī piemērā, mēs redzam, ka izmantojot metodi: typeof () iekavās rakstot: Boolean un () iekavās rakstot String tipa datus, izpildot šādu kodu konsolē mēs redzam, ka tie ir: boolean tipa dati. Bet šis variants parasti netiek pielitots, tādēļ, ka mums ir pareizāks: pirmais variants un to mēs sastapsim - lietosim ļoti bieži. */

/* ir vēl trešais veids kā mēs varam strādāt ar boolean tipa datiem. izskatīsim to ar piemēru: . */

console.log(typeof (!!'4444'));

/* Šī metode, kad mēs izmantojam divus nolieguma operatorus: !! tiek izmantota vēl retāk. Izpildot šo kodu mēs konsolē arī redzam: boolean. */










