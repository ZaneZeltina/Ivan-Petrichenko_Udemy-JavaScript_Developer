'use strict';

/* JavaScript programmēšanas valodā pie loģiskajiem operatoriem pieder tādi operatori kā: && - Un, || - vai, ! - ne - noleiguma operators. Mums ir jāzin ko kurš operators nozīmē, un kad tas tiek pielietots. Katrs no šiem operatoriem mums kaut ko atgriež - dod kaut kādu rezultātu. Mēs operatorus izmantojam ar kādu mērķi - iegūt kādu rezultātu. No dzīves mēs varam iztēloties piemēru: mums gribas ēst, mēs ieejam kafeijnīcā un gribam apēst hamburgeru un frī. Ja kafeijnīcā ir hamburgers un frī, tad mēs esam sasnieguši savu mērķi - mēs esam paēduši, bet ja nav, tad mēs ejm prom. Izskatīsim šo situāciju JavaScript koda pierakstā: */

const hamburger = true;
const fries = true;
//const fries = false;

if (hamburger && fries) {
	console.log('Es esmu paēdusi!');
}

/* Šeit mēs redzam, ka mums ir dots, ka kafeijnīcā ir hamburger, un ir fries, mums izpildās dotaie nosacījumi, rezultātā mēs esam paēduši. Izmantojot loģisko operatoru: && - un, mēs uzreiz pārbaudām divus nosacījumus. Lai redzētu, kādas vērtības - nozīmes ir hamburger un fries, mēs veicam sekojošu pieprasījumu konsoles izvadei: */

console.log((hamburger && fries));

/* Ievērojam sintaksi, jo veicot šādu pierakstu mums ir jāizmanto dubultiekavas: (( )). Rezultātā mēs konsoles izvadē redzam: true, Jo abi mainīgie satur vērtībuz: true. */

/* Izpildot jeb kuru loģisku darbību, izmantojot loģiskas vērtības, kas ir: true or false mums vienmēr tiek atgriezti loģiskie dati, Boolean datu tipa: true or false. Ja kaut viens no nosacījumiem būs ar vērtību: false, tad mēs arī konsoles izvadē redzēsim: false. */


/* JavaScript programmēšanas valodā dati var mainīties no viena datu tipa uz citu. String dati var kļūt par Number datiem, jeb Boolean tipa datiem. Daudziem programmētājiem nepatīk izmantot metodes, kad nav zināms par kādiem datiem pārvērtīsies kādi dotie dati. Bet šīs metodes izmantošanai ir arī priekšrocības: izmantojot loģiskos operatorus mēs varam veikt loģiskas darbības un iegūt loģisku rezultātu. Tā apt kā reālajā dzīvē. */

/* Javaskript programmēšanas valodā ir tāds jēdziens, kā dinamiskā tipizācija. Mums ir jāzin, ka noteikti īpašības vienmēr būs ar vērtību: false, un tās ir : 0 - nulle, '' - tukša rindiņa ( tieši tukša, nevis ar atstarpi ), null - vis, kas būs ar vērtību: null būs false, underfined - kad kāda vērtība nav atrasta ( nosaukums ir, bet vērtības nav ), NaN - Not a Number ( ja tas nav cipars, tad tam arī būs nozīme: false ). */

/* bet realitātē mums var būt arī citi dati, piemēram preču skaits.Izskatīsim to piemērā, kad mums ir noteikts preču skaits: */

/* iedomāsimies sarežģītāku situāciju no dzīves, kad mēs uz kafeijnīcu esam atnākuši ar trīs draugiem, kas katrs grib apēst pa hamburgeram, un tikai Jūs gribat apēst kartupeļus fries. JavaScript programmēšanas valodā situāciju pierakstām sekojoši: */

const hamburgers = 2;
const friees = 1;

if (hamburgers === 3 && friees) {
	console.log('Visi ir paēduši!');
} else {
	console.log('Mēs ejam prom!');
}

