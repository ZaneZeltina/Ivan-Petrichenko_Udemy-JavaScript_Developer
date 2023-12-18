'use strict';


/* JavaScript programmēšanas valodā ir daudz dažādi operatori. Dažī jau mums ir zināmi. Vairāki no tiem ir matemātiski operatori, kad mēs saskaitām, atņemam, rezinām vai dalām kādas vērtības. Bet operatoriem JavaScript programmēšanas valodā ir daudzas īpatnības. Izskatīsim operatoru: +. Mēs jau zinām, ka izmantojot operatoru: + mēs varam izpildīt interpolāciju - elementu savienošanu vienā rindā. */

console.log('arr' + ' - object');

/* Izmantojot operatoru: + + mums jāievēro īpašība, ka ja mēs gribam divuv vai vairākus elementus saskaitīt, tad mums izmantojot + + obligāti starp plusiem jāieliek atstarpe. Ja mēs to neivērosim, tad darbībai būs jau cita nozīme. ESLint gan nepieļaus tādu pierakstu, mums uzreiz būs kļūda pierakstā. */

// console.log(4 + + ' - object');

/* Ja mēs izmantojam plus zīmi: + tieši pirms objekta tad tas saucās unārais plus, kas nozīmē, ka tas strādā tieši ar konkrēto elementu. Tas nozīmē, ka tas strādā tikai ar vienu objektu, tieši ar to pirms kura tas ir izmantots. */

/* Ja mēs izmantosim vienu plus: + zīmi, tad mūsu elementi tiks nevis saskaitīti, kā mēs vēlējāmies, bet salikti kopā vārda tiešajā nozīmē.Konkrēti šinī piemērā mēs konsoles izvadē redzēsim: 45. */

console.log(4 + '5');

/* Šādu darbību mēs nevaram izpildīt, jo tā ir neloģiska, jo mēs nevaram pie skaitļa pieskaitīt string tipa datus - rindas tipa datus, tā ir neloģiska darbība. Mēs konsoles izvadē redzēsim: NaN - Not a Number - tas nav cipars. */

console.log(4 + + '5');

/* Šāda darbība ir loģiska, jo mēs varam skaitļus saskaitīt, kaut tie ir dažāda datu tipa, tie saskaitīsies un konsoles izvadē mēs saņemsim: 9. */

/* Ir vēl divi operatori, kur viens no tiem satur: ++ zīmes. Un tie ir decriminents: ++, kas kādam elementam - skaitlim pieskaita vienu vērtību: +1, un decriminents: --, kas kādam elementam - skaitlim atņem vienu vērtību: -1. Uzskatāmi piemēri: */

/* JavaScript programmēšanas valodā operatoru pierakstā ir divas formas: prefiksā forma, kad operators ir pirms elementa un postfiksā, kad operators ir azi elementa. Atšķirība ir tāda, ka ja tas ir prefiksā formā, tad vispirms izpildās darbība, un pēc tam parādās elementa vērtība, un tas ir loģiski. Bet kad pieraksts ir postfiksā formā, tad vispirms parādās elementa vērtība, bet pēc tam izpildās darbība. Izskatīsim dažus piemērus ar decriminemtiem, incriminetiem, postfikso un prefisko pierakstu. */

let incr = 10,
	decr = 10;

/* Nosakām divus mainīgos izmantojot atslēgvārdu: let. */

incr++;
++incr;

/* Inkriminenta: ++ izmantošana, kad kādai vērtībai tiek pieskaitīs: +1. Izmantojam gan postfikso, gan prefikso pierakstu, kas šinī gadījumā izpilda vienādas darbības.*/

decr--;
--decr;

/* decriminenta: -- izmantošana, kad kādai vērtībai tiek atņemts: -1. Izmantojam gan postfikso, gan prefikso pierakstu, kas šinī gadījumā izpilda vienādas darbības. Šis piemērs, ar prefikso un postfikso pierakstu nemaina darbības būtību, jo tā izpildās abos gadījumos vienādi. */

