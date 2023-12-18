'use strict';

/* Šinī mācību stundā mēs izskatīsim papildus datu struktūras kā: WeakMap() un WeakSet(). Mācoties par atmiņas noplūdēm, mums vajadzēja zināt par taimeriem. Bet, lai mācītos par atkritumu savācējiem mums ir jāzin: WeakMap() un WeakSet() metodes. Šīs datu struktūras tiek izmantotas vēl retāk nekā struktūas: Map() un Set(). Šīs struktūras ir paredzētas koda optimizēšanai. Paskatīsimies vēl nedaudz teoriju no iepriekšējās lekcijas, izveidosiem piemēru: */

let user = {
	name: 'Zane'
};

// const arr = [user];

let map = new WeakMap();
map.set(user, 'data');

user = null;

console.log(map);
console.log(map.has(user));
console.log(map.keys());
console.log(user);

// console.log(arr[0]);

/* Izpildot šādu kodu, mēs konsolē redzam: null. Redzam, ka mainīgajam: user ir nulles vērtība. Objekts tiek dzēsts, jo uz to nav nekādas saites. */

/* papildinot kodu ar mainīgā: arr izveidi, pievienojot tam objektu: user mēs iegūstam atmiņas noplūdi, jo kaut esam noteikuši objektam: user vērtību: null, mūsu datu masīvs: arr glabā saiti uz objektu: user. Kaut tā vērtība ir: null, tas ir ierakstījies atmiņā. Izveidojās atmiņas noplūde. Jo kamēr mums ir masīvs: arr, mums ir arī objekts: user. */

/* Tas pats būs arī gadījumā, ja izmantosim karti: Map(), jo kamēr būs karte, tikmer būs saite uz objektu un objekts glabāsies atmiņā. Un reizēm tas ir ļoti neizdevīgi. Papildināsim mūsu piemēru augstāk, lai redzētu kā tas darbojās. Lai mums netraucētu iepriekšējais kods ar datu masīvu - mēs to iekomentējam - izslēdzam. */

/* Mums izmantojot metodes: map() un set() izveidojās tieši tāda pati situācjā kā ieprieks izmantojot datu masīvu. Redzam, kaut obkjekts: user ir dzēsts, metode: Map() glabā saiti uz objektu: user. Un izpildot šādu kodu mēs redzam, ka esam ieguvuši objektu, kas satur datus, kaut bijām to nodzēšuši. Jo ieks: Map() palika saite uz objektu, un tā veidojās atmiņas noplūde. */

/* Un šeit mēs nonākam pie struktūras: WeakMap(), kas tulkojumā nozīmē: vāja karte. Tai ir divas īpatnības, kuras mums ir jāatcerās. Pirmā: Tās atslēgas var būt tikai objekti. Otrā: ja nav saites uz šo objektu, jo, ja tas ir tikai iekš struktūras: WeakMap(), tad tas tiks dzēsts. Izskatīsim to ar piemēru, kas ir austāk kodā: . */

/* izpildot šādu kodu mēs konsolē iegūstam: false, kas nozīmē, ka šis objekts: user tika automātiski dzēsts. */

/* ja mēs izpildīsim konsoles izvades pieprasījumu: console.log(map), tad mēsiegūsim interesantu konsoles atmildi: WeakMap { <items unknown> }, kas nozīmē, ka mūsu objektā ir nezināmi dati. Ja izpildīsim kodu pārlūka konoslē, tad redzēsi struktūru WeakMap, kas sevī satur: no properties, kas nozīmē, ka tai nav satura. redaktora konsolē, mēs principā saņemam to pašu: saturns nezināms. */

/* Šeit arī veidojās nelieli ierobežojumi darbojoties ar struktūru: WeakMap(). Tām nav tādas metodes kā: keys(), values(), entries(), tām vienkārši neeksistē šādas metodes. Tā pat mēs nevaram izmantot konstrukciju: for of, lai šķirotu WeakMap. Vienīgais, ko mēs varam izmantot izmantojot WeakMap ir metodes: set(), get(), delete() un has(), to ko mēs tikko lietojām. WeakMap - vājai kartei ir tikai četras metodes, kuras mēs varam izmantot. */

/* Lai izmantotu šādas struktūras ir vajadzīgi īpaši nosacījumi, piemēram: Īslaicīga objektu glabāšana, darbojoties ar lapām jeb aplikācijām. Jeb arī darbojoties ar kešatmiņas datiem. Lai to saprastu, iztēlosimies situāciju, kad mums ir čata programma telegram. Vienā telegram kanālā var būt desmitiem tūkstošu lietotāju. Un mums ir tie visi jāglabā attēlošanai. Pie tam kāds ieiet online, kāds iziet. Tam visam ir jāseko. Mums interesē tie lietotāji, kas ir online, lai izssekotu to darbības. Šinī gadījumā mēs varam izmantot: WeakMap. Paskatīsimies to ar piemēru: */

