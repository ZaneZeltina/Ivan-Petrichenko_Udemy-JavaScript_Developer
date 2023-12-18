/* eslint-disable no-unused-vars */

'use strict';

/* Tālāk izskatīsim metodi: map(). Tā nav ļoti bieži sastopama, bet tomēr mums par to ir jāzin, jo ir dažādi uzdevumi, kurus var atrisināt tieši izmantojotmetodi: map(). */

const user = {
	name: 'Zane',
	surname: 'Zeltina',
	birthday: '30/09/1989',
	4:'Livija',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

console.log(typeof (Object.keys(user)[3]));

/* Redzam vienkāršū objekta piemēru. Ievērojam, ka jebkura objekta atslēgas - īpašības ir String - rindiņ tipa dati. Par to pārliecināties mēs varam izpildot konsoles izvadi, izmantojot: typeOf, izvadot konkrēto atslēgas datu tipu, kas šajā piemērā ir: 4. Izpildot kodu konsolē mēs redzam, ka tie ir string -  rindas tipa dati. */

/* Izskatīsim vēl vienu piemēru, kur mums ir datu masīvs, kas sastāv no vairākiem objektiem. Un mums ir uzdevums tos sadalīt pa grupām. Mums ir datu masīvs ar veikaliem, un kādas preces un cik daudz ir katrā no tiem. Un mums katram veikalam ir jāziveido budžets. Cik liels ir budžets katram veikalam. Kā mēs to varam izdarīt? Izskatīsim piemērā: */

/* Lai šo uzdevumu atrisinātu mums ir jāizmanto metode: map(). Map - Kartes. Map jeb kartes ir specifisku struktūru dati, kas ir ļoti līdzīgi objektiem, bet tie īpašību - atslēgu nosaukumu vietā var saturēt objektus, datu masīvus, metodes un funkcijas. Un tieši tas mums ir vajadzīgs, lai izpildītu šo uzdevumu. */

const shops = [
	{ rice: 500 },
	{ oil: 200 },
	{ bread: 50 }
];

const budget = [5000, 15000, 25000];

const map = new Map([
	[{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
	map.set(shop, budget[i]);
});

console.log(map);

// console.log(map.get(shops[0])); - kods izslēgts, lai netraucētu darbu;
// console.log(map.has(shops[0]));

/* izmantojam konstrukciju: new Map(). Šai konstrukcijai, metodei: Map() ir daudzas metodes. Izskatīsim dažas no tām piemēros: */

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);


// map.set(shops[0], 5000)
// 	.set(shops[1], 15000)   - īsāks pieraksts, rezultāts tāds pats
// 	.set(shops[2], 25000);

// console.log(map);

/* Izmantojot metodi: set() iekavās rakstot objekta nosaukumu, atslēgas indeksu iekš [] iekavām, liekam komatu un rakstam budžeta summu. Izildām konsoles izvadi console.log() iekavās rakstot mainīgo: map. Izpildot šādu kodu, mēs redzam, ka esam ieguvuši objektu, un iekš tā ir vēl viens objekts. Šādā veidā mēs varam katram veikalam noteikt budžetu, bet tad mums katru reizi jāatkārto pieraksts ar metodi: map.set(), kas nav pārāk ērti un pareizi. Skatīt augstāk piemērā pareizo - īsāko pierakstu: */

/* Bet gadījumos, kad mumš šādi dati ir ļoti daudz, tad mums ērtāk ir izmantot pierakstā ciklu. Bet, ja mums ir datu masīvs, kā šinī piemērā, tad vispareizāk ir izmantot metodi: foreach(). Izveidojam callback funkciju - bultiņveida funkciju, izmantojot: i - iterator. Lai iepriekšējais kods netraucētu darbībai, tas ir jāizslēdz - jāiekomentē. Izpildot ša'du kodu mēs redzam, ka rezultāts ir tāds pats, kā no iepriekšējiem piemēriem, kas ir aizkomentēti. Skatīt piemēru, uzrakstītu augstāk: */

/* Ja mēs vēlamies iegūt kādu vērtību no objekta, tad izpildām pierakstu ar metodes: get() izmantošanu. Izpildot šo koda rindu ar metodi: get() mēs konsolē redzam: 5000, kas ir tieši tas, ko gribējām. Skatīt piemērā augstāk: . */

/* Tā pat mēs varam uzzināt, kas ir mūsu kartē: Map(). Lai to izdarītu, mums ir jāizmanto metodes: has(). Izpildot kodu konsolē mēs redzam: true, redzam, ka šādi dati pastāv - patiesība. Skatīt augstāk piemērā: . */

/* Metodei: Map() izmantošanai ir vēl trīs vienkāršas metodes. Izskatīsim tās piemēros: . */

// map.delete(key);  - nodzēš kādu elementu no objekta;
// map.clear();  - iztīra mūsu karti - Map() tukšu;
// map.size; - metodes: Map() īpašība, kas nosaka no cik elementiem sastāv karte;
// map.keys(); - metode, kas parāda masīva atsēgu - īpašību nosaukumus;

/* izmantojot metodi: Map() mēs varam objektam pievienot kādus jaunus datus. Skatīt augstāk piemērā: . */

/* Svarīgi ir zināt, ka visi dati, ko atgriež metode: Map() ir datu masīvi. Datu masīvi iekš datu masīva. Par to pārliecināties mēs varam, tad, kad pievienojam objektam jaunus datus. Mēs tos rakstām dau masīvā, iekš tā rakstot vēl vienu datu masīvu. Konsole, mums tos attēlo kā objektus iekš objekta, bet realitātē tie ir datu masīvi iekš datu masīva. Šo ir ļoti svarīgi atcerēties! . */

/* Šīs visas bija vienkāršas - pamatdarbības ar metodi: Map() un tās metodēm. Bet reizēm mums vajag veikt sarežģītākas darbības. Sašķirot šāda tipa datus, izrēķināt kopējo budžetu utml. Un šeit jau sākās sarežģītākas darbības un metodes. Mums ir četri dažādi varianti, kā mēs varam veikt darbības ar datu masīviem izmantojot metodi: Map(). Pašai metodei: Map() ir trīs jau iebūvētās metodes, ar kuru palīdzību mēs varam veikt dažādas darbības ar datu masīviem. */

/* Metode: Map() ir iterējams objekts, mēs varam to šīrot, un izmantot konstrukcijas: for of un for in. Izskatīsim piemēru: */

for (let shop of map.keys()) {
	console.log(shop);
}

/* Mēs ar šķirošanas palīdzību redzam, katru atsevišķu objektu, kas satur kādus datus. */

console.log(map.keys());

/* Bet izmantojot šādu pierakstu mēs saņemam visu datu masīvu vienā rindā. Bet parasti šāda konstrukcija tiek izmantota tikai iekš šķirošanas. */

/* Lai mēs pilnvērtīgi redzētu, kā darbojās metode: Map() un tās papildmetodes, mums kods jāpaliž caur pārlūka konsoli. */

const goods = [];
for (let shop of map.keys()) {
	goods.push(Object.keys(shop)[0]);
}

console.log(goods);

/* Šinī piemērā mēs izveidojam mainīgo, kas būs datu masīvs. Izmantojot konstrukciju: for of sašķirojam datus, izvelkot ārā visus atslēgu - īpašību nosaukumus. Liekam tos ierakstīt datu masīvā: goods. Izpildot kodu pārlūka konsolē, mēs redzam, ka esam ieguvuši datu masīvu, kas satur visus atslēgas nosaukumus no mūsu objekta: shops. */

/* Otra metode, kā šķirot datu masīvus ir, kad mēs saņemam atslēgu - īpašību vērtības. Tikai vērtības. Šādu pieeju var izmantot, tad, kad mums ir jāredz objekta atslēgu - īpašību vērtības. Izmantojam šķirošanas konstrukciju: for of. Izpildot šādu kodu konsolē mēs redzam, katras atslēgas - īpašības vērtību. Piemēra pieraksts: */

for (let price of map.values()) {
	console.log(price);
}

/* Trešā metode, kas arī ir ļoti līdzīga objektam ir: map.entries(). Šī metode arī ir šķirošanas metode, kas izpildot savu darbību mums atgriež objektus iekš datu masīva. izskatīsim ar piemēru: */

for (let price of map.entries()) {
	console.log(price);
}

/* Svarīgi atcerēties, kaut redzam itkā, ka mums tiek atgriezti objekti jeb datu masīvi iekš kuriem ir objekti, mums ir jāatcerās, ka tie ir tikai šķietami objekti, jo faktiski tie visi ir datu masīvi. */

/* Lai mums nevajadzētu katru reizi, katrai darbībai rakstīt garus kodus, mēs varam izmantot daudz īsāku pieraksta konstrukciju un iegūt tieši tādu pašu rezultātu kā iepriekš. Ar vienas koda konstrukcijas pierakstu mēs iegūstam vēlamo rezultātu. Piemērs: . */

for (let [shop, price] of map.entries()) {
	console.log(price, shop);
}

/* Un pēdējā metode ar kuru mēs varam sašķirot metodi: Map() - Karti ir izmantojot metodi: foreach(). Izmantojot metodi: forEach, izveidojam callback Funkciju - bultiņveida funkciju, iekš kuras liekam izpildīt konsoles izvadē atsevišķus objektus, katru ar atslēgu - īpašības nosaukumu un īpašības vērtību, kā arī redzam katra veikala budžeta summu. Izskatīsim to ar piemēru: . */

map.forEach((value, key, map) => {
	console.log(key, value);
});

/* Šīs bijas četras iespējas,kā mēs varam šķirot karti: Map() dažādos veidos, atkarībā no mūsu uzdevuma. */

/* Kartes - Map() ir ļoti līdzīgas objektiem, bet atceramies, ka tie ir datu masīvi. Ja mēs gribam izveidot karti no objekta, mums ir jāizmanto komanda: Object.entries(). Izskatīsim to ar piemēru, kas pierakstīts pašā koda sākumā. Izskatīsim variantu, kad mēs gribam karti pārvērst par objektu. Izpildot šādu kodu pārlūka konsolē, mēs redzam, ka esam izveidojuši karti no dotā objekta: user. Tas ir vajadzīgs tādā gadījumā, ja mēs vēlamies paplašināt objektu pievienojot tam jaunus objektus. Tad vispirms mums tas ir jāpārvērš par karti, un tad mēs varam ar to strādāt tālāk. */

/* bet reizēm mums ir vajadzīga pretēja darbība: no kartes izveidot objektu. Tas ir vajadzīgs, ja mums ir kāda funkcija, kas strādā - pieņem tikai objektus, kas nemāk strādāt ar kartēm. Tad mums karte jāpārvērš par objektu. To izdarīt mēs varam izmantojot pierakstu: Skatīt piemēru augstāk, aiz objekta: user. */

/* Ja ar komandu: Object.entries mēs izveidojām no objekta datu masīvu ar datu masīviem, tad izmantojot komandu: Object.fromEntries mēs izveidojam no masīviem objektu. Tā izpilda pretēju darbību. Ja mēs izpildām šādu kodu, mēs redzam klasisku, standarta objektu, kuru mēs pēc tam savās darbībās varam izmantot. */

/* izskatīsim salīdzināšanu, kādas tad ir būtiskākās atšķirības starp objektu un karti? Pirmkārt: Kartēm atslēgas - īpašības var būt jebkas: masīvi, objekti, funkcijas, skaitļi utml, bet objektiem atslēgas - īpašības var būt tikai rindiņas: String tipa dati. */

/* Otrkārt: elementu kārtība kartēs ir tieši tāda kādu mēs to esam noteikuši, tādā kārtībā kādā mēs esam tos uzrakstījuši, bet objektos nav noteiktas kārtības, jo mēs pēc tam pievienosim objektam kādu atslēgu un vērtību, tā var tikt pievienota nenoteiktā vietā, bet kartēs ir noteikta kārtība, kādā secībā pievienojām, tādā secībā arī tiek attēlotas. */

/* Treškārt: pie tukšas kartes izveides, tajā nekas nebūs, tā būs tukša, pat, ja būs kādas mantotas īpašības no prototipa.Karte būs tukša.Bet pie tukša objekta izveides, tas mantos īpašības no prototipa, un var būt problēmas ja mēs nejauši tās pārrakstīsim tukšajā objektā. */

/* Ceturtkārt: kartes ir ļoti viegli šķirojamas - iterējamas, mums ir veseli četri varianti kā mēs to varam darīt.Tos jau mēs izskatījām.Bet objekti nav iterējami.Ja gribam šķirot objektus - tos iterēt, mums ir jāizveido pašrocīgi šķirotājs - iterators, jāizveido vesela struktūra pierakstot funkciju. */

/* Piektkārt: kartes izmēru var viegli apskatīt izmantojot konstrukciju: map.size().Bet, lai redzētu objekta izmēru, mums tas vispirms ir jāpārvērš par datu masīvu, un tad izmantojot metodi: Object.keys() mēs varam iegūt datu masīva atslēgas - īpašības, iegūt tā lielumu. */