/* Šinī piemērā mēs redzam, ka mums ir doti divi hamburgeri un vieni frī, bet pie nosacījumiem mēs esam noteikuši, ka jābūt vismaz 3 hamburgeriem un vieniem kartupeļiem frī, lai mēs būtu pāēduši. Mums jāatceras, ka pēc prioritātes pirmā darbība, kas tiks izpildīta būs salīdzināšana un tad notiks otrā nosacījuma pārbaude. Bet mums šinī situācijā neizpildās nosacījums par hamburgeriem, tādēļ rezultātā: 'Mēs ejam prom!'. Ja kods redz, ka pārbaudot nosacījumus, kāds notiem neatbilst patiesībai: true, tad kods tālāk nedarbojas, tas apstājās - beidz pārbaudi pie pirmā nepatiesā nosacījuma. Izskatīsim to piemērā: */

const hamburge = 3;
const frie = 1;
const cola = 0;

console.log(hamburge === 3 && cola && frie);

/* Veicot konsoles izvadi, nosakot nosacījumu vērtību mēs konsolē saņemsim: 0, pirmo nosacījumu, kas neatbilst patiesībai, kas ir nepaties: false. Mēs redzēsim pirmā nepatiesā nosacījuma vērtību, aks šinī piemērā ir: 0, jo tik tiešām kola mums ir 0. Ja mums visi nosacījumi ir patiesi, mēs konsoles izvadē - rezultātā redzam pēdējo patieso vērtību. */

if (hamburge === 3 && cola && frie) {
	console.log('Visi ir paēduši!');
} else {
	console.log('Mēs ejam prom!');
}

/* Šinī piemērā mēs redzam, ka mums ir 3 hamburgeri, vieni frī, bet nav nevienas kolas, līdz ar ko mums neizpildās nosacījums, ka jābūt vismaz vienai kolai. Un par cik viens nosacījums neizpildās, rezultātā: 'Mēs ejam prom!' . */

/* Izskatīsim dažādus nosacījumus, un noteiksim kādu rezultātu mēs saņemsim konsoles izvadē: */

console.log(1 && 0);

/* Rezultātā mēs saņemsim: 0, jo mums tiek izvadīta pirmā nepatiesā vērtība. Pirmais, kas ir: false. */

console.log(1 && 5);

/* Rezultātā mēs saņemsim: 5, jo mums tiek izvadīta pēdējā vērtība, kas atbilst patiesībai. Un par cik mums abas vērtības ir patiesas, rezultātā mēs redzam: 5 .*/

console.log(null && 5);

/* rezultātā mēs redzam: null, jo mums tiek izvadīta pirmā nepatiesā vērtība. Atceramies, ka vērtība: null vienmēr nozīmē: false. */

console.log(0 && 'Zane');

/* Rezultātā mēs redzam: 0, jo mums tiek izvadīta pirmā nepatiesā vērtība. */

/* Salīdzināšanas veikšana izmantojot opertaoru: && - Un darbība un atgriežamās vērtības mums ir labi jāsaprot. Mums ir jāsaprot kurā gadījumā kas mums tiek atgriezts. Tas sākumā šķiet sarežģīti, bet kad rakstīsim savu kodu, mēs to sapratīsim. Tam ir savi darbības principi. Bet ja mēs atceramies, kuras īpašības vienmēr būs ar nozīmi: false, tad saprast salīdzināšanu jau kļūst daudz vieglāk. Atceramies, ka ja mums būs dota tikai viena vērtība, tai būs nozīme: true. */

/* Piemērā no dzīves par hamburgeriem un frī, mēs varam to nedaudz mainīt. Pimēram nosacījumos nosakot, ka jābūt vismaz kaut kam, lai mēs varētu vienkārši pasē'dēt ar draugiem, parunāt, kad ēdiens nav galvenais. Tādā gadījumā mēs izmantojam operatoru: || - Vai. Vai hamburgeri vai kartupeļi frī. Dotās situācijas pieraksts kodā izskatās šādi: */

