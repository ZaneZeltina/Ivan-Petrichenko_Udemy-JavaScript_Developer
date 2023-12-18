'use strict';

/* Regulārās izteiksmes JavaScript programmēšanas valodā sniedz mums iespēju strādāt ar String - rindas tipa datiem, tos dzēst, mainīt daļu no rindām, meklēt rindu daļas, ierobežot attēlojamās rindas daļas. */

/* Šāda tehnoloģija darbojās arī citās programmēšanas valodās, ne tikai JavaScript programmēšanas valodā. */

/* Mums ir jāzin šīs tehnoloģijas pielietošanas iespējas, vismaz bāzes līmenī, jo šī tehnoloģija ļoti bieži tiek lietota skriptos - JavaScript kodos. */

/* Jebkura regulāra izteiksme sastāv no divām daļām. Pirmā daļa: Pattern, otrā: zīmes. Pattern tas ir sava veida šablons. Piemēram tas ko mēs meklējam konkrētā rindā, ko mēs vēlamies nodzēst no kādas rindas utt. Mēs ierobežojam kādus simbolus, kas ir rindā, rindas tipa - String datos. Bet zīmes mēs izskatīsim nedaudz vēlāk. */

/* javaScript programmēšanas valodā, lai lietotu regulārās izteiksmes, mēs varam izmantot dažādus sintakses pieraksta veidus. Izskatīsim ar piemēriem dažus no tiem: . */

// new RegExp('pattern', 'flags');
// /pattern/f;

/* Pirmajā piemērā mēs to darām ar konstruktora palīdzību. */

/* Otrajā piemērā mēs pierakstām regulārās izteiksmes saīsinātu piemēru. Visbiežāk savā ikdienā mēs saskarsimies tieši ar saīsināto regulārās izteiksmes pierakstu. */

/* Lai iepriekšējais kods mums neradītu kļūdas, mēs to izslēdzam. */

/* Tagad izskatīsim regulārās izteiksmes reālu piemēru: . */

const answer = prompt('Ierakstiet savu vārdu!');

// const regular = /n/i;

// console.log(answer.search(regular));

/* Regulārajām izteiksmēm ir dažādas metodes. Pirmā metode: search(), kas kaut ko meklē mūsu regulārajā izteiksmē. Metodē: search() mēs varam izmantot tikai zīmes: i un m, jo zīmi: g mēs nevaram izmantot, jo metode: search() meklē tikai pirmo sakritību, tā nemeklē sakritības globāli. */

/* Regulāro izteiksmju noklusētās zīmes, tulkojumā no Angļu valodas Flags ir:
  g - global: globāls, kad mēs gribam atrast vairākus elementus;
  i - item: kad mēs gribam kaut ko atrast neatkarīgi no reģistra;
  m - multiline: kad mēs gribam kaut ko atrast iekš vairākām līnijām. */

/* Regulāro izteiksmes zīmes mēs varam kombinēt, rakstot /n/igm; */

/* lai apietu metodi: search() mēs varam izmantot metodi: mach(), kas meklē elementu atbilstību - sakritību. */

// console.log(answer.match(regular));

/* Izpildot šādu kodu mēs konsolē iegūstam datu masīvu, kas attēlo konkrēto rindas gabaliņu, ko mēs meklējam, indeksu, kurā vietā tas tika atrasts un input, kas attēlo rindu, kurā tika meklēts kāds elements, kā arī grupas vērtību, aks šinī gadījumā ir: undefined. */

/* Mēs redzam, ka izmantojot regulāro izteiksmju metodi: match() mēs iegūstam pilnīgāku rezultātu, jo tai ir dažādas īpašības, kuras mēs varam izmantot strādājot tālāk. */

/* Ja mums ir jāatrod vairāki elementi kādā rindā, tad izmantojot regulāro izteiksmju metodi: match() mums iekš koda regular ir jāieraksta šādi: regular = /n/ig, jo tad mēs saņemsim visus elementus, kas ir kādā rindā. */

/* Nākošā metode, kas ir regulārajām izteiksmēm ir metode: replace(), kas ļauj mums aizstāt kādas rindas gabaliņu, ar kādiem citiem elementiem. Izskatīsim to ar piemēru: . Lai šis kods darbotos bez kļūdām, mums jāizslēdz iepriekšējais kods. */

