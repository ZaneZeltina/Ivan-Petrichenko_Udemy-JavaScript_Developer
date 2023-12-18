/* eslint-disable no-constant-condition */
'use strict';

/* Nosacījumu būtība un sapratne ir ļoti nozīmīga visā programmēšanā. Mums ir labi jāzin, ko nozīmē nosacījumi. Lai labāk saprastu kas ir nosacījumi, iedomāsimies dažas situācijas no reālās dzīves, piemēram: ja mums ir tukš ledusskapis, tad mums nav ko ēst. Ja luksoforā deg sarkanā gaisma, tad mēs stāvam, bet ja deg zaļā gaisma, tad mēs ejam pāri ielai. Ja kafeinīcā ir pusidenu komplekts, tad mēs tur ēdam, bet ja nav, tad mēs ejam prom, uz citu kafeinīcu. Programmēšanā nosacījumi darbojas tieši tā pat, jeb kurā programmēšanas valodā, to darbības princips paliek nemainīgs: ja..., tad...*/

/* javaScript programmēšanas valodā ir noteikta sintakse, arī nosacījumiem. Mēs izmantojam: if ( ) iekavās liekot kādu elementu un tā vērtību, pēc tam liekam { } iekavas, kurās aprakstām darbību, kas jādara: ja... Izskatīsim vienkāršus nosacījumu piemērus: */

if (4 == 9) {
	console.log('Ok!');
}

/* Šinī piemērā mēs redzam, ka konsolē mums nekas netiek izvadīts, un pareizi, jo 4 nav vienāds ar 9. Neizpildās mūsu nosacījums: ja..., tad... */

if (4 == 4) {
	console.log('Pareizi!');
}

/* Šinī piemērā mēs konsolē redzam: Pareizi! Jo 4 ir vienāds ar 4. Izpildās mūsu nosacījums: ja..., tad... */

if (4 == 9) {
	console.log('Taisnība!');
} else {
	console.log('Nepatiess!');
}

/* Šinī piemērā mēs jau nedaudz sarežģījam nosacījumus. Mēs sakām: if - ja, tad { }, else - citādi { } iekavās rakstot, to darbību, kurai jāizpildās pie nosacījuma: citādi. No dzīves iztēlojamies piemēru: ja leduskapis ir tukš, tad mēs ejam uz veikalu, citādi apēdam to, kas ir skapītī, piemēram: apēdam cepumus. */

/* Nosacījumiem vienmēr ir Boolean datu tipa nozīme: true or false - patiesībai vai nepatiesība. Ja patiesība: tad.., ja nepatiesība: tad... Iespeja izmantot nosacījumā: else - citādi { darīt tā} . Nosacījumi izpildās tik ilgi, kamēr tie nenonāk pie kāda nosac;ijuma, kas atbilst: true -  patiesībai. Lai apstādinātu nosacījuma izpildi līdz to atbilstībai: true - patiesībai, mēs varam apstādināt izpildi izmantojot metodi: break - lauzt, apstāties. Kas nozīmē, ka: ja..., tad apstājamies. No dzīves piemēra tas būtu: ja iedegās luksoforā sarkanā gaisma mēs stāvam. */

/* Nosacījumi jeb kuru datu tipu pārvērš par Boolean datu tipa nozīmi: true or false. Reālajā dzīvē nosacījumi mums ir visur, un mēs visu varam pārvērst kā nosacījumu. tas attiecās arī uz programmēšanu. */

if (5) {
	console.log('Taisnība');
}

/* Ja mēs pie nosacījumiem ieliksim tikai vienu vērtību, tad tas vienmēr atbildīs patiesībai: true, un izpildīsies nosacījums. Pārbaudot kodu mēs konsolē redzam: Taisnība. */

const num = 50;

if (num < 49) {
	console.log('Nepatiess!');
} else if (num > 100) {
	console.log('Pārāk liels skaitlis!');
} else {
	console.log('Taisnība!');
}

/* Rakstot nosacījumus tie var būt vairāki, mēs sakām: ja.., tad.., bet: ja.., tad... Šinī piemērā mēs izsakām divus nosacījumus, un ja tie abi neizpildās, tad izpildās: else - citādi { darīt tā }. Izpildot šo nosacījumu pieraksta kodu mēs konsoles izvadē redzam: Taisnība! */

/* Izpildot nosacījumus mēs ejam soli pa solim. Sākot ar pirmā nosacījuma pārbaudi vai tas atbilst patiesībai, pēc tam pārbaudot otro nosacījumu vai tas atbilst patiesībai. Bet ja neviens no tiem neatbilst patiesībai, tad izpildam nosacījumu: else - citādi. */