console.log(incr);
console.log(decr);

/* Izvadām konsolē iegūto rezultātu izmantojot incriminentu un decriminentu. Konsolē mēs redzam: 12 un 8. Jo ņemot vērā mūsu koda pierakstu skaitlim: 10 dibvas reizes tiek pieskaitīt: +1, un divas rezes tiek atņemts: -1. */

console.log(incr++);
console.log(decr--);

/* Šeit mēs redzam, ka izpildās postfiksā pieraksta īpatnība, ka ja mēs incriminentu un decriminentu liekam aiz mainīgā, mums tiek izvadītas sākotnējās mainīgā vērtības, ar iepriekšējām izpildītajām darbībām, kas šajā gadījumā ir: 12 un 8, jo tās nemainās. */

console.log(++decr);
console.log(--decr);

/* Kad pierakstām incriminentu un decriminentu izmantojot prefikso formu, tad vsipirms izpildās darbība, bet pēc tam konsolē tiek izvadīta jaunā iegūtā vērtība. Tiek izpildātas darbības, mēs konsoles izvadē redzam: 8 un 7. */

/* Šī ir būtiska prefiksā un postfiksā pieraksta īpatnība, kas ir jāatcerās. Mēs izvadot gala rezultātu nevaram izmantot postfikso pierakstu, bet pareizi ir izmantot prefikso pierakstu. Ja darbības veicam pirms izvades, tad varam lietot gan prefikso gan posfikso pierakstu, jo rezultāts no tā nemainās. */

/* Ja mēs JavaScript programmēšanas valodā izmantojam operatoru: % procenti, tad izpildās dalīšana, izdalās skaitļi, bet atbildē, mēs redzam atlikumu no veselā skaitļa. Uzskatāms piemērs: */

console.log(5 & 2);

/* Konsoles izvadē mēs redzam: 1, jo izdalot 5 ar 2 veselais skaitlis ir: 2, bet atlikums: 1, ko mēs redzam konsoles izvadē. Šī % īpatnība mums ir jāatcerās. Tas, ka mēs izvadē saņemsim atlikumu. */

/* Arī operatoram: =, ir vairākas īpatnības. Operators: = nenozīme vienādību, operators: = JavaSkript programmēšanas valodā zīme: = ir piederības zīme. Kaut kam pieder kaut kas. */

let number = 4;
console.log(number);

/* Mēs nosakām mainīgo izmantojot atslēgvārdu: let, rakstām mainīgā nosaukumu, liekam piederības zīmi: =, rakstām piederošo vērtību. */

console.log(2 * 4 == 8);
console.log(2 * 4 == '8');
console.log(2 * 4 === 8);
console.log(2 * 4 === '8');

/* Lai JavaScript programmēšanas valodā mēs varētu salīdzināt divas vai vairākas vērtības, mēs izmantojam divas: == zīmes, kas izsaka salīdzināšanu. Konsoles izvadē mēs redzam: true, jo 8 ir vienāds ar 8. Ja gadījumā salīdzinājums ir nepaties, mēs konsoles izvadē saņemam: false. Arī, ja mēs salīdzinām divus vai vairākus elementus, kas ir atšķirīgi pēc datu tipa, bet tieabi ir skaitļi, izmantojot operatoru: ==, tie tiks salīdzināti un mēs šinī piemērā iegūsim to pašu rezultātu: true. Bet ja mēs izmantojam trīs zīmes: ===, kas ir stingrās salīdzināšanas operators, tad mūsu vērtības tiek salīdzinātas ne tikai pēc to vērtības, bet arī pēc datu tipa. Ja datu tipi ir vienādi, mēs iegūstam: true, bet ja nav, tad: false. */

