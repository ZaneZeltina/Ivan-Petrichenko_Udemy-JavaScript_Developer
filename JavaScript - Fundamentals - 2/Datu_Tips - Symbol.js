'use strict';

/* javaScript programmēšanas valodas ES6 standartā tika pievienots jauns datu tips: Symbol. Kā iesācēji mēs varam uzreiz nesaprast visu par datu veidu: Symbol, unarī darba sākumā mēs kā izstrādātāji praktiski ar to nesaskarsimies. Bet tālāk strādājot mums jāzin teorija par Symbol datu tipu. Kas tad ir Symbol datu tips. Simboli mums ir vajdzīgi kā unikāli identifikatori. Vienkārši sakot: Symbol ir unikāli identifikatori JavaScript programmēšanas valodā.  Kā mēs varam izmantot simbolus. Mēs tos varam izmantot objekta metodēs. Izskatīsim to ar praktiskiem piemēriem: */

const obj = {
	name: 'Zane'
};

/* Kā objekta atslēgu nosaukumi var tikt izmantas parastas rindiņas - String datu pierakstā. Mūsu piemērā tas būtu: 'name'. Objekta atslēgu nosaukumos var izmantot tikai divu veidu datus: rindu tipa un simbola tipa datus. String un Symbol. Citus datu tipus kā objekta atslēgu nosaukumus nedrīgst izmantot JavaScript programmēšanas valodā. */

let id = Symbol('id');
let id2 = Symbol('id');

console.log(id == id2);

obj[id] = 1;
obj[id2] = 2;

console.log(obj);
console.log(obj[id]);
console.log(obj[id2]);

/* lai pilnvērtīgi redzētu šī koda darbību, mums tas ir jāatver caur pārlūku, caur pārlūka konsoli. Izpildot šo kodu pārlūka konsolē, mēs redzam, visu objekta: obj saturu, redzam abas atslēgas un to vērtības, kā arī redzam, ka atslēga: id ir Symbol data tipa. Izpildot otro konsoles izvades pieprasījumu mēs redzam, ka mūsu objektam: obj jaunās pievienotās atslēgas: id vērtība ir; 1. */

/* Pievienot Symbol tipa datus kādam objektam mēs varam tikai ievērojot tādu pierakstu kā augstāk piemērā. Izmantojot Symbol metodi, tās iekavās mēs varam arī nenorādīt simbola aprakstu. Ja mēs izveidojam divus jaunus simbolus ar vienādu aprakstu, tie vienalga ir divi dažādi simboli. Par to pārliecināties mēs varam augstāk rakstītajā piemērā izpildot konsoles izvadi ar salīdzināšanu, kur mēs salīdzinām divus simbolus. Salīdzinot divus simbolus, izvadot salīdzināšanu konsolē, ar vienādu to aprakstu mēs redzam: false. Jo tā ir divas dažādas unikālas īpašības. */

/* Ir vēl viena iespēja, kā kādam objektam pievienot Sumbol datus- simbola datus. Izskatīsim to dotajā piemērā. */

const secondObj = {
	name: 'Zane',
	[Symbol('id')]: 3
};

console.log(secondObj);

// console.log(secondObj[id]);

/* Redzam, ka izmantojot šādu pieraksta sintaksi mēs iegūstam to pašu rezultātu ko iepriekš. Mēs mūsu objektam: secondObj pievienojam jaunu simbolu, kura vērtība ir: 3. Bet Symbol datiem ir sava īpatnība: ja mēs izmantojam šādu pierakstu, mēs pēc tam nevaram vērsties pie tiem, mēs nevaram tos izmantot. Tāda ir Symbol datu īpatnība. Jo ja mēs izveidosim Symbol un to gribēsim izvadīt konsolē, mēs saņemsim kļūdu, jeb arī, ja rakstīsim tā apsrakstu pediņās, tad saņemsim: undefined. Tā arī ir Symbol specifika. */

/* bet tomēr ir viena metode kā mēs varam piekļūt šādi izveidam Symbol. Mēs varam izmantot metodi: for in. Izskatīsim to ar piemēru: . */

for (let value in secondObj) {
	console.log(value);
}

/* izpildot šādu kodu pārlūka konsolē mēs redzam tikai vienu secondObj īpašību: name. Tas ir noderīgi tādos gadījumos, kad mums vajag izveidot kādā objektā slēptu īpašību. Izskatīsim šo metodi piemērā: */

let id3 = Symbol('id');

const thirdObj = {
	name: 'Zane',
	[id3]: 1,
	getId: function () {
		return this[id3];
	}
};

console.log(thirdObj.getId());
console.log(Object.getOwnPropertySymbols(thirdObj));
console.log(thirdObj[Object.getOwnPropertySymbols(thirdObj)[0]]);

