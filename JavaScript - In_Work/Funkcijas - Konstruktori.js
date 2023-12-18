'use strict';

/* Atceramies, ka funkcija pēc savas būtības ir objekts, kas satur objekta īpašības un metodes. */

/* Lekciju sākumā mēs izskatījām, to ka pastāv garš sintakses pieraksts, lai izveidotu datu tipus, kas sākās ar atslēgvārdu: new. Izskatīsim to ar piemēru: . */

const num = new Number(3);
console.log(num);

/* Izpildot šādu kodu konsolē mēs redzam datu masīvu, kas satur [Number: 3]. */

/* Tas pats attiecās arī uz funkcijām JavaScript. Mēs nosakām mainīgo, pievienojam tam funkciju, izmantojot sintaksi: new Function, funkcijas () iekavās liekot skaitli: 3, kas ir funkcijas vērtība. Izvadām konsolē: num. Izpildot šādu kodu konsolē, mēs redzam: datu masīvu, kas satur anonīmu funkciju. Šāds funkcijas sintakses pieraksts tiek uzskatīts par novecojošu un netiek vairs izmantots. Ja šādi pierakstīta funkcija saturēs īpašības jeb metodes, tā mums atgriezīs jaunu objektu. */

const number = new Function(3);
console.log(number);

/* Tagad izskatīsim piemēru, kur tiek izmantota mūsdienīga sintakse - funkcijas pieraksts: . */

class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}
	hello() {
		console.log(`Hello: ${this.name}`);
	}
	exit() {
		console.log(`Lietotājs: ${this.name} izgāja no sistēmas`);
	}		
}

const zane = new User('Zane', 5);
const livija = new User('Līvija', 3);

zane.hello();
livija.hello();

zane.exit();
livija.exit();

console.log(zane);
console.log(livija);

/* Ja izmantojam iekš funkcijas šādu sintaksi, funkcija kļūst par konstruktoru. Un tā mums atgriež objektu: User, kas satur visas norādītās atslēgas un to vērtības, izmantojot dotos datus. Pie mainīgo deklarēšanas iekš funkcijas: User() iekavām mēs rakstām datus, kas atbilst atslēgai: name un atslēgai: id. Trešā atslēgas vērtība tiek pievienota visiem new User. */

/* Šādās funkcijās - konstruktoros mums nevajag izmantot: return, jo mums nav vajadzības neko atgriest. */

/* Iekš šādām funkcijām mēs varam izmantot arī metodes - citas funkcijas. Kā šinī piemērā mums iekš funkcijas: User ir metode:hello, ka sevī satur funkciju. Izpildot šādu kodu mēs konsolē redzam: Hello: Zane! un Hello: Līvija!. Redzam, ka metode: hello strādā. Atceramies, ka objekti ir prototipi, un pateicoties tam mēs varam izmantot visas prototipu metodes un īpašības. Izskatīsim augstāk piemērā konstrukciju ar prototype izmantošanu: prototype.exit(). Teiksim, ka User - leitotājs prot iziet. Izveidojam funkciju. */

/* Konstruktori mums ir vajadzīgi, lai izveidotu viena tipa objektus. Praksē tos izmantojam, lai veidotu jaunus lietotājus lapai, jaunas preces lapā, jaunus video YouTube. Visur, kur ir šablonizācija, kā arī mēs varam šādus konstruktorus izmantot, kad mums lapā ir vairāki viena tipa elementi, piemēram slaideri, bet tie katrs ir savādāki, vinā 3 slaidi, otrā 10 utt. Mēs varam izmantojot konstruktorus konstruēt slaiderus, rakstot to kopējās īpašības kā funkcijas argumentus. Jo izmantojot šādu šablonizāciju izstrādāt elementus ir daudz vienkāršāk. */

/* Šeit mēs izmantojam pierakstu pēc ES5 JavaScript standarta, bet ES6 JavaScript standartā parādījās iespēja strādāt izmantojot klases. Klases ir kopējs funkcionāla  ietvars, kurā mēs varam ielikt konstrukcijas, un klases ir daudz ērtāk izmantojamas. tādēļ tagad visa funkcionalitāte tiek izstrādāta izmantojot klases. Bet mums galvenais ir, redzēt kā šis vis darbojās no iekšienes. Bet, ja mums uzdos jautājumu: Kā strādā funkciju konstruktori, mēs varēsim atbildēt, tikai sakot, ka šis vis atrodas iekš klasēm. Mēs varēsim pateikt, ka sākumā Javascript programmēšanas valodā klases nebija, ka tās parādījās vēlāk, kopāar sintaksi - papildinājumu jeb sintaksisko cukuru. */

/* Paskatīsimies kā tad izskatās klases. Mēs rakstām: class User, izmantojam {} iekavas, krās rakstām: constructor() iekavās rakstām argumentus: name, id, liekam {} iekavas, kurās rakstām visas īpašības un vērtības. Iekš klases User izmantojam metodes: hello() un exit(). Šāds ir klašu izmantošanas pareizs sintakses pieraksts. Vairāk par klašu izmantošanu mācīsimies tālāk kursā. */