let cache = new WeakMap();

function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}

	return cache.get(user);
}

let zane = { name: 'Zane' };
let livija = { name: 'Līvija' };

cacheUser(zane);
cacheUser(livija);

zane = null;

console.log(cache.has(zane));
console.log(cache.has(livija));

/* Izpildot šādu kodu konsolē, mēs redzam, ka lietotāja: zane vērtība ir: false, jo mēs kodā nodzēsām lietotāju: zane, un tas tika dzēsts no atmiņas. Bet lietotāja: livija vērtība ir: true, jo par to palika visi dati. Kā mūsu piemērā lietotājs: livija palika čatā online, un tā vērtība ir: true. Izmantojot metodi: has() mēs vienmēr atbildē iegūsim boolean tipa datus: true or false. */

/* Otra struktūra, kuru mēs izskatīsim ir WeakSet(). Tā ir ļoti līdzīga iepriekšējai struktūrai: WeakMap(). Konstrukcija: WeakSet() ir ļoti līdzīga parastajai Set() metodei, bet galvenā atšķirība ir tā, ka struktūru: WeakSet() mēs varam izmantot tikai strādājot ar objektiem. Atceramies, ka kāds objekts mums ir daudzskaitī, kad tas tiek izmantots vēl kaut kur kodā, saite uz to. Bet, ja kāds objekts tiek izmantots tikai vienu reizi, un nekur nav saites uz to, tad tas tiek dzēsts no atmiņas. WeakSet() var izmantot ar metodēm: add(), has(), delete(). Citas metodes WeakSet() izmntošanā nepastāv. Struktūrā: WeakSet() mēs nevaram izmantot šķirošanas metodes, jo WeakSet() tā pat kā WeakMap() ir nešķirojamas struktūras - tās nav iterējamas. WeakSet() nav arī tādas metodes kā: get(), bet mēs varam pārbaudīt, vai tajā ir kādi dati, izmantojot metodi: has(). Visi šie irobežojumi, ir tāpēc, ka šīs ir dinamiskas struktūras, kuras var attīrīties izmantojot atkritumu savācējus. */

/* Klasisks izmantošanas piemērs ir tas pats ar darbībām ar Telegram čatiem. Paskatīsimies ar piemēru, kā mēs prakstiski varam izmantot: WeakSet(). Piemērā: . */

let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'World', from: 'Zane' },
	{ text: 'Friends', from: 'Līvija' },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);

// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));

/* Mēs izveidojam objektu, kurā ir dažādi dati. Pēc tam izveidojam jaunu WeakSet. Pieveinojam izlasītajām ziņām, izmantojot metodi: add() iekavās rakstām to ziņu, kuru vēlamies pievienot. Divas vienādas ziņas mēs nevaram pievienot (iekomentētais kods). Izpildām konsoles izvadi, kur mēs pieprasām, vai konstrukcijā: WeakSet() ir: has() iekavās rakstot ziņas noasaukumu: messages[] iekavās liekot tās ziņas indeksu, kura esamību vēlamies uzzināt. Izpildot šādu kodu, mēs konsolē redzam: true, jo mums konstrukcijā: WeakSet() ir šāda ziņa. Mēs redzam, ka izmantojot konstrukciju: WeakSet() mēs varam mēs varam glabāt datus un pēc tam pārliecināties par kādu datu esamību konstrukcijā: WeakSet(). */

/* Pats svarīgākais notiek tad, kd mēs izmantojam noteikta objekta dzēšanu. Izmantojot metodi, kas ir datu masīvam: shift(), mēs nodzēšam kādu objektu. Šinī gadījumā: mēs nodzēšam pirmo objektu. Lai mums nebūtu nevēlams rezultāts mums otrās ziņas pievienošana jāizslēdz  - jāiekomentē. Rakstām to pirms konsoles izvades pieprasījuma. Izpildot ša'du kodu konsolē mēs redzam: false. Redzam, ka objekts ir dzēsts, ka tas vairs nepastāv konstrukcijā: WeakSet(). Jo mēs izdzēšam to no WeakSet, un mums vairs tas nav atmiņā, kāa rī nav nekādas saites uz to. WeakSet() attīrās automātiski, mums pašrocīgi tas nav jādara, atkritumu savācējs to izdara automātiski. Mīnus šai struktūras izmantošanai ir tas, ka mēs nevaram izmantot daudzas metodes, un nevaram to šķirot. Mēs varam tikai pārbaudīt vai tur ir kādi dati izmantojot metodi: has(). */

/* Secinājums: WeakSet() un Weakamp() izpilda uzdevumu, ka tie ir papildus datu glabātāji objektiem, kas ir vadāmi no citām koda vietām. Šīs struktūras kontrolē atmiņas izmantošanu, bet t'm ir daudzi izmantošanas ierobežojumi. */