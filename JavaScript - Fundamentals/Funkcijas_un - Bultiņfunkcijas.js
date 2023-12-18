/* eslint-disable no-unused-vars */
'use strict';

/* Kas ir funkcijas? Ja sakām pa visam vienkāršā valodā, tad: funkcijas ir mūsu darbības JavaScript programmēšanas valodā. Vis tas, ko mēs liekam kādam elementam, mainīgajam, objektam vai datu masīvam darīt ir funkcijas. Lai izprastu funkciju darbību, mēs varam iztēloties jeb kuru lietu, piemēram: kalkulatoru, ledusskapi, miroviļņu krāsni, pulksteni - katrs pilda noteiktas darbības. Tās arī ir funkcijas. Piemēram: kalkulators - mēs ievadām kādus datus, gribam izpildīt kādas darbības ar tiem. Kalkulatoram ir noteiktas funkcijas, mēs ievadot datus varam ar tiem izpildīt noteiktas darbības. Un tas attiecās uz jeb kuru lietu. Visvienkāršāk to ir saprast iedomājoties kādu elektronisku ierīci. Ierīču funkcionalitāte var būt sākot no dažām funkcijām, beidzot ar ļoti daudzām, sarežģītām funkcijām, piemēram: mobilaais telefons, dators. */

/* Pierakstot funkcijas ir jāievēro noteikta rakstības sintakse, izskatīsim dažus piemērus: */

