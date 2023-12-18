'use strict';

/* Katrai metodei Javascript valodā ir ne tikai savas īpašības, kuras mēs varam izmantot, bet arī savi atribūti. To zināšana jau ir dziļāka JavaScript valodas izpratne. Šādi metožu atribūti ir tikai trīs. Šos atribūtus konsolē mēs neredzēsim, jo tie ir apslēpti konsolei. Šie atribūti vienmēr ir; true pozīcijā. Izskatīsim to visus ar piemēriem: */

const user = {
	name: 'Zane',
	surname: 'Zeltina',
	birthday: '30/09/1989',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
};

console.log(user);

/* Metožu atribūti: */

// writable  - padara īpašības vērtību nepārrakstāmu, mēs nevaram to mainīt
// enumerable  - cikliski maina īpašības vērtību
// configurable  - padara īpašību konfigurējamu: mēs varam to mainīt

/* Atribūtu izmantošanas piemēri: . */

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

/* Lai pilnvērtīgi redzētu šī koda darbību, mums šis kods jāpalaiž caur pārlūka konsoli. Izpildot šādu kodu mēs redzam konoslē: Object, kurā ir visi trīs iepriekš apskatītie atribūti. Atceramies, ka visu trīs atribūtu noklusētā vērtība ir: true. Bet, ja mēs vēlamies kādu no atribūta vērtībām mainīt, mums ir jāievēro šāds pieraksts: .*/

Object.defineProperty(user, 'name', { writable: false });

// user.name = 'Livija';  - koda kļūda

/* izmantojot metodi: defineProperty mēs varam objektam pievienot jaunas īpašības un to vērtības. Izskatīsim to ar piemēru: . */

Object.defineProperty(user, 'gender', { value: 'female' });
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

/* Svarīgi ievērot nosacījumu: ja mēs pievienojam objektam jaunu īpašību izmantojot metodi: defineProperty(), tad visu trīs atribūtu vērtības mainās no: true uz: false. Par to pārliecināties mēs varam izpildot kodu pārlūka konoslē. */

/* Izskatīsim reālu atribūtu pielietošanas situāciju. Piemēram mums ir uzdevums: ka lietotājs savus dzimšanas datus drīgst ievadīt tikai vienu reizi, viņš nedrīgst tos mainīt. Mums ir jāpanāk ar koda pierakstu, ka šie dati ir nemainīgi. Lai atribūts: writable būtu: false. Izpildām sekojošu darbību: . */

Object.defineProperty(user, 'birthday', { writable: false });
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// user.birthday = '31/03/1989';  - koda kļūda

Object.defineProperty(user, 'age', { value: prompt('age?'), enumerable: true, configurable: true });

/* Mēs pievienojam objektam jaunu īpašību izmantojot metodi: defineProperty() iekavās rakstot objekta nosaukumu, īpašību, {} iekavās rakstām metodi: value: , izmantojam metodi: prompt() iekavās rakstot to, ko mēs vēlamies redzēt brīdinājuma lodzīņā kā jautājumu lietotājam, aiz komata rakstot metodes atribūtus, kuru vērtību vēlamies no noklusētās vērtības: false mainīt uz: true. Šāda pieeja mums dod iespēju katru objekta īpašību konfigurēt - mainīt, vienkārši uzrakstot kodu. */

/* Lai mēs varētu redzēt kāda objekta visu atslēgu nosaukumus - visu īpašību nosaukumus, mums ir jāizmanto šāds pieraksts: . Izpildot šādu pierakstu mēs redzam visa objekta: user atslēgu nosaukumus, redzam arī funkcijas nosaukumu. */

for (let key in user) {
	console.log(key);
}

/* Bet, ja mēs vēlamies redzēt objekta īpašību nosaukumus, bez funkcijas nosaukuma, tad mēs ipildām šādu kodu: . */

Object.defineProperty(user, 'showMyPublicData', { enumerable: false });

