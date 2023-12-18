'use strict';

/* Šinī lekcijā paskatīsimies vēl uz JavaScript programmēšanas valodas iespējām, kas parādījās ES6 standartā. */

/* ES6 standartā parādījās operators: Rest un noklusējuma parametri. Ar izgriešnas operatoru: Spread mēs jau esam pazīstami. Tas izskatās kā trīs punktiņi: ...; Operators Rest ir operatora Spread līdzinieks. Operators Rest izskatās kā trīs punkti: ...; Bet tam ir citi sintakses nosacījumi. Ja operators: Spread ņēma kopējo būtību (datu masīvu) un sadalīja to pa atsevišķiem elementiem, tad operators: Rest dara pretējo: tas apvieno vairākus elementus un pārvērš tos veselā datu masīvā. */

/* Ja iedziļināsimies operatora: Rest nosaukuma tulkošanā, tad to var saukt par: atlikušajiem elementiem, jo šis nosaukums apstiprinās. */

/* Izskatīsim operatora: Rest darbību praktiskos piemēros: . */

const log = function (a, b, ...rest) {
	console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

/* Mums var būt situācijas, kad mums ir daudzi funkcijas argumenti. Tie var būt desmitiem, simtiem, tūkstošiem, un mēs nezinām kādi vēl argumenti nāks klāt. Kā dotajā piemērā mums ir divi funkcijas argumenti, bet pārējo skaits mums nav zināms. Lai atrisinātu doto situāciju mēs izmantojam operatoru: rest, kas izskatās tieši tā pat kā operators: Spread: trīs punkti: ...; Aiz operatora: Rest izmantošanas rakstām argumenta nosaukumu: rest. */

/* Kā pirmos funkcijas argumentus rakstām tos, kas būs obligāti, rakstām tos noteiktā kārtībā. */

/* Rest operatora izmantošanu funkcijā - funkcijas argumentu mēs varam nosaukt kā vien vēlamies, bet, lai kodu būtu vieglāk lasīt, izmantojam nosaukumu: rest. */

/* Ievērojam operatora: Rest: ... izmantošanas īpatnību: Izmantojot to funkcijas argumntos, as vienmēr tiek pierakstīts kā pēdējais funkcijas arguments. */

/* Kā reālu piemēru mēs varam ņemt: Kad mums ir jāpievieno jaunas klases, mēs zinām, ka mums lapai tiks pievienoti jauni elementi, zinām, ka mums būs klases: Item un Menu, bet nezinām kādas vēl tiks pievienotas. Pārējās klases mums būs opcionālas, tās var būt, un var arī nenebūt. */

/* Saprotamāks piemērs: Mums var būt programma, kas aprēķina dažādus budžetus, piemēram ģimeņu budžetus. Budžetu aprēķināšanas funkcijai ir kādi stingri parameti - argumenti, piemēram: vīra alga un sievas alga. Pēc tam seko dažādi papildus ienākumi no dažādām haltūrām, citiem papildus ienākumu avotiem, kas vienu mēnesi var būt, citu nebūt. Un mēs nekad skaidri nezinām cik liels budžets kurā reizē būs. Mums ir vajadzīgs mehānisms, kas to kontrolēs. Un to dara tieši operators: Rest. */

/* Strādājot ar doto piemēru izsaucam funkciju: log(), tās iekavās rakstām argumentu a un b vērtības, un pievienojam vēl divas vērtības. Izpildot šādu kodu mēs redzam, ka mums tiek atgriestas argumentu: a un b vērtības kā parastas rindas, bet argumenta: rest, kur tiek izmantots operators: rest, mums tiek atgrieztas iekš datu masīva kā rindiņtipa dati, katra ierakstīta iekš '' pēdiņām, atdalīta ar komatu. Konkrēti, mums operators: Rest atgriež vērtības ierakstītas datu masīvā. */

/* Operators: Rest savāc atsevišķas vēertības un atgriež tās iekš datu masīva. */

/* Tagad izskatīsim funkcijas noklusējuma parametrus. Reizēm mums ir vajadzīgs, lai kādām funkcijām būtu parametri, kurus mēs nododam pēc noklusējuma saturētu kādas vērtības. Izskatīsim to ar piemēru: . */

function calcOrDouble(number, basis = 2) {

	// basis = basis || 2; - šāds pieraksts var radīt kļūdu, to nav ieteicams izmantot;

	console.log(number * basis);
}

calcOrDouble(5, 3);
calcOrDouble(3);

/* Šeit mēs redzam, ka mums ir divi funkcijas argumenti, kas katrs ir ar savu vērtību. Mēs izpildām funkcijā reizināšanas darbību, un pie funkcijas izsaukšanas norādām abus skaitļus, kurus vēlamies reizināt. Dotajā piemērā izpildot šādu kodu konsolē mēs redzam: 15. Bet, kā rīkoties, ja mums funkcijas izsaukšanā nav otra norādīta otrā argumenta vērtība? .Mēs varam noteikt noklusējuma parametrus. Piemēram, ja mums nav viena argumenta vērtības mēs izmantojam noteikto noklusēto skaitļa vērtību. Pierakstot to kodā izmantojot operatoru: vai: ||.  Šinī piemērā skaitli: 2. Izpildot šādu kodu, kad mēs norādām pie funkcijas izsaukšanas tikai viena argumenta vērtību, tiek automātiski pievienota otra argumenta noklusētā vērtība, kas šinī piemērā ir: 2. Izpildot šādu kodu mēs saņemam skaitli: 6. */

/* Bet šis nav pats pareizākais variants, jo var būt situācijas, kad šāds variants var mums radīt kļūdu. Tādēļ šādu variantu nav ieteicams izmantot. Standartā ES6 parādījās iespēja šo problēmu atrisināt: Pareizāks variants būtu: aiz funkcijas argumenta basis likt vienādības zīmi un noklusēto vērtību, šinī piemērā skaitli: 2. skatīt augstāk piemērā: . */

/* Izpildot šādu kodu, kad mums ir tikai viena funkcijas argumenta vērtība, mēs konsolē redzam skaitli: 6. */

/* Šādu pieeju mēs varam izmantot uzdevumos, kad mums jāuzstāda kādam elementam noklusējuma uzstādījumi, piemēram: lapas modālā loga augstums un platums jeb fona krāsa, teksta krāsa. Mēs varam rakstīt noklusējuma vērtības. */

/* izmantosim iegūtās zināšanas prakstiski. Atgriežamies mūsu lielajā projektā. */