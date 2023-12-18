'use strict';

/* Izskatīsim b'tiskākās datu masīvu un objektu atšķirības un īpatnības. Uzskatāmi piemēri: */

const arr = [1, 2, 3];
console.log(arr[1]);

const obj = { a: 1, b: 2, c: 3 };
console.log(obj.a);

/* Atšķirības starp datu masīviem un objektiem: datu masīvu elementus mēs vienmēr liekam [ ] iekavās, katru no tiem atdalot ar komatu. Bet objekts sastāv no īpašībām un to vērtībām, un to visu mēs liekam { } iekavās. Datu masīvam kā īpašības ir indeksi - cipari, kas sākas ar nulli, un datu masīva elementiem ir stingra kārtība. Objekta īpašībām un to vērtībām nav stingras noteiktas kārtības. Objekts un datu masīvs var saturēt dažāda tipa datus. */

/* Lai pievienotu kādu jaunu īpašību un tās vērtību objektam, mēs varam izdarīt to ar diviem dažādiem sintakses pieraksta veidiem. Pirmajā veidā mēs vienkārši aiz objekta nosaukuma liekam punktu, rakstām jaunās īpašības nosaukumu un izmantojot piederības zīmi pievienojam vērtību. Otrajā piemērā mēs rakstām objekta nosaukumu, bet jauno īpašību pievienojam izmantojot: string - rindas datu tipa pierakstu, un tad mēs obligāti to liekam [ [ iekavās un '' pēdiņās. Abi pieraksta veidi attēloti dotajos piemēros: */

const d = 'd';
console.log(d);

obj.d = 4;
obj['e'] = 5;

console.log(obj.d);
console.log(obj['d']);
console.log(obj['e']);

/* Mums jau var būt deklarēts mainīgais, kura vērtību vēlāk mēs mainām un pievienojam esošam objektam. */

/* redzam, ka esam pareizi visu pierakstījuši, pievienojuši divas jaunas īpašības objektam izmantojot divas dažādas metodes, gala rezultātā izvadot tās konsolē. */

/* Mēs rakstām objekta nosaukumu, liekam punktu, rakstām īpašības nosaukumu un liekot piederības zīmi ierakstām tā vērtību. Pēc tam izpildot konsoles izvadi mēs ievērojot sintaksi izvadām jauno objekta īpašības vērtību. Otrs konsoles izvades pieprasījums sintaksiski arī ir pareizs, mēs saņemsiem tieši to pašu rezultātu. Bet mēs nedrīgstam pierakstīt pēc tādas sintakses kā datu masīvam, jo tad mēs saņemsim kļūdu. Tas būtu tā: console.log(obj[d]; . */

/* Kā redzam, ka strādājot ar objektiem mēs varam mainīt stingri noteiktus mainīgos, izmantojot atslēgvārdu: const, bet tas darbojās tikai tad, ja strādājam ar objektiem. Jo citādi: const ir noteikts un tā vērtību mainīt nedrīgst, bet tas neattiecās uz objektiem. Šādu pieeju mēs varam realitātē izmantot, kad strādājam ar datu bāzēm, peimēram ar filmu datu bāzēm, kuras regulāri vajag atjaunināt, mainīt un papildināt. */

/* Veicot konsoles izvadi, mēs lai tiktu klāt kādai datu masīva elementam tā indeksu liekam [ ] iekavās, bet lai tiktu klāt kādai objekta īpašības vērtībai mēs rakstām tās nosaukumu aiz punkta. */

/* Objektā dati ir pa pāriem - nosaukums: vērtība. Datu masīvam tādu redzamu datu pāru nav, ir vienkārši vērtības. */

/* Izmantojot šādu īpašību un to vērtību pievienošanu objektiem, mēs to pašu ar datu masīviem reti kuros gadījumos varam izdarīt, jo mums ir stingra elementu secība. Mēs varam pēc kārtas pievienot jaunu indeksu un tā vērtību datu masīvam, bet tā pat mēs to izdarīt nevaram, jo tad zūd loģika un par to mēs pārliecināmies, kad pieprasām konsoles izvadi, kad pieprasām izvadīt nevis konkrēta elementa vērtību, bet gan visu datu masīvu, visu to, ko satur dotais datu masīvs. Izmantojot doto piemēru, mēs konsolē redzam: [ 1, 2, 3, <7 empty items>, 'Zane' ] . Mēs redzam, ka mums ir trīs elementi, pēc tam < 7 tukši elementi, un pēc tam jaunais pievienotais elements, un tas ir neloģiski - nepareizi. */

