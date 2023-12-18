'use strict';

/* Lai mums darbības, kuras vēlamies atkārtot vairākas reizes nebūtu katru reizi jāraksta no jauna, mums ir tāda lieta kā: cikli, kurus varam izmantot, kad vēlamies, lai kāda darbība atkārtotos noteiktas reizes. Ciklu piemērus no dzīves varam iztēloties divus: katru rītu mēs pieceļamies, mazgājamies, ēdam brokastis, ejam uz darbu. Noteiktas darbības atkārtojas. Otrs piemērs: gadā ir 12 mēneši, un tie atkārtojas, seko cits citam, līdz gads ir beidzies, un tad atkla sākas no jauna. */

/* JavaScript programmēšanas valodā ir trīs cikla veidi: cikls: while, cikls: for un cikls: do. Izskatīsim ciklu pierakstus un to sintaksi uzskatāmos piemēros: */

let num = 50;

while (num < 55) {
	console.log(num);
	num++;
}

/* While - tulkojumā no Angļu valodas - kamēr. Šinī piemērā mēs sakām, kamēr mainīgais: num ir ar vērtību mazāk nekā 55 mēs izvadām konsolē mainīgā: num vērtību. lai cikls nebūtu bezgalīgs un mums nerastos kļūda, mēs nākošajā rindā liekam mainīgā: num vērtībai katru reizi izmantojot incriminentu palielināties par: +1. Mēs liekam izpildīt šo darbību kamēr neizpildās mūsu dotais nosacījums, ka mainīgā: num vērtība ir mzāka par 55. Tātad tikko cikls nonāks līdz 55, tas apstāsies - beigs savu darbību. Palaižot šādu piemēru konsolē, mēs redzam, ka tas izvada skaitļus: 50, 51, 52, 53, 54. Pēdējais skaitlis ir: 54, un cikls beidzas. */

/* Otrs cikls: cikls: do, kad vispirms mēs liekam kaut ko izdarīt, un tikai tad rakstām nosacījumus. Šī cikla pieraksta sintakse ir atšķirīga. Cikla: do pareizs sintakses pieraksts ir šāds: */

do {
	console.log(num);
	num++;
}
while (num < 55);

/* Palaižot šādu: do cikla pierakstu konsolē mēs redzam gandrīz tādu pašu rezultātu kā iepriekšējam piemēram, tikai mēs redzam arī skaitli: 55. Šādi mēs vienu un to pašu ciklu varam pierakstīt divos dažādos cikla izpildes veidos. Ciklu: while pierakstīt pēc cikla: do sintakses un otrādi. */

/* Vispopulārākais, plašāk pielietotais cikla veids ir cikls: for. Tas ir tik ļoti populārs, jo mēs varam to aprakstīt līdz pēdējam sīkumam, likt tam darboties tieši tā kā mums tas vajadzīgs. Cikla: for sintakses pieraksta piemērs: */

for (let i = 1; i < 8; i++) {
	console.log(i);
}

/* Mēs liekam sākties ciklam: for. ( ) iekavās rakstot pirmo argumentu: mainīgo: i, kas ir saīsinājums no vārda: iterator - iterators, kaut kas, kas atkārtojas, liekam aiz mainīgā: i vērtības zīmi ; tālāk rakstām otro argumentu: cik ilgi cikls atkārtosies, rakstām nosacījumu, ka cikls turpināsies tik ilgi, kamēr i < 8 lielam atkal zīmi ; rakstām trešo argumentu, kas nosaka kas notiks ar mainīgā: i vērtību katru reizi pildot šo ciklu. Visbiežāk tiek izmantota incriminenta metode: ++, kas katru reizi pieskaita mainīgajam: +1. Arī šinī gadījumā tā katru reizi palielināsies par: +1 . Tālāk mēs liekam { } iekavās tā darbība, kas jāveic kamēr tiek izpildīts dotais cikls, kas šinī gadījumā ir: console.log(i); . Izpildot šo kodu mēs redzam, ka mums tike izvadīti skaitļi: 1, 2, 3, 4, 5, 6, 7. Cikls izvada visas mainīgā: i vērtības, katru reizi pieskaitot tai: +1, līdz cikls nonāk pie nosacījuma, ka i < 8 un cikls apstājas, tas beidz darboties. */