let num = 20;
function showFirstMessage(text) {
	console.log(text);
	num = 10;
	console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

/* Pierakstot funkciju mēs izmantojam: function, tālāk norādām funkcijas nosaukumu, aiz tā uzreiz liekam ( ) iekavas, kur varam ierakstīt funkcijas elementus, argumentus. Šīnī piemērā kā funkcijas arguments mums ir: text - teksts. Pēc tam liekam { } iekavas, kurās norādām, kas konkrētai funkcijai ir jāzidara, darbību, kas tai ir jāizpilda. Mūsu gadījumā tā izpilda konsoles izvadi: text. Kad mēs esam aprakstījuši kādu funkciju, mums ir obligāti tā jāizsauc, lai tā darbotos: rakstot tās nosaukumu un aiz nosaukuma liekot ( ) iekavas. Ja mums ir kādi argumenti, kad funkcija ir jāizpilda, tad mēs tos rakstām ( ) iekavās. Mūsu piemērā, lai funkcija izvadītu kādu tekstu, mēs ( ) iekavās rakstām tekstu, ko vēlamies izvadīt: 'Hello world!' . */

/* Veidojot funkcijas nosaukumu, mums ir jāievēro likums, ka nosaukumam jāizsaka tas ko šī funkcija dara, kādu darbību tā veic. Nosaukumiem jābūt loģiskiem, lai mums un citiem būtu viegli orientēties kodā, ja tas ir garš un lai būtu viegli to lasīt. */

/* Funkcijas mēdz būt arī anonīmas, tas ir tad, kad tām nav nosaukuma, bet tad mums ir jāņem vēra tas, ka tā izpildās tikai vienu reizi, un mēs vēlāk nevaram ar to strādāt, to izmantot, jo mums vienkārši nav nosaukuma pie kā vērsties. */

/* Par funkcijas argumentiem sauc datus, kuri ie ierakstīti ( ) iekavās. Tie r dati, kas atrodas konkrētas funkcijas iekšienē, tas ko satur šī funkcija. Kā piemēru mēs varam iztēloties kalkulatora darbību. Mūsu ievadītie skaitļi ir dati - funkcijas argumenti, tas ko satur kāda funkcija - darbība. Funkcijas argumenti var būt ļoti daudz, bet var būt arī viens. */

/* Funkcijas iekšienē mēs varam noteikt mainīgos, gan parastā tipa, izmantojot atslēgvārdu: let, gan stingri deklarētos mainīgos, izmantojot atslēgvārdu: const. Ja mēs deklarējam mainīgo funkcijas iekšienē, tad mums jāatcerās likums: ka tas nav pieejams ārēji, mēs nevaram aiz funkcijas izsaukšanas, izmantot deklarēto mainīgo funkcijas iekšienē. Kods nedarbosies un mēs saņemsim kļūdu. Šāds mainīgais, kas ir deklarēts funkcijas iekšienē skaitās lokāls mainīgais, un mēs to nevaram izmantot ārpus funkcijas. Lai mēs varētu izmantot mainīgo ārpus funkcijas - globāli, mums tas ir jādeklarē ārpus funkcijas, lai mēs to varētu izmantot. Ja mēs gribam mainīgo lietot iekš funkcijas mums tas ir jāraksta bez atslēgvārda: let, rakstot tikai tā nosaukumu un vērtību, jo mēs jau to esam izdarījuši ārpus funkcijas - globāli. */

/*Ja mēs šo kodu palaidīsim konsolē, mēs saņemsim: Hello world!. un nākošajā rindā: 10. To mainīgā: num vērtību, ko mēs noteicām iekš funkcijas, jo ārpus tās mēs deklarējam mainīgo: num izmantojot atslēgvārdu: let, kas nozīmē, ka tā vērtību mēs varam mainīt. Bet ja mēs deklarēsim mainīgo iekš funkcijas ar tādu pašu nosaukumu izmantojot atslēgvārdu: let, tad mēs izvadē saņemsiem mainīgā vērtību, kas ir noteikta ārpus funkcijas, kas šajā gadījumā ir: 20. Jo ja mēs deklarējam mainīgo iekš funkcijas - lokāli, tad ārpus tās tas nav redzams, tas nedarbojas, darbojās tikai tas, kas ir deklarēts - globāli ārpus funkcijas. */

/* Izveidojot funkciju tā darbojās pēc principa: izdarīt visu pēc kārtas. Mūsu gadījumā tā nolasa tai iedoto argumentu, izpilda argumenta zvadi konsolē, nolasa mainīgā: num vēr'tibu un izpilda mainīgā: num vērtības izvadi konoslē. Bet kad mēs izsaucam funkciju, tā izpilda visas tās darbības, kas ir tās iekšienē, bet izpildot pēc tam konsoles izvadi, tā izvada globālo mainīgā: num vērtību. */

/* Ja mēs vēlamies izvadīt globālo mainīgā: num vērtību funkcijā mēs pieprasām konsoles izvadi rakstot mainīgā nosaukumu (num) iekavās, un par cik tā iekš sevis neatrod tādu mainīgo, tā meklē līmeni augstāk, pirms funkcijas, atrod to, un izvada to mainīgā: num vērtību, kas ir deklarēta pirms pašas funkcijas. Tā sākumā meklē mainīgo iekš sevis - lokāli, bet ja neatrod: tā iet uz augšu pa visiem līmeņiem līdz atrod tieši to mainīgo, kura vērtību mēs esam pieprasījuši izvadīt konsolē, tā to atrod un izvada. */

/* Sīs funkciju īpašības mums ir jāsaprot un jāzin, lai mēs varētu panākt to rezultātu ko vēlamies. Lai funkcijas izpildītu tieši to, ko mēs esam noteikuši. */

/* Funkcija mums var arī atgriezt kādu vērtību, ja izmantojam metodi: return. Izmantojot šo metodi mēs apstādinām funkcijas darbību. Jo kā funkcija ierauga metodi: return tā tā beidz darboties. Izskatšisim dažus funkciju pieraksta piemērus izmantojot metodi: return: */

function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

/* Mēs pierakstā funkciju: calc izmantojot metodi: return - kas liek atgriezt a+ b, lai sagrupētu darbības mēs izmantojam ( ) iekvas. Izpildot konsoles izvadi zem funkcijas, mēs varam funkciju izsaukt tieši konsoles izvadē ievērojot sintaksi, kad funkcijas nosaukumu liekam iekavās un tad liekam vēlreiz ( ) iekavas, kurās norādām funkcijas argumentu: a un b vērtības. Izpildot šo kodu, mēs konsoles izvadē redzam: 7, kas nozīmē, ka mūsu funkcija strādā pareizi. Konsoles izvadi mēs varam izmantot daudzas reizies, katru reizi norādot funkcijas nosaukumu, un tās argumentu vērtības. */

/* Funkciju izmantošanas būtība ir: automatizēt kādu procesu, atvieglot darbu. */

/* Ja mēs pēc metodes: return izmantošanas mēģināsim veikt kādu darbību piemēram: konsoles izvadi, tad tā nedarbosies, jo atslēgvārds izpildot funkciju to apstādina, un vis, kas rakstīts aiz tā netiek ņemts vērā. Tāpēc aiz metodes: return mēs neko vairs nerakstām. */

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

/* Ja mēs deklarējam mainīgo iekš funkcijas un pēc tam izmantojam metode: return, tad mums vis darbojās, jo ja darbības aprakstītas iekš funkcijas, tad vis tiek izpildīts un mums nav kļūdu, kods darbojās. Bet ja mums ir ļoti garš kods, tad atceramies: ka metodi: return mēs rakstam pašās funkcijas beigās. Un azi tā vairs neko nerakstām. */

/* Mēs ārpus funkcijas varam stingri deklarēt mainīgo izmantojot atslēgvārdu: const un liekot piederības zīmi pievienot tam funkciju: ret( ) . */

/* Izpildot konsoles izvadi mēs prasām izvadīt anotherNum vērtību, kas ir izmantojis funkcijas: ret( ) darbību. Izpildot konsoles izvadi mēs redzam: 50, mainīgā: num vērtību. Jo mēs bijām deklarējuši jaunu mainīgo, kas izmantoja mūsu funkciju: calc( ) izvadīja mums tā mainīgā vērtību, kas bija noteikts iekš funkcijas: calc( ). */

/* Funkcijas dalās trīs veidos: Deklarētās funkcijas - Functiom Declaration, Ekspress funkcijas - Function Expression, Bultiņu funkcijas.  */

/* Iepriekšējie piemēri atbilda parastajām: deklarētajām funkcijām. Deklarētajām funkcijām ir ļoti svarīga īpatnība, ka tās pastāv jau pirms tās tiek aprakstītas. Kad sāk darboties jebkurš skripts, tas tiek lasīts šādi: vispirms tiek atrasti mainīgie, kas deklarēti izmantojot atslēgvārdu: var. Protams, ja tādi ir. Bet pēc tam tike atrastas un izpildītas visas deklarētās funkcijas, un tikai tad kods tiek pildīts no augšas uz leju, pildot visu pārējo, kas tur ir noteikts. Tā ir būtiska: var un Function īpatnība. Lai par šo darbības principu pārliecinātos, mēs pirms funkcijas: calc( ) varam izpildīt konsoles izvadi Un mēs redzam, ka vis darbojās, bez kļūdām, un saprotam, ka deklarētās funkcijas darbojās - jau pastāv pirms to deklarēšanas. Bet tagad apskatsim pārējos divus funkciju veidus. */

const logger = function () {
	console.log('Hello!');
};

logger();

/* Ekspress funkcijas vēl sauc par funkcionālu izteiksmi. Galvenā atšķirība no deklarētajām funkcijām ir tāda, ka ir savādāks sintakses pieraksts, citāda sintakse. Mums vispirms ir jādeklarē mainīgais un tajā jāieliek kāda funkcija. Principā mūsu deklarētais mainīgais ir funkcijas nosaukumus, kuru vēlāk mēs izmantojam darbībās un funkcijas izsaukšanā. Būtiska atšķirība ir arī tā: ka aiz Deklarētās funkcijas mēs neliekam zīmi ;, bet aiz Ekspression funkcijas mums obligāti jāliek ; pēdiņas, jo citādi kods nedarbosies un būs kļūda. Izlaižot kodu konsolē, mēs konsoles izvadē redzam: Hello! , kas nozīmē, ka vis darbojās pareizi, funkcija: logger( ) strādā. Expression - Ekspress funkcijas pastāv kodā tikai tad kad tās ir pierakstītas - deklarētas, kods tās nolasa tikai tad, kad ir izpildījis: var un functions declaration, un tikai pēc tam tas parastajā nolasīšanas kārtībā, kad nonāk līdz Expression funkcijām sāk tās izpildīt, un mēs izsaukt tās varam tikai pēc to pieraksta. Ekspress Function strādā pēc tāda paša principa kā mainīgais. Mēs nevaram zisaukt Expression funkciju pirms tās pieraksta, jo mums uzreiz būs kļūda, kods nedarbosies. */

/* Jaunajā ES6 JavaScript standartā 2-15 gadā tikai ieviesta jauna metode: bultiņveida funkcijas - bultiū funkcijas. Tai ir atšķirīgs sintakses pieraksts, un pēc pieraksta tā ir daudz īsāka, mums nav vajdzīgs garš koda pieraksts, lai to aprakstītu. izskatīsim piemērā: */

const calculator = (a, b) => { return a + b; };

/* Mēz izmantojot mainīgo uzrakstām funkcijas nosaukumu, liekam piederības zīmi, rakstām funkcijas argumentus liekot tos iekavās ( ), izmantojam bultiņu: =>, kas nozīmē, ka tā ir bultiņveida funkcija. Liekam { } iekavas, kurās rakstām to, kas konkrētajai funkcijai ir jāidara. Dotajā piemērā: izmantojot atslēgvārdu: return, liekam funkcijai atgriezt saskaitītus argumentus. Būtiska atšķirība no iepriekšējiem funkciju veidiem ir tā, ka bultiņveida funkcijas nevajag izsaukt. Otra būtiska lieta ir: ka mums ir jāliek semikols, gan azi funkcijas darbības pieraksta, gan aiz { } iekavām. Sintaksei jābūt tādāi kā dotajā piemērā. Ja mums ir īss funkcijas apraksts, ja mēs to varam pierakstīt vienā rindā, tad mēs varam aiz => nelikt darbību { } iekvās, un varam nerakstīt metodi: return, jo tā tiek izpildīta arī bez tieša pieraksta, bet ja mums funkcija ir gara, tad izmantojam tādu pierakstu kā piemērā. Ja mūsu funkcija ir garāka, mēs pirms metodes: return gribam veikt konsoles izvadi, tad pierakstam jābūt šādam: .*/

const calculat = (a, b) => {
	console.log('1');
	return a + b;
};

/* Atceramies, ka izmantojot bultiņveida funkcijas, mums ir jāliek papildus semikols ;, josavādāk mums būs kļūda, kods nedarbosies. */

/* Funkcijas ir ļoti liela nozīme, kad mēs izstrādājam jeb kādu programmu, tās ir programmas izstrādes pamatā. */