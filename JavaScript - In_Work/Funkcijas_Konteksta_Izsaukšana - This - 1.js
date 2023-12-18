'use strict';

/* Šinī mācībstundā mēs izskatīsim: kas ir funkciju konteksta izsaukšana izmantojot: this. This, tas ir tas, kas apsakuj funkciju un pie kādiem nosacījumiem tā tiek izsaukta. Lai labāk saprastu kas ir funkcijas konteksta izsaukšana izskatīsim reālus piemērus: Iztēlosimies, ka ir kāds cilvēks bez dzīves vietas, bez nodarbošanās. Viņš funkcionē visai pasaulei. Bet, ja mēs cilvēku ieliksim kādā iestādē, tad tam būs dzīvesvieta, nodarbošanās. Cilvēkam būs izsaukuma kontekts, viņam ir vieta, kur funkcionēt. Tā arī būs Funkcijas konteksta izsaukšana. Funkcijas JavaScript programmēšanas valodā darbojās tieši pēc šāda principa. Konteksta saprašana JavaScript programmēšanas valodā ir pats grūtākais priekš iesācējiem. */

/* Funkcijas var izsaukt četros dažādos veidos. */

/* Pirmais funkciju izsaukšanas veids ir: vienkārš funkcijas izsaukums, tā kā mēs jau esam pieraduši.Izskatīsim ar piemēru: */

function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);

		// return this.a + this.b; - undefined un kļūda kodā;

		return a + b; // - pareizs pieraksts, izmantojot funkciju slēgšanu;
	}

	console.log(sum());
}

showThis(4, 5);

/* Lai labāk saprastu kā šis kods darbojās, atveram to caur pārlūka konsoli. Izpildot šādu kodu, mēs redzam, ka mēs saņemam globālu objektu: window, kas satur sevī daudzas īpašības un metodes. */

/* Mēs varam secināt: ka, ja funkcija vienkārši tiek palaista šādā veidā, kad mēs izmantojam kontekstu: this, tā balstīsies uz globālu objektu: window. Šis nosacījums darbojās parastā kodā, kur netiek izmantot stingrais režīms, kur netiek izmantots: 'use strict'; Bet, ja mēs izmantojam stingro režīmu, tad mums izpildot kodu pārlūka konsolē tiks atgriezts: undefined - dati nav atrasti. */

/* Parasta funkcija izmantojot konstruktori: this atgriež: objektu: window, bet izmantojot: 'use strict';, tā atgriež: undefined. */

/* Izskatīsim praktisku uzdevumu, kuru bieži uzdot izpildīt darba intervijā: . Strādāsim ar iepriekšējo piemēru, skatīt augstāk: . */

/* Mēs redzam, ka šādā piemērā, kur tiek izmantots funkcijas konteksts: this, mums konsole atgriež undefined, jo mums ir stingrais režīms, un turklāt mēs saņemam koda kļūdu un mūsu kods nedarbojās. Kā to izlabot? Lai funkcija darbotos mms ir jāizmanto funkcijas slēgšana, izmantojot return a + b, bez konteksta: this izmantošanas. Izpildot šādu kodu, mums konteksts: this atgriež undefined, bet funkcija izpildās un rezultātā mēs redzam: 9. */

/* Otrais funkciju izsaukšanas veids. Atceramies, ka objektu metodes, tās arī ir funkcijas. Izskatīsim to ar piemēru: . */

const obj = {
	a: 20,
	b: 15,
	sum: function () {
		console.log(this);
	}
};

obj.sun();

/* Izpildot šādu kodu konsolē, mēs redzam objektu, kas satur visas atslēgas un to vērtības, kāa rī tas satur funkciju: sum(). */

/* Šeit arī ir svarīgs nosacījums: ja mēs izmantojam metodi iekš objekta, izsaukuma konteksts: this vienmēr balstīsiem uz konkrēto objektu. Metodes konteksts objektam ir pats objekts. */

/* Bet, ja mēs iekš metodes izveidosim vēl vienu funkciju un izmantosim funkcijas kontekstu: this, tad mēs atkal iegūsim: undefined. Tāpēc, ka tas ir parasts funkcijas izsaukums, kas, ja mums tiek izmantots stingrais režīms, atgriež: undefined. Jo tas vairs neattiecās uz objektu, tā vairs nav objekta metode. */

/* Trešais funkciju izsaukšanas veids: Funkciju konstruktoru izmantošana. Tas arī ir trešais funkciju izsaukšanas veids. Izskatīsim to ar piemēru: . */

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log('Hello' + this.name);
	};
}

let zane = new User('Zane', 5);
console.llg(zane);


/* Šī ir funkcija: konstruktors. Mēs rakstām funkcijas īpašības izmantojot: this. Mēs, lai rakstītu kādu īpašību vēršamies pie kaut kāda objekta, jo tas tiešām būs objekts. Iekš funkcijas konstruktora izsaukšanas konteksts būs tikko izveidotais objekts. Dotajā piemērā tas ir: zane. This vienmēr balstās uz objektu, kas izveidots rindiņā: let zane = new User('Zane', 5);. Kad mēs veidojam jaunu objektu tam tiek pievienotas visas īpašības, jo vietā: this mēs ievietojam jaunās objekta īpašības. Ja mēs pievienosim funkciju konstruktoram kādu metodi, kā augstāk piemērā, izveidotā metode balstīsies uz tikko izveidoto objektu: zane.Jo this.name balstīsies uz tikko izveidoto objektu; zane.  */

