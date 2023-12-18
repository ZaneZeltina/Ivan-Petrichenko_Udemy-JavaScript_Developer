/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

/* JavaScript programmēšanas valoda ir augsta līmeņa programmēšanas valoda. Tāpēc, ka daudzas bāzes funkcijas jau ir realizētas programmas līmenī. Piemēram: darbs ar datora operatīvo atmiņu. Jo mēs nekad neaizdomājamies par to, kur tiek saglabāta datora atmiņā konkrētā kodā uzrakstītā lieta: objekts, datu masīvs, funkcija, utt. */

/* Otra svarīga lieta, kas ir jāatcerās ir tā, ka JavaScript programmēsšanas valoda ir Interpretējama programmēšanas valoda. Tas nozīmē, ka programma - interpretators pa rindai palaiž JavaScript kodu un izpilda to. Neatkarīgi vai tas irpārlūks vai iebūvētais terminālis. */

/* Programmēšanā ir arī kompilējamās programmēšanas valodas. Tajās ar kompilatora palīdzību pārvēršās dubultā kodā un tikai tad tas tiek izpildīts. Kā piemēru varam iztēloties aplikācijas, kas ir uz mūsu datora: Office, Chrome, NotePad utt. Tās visas ir kompilējamas programmas, tās tika izveidotas ar kompilatora palīdzību. */

/* Tostarp JavaScript programmēšanas valoda izpildās pateicoties programmai interpretatoram savā vidē, piemēram interneta pārlūka vidē. */

/* Darba intervijā var uzdot jautājumu: vai JavaScript programmēšanas valoda ir interpretējama vai kompilējama. Un tagad mēs zinām, ka tā ir interpretējama programmēšanas valoda. */

/* Tagad paskatīsimies kā JavaScript programmēšanas valoda darbojās datora atmiņā. Augsta līmeņa programmēšanas valodās, tas notiek pārsvarā automātiski. Atceramies, ka JavaScript arī ir augsta līmeņa programmēšanas valoda. Interpretators pats izvēlās, kad un kā izmantot, atbrīvot datora atmiņu. Mums par to nav jādomā. Ar atmiņas atbrīvošanau ir grūtāk, jo tur tikai nosacīti vis notiek automātiski. Un te mēs nonākam pie tāda jēdziena kā: Atkritumu savācējs. Tās ir tādas datorprogrammas, kas apstrādā atmiņas izmantošanu, un pēc nepieciešamības tie atbrīvo atmiņā vietu. Ja, kāds kods netiek šobrīd izmantots, tad tā atmiņas vieta tiek atbrīvota. Kā jau bija teikts, ka tas ir daļēji automātisks process, bet reizēm šī problēma ir jārisina mums - izstrādātājiem. Mums ir dažreiz jāpalīdz interpretatoram, jo savādāk var būt atmiņas noplūdes. */

/* Piemēram, cik daudz operatīvās atmiņas reizēm patērē Google Chrome darbība.Ja mums programmēšanas valodā ir kāds elements, kas tiek izmantots vairākkārt, ja tam ir saite, piemēram: saite uz kādu objektu, tad, tas tiks ierakstīts operatīvajā atmiņā.Ja saites nav kodā, tad principā nav vajadzības saglabāt šo koda daļu operatīvajā atmiņā, tā tiks dzēsta no atmiņas.Šis vis var izsaukt problēmas: Atmiņas noplūdes. Mūsdienās pēdējās pārlūka versijās atmiņas noplūdes vairs nav svarīgas, bet mums par tām ir jāzin. */

/* Par atmiņas noplūdēm var vaicāt arī darba intervijā. Piemēram strādājot ar vecajiem projektiem, citu izstrādātāju kļūdas - neizdarība, arī savas neizdarības. Kādas mēdz būt atmiņas noplūdes? Šīs atmiņas noplūdes, kuras mēs izskatīsim visticamāk mēs savā darbā nesastapsim, bet par tām ir jāzin. Atmiņas noplūdes ir saistītas ar globālajiem mainīgajiem JavaScript programmēšanas valodā. Jo, ja mums koda sākumā nav izmantots: 'use strict', tad mēs varam noteikt mainīgos bez to deklarēšanas, bez let un const izmantošanas. izskatīsim to ar piemēru: . Lai redzētu kā tas darbojās mums stingrā režīma noteikšana jāpārnes zem šī piemēra. Lai mums nebūtu liekas kļūdas kodā varam šo piemēru rakstīt to iekomentējot. */

// function myFunction() {
// 	text = 'Zane';
// }

/* Redzam, ka kā šinī piemērā mēs varam izveidot funkciju, tajā ielikt mainīgo bez tā deklarēšanas, pievienot tam kādu vērtību. Šāda darbība nav pareiza, tādēļ arī tiek izmantots režīms: 'use strict';. Šādi pierakstīts globāls mainīgais nevar tikt nodzēsts izmantojot atkritumu savācēju. */

/* Te arī ir galvenais nosacījums: Izmantojam vienmēr direktīvu: 'use strict';, un vis ar atmiņas noplūdēm un atkritumu savācēju darbību mums būs kārtībā. */

/* Kā arī atceramies, vienmēr, kad veidojam mainīgos - atceramies tod deklarēt izmantojot atslēgvārdus let un const. */

/* Otrā problēma, kas var rasties ar atmiņas noplūdēm ir: mūsu jeb kāda cita izstrādātāja aizmirsts taimeri, jo tie glabā saites uz tiem elementiem ar kuriem mums ir jāstrādā. Nerunājot jau par tādiem taimeriem, kas visticamāk neko nedara. izskatīsim to ar piemēru: . */

const someRes = getData();
const node = document.querySelector('.className');

setInterval(function () {
	if (node) {
		node.innerHTML = someRes;
	}
}, 1000);