let numb = 50;
for (let i = 1; i < 8; i++) {
	console.log(numb);
	numb++;
}

/* Cikla veidu: for mēs varam izmantot arī ar mainīgo, nosakām mainīgo - obligāti izmantojot atslēgvārdu: let, jo tas dod mums iespēju mainīt mainīgā vērtību. Pierakstām ciklu, liekam to izpildīt 7 reizes, katru reizi palielinot mainīgā vērtību par: + 1. Izpildot konsoles izvadi mēs redzam skaitļus: 50, 51, 52, 53, 54, 55, 56. Redzam, ka cikls ir izildījies 7 reizes. */

/* Saprast ciklu būtību un to darbības principu ir ļoti svarīgi, jo tas pieder pie programmēšanas zināšanu pamati. To izpratne ir ļoti svarīga. */

/* Web izstrādē ar ciklu palīdzību, mēs uzrakstot dažas koda rindiņas varam likt mainī krāsu uzreiz 20 pogām. Mums nav 20 reizies jāraksta vien untā pati darbība. Mēs varam ar dažām koda rindiņām izveidot uzreiz 1000 preču kataloga kartītes, utt. */

/* Kad mēs strādājam ar cikliem ir ļoti svarīgi pievērst uzmanību tam, ko mēs rakstām pie cikla nosacījumiem: vērtību, cik reizes cikls izpildās, kas notiek katru reizi ar vērtību. Īpaša vērība jāpievērš otrajam nosacījumam: cik reizes cikls izpildīsies, jo ja tā ir neloģiska, bezgalīga, tad rezultātā cikls izpildīsies bezgalīgi un interneta pārlūks uzskārsies, mums nāksies pārstartēt interneta pārlūku un citreiz pat visu datoru, tādēļ tam jāpievērš īpaša uzmanība. Izveidot bezgalīgu ciklu ir ļoti vienkārši, piemēram: pie otrā nosacījuma ierakstīt: 0, mēs panāksim, ka cikls izpildīsies bezgalīgi, jo ja pie pirmā nosacījuma: i = 1 un pie trešā nosacījuma: i++, tad mēs nekad nenonāksim pe vērtības: 0, un tieši tādēļ arī cikls kļūst bezgalīgs, un mūsu programma uzkārsies. */

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		break;
	}
	console.log(i);
}

/* Ja mēs gribam, lai kādā brīdī cikls apstātos - lai tas pārtrauktu savu darbību mēs izmantojam metodi: break; . Lai izmantotu metodi: break; mums ir jāizmanto nosacījumi. Atceramies, ka nosacījumu darbības princips ir: ja..., tad... Šinī piemērā pie nosacījumiem mēs norādām: ja i ir vienāds ar 6, tad mēs apstādinām ciklu. Pārbaudot koda darbību konsoles izvadē mēs redzam skaitļus: 1, 2, 3, 4, 5. Un cikls nonākot līdz sestajai izpildes reizie apstājās. */

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		continue;
	}
	console.log(i);
}

/* Ir vēl viena metode: continue, kas nozīmē, ka mēs atkal izmantojam nosacījumu pieraksta sintaksi. Pie nosacījumiem rakstām, ka tad, kad i ir vienāds ar 6 mūsu cikls izmanto metodi: continue - turpin;at, kas nozīmē, ka nonākot pie vērtības 6 cikls turpina savu darbību. Pārbaudot koda darbību, konsoles izvadē mēs redzam skaitļus: 1, 2, 3, 4, 5, 7, 8, 9., bet skaitli: 6 mēs neredzam, jo tas tiek izlaists, bet pēc tā cikls turpina savu darbību. Metodes: continue izmantošana dod mums iespēju izlaist to vērtību, kura mums nav vajadzīga. Varam arī izmantot tādu pierakstu, kur vairākas noteiktas vērtības tiek izlaistas, bet pie tam cikls turpina darboties tik reižu, cik mēs esam norādījuši otrajā argumentā - nosacījumā. */