const pass = prompt('Password:');
console.log(pass.replace(/./g, '*'));

/* Ko nozīmē šāda izteiksme? Regulārajās izteiksmēs ir savi likumi. Pirmais: Ja mēs izmantojam pierakstu caur punktu: /./, tad tas nozīmē, ka mēs ņemam visus elementus, kas ir kādā rindā. Liekot zīmi: g aiz /./ mēs liekam mainīr visus rindas elementus. Aiz komata pēdiņās '' rakstot to uz ko mēs gribam mainīt kādas rindas elementus, kas mūsu gadījumā ir: * zvaigznīte. */

/* Tieši šādi strādā regulāro izteiksmju metode: replace(), un tā tiek izmantota ļoti bieži. */

/* Ja mēs gribam pārvērst kaut kādus noteiktus simbolus, tad mums ir jāpieraksta šādi: console.log(pass.replace(/\./g, '*')), kas nozīmē to, ka mēs pārvēršam tikai to rindas daļu, kas satur punktus: ...;. Šādi mēs varam meklēt - aizstāt dažādas zīmes: ?, &, ^, /, utt. */

/* Izskatīsim piemēru kā vēl mēs varam izmantot regulāro izteiksmju metodi: replace(). : . */

console.log('12-34-56'.replace(/-/g, ':'));

/* Izpildot šādu kodu mēs redzam, ka mūsu skaitļi ir atdalīti ar zīmi :. Redzam, ka regulāro izteiksmju metode: replace() ir izpildījusi savu darbību. Šāda pieeja tiek pielietota, kad mums vajag modificēt kādu pulksteni. */

/* Šīs visas bija pašas populārākās un pazīstamākās regulāro izteiksmju metodes. Tagad apskatīsim mazāk - retāk sastopamas metodes. */

/* Izskatīsim metodi: test(). Lai nerakstītu jaunu kodu, ieslēdzam pirmo kodu ar prompt izmantošanu. */

const regular = /n/ig;
console.log(regular.test(answer));

/* Šīs metodes izmantošanas īpatnība ir tā, ka tā mums atgriež Boolean tipa datus: true vai false. */

/* Mēs varam meklēt jeb kādus simbolus kādā rindā. Šajos piemēros mēs meklējam mazo burtu: n, bet mēs varam meklēt citus simbolus, varam meklēt vairākus simbolus, rakstot tos kopā, varam meklēt veselus vārdus, daļas no vārdiem, piemēram: . */

// const regular = /zane/ig;
// console.log(regular.test(answer));

/* Ja mēs gribam meklēt veselus vārdus, jeb skaitļus, skaitļu rindas, jeb atstarpes. lai to izdarītu mums ir regulārajās izteiksmēs ir klases. Regulāro izteiksmju klases:

  \d - digits, kas nozīmē, ka mēs meklējam skaitļus;
	\w - words, kas nozīmē, ka mēs meklējam burtus;
	\s - spaces, kas nozīmē, ka mēs meklējam atstarpes;. */

/* Izskatīsim skaitļu meklēšanas piemēru: . */

const regularNumber = /\d/g;
console.log(answer.match(regularNumber));

/* izskatīsim šo regulāro izteiksmju klašu izmantošanu sarežģītākos piemēros: . */

const string = 'My name is Zany1919';
console.log(string.match(/\w\w\w\w\d\d\d\d/i));

/* izpildot šādu kodu mēs iegūstam datu masīvu, kur ir Zany1919, indeks, kurā tas tika atrasts, un rinda, kurā tas tika atrasts, kā arī grupas, kas ir ar undefined vērtību. */

/* Tagad izskatīsim nolieguma klases. Tas ir tad, kad mums vajag atrast ne ciparus, ne burtus, ne atstarpes. Un tās ir: 

  \D - not digits, kas nozīmē: ne cipars;
	\W - not words, kas nozīmē: ne burts;
	\S - not spaces, kas nozīmē: ne atstarpes. */

/* Šī bija visa tā informācija, kas mums ir jāzin iesākumā par regulārajām izteiksmēm un to izmantošanu, to metodēm, zīmēm. */

/* Šīs iegūtās zināšanas par regulārajām izteiksmēm mēs varam izmantot mūsu projektā: Food - Project. Skatīt tālāk mapīti: Food - Project, script.js failu. */






