'use strict';

let number = 5;

function logNumber() {
	let number = 4; debugger
	console.log(number); debugger
}

number = 6;

logNumber(); debugger

/* Izpildot šādu vienkāršu kodu konsolē mēs redzam skaitli: 6. Jo tiek ņemta jaunākā mainīgā: number vērtība. Jo atceramies, ka mūsu kods darbojās stingri rindu pēc rindas, un tas izpilda aktuālākās darbības. Par cik mēs esam noteikuši number vērtību 6, mēs izpildot funkciju: logNumber redzam jaunāko aktuālāko vērtību. Atceramies, ka funkcijas pastāv jau pirms to deklarēšanas, un deklarētās funkcijas mēs varam lietot jau pirms tās ir mūsu kodā. Izsaukt pirms pašas funkcijas. */

/* bet, ja mēs nedaudz pamainīsim piemēru, iekš funkcijas - lokāli ierakstot jaunu mainīgā: number vērtību, tad izpildot šādu kodu, ar apstādināšanas metodes: debugger lietošanu, mēs konsolē irgūsim: 4, jo funkcija: logNumber izmanto mainīgā vērtību, kas ir noteikta lokāli - iekš funkcijas. */

/* JavaSkript programmēšanas valodā ir noteikta leksikas vide. Tas ir kā neredzams, noslēpts objekts JavaScript programmēšanas valodā. Mēs to nevaram vienkārši ieraudzīt. Tas dalās divās daļās: iekšējā un ārējā leksikas vide. Paskatīsimies leksikas tehnisko realizāciju. Izmantojam koda apstādināšanas metodi vairākās koda vietās: debigger, lai redzētu, kas tad īsti notiek kodā. Metodes: debuuger - koda apstādināšanas metode ir vajadzīga, lai mēs caur izstrādātāju rīku - pārlūkā: chrome varētu redzēt kā tieši konkrētajā brīdī darbojās mūsu kods. */

/* Kas tad īsti ir funkcijas ieslēgšana? Tas ir biežākais intervijās uzdotais jautājums. Tas ir tad, kad funkcija meklē mainīgo un tā vērtību savā iekšienē - lokāli, bet, ja tā to neatrod tad tā iet līmeni augstāk un meklē mainīgo un tā vērtību - globāli - ārpus funkcijas. Tā arī ir funkciju ieslēgšana. */

/* tagd izskatsim abas leksikas vides. Pirmā ir iekšējā leksikas vide. Tā ir kā objekts, kurā glabājās visi lokālie mainīgie, metodes, kas ir funkcijā. Tālāk ir ārējā leksikas vide. Tas ir vis tas, kas atrodas ārpuss funkcijas - globāli mainīgie, metodes. Abas leksikas vides ir kā divi lieli tehniskie objekti. Mainīgais: number principā ir kā īpašība un tā vērtība kā īpašības nozīme. Mainīgais: number - īpašība, bet tās vērtība: 4. Konkrēti šinī piemērā. Jeb kurš mainīgais ir kā īpašība leksikas vidē. Ne velti objekts ir galvenā pamatvērtība JavaScript programmēšanas valodā. Lkesiskā vide darbojās visās koda vietās, kur tiek izmantotas {} iekavas. Kad funkcija beidz savu darbu, tad leksikas vide tiek pilnībā iznīcināta, jo tā vairs nav nepieciešama. Jo leksikas vides objekts vienkārši dzēšās, jo funkcija ir izpildījusi savu darbību. */

/* Šo visu mums mums ir svarīgi iegaumēt, jo tā ir svarīga informācia kā funkcijas srādā JavaScript valodā bāzes līmenī. Zinot šo visu, mēs saprotam, kā funkcijas darbojās savā iekšienē un saprotam arī, kas ir funkciju slēgšana - ieslēgšana. */

/* Vēl ļoti svarīgi ir iegaumēt to, ka katras jaunas funkcijas izveidošana nozīmē to, ka mēs izveidojam arī jaunu leksikas vidi. Arī tad, kad katru reizi mēs izsaucam funkciju, ja mēs to darām vairākas reizes, mums katru reizi izveidojās jauna leksikas vide. */

/* Pats grūtākais sākās tad, kad izmantojam funkciju iekš funkcijas. Bet loģika un leksikas vide darbojās pēc tāda paša principa kā aprakstīts iepriekš. Katrai funkcijai ir lokālā un globālā leksikas vide. */

/* izskatīsim vēl piemēru: . */

function createCounter() {
	let counter = 0;
	const myFunction = function () {
		counter = counter + 1;
		return counter;
	}
	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

/* Šinī piemērā mēs izveidojam funkciju: createCounter, iekš tās nosakām  mainīgo: counter. Pēc tam izveidojam function expression veida funkciju: muFunction. Atceramies, ka function expression funkcijas ir tās, kas pierakstītas caur mainīgā deklarēšanu. Iekš funkcijas rakstām mainīgo: counter, liekam piederības zīmi, rakstot, ka katru reizi, kad izpildās šī funkcija counter vērtība palielinās par: +1. Liekam atgriezt mainīgo: counter. Aiz funkcijas {} iekavām liekam atgriezt:myFunction funkciju. Nosakām jaunu mainīgo: increment, liekam piederības zīmi un rakstām funkcijas nosaukumu: createCounter(). Neaizmirstam, ka izsaucot kādu funkciju mums aiz tās nosaukuma jāliek () iekavas. Pēc tam nosakām trīs dažādus mainīgos, katru reizi kā vērtību rakstot: increment(). Mēs redzam, ka mainīgais: inrement kļūst par funkciju: increment(). Pieprasām konsoles izvadē izvadīt visu trīs mainīgo vērtības. izpildot šādu kodu mēs konsolē redzam: 1 2 3. Redzam, ka vis strādā korekti. */

/* Lai kontrolētu, pārbaudītu mūsu rakstīto kodu, mums ir jāizmanto metode: debugger. Tad mēs varam iekš pārlūka google chrome Izstrādātāju rīku redzēt sīki kā darbojās mūsu funkcijas, redzēt sīki visu tehnisko daļu kad un kas notiek. */

/* Strādājot ar funkcijām un to leksikas vidi ir ļoti svarīgi zināt vienu svarīgu tehnisko detaļu. Kā funkcija var zināt, kur un ko viņai ņemt un izmantot tās leksikas vidē? Vis ir ļoti vienkārši: Ir slēpta - noslēpta funkciju īpatnība: enviroment, kas balstās un leksikas vides vietu, kur konkrētā funkcija tika izveidota. Jo funkcija, kad tā tika izveidota, tai automātiski tiek pievienota saite uz leksikas vidi, tur kur tā tika izveidota. Un pateicoties šai slēptajai īpatnībai: enviroment funkcija zin ko viņai ielikt tās slēgšanā, kādus datus. Tā zin, ko ielikt leksikas vidē. */

/* Lai vieglāk varētu visu saprast kā tieši šīs visas īpatnības un tehniskās lietas, leksikas vide, funkciju slēgšana darbojās, mums ir jāizmanto metode: debugger. Jo tad mēs caur izstrādātāju rīku varam izsekot līdzi katrai funkcijai un tās darbībai, tās leksikas videi un funkcijas slēgšanai. */

/* Leksikas vides nosacījumi un liekumi, viss tas, ko mācījāmies iepriekš attiecās uz visu JavaScript, uz visiem elementiem, kur tiek izmantotas {} iekavas. Arī uz metodēm, cikliem utt. */

