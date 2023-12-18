'use strict';

/* metodes JavaScript valodā nozīmē - palīgfunkcijas. Bet īpašības - palīgnozīmes. Palīgmetodes mēs izmantojam, piemēram rakstot kādu mainīgo, pēc tam izpildost: console.log() iekavās rakstot mainīgo, liekot punktu, pēc tam rakstot, piemēram: lenght. Izpildot šādu kodu mēs konsolē redzam: 6. Mēs redzam no cik simboliem sastāv konkrētā mainīgā vērtība. Šinī piemērā mums ir rindiņtipa dati - String. Šāda pieeja strādā arī ar datu masīviem un arī ar objektiem JavaScript. Otrajā gadījumā izpildot šādu kodu, mēs redzam: 3. No cik elementiem sastāv datu masīvs. Izskatīsim piemēru: */

const str = 'Hello!';

console.log(str.length);
console.log(str[2]);

const arr = [1, 4, 7];
console.log(arr.length);

/* Bet izpildot metodes, mēs rakstām nosaukumu, un liekam () iekavas. Bet ir arī daudzas metodes, kur mēs rakstām vienkārši metodes nosaukumu, kā piemēram: return, break, continue. Lai redzētu visas metodes, mēs pārlūkā konsolē varam izpildīt: console.dir() iekavās liekot kādus datus, piemēram: Number. Izpildot šādu darbību, mēs redzēsim visas pieejamās metodes. Bet lai to izpildītu, mums tas ir jāraksta pārlūka konsolē, nevis iekš VS Code konsoles. */

/* Lai mēs varētu piekļūt mainīgā vērtības konkrētam simbolam, mums ir jāizmanto metode: console.log(str[2]); Kas šinīpiemērā nozīmē to, ka izpildot šādu kodu, mēs konsolē redzam: l, trešo simbolu no vārda: Hello! Atceramies, ka dators sāk skaitīt no 0. */

/* lai mainītu kādus datus, mums ir jāizmanto metodes. Izskatīsim to ar piemēriem: */

console.log(str.toUpperCase());

/* Šinī metodē, mēs liekam mūsu rindiņai pāriet uz lielajiem burtiem. Izpildot šādu kodu, mēs konsolē redzam: HELLO!. Redzam, ka mūsu metode darbojās. Metodes izmantošana mums atgriež jaunu vērtību, tā nemaina jau noteikto vērtību. Arī pretēja metode, kad liekam vērtību mainīt uz mazajiem burtiem. Mūsu gadījumā nekas nemainās, jo jau sākotnēji mums vērtība ir pierakstīta ar mazjiem burtiem. Šādu pieeju mēs varam izmantot, kad apstrādājam kādus datus, piemēram, ja lietotājs ir ievadījis datus un kādā vārdā ierakstījis lielo burtu. Tad izmantojot šo metodi, mēs liekam atgriezt vērtību ar mazajiem burtiem. */

console.log(str.toLowerCase());


const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

/* Metodes: indexOf izmantošana mums ļauj atrast kādu gabaliņu no koda. Mēs varam redzēt no kura simbola sākās konkrēta rindiņa. Tā rindiņa, kuru mēs esam norādījuši metodes .indexOf('') iekavās. Tas strādā ar visa veida datiem. Šinī gadījumā mums ir String - rindas tipa dati, un izpildot šādu kodu mēs konsolē redzam skaitli: 5. Redzam, ka fruit sākās ar indeksu: 5. Šo metodi izmanto, lai atrastu esošus datus kodā, kādā rindā. Bet, ja norādīsim () iekavās neesošu simbolu, tad izpildot šādu kodu konsolē mēs saņemsim: -1, kas nozīmē, ka šādu datu konkrētajā rindā nav. Šī metode ir analogs JavaScript nosacījumiem. */

/* Tālāk izskatīsim metodes, kas atļauj mainīt rindiņtipa datus - String. Tādas metodes ir trīs. Izskatīsim tās piemēros: .*/

const logg = 'Hello World!';
console.log(logg.slice(6, 12));

/* Metodes: slice() izmantošana mums ļauj redzēt koda vērtību no norādītajiem indeksiem. Mums ir jānorāda divi indeksi - šākuma indekss un beigu indekss. Šinī piemērā izpildot šādu kodu mēs konsolē redzam: World! Metodi: slice() mēs varam arī izmantot norādot tikai sākuma indeksu, kas nozīmē, ka tā izgriezīs tekstu no rindiņtipa datiem sākot ar norādīto indeksu līdz rindiņas beigām. Kas šinī piemērā būtu no 6 indeksa līdz galam. Šī metode mums ļauj izmantot arī negatīvus indeksus ar - zīmi. Tas nozīmē, ka tā mums attēlos koda gabaliņu skaitot no labās puses uz kreiso. */

console.log(logg.substring(6, 12));

/* Šī metode ir gandrīz identiska iepriekšējai metodei, būtiskākā atšķirība ir tā, ka izmantojot metodi: substring() mēs iekavās nevaram norādīt negatīvus indeksus, jo tādā gadījumā JavaScript uzskatīs, ka mēs ievadām: 0 .*/

console.log(logg.substr(6, 6));

/* Šīs metodes izmantošana mums ļauj redzēt rindiņtipa datiem kādu gabaliņu rindas iekš substr() iekavām norādot indeksu no kura šākt izgriezt, un otru indeksu  - cik simbolus izgriezt -  attēlot. Izpildot konkrēto kodu konsolē mēs redzam: World! Jo mēs esam noteikuši sākt no 6 indeksa un izgriezt 6 vienības - sešus indeksus. */

/* Arī Number - skaitļa tipa datiem ir savas metodes. Izskatīsim tās piemēros: */

const num = 12.2;
console.log(Math.round(num));

/* Metodes: Math izmantošana ļauj mums veikt ar skaitļiem dažādas matemātiskas darbības. Mūsu piemērā mēs izmantojam: Math.round() metodi, kas ļauj mums uzzināt kāda skaitļa tuvāko apaļo skaitli, kas mūsu gadījumā ir skaitlis: 12. */

const test = '12.2px';
console.log(parseInt(test));

/* Metodes: parseInt izmantošana mums ļauj no rindiņtipa - String datiem iegūt Number - Skaitļa tipa datus. Šāda metode tiek izmantota, kad strādājam ar HTML lapu, ar CSS failu, un tur ir kaut kas norādīts px - pikseļos. Tad izmantojot metodi: parseInt mēs varam iegūt norādīto skaitli. Atceramies pirms šīs metodes izmantošanas deklarēt mainīgo, kura vērtībā rakstām rindiņtipa datus, bet tā, lai tie saturētu kādu skaitli. Mūsu gadījumā izpildot šādu kodu konolē mēs redzam skaitli: 12. Mums paliek tikai vesels skaitlis, atlikums netiek norādīts. */

console.log(parseFloat(test));

/* Izmantojot metodi: parseFloat mēs pārvēršam rindiņtipa datus - String par Number tipa datiem - Skaitļa tipa datiem. Bet ir būtiska atšķirība no metodes: parseInt izmantošanas, jo izmantojot šo metodi: parseFloat mēs iegūstam visu skaitli ar visu tā atlikumu, kas mūsu gadījumā ir skaitlis: 12.2 . Šīs visas metodes ir visbiežāk izmantotās metodes. Ir vēl daudzas - vēl sarežģītākas metodes, bet šīs ir visbiežāk lietojamākās. */