/* Šinī piemērā mēs nosakām mainīgo, pievienojot ta, Symbol metodi, iekš objekta ierakstām īpašības, arī mainīgo, kas satur Symbol datus, pievienojam tam vērtību. Tālāk nosakām funkciju, liekot taia tgriet mainīgā: id3 vērtību. Pierakstā izmantojam: return this[id3]; . */

/* Ir vēl viena metode, kā mēs varam iegūt kāda objekta Symbol datu vērtību. Tā ir jau iebūvēta - noklusēta metode JavaScript programmēšanas valodā. Tā ir: getOwnPropertySymbols(). Metodes izmantošanas piemērs pierakstīts ugstāk kodā. Izpildot šādu metodi pārlūka konsolē, mēs iegūstm datu masīvu: {Symbol(id)]. Šādu metode var izmantot, kad mums ir vairāki Symbol dati. Bet šīs metodes izmantošanā mēs iegūstam saiti uz Objektu, bet neiegūstam Symbol vērtību. Lai to iegūtu mums jāievēro šāds pieraksts: Skatīt augstāk piemērā:. Izpildot šādu kodu pārlūka konsolē mēs iegšutam Symbol: id3 vērtību: 1. */

/* Mēs varam izmantot arī savādāku Symbol pierakstu, iekš objekta. Jo arī šāda pieraksta metode - sintakse darbojās. Šādi pierakstot mēs saīsinām kodu. Iekomentētais koda piemērs:. */

// const thirdObj = {
// 	name: 'Zane',
// 	[Symbol('id')]: 1,
// 	getId: function () {
// 		return this[id3];
// 	}
// };

// console.log(thirdObj[Object.getOwnPropertySymbols(thirdObj)[0]]);


/* Priekš kam mums Symbol ir vajadzīgs? Mums ir vajadzīgs Symbol, jo tas dod mums iespēju slēpt kādu elementu, tā, lai tam ārēji nevar piekļūt, kā arī mēs to savā kodā nevaram izmantot vairākas reizes. Mēs to varam izmantot vienu reizi. */

/* reālajā darbā, kad mums ie liels projekts no tūkstošiem koda rindām, desmit dažādām biliotēkām, mums var gadīties, kad kodā mēs kādu īpašību - metodi pierakstām divas reizes. izskatīsim to ar praktisku piemēru: . */

const myAwersomeDB = {
	movies: [],
	actors: [],
	id: 123
};

// Pa vidu vēl ir daudz koda

myAwersomeDB.id = '123345';
console.log(myAwersomeDB['id']);

/* Iedomājamies situāciju, kad mums ir liels projekts, kad strādājam ar gataviem koda gabaliem no kādas bibliotēkas, un mums tiek pārrakstīts kāds elements, metode un tiek piešķirta cita vērtība. Mūsu gadījumā mēs redzam, ka mums ir objekts un tā atslēgas: id vērtība tiek mainīta. Šeit mēs izpildot konsoles izvadi, redzam, ka mums ir jauna atslēgas: id vērtība. kaut esam iepriekš stingri noteikuši objektā, ka tā ir cita. Tā sākotnēji ir citāda. Rezultātā, izpildot šādu kodu mēs varam iegūt nevēlamu rezultātu. */

/* Viens no variantiem, kā izvairīties no vērtības mainīšanās, rezultāta mainīšanās ir, izmantot Symbol. Izskatīsim to ar piemēru: . */

const myMovieDB = {
	movies: [],
	actors: [],
	[Symbol.for('id')]: 123
};

console.log(myMovieDB[Symbol.for('id')]);
console.log(myMovieDB);

/* javaScript programmēšanas valodā ir arī noklusētie Symbol dati, kas ir jau iebūvēti JavaScript programmēšanas valodā. Tos visus mēs varam atrast oficiālajā dokumentācijā par javaScript programmēšanas valodu. Mācoties tālāk mēs izskatīsim kādas metodes ir Symbol datu izmantošanas, kādiem uzdevumiem kuras ir piemērotas. */

/* Mēs varam izmantot dažādas Symbol vērtības, bet ar vienādiem aprakstiem. Bet reizēm mums ir stingri noteikts, kad arī aprakstiem jābūt dažādiem. Katram ar unikālu aprakstu un vērtību. Šādos gadījumos mēs varam izmantot: globālo Symbol reģistru. Izskatīsim to piemērā: Skatīt augstāk uzrakstīto kodu. */

/* Mēs izmantojam metodi aiz Symbol liekot punktu un rakstot metodi: for([]) iekavās rakstot Symbol aprakstu: ''. Pie konsoles izvades arī jāraksta: console.log(objekta nosaukums[Symbol.for('simbola apraksts')]); Izmantojot šādu pierakstu un sintaksi mums ir izveidojies globāls Symbola reģistrs. Un mēs ievērojam to, ka izmantojot metodi: for() mēs ārēji varam vērsties pie konkrētā simbola, jo tas jau ir kļuvis globāls. */









