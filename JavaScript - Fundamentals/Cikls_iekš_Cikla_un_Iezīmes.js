'use strict';

/* lai saprastu kā darbojās cikli iztēlosimies savu dienu. Mēs katru rītu ceļamies, gatavojam brokastis, ejam uz darbu, strādājam, nākam mājās. Bet mūsu dienā ir daudzas darbības, kas ir līdzīgas un, kas atkārtojas. Piemēram, mēs ēdam trīs reizes dinā, gatavojam ēst trīs reizes dienā. Strādājam ofisā, tad atkal strādājam no mājām. Ar šādu vienkāršu piemēru var saprast kā darbojās cikli JavaScript programmēšanas valodā. Ciklus var izmantot piemēram, lai sašķirotu datus. */

/* Cikli var būt kā vieni paši, tā arī cikls ciklā. Kad ir viens pamatcikls, bet tajā iekšā ir ielikts vēl viens cikls - cikls ciklā. */

/* Izskatīsim dažus ciklu piemērus. Izmantosim pieeju, kad cikls ir iekš cikla. Pierakstām cikla veidu: for: */

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}

/* Mēs izveidojam pamatciklu izmantojot ciklu: for, nosakām nosacījumus, nosakām mainīgo: i - iterator, iedodam tam vērtību. Nosakām otru nosacījumu, cik reizes cikls izpildīsies. Nosakām trešo nosacījumu, kas notiks ar mainīgā: i vērtību, katru reizi izpildot šo ciklu. Iekš šī pamatcikla mēs aiz konsole.log( ) izveidojam vēl vienu: for - ielikto ciklu. Ciklu iekš cikla. Mēs nosakām atkal mainīgo - šeit jāatcerās, ka mainīgo nosaukumi nevar būt vienādi. Nosakām mainīgo vienkārši izmantojot nākošo alfabēta burtu: j. Rakstām atkal visus trīs cikla izpildes nosacījumus. Izavdām konsolē mainīgā: j vērtību. */

/* Kā darbojās cikls iekš cikla? Vispirms izpildās galvenais cikls, mēs redzam konsoles izvadē: 0. Tad darbu sāk ieliktais cikls, kas izvada mums: 0, 1, 2 - tas izpilda visus trīs nosacījums. Atgriežamies galvenajā ciklā, kur i vērtība jau ir: 1. Atkal sāk izpildīties ieliktais cikls, mēs redzam: 0, 1, 2. Atgriežamies atkal galvenajā ciklā, kur i jau ir: 2. Atkal izpildās ieliktais cikls un mēs redzam: 0, 1, 2. Tas izpilda visus trīs nosacījumus, un atgriežoties galvenajā ciklā, kur ir izpildīti visi trīs nosacījumi, un kad i nonāk līdz skaitļim: 3 ( kā bijām norādījuši otrajā nosacījumā ), galvenais cikls beidz savu dabību neizvadot skaitli: 3. Viss cikls, arī ieliktais cikls apstājās. Abi cikli beidz savu darbību. Lai labāk saprastu kā darbojās cikls iekš cikla, katru reizi to pierakstot pārbaudām konsolē. Redzot ko mums izvada konsole mums ir vieglāk saprast kā darbojās cikls un cikls iekš cikla. */

/* Konkrēto piemēru palaižot konsolē mēs redzam sekojošus skaitļus:

0 - pamatcikls sāk savu darbību,
0 - ieliktais cikls sāk savu darbību izpildot pirmo nosacījumu,
1 - ieliktais cikls turpina savu darbību, izpildot otro nosacījumu,
2 - ieliktais cikls pabeidz savu darbību, izpildot trešo nosacījumu,
1 - atkal sāk darboties galvenais cikls,
0 - ieliktais cikls sāk savu darbību, izpildot pirmo nosacījumu,
1 - ieliktais cikls turpina savu darbību, izpildot otro nosacījumu,
2 - ieliktais cikls pabeidz savu darbību, izpildot trešo nosacījumu,
2 - atkal sāk darboties galvenais cikls,
0 - ieliktais cikls sāk savu darbību, izpildot pirmo nosacījumu,
1 - ieliktais cikls turpina savu darbību, izpildot otro nosacījumu,
2 - ieliktais cikls pabeidz savu darbību, izpildot trešo nosacījumu. */

/* Redzam, ka ieliktais cikls, kad izpilda savu darbību atgriežoties galvenajā - pamatciklā atdurās, pret to, ka visi nosacījumi ir izpildīti, līdz ar ko - apstājās cikla darbība. ja apstājās galvenā cikla darbība, tas nozīmē to, ka apstājas arī ieliktais cikla darbība. */