/* Ja mums vajg pievienot objektam kādu īpašību, kura būs nemainīga - neizmaināma, kas nozīmē: ceļš uz vienu pusi. Mēs vēlāk to nevarēsim nekādi mainīt, labot, nodzēst. Lai to izdarītu, mums jāizmanto šāds pieraksts: Mēs varam uzreiz to izvadīt konsolē, caur console.log(). Redzam, ka arī visi trīs atribūti ir ar vērtību: false. */

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

/* Atceramies, ka, lai pilnvērtīgi redzētu kā mūsu kods darbojās, mums tas ir jāpalaiž caur pārlūka konsoli. */

/* Ja mums ir nepieciešams kādam objektam mainīt uzreiz vairāku īpašību atribūtu vērtības, mums jāizmanto šāds pieraksts. Mēs izmantojam metodi: defineProperties() iekavās norādot objekta nosaukumu, liekam komatu un {} iekavās norādām visu to īpašību nosaukumus, kuru atribūtu vērtības vēlamies mainīt, kā arī iekš {} iekavām norādām atribūta nosaukumu un vērtību. Tā kā dotajā piemērā: . */

Object.defineProperties(user, {
	name: { writable: false },
	surname: { writable: false }
});

/* Izskatīsim vēl noderīgas metodes, kuras ir objektiem: . */

/* Reizēm mums ir vajadzīgs, lai kādam objektam nevarētu pievienot kādas īpašības. Izmantojot šō metodi mēs bloķēsim objektu, tā, ka neviens vairs tajā nevarēs pievienot tam jaunas īpašības. Tādā gadījumā mums ir jāzimanto metode: Object.preventExtensions(). */

/* Vēl viena metode, kas arī neļauj objektam pievienot īpāšibas, bet arī uzstāda atribūtu: configurable: false, kas neļauj mums konfigurēt objektu, bet atribūts: writable netiek mainīts, tas paliek ar vērtību: true.Šī metode saucās: Object.seal(). */

/* Ir vēl viena metode, kas savā darbībā ir vēl stingrāka.Tā ne tikai neļauj pievienot objektam īpašības, bet neļauj arī ne tās mainīt, ne dzēst.Metode sasaldēobjektu un tā saucās: Object.freeze(). */

/* Ir metode, ar kuras palīdzību mēs varam pārbaudīt vai mēs objektu varam mainīt, mainīt īpašības, pievienot, dzēst.Metode saucās: Object.isObjectExtensible().Izmantojot šo metodi mēs varam uzzināt vai kāds izstrādātājs ir izmantojis metodi: Object.preventExtensions().Šī metode var būt noderīga, lai uzzinātu, vai mēs varam paplašināt objektu vai nevaram. */

/* Praksē, ikdienas darbā šīs metodes tiek izmantotas diez gan reti, bet gadās uzdevumi, kad mums ir vajadzīgas tieši šīs metodes, tādēļ mums ir jāzin, ka tādas ir. Atceramies, ka mums nevajag katru metodi mācīties no galvas, jo visas šīs metodes ir atrodamas dokumentācijā. */

/* Un atceramies, ka divi objekti, ar vienādu to satutu nekad nav vienādi. Ja mēs to salīdzināsim mēs iegūsim: false. Bet ir metode, kas mums ļauj sal;īdzināt objektu saturu. Metode saucās: Object.is(). Tā mums ļauj salīdzināt īpašības, vai tās ir vienādas. Atceramies par objektu saitēm. No viena objekta uz citu objektu. */

/* tagad izskatīsim trīs metodes, kuras mēs turpmāk lietosim ļoti bieži. Visas tās ir dažādas un ļauj mums izveidot dažādu veidu masīvus noobjektiem. Šīs trīs metodes ir: Object.keys(); - kas ļauj redzēt objekta atslēgu nosaukumus. Object.values(); - šī metode mums ļauj redzēt objekta atslēgu vērtības. Object.entries(); - Sī metode mums atgriež datu masīvu, iekš kura ir vēl datu masīvi, kas katrs sastāv no objekta atslēgas nosaukuma un tās vērtības. Šī metode sadala obkjektu pa pāriem. Vineā pārī ir: atslēgas nosaukums un tās vērtība. */