/* Sie visi bija matemātiskie JavaScript operatori, bet mums ir vēl loģiskie operatori, kas ir: && - tulkojumā: un, kā arī operators: ||  - tulkojumā: vai. Kā piemēru var uzskatīt: pildspalva un zīmulis, pildspalva vai zīmulis. Šie abi ir loģiskie JavaScript operatori. O[erators: && - un strādās tikai tad, ja mums būs divi vai vairāki elementi, un ja vismaz viens no tiem būs patiess: true. Zemāk ir daži piemēri par loģisko operotu izmantošanu: */

const isChecked = true,
	isClose = true;
	//isClose = false

/* Mēs nosakām divus mainīgos, kuru vērtība abos gadījumos ir: true. Pēc tam izmantojot loģisko operatoru: && izpildām salīdzināšanas darbības. */

console.log(isChecked && isClose);

/* Mēs izvadām konsolē abu mainīgo vērtības nozīmes, izpildot salīdzināšanu: isChecked un isClose, kas šinī piemērā ir: true. */

/* Ja mums viens no elementiem ir ar vērtību: false, tad arī konsoles izvadē mēs redzam: false. Jo mums tiek izvadīta pirmā elementa vērtība, kas ir nepatiesa. */

/* Tālāk izmantojot operatoru: || - vai mēs sakām: isChecked vai isClose. Pierakstā tas ir šādi: */

console.log(isChecked || isClose);

/* Mēs konsolē izvadām salīdzināšanas darbības rezultātu, kas mūsu piemērā ir: true, ja vismaz viena vērtība ir: true. Mēs izpildot salīdzināšanas darbību ar operatoru: vai, rezultātā mēs redzam pirmā patiesā elementa vērtību. Ja abas vērtības ir: false, tad mums nepalīdzēs neviens no loģiskajiem operatoriem, jo rezultāts būs: false. */

/* Šie abi loģiskie operatori realitātē tiek izmantoti ļoti bieži, tādēļ mums tie ir jāzin, un jāsaprot to atšķirība, jāsaprot kā tie ietekmē rezultātu. */

/* Nākošais ļoti būtisks JavaScript programmēšanas valodas operators ir: ! - nolieguma operators, kad mēs sakam, ka kaut kas nav...vineāds, mazāks, patiesība, nepatiesība utt. Tas mums dod pretēju rezultātu. izmantojot to pašu piemēru, tas darbojās šādi: */

console.log(isChecked || !isClose);

/* Mēs konsoles izvadē saņemam: false, jo musm ir noteikts, ka abas vērtības ir patiesas, bet izmantojot nolieguma operatoru: ! mēs sakām, ka isClose vērtība nav: true, tātad tā ir: false. */

/* Ja mēs izpildām vairākas darbības izmantojot dažādus operatorus, mums jāņem vērā, ka tie izpildīsies noteiktā kārtībā. Tā pat kā matemātikā. Darbības iekavās izildīsies vispirms, arī reizināšana dalīšana, tad saksaitīšana, atņemšana, un tikai tad salīdzināšana. Kura darbība seko kurai mēs varam atrast tabulu internetā. Katram operatoram JavaScript programmēšanas valodā ir izpildījuma prioritātes, kurš pēc kura tiek izpildīts. */

/* Operatora: !, kas ir nolieguma operators izmantošana kopā ar operatoru: =, kas ir piederības operators. Daži piemēri: */

console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 !== '8');

/* Šeit mēs izpildām darbības, vispirms reizināšanu, pēc tam saskaitīšanu, un sakām, ka 6 nav vienāds ar 8, kas ir patiesība, un konsoles izvadē mēs saņemam: true. Jo tā tas ir. Otrajā piemērā mēs izmantojam nolieguma operatoru kopā ar salīdzināšanas operatoru, kas nozīmē, stingro salīdzināšanu arī skatoties pēc datu tipa. Burtiski mēs sakām, ka: 6 stingri nav vienāds ar 8. Konsolē mēs redzam: true, jo 6 nav vienāds ar astņi, turklāt arī pēc datu tipa. */