const hamburgeris = 3;
const friies = 0;
const kola = 0;

if (hamburgeris || kola || friies) {
	console.log('Mēs paliekam šeit!');
} else {
	console.log('Mēs ejam prom!');
}

/* Šinī piemērā mums ir dots, ka mums ir 3 hamburgeri, bet nav frī un nav  kola, bet pie nosacījumiem mēs nosakām, ka ja kaut viens no nosacījumiem ir patiess, tad tas izpildās un rezultātā: 'Mēs paliekam šeit!' . */

/* Tikko operators: || - Vai atdurās pret patiesību, tas pārtrauc darboties, tas pārtrauc izskatīt citus nosacījumus. */

/* Svarīgi ir atcerēties operatoru &&, || datbības principu. Operators && - Un atdurās pret pirmo nepatieso vērtību, bet operators: || - Vai atdurās pret pirmo patieso vērtību. Tikko tas atdurās pret kādām no šīm vērtībām, tas pārtrauc darboties. Gadījumā ja visas dotās vērtības ir nepatiesas, mums tiek atgriezta pēdējā nepatiesā vērtība. Ja visas vērtības ir patiesas, tad mums arī tiek atgriezta pēdējā patiesā vērtība */

/* Ja mēs pieprasīsim konsolē izvadīt nosacījumu vērtību izmantojot pierakstu: */

console.log(hamburgeris || kola || friies);

/* Šīnī gadījumā mēs konsoles izvadē redzam: 3, pirmo nosacījuma vērtību, aks atbilst patiesībai. Bet ja mums visas vērtības būs nepatiesas, visur būs vērtības; 0, tad mēs konsoles izvadē saņemsim: 0, pēdējo vērtību, aks atbilst patiesībai. Redzam, ka izpildās operatoru && - Un, un operatora: || - Vai darbības loģika. */

/* Izskatīsim vēl vienu piemēru no dzīves. Iedomāsimies, ka mums vajag saņemt atskaites par padarīto darbu no 4 mūsu darbiniekiem. Ja mēs nosakām vairākos mainīgos un pievienojam tiem kādu vērtību, tad loģisko operatoru vērtība jau būs: true, jo kaut mums ir 4 dažādi mainīgie, mums jau ir dota vērtība: 'Done!', kas nozīmē, ka kaut kas jau mums ir. Koda pierakstā tas būtu šādi: */

let johnReport, alexReport, samReport, mariaReport = 'Done!';
console.log(johnReport || alexReport || samReport || mariaReport);

/* Rezultātā mēs redzam: Done! Jo mums ir vismaz viena atskaite, un tas nozīmē, ka nosacīums izmantojot operatoru: || atbilst patiesībai. Par cik mēs visiem dotajiem mainīgajiem pievienojām vērtību: Done,mēs saņemam pēdējo, kas atbilst patiesībai. Operators: || mums atgriež pēdējo patieso vērtību. */

/* javaScript programmēšanas valodā operatorus var kombinēt. Izmantojot operatoru kombināciju. Izskatām to pašu piemēru ar hamburgeriem kafeijnīcā, to papildinot un izmantojot operatoru kombinēšanu. */

const burgers = 3;
const friesi = 3;
const colas = 0;
const nuggets = 2;

if (burgers === 3 && colas === 2 || friesi === 3 && nuggets) {
	console.log('Visi ir apmierināti!');
} else {
	console.log('Mēs ejam prom!');
}

/* Šinī piemērā mums ir doti 4 mainīgie, četras preces. Redzam, ka dažas no tām atbilst  patiesībai, bet dažas neatbilst, ka to vienkārši nav. trīs no tām ir patiesība, jo ir 3 burgeri, 3 porcijas frī un 2 porcijas nageti. Mēs nosakām nosacījumus kombinējot operatorus. Mēs sakām, ka ja ir trīs burgeri un 2 kolas vai 3 frī un vieni nageti, tad mēs paliekam. Bet ja nosacījumi neizpildās, tad rezultātā mēs ejam prom. Šinī gadījumā mums izpildās otrais nosacījums, mēs izvadām konsolē rezultātu: Visi ir apmierināti! . */