arr[10] = 'Zane';
console.log(arr[10]);
console.log(arr);

/* Tāds pieraksts kā piemērā ar objektu nav īsti pareizs, jo ja mums būs daudz datu pāri un tie būs sarakstīti visi vienā rindā, tad mūsu kods nebūs pārskatāms, tas nebūs viegli lasāms, tādēļ pareizi būtu rakstīt katru datu pāri jaunā rindā. Izskatīsim vēl vienu piemēru ar objekta pierakstu: */

const object = {
	'Anna': 500,
	'Alice': 800,
	otherPersons: {
		'Zane': 1300,
		'Līvija': 2000,
		default: [1, 2, 3]
	}
};

object['f'] = {};
object['h'] = [];

console.log(object['Anna']);

['Anna', 500, 'Alice', 800];

/* Datu masīvā mēs arī varam šādus datus ielikt, bet koda līmenī nebūs uzreiz saprotams, kas uz ko attiecās, tādēļ datus, kas ir pa pāriem labāk pierakstīt kā objektu, jo tad kods būs saprotamāks - vieglāk lasāms. */

/* iekš kāda objekta var būt ielikti vēl citi objekti, tas saucās - objekts iekš objekta. Tādi ieliktie objekti var būt daudz, bet ne pārmērīgi, jo tad kods kļūst sarežģīts un grūti uztverams. Šādi piemēri dzīvē var būt veidojot kādas kategorijas, piemēram strādājot ar filmu sarakstiem, mūzikas sarakstiem un citām datu bāzēm. */

/* Mēs jau esošam objektam jeb datu masīvam varam pievienot jaunus tukšus objektos ierakstot objekta nosaukumu, izmantojot [ ] iekavas, tajās rakstot jaunā elementa nosaukumu, un pēc tam izmantojot piederības zīmi pievienot tukšu objektu vai datu masīvu. */

/* Tā pat kā iekš datu masīviem mēs varam likt iekšā objektus un citus datu masīvus, tā pat arī objektos mēs varam likt iekšā citus objektus un datu masīvus. */

/* Objekta īpašību nosaukumus var pierakstīt divos variantos: vienkārši kā nosaukumus un kā rindas tipa: string datu nosaukumus - liekot katru īpašību '' pēdiņās. Abos gadījumos būs pareizi. */

/* Gan objektiem gan datu masīviem katram ir savas metodes. Kā dati tiek grupēti, noņemti, pievienoti. Katram ir savas metodes. */

const arrObj = {
	0: 'a',
	1: 'b',
	2: 'c'
};

console.log(arrObj[0]);

/* Kāpēc masīvi bieži tiek pielīdzināti objektiem? Tāpēc, ka tiem ir kopīga īpašība datiem. Īpašība un tās nozīme. Tikai datu masīviem īpašības ir skaitliski indeksi, bet objektiem nosaukumi ar vārdiem. Jo jeb kuru datu masīvu mēs varam pierakstīt kā objektu, kaut gan tā nav laba koda rakstības prakse. Tāpēc arī tie tiek bieži pielīdzināti objektiem. */

/* Ja mums objekta īpašību nosaukumi ir pierakstīti ar vārdiem, parastiem nosaukumiem, tad izvadot tos un to vērtības konsolē mēs vēršamies pie tiem caur punktu, bet ja nosaukumi ir string - rindas tipa, tad mums pie tiem vēršoties tie jāliek [ ] iekavās un jāraksta '' pēdiņās. Šī sintakses īpatnība mums ir jāievēro, savādāk mums būs kļūda un mūsu kods nedarbosies. Ja mums ir kādas īpašas situācijas piemēram nosaukumi rakstīti citā valodā, piemēram: krievu valodā, tad vēršoties pie objekta īpašībām liekam tās [ ] iekavās, jo tad mēsizvairīsimies no iespējas, ka mums būs kļūdas. */