/* Funkcija konstruktors ir galvenais prototips pēc kura tiek veidoti jaunie objekti. Tas ir ļoti ērti, jo kad mēs veidojam jaunus un jaunus objektus - eksemplārus, mēs atceramies tā datus: name, id utt, kas bija konkrētajam lietotājam. */

/* Funkciju konstruktoros un klasēs: this ir jauns objekta eksemplārs. Šo nosacījumu ir ļoti svarīgi atcerēties, tas ir jāzin no galvas. Jo izmantojot: this tiek izstrādāta liela daļa lapas interaktīva, jo lai kādu Framework - bibliotēku mēs izmantosim, mēs saskarsimies ar: this. */

/* Ceturtais funkciju izsaukšanas veids ir: this izmantošana ierakstot to pašrocīgi iekš funkcijas. Iekš parasta tipa funkcijas. Izskatīsim to ar piemēru: . */

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'Zane'
};

sayName.call(user, 'Zeltina');
sayName.apply(user);

/* Šinī piemērā mēs izveidojam funkciju  pašrocīgi ierakstot: this, un deklarējam objektu: user, kas satur īpašību: name: 'Zane'. Kā mēs varam panākt, lai user savienotos ar funkciju: sayName. Jo šobrīd tā mums atgriež udefined, neizmantojot stingro režīmu tā mums atgriež: window objektu ar visām tā īpašībām un metodēm. */

/* Lai savienotu jauno objektu: user ar funkciju: sayName, mēs varam izmantot kādu no divām savienošanas metodēm. */

/* Pirmā metode: call(user). Metodes: call() iekavās rakstām izsaukuma konteksta nosaukumu, šinī gadījumā: user. */

/* Šīs abas metodes pilda vienu uzdevumu: savieno objektu ar funkciju. Darbības atšķirības tām nav. Tām ir tikai sintakses atšķirības, kuras mēs vēl izskatīsim. */

/* Otrā metode: aply(user). Metodes: aply() iekavās rakstām izsaukuma konteksta nosaukumu, šinī gadījumā: user. */

/* Izpildot šādu kodu konsolē, labāk var redzēt pārlūka konsolē, mēs redzam divus objektus, vienu: kad izpildās metode: call(), un otru: kad izpildās metode: aply(). Divas reizes tiek izpildīta viena un tā pati darbība. */

/* Funkcija ieguva savu kontekstu pateicoties tam, ka mēs izmantojām abas šīs metodes: call() un aply(). Mēs ieguvām iespēju kontrolēt funkcijas konteksta izsaukšanu. */

/* Kāda ir metožu: call() un aply() sintaksiskā atšķirība? Atšķirība ir tāda, ka ja mēs mūsu funkcijā uzrakstām kādu argumentu, piemēram: surname, tad mēs funkcijas argumenta vērtību nododam rakstot metodes: call() iekavās: user, komats, '' pēdiņās rakstām funkcijas argumenta: surname vērtību: 'Zeltina'. Izpildīsim to arī mūsu piemērā. Bet, ja mēs izmantojam metodi: aply(), tad tās () iekavās mēs rakstām: user, liekam komtu, liekam [] datu masīva iekavas, kurās rakstām '' pēdiņās: 'Zeltina'. Tā ir būtiska sintakses atšķirība abu metožu izmantošanā. */

/* Ir vēl viena funkciju savienošanas metode: kā mēs varam objektu savienot ar funkciju. Un tā ir metode: bind(). Bet tā jau veido jaunu funkciju, kas savienota ar iepriekšējās funkcijas kontekstu Izskatīsim to ar piemēru: . */

function count(num) {
	return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(6));


/* Saprotams, ka šinī funkcijā mums trūks kāda izsaukuma konteksta, kas reizinātos ar: num. Mēs izveidojam jaunu funkciju: double, kas savukārt satur funkciju: count un izmanto jaunu funkciju - metodi: bind(), kurai kā funkcijas argumentu mēs rakstām skaitli: 2. Izpildām konsoles izvades pieprasījumu: console.log() iekavās rakstot: oduble() iekavās rakstot kā funkcijas argumentu skaitli: 3. Rakstām to skaitli, kuru vēlamie reizināt. Varam rakstīt vairākus izpildes variantus. Mēs saprotam, ka funkcijai: double() ir pievienots stingrs konteksts, tas ir akitlis: 2, kas tiek nodots funkcijai: count(). Izpildot šādu kodu mēs konsolē redzam: 6 un 12. */

/* Mums ir jāatcerās, kā strādā metode; bind(), jo strādājot ikdienā ar bibliotēku: React, mēs bieži izmantosim metodi: bind(). */

/* Ceturtās funkcijas izsaukšanas veids: Pašrocīga: this pievienošana funkcijai, izmantojot kādu no funkcijas savienošanas metodēm: call(), aply(), bind(). */

/* Mēs izskatījām četrus veidus kā mēs varam izsaukt funkcijas, kad mums mainās funkcijas konteksts. */

/* JavaScript programmēšanas valodā: punkts, lasot kodu tiek saukts par: dat. Tulkojums no Angļu valodas. lasot kodu kā piemērā tiek teikt: this dat id. */

/* Tagad pielietosim iegūtās zināšanas praktiski, izmantojot funkcijas izsaukšanas kontekstu: this. Izmantosim notikumu klausītāju: addEventListener(). Izskatīsim ar praktiskiem piemēriem: . */