/* Mēs varam izmantot vēl sarežģītākus pieraksta veidus, kad ir galvenais cikls, ieliktais cikls, un iekš ieliktā cikla ir vēl viens ieliktais cikls. Bet izmantojot tik sarežģītus pierkstus mums kļūst grūti izsekot - saprast kodu, jo tas kļūst sarežģīts. */

/* lai nostiprinātu iegūtās zināšanas par cikliem un cikliem iekš cikla, ir ieteicams pildīt prakstiskus uzdevumus, sākot no vieglākiem, pakāpeniski pārejot uz sarežģītākiem. Uzdevumi ar risinājumiem atrodami mapītē: Practice. */

/* Strādājot ar cikliem un cikla iekš cikla, mēs varam izmantot tādas metodes kā: break; un contunue, kas apstādina vai turpina ciklu. Tās strādā tieši pēc tāda paša principa kā tās izmantojām nosacījumos. Ciklos tās darbojās tieši tā pat. Metode: break nonākot pie kādas vērtības apstādina cikla darbību, tas apstājas, neturpinās, bet metodes: contunue izmantošana sniedz mums iespēju izlaist kādas noteiktas vērtības ciklu, bet tad turpināt ciklu, līdz izpildās otrais nosacījums. Tik reizes cik esam norādījuši. Tas pats attiecās arī uz ieliktajiem cikliem, kad mums ir cikls ciklā. Izskatīsim dažus piemērus, kur vienā no piemērim ir divi ieliktie cikli - divi papildcikli, un tur tiek izmantotas metodes: break un continue; */

first: for (let i = 1; i < 3; i++) {
	console.log(`First level ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level ${k}`);
		}
	}
}

/* Lai izmantotu metodi: continue, mums ir jāziveido atzīme, tam elementam, kur vēlamies izmantot šo metodi. Un tad rakstot metodi: continue mēs rakstām izveidoto atzīmi, tādejādi liekot saprast, ka tieši tur, kur ir šī atzīme ir jāpielito metode: continue. Mūsu piemērā, kas mums ir dots, mēs otrajā ieliktajā ciklā nonākot pie mainīgā: k vērtības 2 liekam tupināt ciklu norādot, ka mēs izlaižot vērtības: 2 ciklu atgriežamies galvenajā ciklā. Lai to panāktu mums pirms galvenā cikla ir jānorāda tā atzīme, vārds, kas atzīmē galveno ciklu. Un tad, kad mēs otrajā ieliktajā ciklā izmantojam metodi: continue mēs rakstām galvenā cikla atzīmi, norādot, ka jāatgriežas galvenajā ciklā. Mūsu gadījumā pirmā - galvenā cikla atzīme ir vārds: first. Neaizmirstam aiz atzīmes norādes likt zīmi ;, kas nozīmē rindas, darbības beigas. Bet mums jāsaprot, ka izlaižot otrā ieliktā cikla vērtības: 2 ciklu, automātiski tiks izlaists arī pirmais ieliktais cikls, jo mēs atgriežamies galvenajā ciklā. Izlaižot šādu kodu konsolē, mēs redzam, ka vis darbojās tieši tā kā mēs aprakstījām, izpildās visi nosacījumi. Zemāk ir apraksts par katru vērtību, ko mums palaižot šo kodu izvada konsole: 

First level 1 - sākas galvenais cikls,
Second level 0 - sākas pirmais ieliktais cikls,
Third level 0 - sākas otrais ieliktais cikls,
Third level 1 - turpinās otrais ieliktais cikls,
First level 2 - sākās atkal galvenais cikls,
Second level 0 - atkal sākās pirmais ieliktais cikls,
Third level 0 - atkal sākās otrais ieliktais cikls,
Third level 1 - turpinās ieliktais cikls.
*/

/* Šinī piemērā mēs redzam, kā otrais ieliktais cikls nonākot līdz mainīgā: k vērtībai: 2 izlaiž ciklu, izlaiž pirmo ielikto ciklu un atgriežās galvenajā ciklā, un turpina atkal izpildīt visus ciklus, izpildod tos nosacījumus, kurus mēs esam uzrakstījuši. */

/* Ja mēs metodes: continue vietā izmantosim metodi: break, mēs redzēsim kolīdz otrais ieliktais cikls nonāk līdz vērtībai: 2 tas pārtrauc visu ciklu darbību. Izpildot šo kodu konsolē mēs redzam: 

First level 1 - sākās galvenais cikls.
Second level 0 - sākās pirmais ieliktais cikls.
Third level 0 - sākās otrais ieliktais cikls.
Third level 1 - turpinās otrais ieliktais cikls. Ko līdz tas nonāk līdz vērtībai: 2, tas apstājās, tiek pārtraukta visu ciklu darbība. */

/* kad rakstām atzīmju nosaukumus, rakstām tos apzināti, tā pat kā citus nosaukumus, lai citiem un vēlāk rī mums pašiem būtu viegli orientēties kodā un viegli to lasīt, analizēt. */