/* Šo pašu nosacījumu izmantojot doto piemēru mēs varam pierakstīt izmantojot ternāro operatoru: ? . Tas skaidrojas šādi: ja nosacījums, kas ir ( ) iekavās ir patiess, tad: ? izpildām konsoles izvadi: console.log( ) , bet ja nosacījums neatbilst patiesībai tad liekam zīmi: un rakstām to, kas notiek tad, ja nosacījums neatbilst patiesībai, kas šajā piemērā ir: console.log('Nepatiess!'). Sintakses pieraksts ir šāds: */

(num === 50) ? console.log('Taisnība!') : console.log('Nepatiess!');

/* Izmantot šādu nosacījumu poierakstu mēs varam tikai tādā gadījumā, kad mums ir nosacījums un ir tikai divas iespējas: kas notiek gadījumā ja nosacījums atbbilst patiesībai, un kas notiek gadījumā ja nosacījums neatbilst patiesībai. Ja mēs gribam pierakstīt vairākus nosacījumus, ar iespēju else - citādi, tad mums ir jāizmanto klasiskais pieraksta veids, neizmantojot saīsināto pierakstu, jo to mēs varam izmantot tiaki tad, kad nosacījumam ir tikai divas iespējas: true or false. Šādam pierakstam ir vēl viens plus: tas ļauj kodu pierakstīt īsākā formātā, līdz ar ko, tas patērē mazāk atmiņas. */

/* Operators: ? tiek saukts par ternāro operatoru, jo tam ir trīs sastāvdaļas - trīs argumenti. Operators: ? JavaScript programmēšanas valodā ir vienīgais ternārais operators, bet to izmantojot ir stingri jāievēro koda pieraksta sintakse, jo ja to neievērosim, tad kods nedarbosies un mums būs kļūdas. Un mums jāatcerās gadījumi, kad to var izmantot, un gadījumi, kad to nevar izmantot. */

/* Kad mums ir ļoti daudz nosacījumu argumentu, kas notiek gadījumā: ja... tad beigās mums iznāk ļoti garš koda pieraksts. Bet tam ir risinājums: mēs varam izmantot metodi: switch ( ) iekavās liekot mainīgā nosaukumu, kas ir mūsu nosacījums, aiz tā liekot { } iekavās rakstot metodi: case, kas nozīmē: ka mēs stingri pārbaudām kādu nozīmi, vērtību. Izmantojot metodi: switch tiek veikta stingra salīdzināšana: vai tas atbilst: true, vai tas atbilst: false. Pierakstā mēs aiz stingri noteiktās salīdzinājuma vērtības liekam zīmi : , pārejam jaunā rindā rakstot to, kas jāizdara, ja nosacījums atbilst patiesībai, kas mūsu piemērā ir : console.log('Nepatiess!') . Ja mēs gribam kādā brīdī beigt nosacījumu pārbaudi, mums aiz attiecīgā nosacījuma ir jāizmanto atslēgvārds: break, kas nozīmē: lauzt, pārtraukt darbību. Mēs aiz metodes: break izmantošanas varam turpināt rakstīt jaunus nosacījumus atkārtojot case ... Tā ir obligāta sintakses konstrukcija, kas savā būtībā ir ļoti vienkārša. Bet mums ir vēl iespēja izmantot atslēgvārdu: default, kas nozīme, ka, ja gadījumā neviens no nosacījumiem neizpildās, neviens no tiem nav patiess, tad mēs izpildām kādu noklusējuma darbību, kas mūsu gadījumā konsolē izvada: 'Nekas no šī neizpildījās!'. Izskatīsim metodes: switch, case, break un default sintakses pieraksta piemēru: */

const numb = 50;

switch (numb) {
case 49:
	console.log('Nepatiess!');
	break;
case 100:
	console.log('Nepatiess!');
	break;
case 50:
	console.log('Pareizi!');
	break;
default:
	console.log('Nekas no šī neizpildījās!');
	break;
}

/* Pārbaudot šo kodu mēs konsoles izvadē redzam, ka ir izpildījies nosacījums: ja skaitlis ir 50, tad konsolē tiek izvadīts: 'Pareizi!'. redzam, ka metode: switch izmantojot: case darbojās, mēs visu esam pierakstījuši pareizi. Šo pašu metodes pierakstu mēs varam izmantot arī ar string - rindas tipa datiem. */

