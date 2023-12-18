'use strict';

let x = 5; alert(x++);

/* Izpildot šādu kodu pārlūkā, mēs saņemam alert lodziņā: 5, jo mēs izmantojam inkriminenta palielināšanu par: +1, bet mēs to esam pierakstījuši postprefiksā formā, kas nozīmē, to, ka mums tiek parādīta sākotnējā x vērtība. Lai mēs iegūtu sev vēlamo rezultātu, kad x tiek palielināts par: +1, mums inkriminents ir jāpieraksta prefiksā formā, pirms: x, jo tad mēs alert lodziņā saņemtu: 6.  Tas būtu šādi: . */

// let x = 5; alert(++x);

[] + false - null + true;
console.log(typeof ([] + false));

/* Lai pārliecinātos, ko šāds kods mums izpildīs konsoles izvadē, mēs izmantojam metodi: typeof, lai noteiktu datu tipu. Šinī piemērā mēs redzam, ka tie ir String - Rindas tipa dati. Jo atceramies, ja mums ir dati, kur ir tukšs datu masīvs, tad tie vienmēr būs String tipa dati. Turpinām izskatīt piemēru: */

console.log([] + false - null + true);

/* Izpildot šādu konsoles izvadi mēs saņemam: NaN - Not a Number - ka tas nav skaitlis. Šo rezultātu mēs saņemam vienmēr, ja veicam nematemātiskas darbības. */

let y = 1;
let c = y = 2;
alert(c);

/* Šo kodu ir jāizpilda caur pārlūku, jo mums ir metode: alert(), kas nedarbojās VS Code konsolē. Šinī piemērā kods izpildās no labās puses uz kreiso. Sākumā mainīgajam: y tiek piešķirta jauna vērtība, bet pēc tam tiek noteikts, ka mainīgais: c ir vienāds ar mainīgo: y. Rezultātā izpildot šādu kodu, mēs lodziņā alert saņemsim: 2. */

console.log([] + 1 + 2);

/* Šinī piemērā mēs redzam, ka tukšajam datu masīvam tiek burtiski pievienotas vērtības: 1 un 2, kā rezultātā izpildot šādu kodu, mēs redzam: 12. Izmantojot datu konkatizāciju mēs iegūstam ne gluži to rezultātu, ko gribējām. */

alert('1', [0]);

/* Šeit mēs redzam, ka mēs iegūstam alert lodziņā: 1. Tas tādēļ, ka mums ir indekss: 0, kura vērtība ir: 1. */

console.log(2 && 1 && null && 0 && undefined);

/* Atceramies, ka operators: Un - && vienmēr atdurās pret pirmo nepatieso vērtību, un atgriež mums to, kas šinī piemērā ir: null. Un ko līdz tas atdurās pret pirmo nepatieso vērtību, tas pārtrauc salīdzināšanu. */

console.log(!!(1 && 2) === (1 && 2));

/* Atceramies, ka divu nolieguma operatora izmantošana: !! pārvērš datus par boolean tipa datiem. Bet, ja salīdzināmās vērtības ir patiesas tad tas mums atgriež pēdējo patieso vērtību. Tādēļ izpildot šādu kodu mēs iegūstam: false. Jo šie elementi nav vienādi. Atceramies, ka salīdzinot kādas darbības mums tās ir jāliek () iekavās. */

alert(null || 2 && 3 || 4);

/* Atceramies, ka operators: && tiks izpildīts ātrāk, jo tam ir augstāka prioritāte. Atceramies, ka operators: Vai - || atdurās pret patiesību, pret pirmo patieso vērtību, atgriežot mums to. Izpildot šādu kodu mēs alert lodziņā redzēsim: 3. Mums tiek atgriezta pirmā patiesā vērtība. */

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b);

/* Izpildot šādu piemēru, mēs konsolē saņemam: false, jo kaut arī dati ir vienādi - vērtības ir vienādās, mēs saņemam: false, jo mums ir divi dažādi mainīgie, ar dažādiem nosaukumiem, tādēļ tie nav vienādi. Atceramies piemēru par mainīgo deklarēšanu, kad iedomājamies par kastītēm. Kaut tas, kas kastītēs ir iekšā - vērtības ir vienādas, kastītes mums ir dažādas. Tādēļ arī a nav vienāds ar b . */

alert(+'infinity');

/* Izpildot šādu kodu mēs alert lodziņā saņemsim: infinity, kaut gan datu tips izmantojot unāro plusu: +, tiek mainīts uz Number tipa datiem. */

console.log('Ezis' > 'ābols');

/* Izpildot sādu kodu, mēs konsolē iegūsim: false, jo šeit, ja veicam rindiņtipa datu salīdzināšanu tiek salīdzināti simboli no kā sastāv šie dati. Redzam, ka ezis mums ir uzrakstīts ar lielo burtu: Ezis. Lai par to pārliecinātos, mums ir jāatver simbolu tabula, kas satur visas pasaules valodas, un tur mēs varam redzēt simbolu sadalījumu. */

console.log(0 || '' || 2 || undefined || true || false);

/* Šinī piemērā mums visur ir operators: vai - ||. Izpildot šādu kodu mēs iegūsim konsolē: 2. Jo atceramies, ka operators: Vai atdurās pret pirmo patieso vērtību, kas šinī piemērā mums ir skaitlis: 2. */