/* Šīnī piemērā mums ir divas saites, mainīgie, kurus esam deklarējuši piemēra sākumā. Pirmais mainīgais glabā saiti uz metodi: getData(), kur var būt apjomigi dati, bet otrs mainīgais glabā saiti uz HTML dokumenta elementu. Un pat, ja mēs izdzēsim DOM elementu tas vienalga paliks atmiņā, jo saite uz to vēl jo projām ir, tā ir iekš funkcijas izpildes intervāla, kas atkārtojas ik pa sekundei. Un šī ir jau atmiņas noplūde, jo atmiņa tiek aizpildīta ar mums nevajdzīgiem datiem. Tādēl savrīgi ir apstādināt taimerus. */

/* Trešā problēma, kas var izraisīt atmiņas noplūdi ir: noteikti notikumu nolasītāji neeksistējošiem elementiem. Piemēram mēs nosakām notikumu nolasītājus vairākiem elementiem, bet var būt tā, ka HTML lapas adrbības laikā, daļa no elementiem pazūd. Īpaši aktuāli, tas ir web aplikācijām, kur lapa neatjaunojās principā. Kad no lapas, piemēram e-pasta lapas tiek dzēsts kāds elements. Bet JavaScript kodā notikumu lasītājs netiek dzēsts, tanī paliek saite uz elementu, kur lapā vairāk nav, un veidojās atmiņas noplūse. agrāj vecākās interneta pārlūka versijās šādi gadījumi veidoja atmiņas noplūdes. Tie bija pārlūki: Internet Explorer 6 un 7 versijas, bet mūsdienu interneta pārlūku versijās izmantojot atkritumu savācējus šī problēma ir novērsta izmantojot pielāgotus - modernākus algoritmus, jo mūsdienu pārlūki automātiski dzēš notikumu lasītājus, ja elements no lapas tiek dzēsts. */

/* Laba koda pierakstīšanas prakse JavaScript programmēšanas valodā, ja mēs strādājam ar tīru natīvu JavaScript ir: tomēr nodzēst notikumu lasītājus pēc to izpildes. */

/* izmantojot JavaScript bibliotēkas kā: jquery un react, notikumu nolasītāji nodzēšana jau ir realizēta mūsu vietā. Mums tas pašrocīgi nav jādara. */

/* Ceturtā problēma, kas var radīt atmiņas noplūdes ir: JavaScript funkciju ieslēgšana. Mums var gadīties situācija, ka kāds liels datu apjoms glabājās iekš funkcijas ieslēgšanas un ārēji mēs tam nevaram piekļūt, mēs nevaram ārēji ar tiem strādāt, piemēram nodzēst, jo dati ir lokāli. Izskatīsim to ar konkrētu piemēru */

function outer() {
	const potentiallyHugeArray = [];
	return function inner() {
		potentiallyHugeArray.push('Hello!');
		console.log('Hello Zane!');
	};
}

const sayHello = outer();

/* Šinī piemērā ir skaidri parādīts kā funkciju ieslēgšana var radīt atmiņas noplūdes. Pateicoties tam, ka iekš funkcijas ir vēl viena funkcija, tiek saglabāta funkciju ieslēgšana. Jo mainīgais: sayHello glabā saiti uz funkciju: outer, kas savukārt glabā saiti uz datu masīvu, un tas visu laiku glabāsies atmiņā, iksevišķi ja mēs tālāk veisim kādas darbības ar mainīgo: sayHello. Jo funkcija: outer it kā jau ir nostrādājusi, bet pateicoties tam, ka iekš tās ir vēl viena funkcija, funkciju ieslēgšana turpina darboties, tiek saglabāta saite uz nevēlamiem elementiem. Tā mēs ar funkciju slēgšanu varam izraisīt atmiņas noplūdes. */

/* izskatīsim vēl vienu iespēju kā mēs varam iegūt atmiņas noplūdi: Tas ir, kad mums ir saites uz DOM koku.Mēs saglabājām saites uz mainīgajiem, kas ir JavaScript kodā. Jo šie mainīgie ir arī DOM struktūrā, mūsu HTML dokumentā. Jo, kad mēs dzēšam kādu objektu no DOM koka, saite uz to JavaScript kodā paliek, un tas var izraisīt atmiņas noplūdi. Izskatīsim potenciālo problēmu ar piemēru: */

function createElement() {
	const div = document.createElement('div');
	div.id = 'test';
	document.body.append(testDiv);
}

createElement();

function deleteElement() {
	document.body.removeChild(document.getElementById('test'));
}

deleteElement();

/* Šinī piemērā mēs redzam situāciju, kad funkcija: deleteElement() nodzēš elementu no DOM koka - no HTML dokumenta, bet JavaScript kodāpaliek saite uz to. Jo mums paliek mainīgais: testDiv, kas balstās uz elementa: div izveidi. Un šādi mums ir izveidojusies neliela atmiņas noplūde. Pareizākais veids kā atrisināt šo problēmu, ir likt nodzēst elementu; div pēc tā izveides. Lai to izdarītu mums konstrukcija: document.body.append(testDiv) jāieraksta iekš funkcijas: createElement. Kā arī jānoņem mainīgais: testDiv, atstājot tikai metodi: createElement(). Izpildot šādu izlabotu kodu, mums,kad funkcija: crateElement() būs izveidojusi elementu: div, tā ar atkritumu savācēju tiks nodzēsta, un mums neveidosies atmiņas noplūde. */

/* Mums strādājot var gadīties uzdevums meklēt kodā atmiņas noplūdes. To var darīt izmantojot Google Chrome pārlūkā metodi: Memory Inspector: Inspect JavaScript ArrayBuffer. Bet mācību un darba sākumā mums tas nebūs vajadzīgs. */