/* Pēc prioritātēm pirmā darbība, kas tiks izpildīta būs: salīdzināšana: ===, pēc tam operators: && - Un darbība, un tikai pēc tam izpildīsies operatora: || - Vai darbība. Prioritāšu izpildīšanas tabulu var atrast internetā, kuras darbības tiek veiktas pirmās, kuras pēc tam. To ir ļoti svarīgi zināt, lai mēs saprastu kādu rezultātu mēs saņemsim kombinējot dažādus operatorus. */

/* Ja mēs gribam redzēt katras nosacījuma daļas vērtību, tad mēs izmantojam sekojošu pierakstu: */

console.log(burgers === 3 && colas === 2);
console.log(nuggets && friesi === 3);

/* rezultātā mēs redzam: false, jo viens no nosacījumiem neatbilst patiesībai, un redzam pirmā nepatiesā nosacījuma vērtību. Otrajā izvadē rezultātā mēs redzam: true, jo ums ir gan nageti, gan kartupeļi frī. Mūsu nosacījuma abas vērtības ir patiesas, mēs rezultātā saņemam pēdējo patieso vērtību. */

/* Bet ja mēs gribam redzēt visu kopējo nosacījuma vērtību, tad mēs izmantojam šādu pierakstu: */

console.log(burgers === 3 && colas === 2 || friesi === 3 && nuggets);

/* rezultātā mēs saņemam: 2, jo pēdējā darbība, kas tiek veikta ir: operatora || izmantošana. Mēs saņemam otrā nosacījuma pēdējo patieso vērtību, kas mūsu piemērā ir: nagetu porciju slaits - nagetu vērtība. Varētu domāt, ka mēs salīdzinājām false ar true, bet nē, mums pēdējā darbība, kas tika veikta bija operatora: || - Vai darbība, kas gala rezultātā mums izvadīja pēdējo patieso vērtību. */

/* Ja mēs kādas darbības un to operatorus ieliksim iekavās, tad to darbības - izpildes prioritāte būs augstāka, darbības, kas ir ( ) iekavās tiks izpildītas pirmās, jo JavaScript programmēšanas valodā iekavām ( ) ir visaugstākā prioritāte. Mēs veicam nosacījumu sagrupēšanu, vispirms izpildās vis, tas, kas ir iekavās ( ) un tikai tad pārējās darbības. Bet operatoru darbības princips, prioritātes nemainās, vienkārši vis tas, kas ir ielikts iekavās ( ) izpildās pirmām kārtām. Ja mēs šīnī piemērā kādus nosacījumus ieliksim ( ) iekvās, rzultāts būs pavisam citāds. */

/* Būtiski ir atcerēties - zināt operatora: ! nozīmi, kas noz''imē: noliegumu. Tiešais tulkojums operatoram: ! latviešu valodā ir: ne. Arī šo operatoru var kombinēt ar citiem mums jau zināmiem JavaScript operatoriem. Ja mēs operatoru: ! izmantosim mūsu dotajā piemērā par hamburgeriem un frī, tad tas arī mainīs rezultātu. Bet izskatīsim operatora: ! - ne izmantošanu vienkāršākos piemēros: */

console.log(!0);

/* Mē jau zinām, ka: 0 ir nozīme: false, bet ja pieliekma tai priekšā nolieguma operatoru: !, kas nozīmē, ka mēs skaidri sakām, ka: nulle nav nulle, kas nozīmē, ka tā vairs nav ar vērtību false, jo tā iegūst pretēju vērtību: true. Ja mēs šo piemēru palaidīsim konsolē, mēs saņemsim: true, jo tas darbojās pēc šāda principa atgriežot mums elementa pretējo vērtību. */











