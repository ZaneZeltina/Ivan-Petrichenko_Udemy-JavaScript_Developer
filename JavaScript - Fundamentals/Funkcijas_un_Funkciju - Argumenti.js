'use strict';

/* Kapēc ir svarīgi izprast funkcijas un funkciju argumentus? . */

/* Ja mēs gribam veiklt kādu darbību vienu reizi, tad mēs varam neizmantot funkciju pierakstu, bet, ja mēs kādu darbību gribam atkārtot, veikt vairākkārt, tad mēs izmantojam funkcijas. */

/* Funkcija, katru reizi to izmantojot, izvada citādu vērtību. Kā piemēru varam iedomāties: valūto kalkulatoru, kur katru reizi ievadot kādus datus, mums tiek izdots attiecīgs rezultāts. */

/* Izskatīsim dažus funkciju pieraksta, izmantošanas piemērus: */

const usdCurr = 20; 
const eurCurr = 32;

function convert(amount, curr) {
	console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

/* Mēs izveidojam jaunu funkciju: convert, ( ) iekavās rakstām tās argumentu, kas mūsu piemērā ir amount, liekam tai izpildīt konsoles izvadi ( ) iekavās rakstot valūtas kursa aprēķināšanas darbību,kas mūsu gadījumā ir: 28 reizināts ar summu, kuru vēlamies samainīt. Izsaucam funkciju, tās ( ) iekavās rakstot: 500., summu, ko mēs vēlamies saminīt. Palaižot šādu kodu mēs konsolē redzam rezultātu šīs funkcijas darbībai, redzam: 14000 . Jeb kura funkcija sākumā nezin, ar kādām vērtībām tā strādās, jo tā tiek noteikta tikai pie funkcijas izsaukšanas. Mēs varam arī pirms funkcijas pieraksta noteikt kādu mainīgo un to izmantot funkcijā. */

/* Bet, ja mēs gribam, lai mūsu funkcija būtu universāla, tad rakstām kādu nenoteiktu funkcijas argumentu.Šinī gadījumā aiz amount, liekam komatu un rakstām curr.Pēc tam funkcijas darbībā mēs šo nenoteikto argumentu varam izmantot, kā šinī piemērā.Funkcijas darbība balstās uz ienākošajiem datiem.Ienākošie dati ir tie, kurus mēs norādām pie funkcijas izsaukšanas() iekavās.Šādi mēs funkciju padarām universālu, neatkarīgu no kādām noteiktām vērtībām. */

/* Kad mums ir funkcijā ieliktas stingras - noteiktas vērtības, mums ir daudz grūtāk izsekot tās darbībai - vai tā darbojās pareizi. Un ja mums funkcijas darbības ir ļoti daudz, tad mums vēl grūtāk izsekot tām līdzi. */

/* Mums tanī pašā valūtu konevrtatorā - kalkulatorā var būt daudz dažādi valūtu kursi. Mēs varam pirms funkcijas, izmantojot stingro mainīgo deklarēšanu visus tos aprakstīt. Lai jaunie noteiktie valūtu kursi darbotos, mums tie jānorāda pie funkcijas izsaukšanas, rakstot funkcijas nosaukumu un iekavās ( ) rakstor tā kursa mainīgā nosaukumu, kuru vēlamies izmantot. Pirms tā varam arī rakstīt kādu konkrētu vērtību, kuru vēlamies samainīt. Mūsu gadījumā vērtība, kuru vēlamies mainīt ir: 500. */

/* Paližot kodu darbībā, mēs konsoles izvadē redzam, ka funkcija strādā, un mēs iegūstam divus rezultātus: 10000, 16000. */

/* Izmantojot šādu universālu pieeju funkciju pierakstā - izmantošanā mēs izpildām nosacījumu: DRY, kas nozīmē: Dont Repeat Yourself - neatkārto pats sevi. Jo mums nav nepieciešams katru reizi rakstīt jaunas funkcijas, lai izpildītu vienu un to pašu darbību, jo mēs uzrakstām vienu funkciju, kas ir universāla, bet ja gribam to lietot ar dažādām vērtībām, tad pirms tās deklarējam dažādus mainīgos un neaizmirstam arī katru reizi izsaucot funkciju norādīt šos mainīgos. Šādi darbojās princips DRY. Un ja mēs viena veida darbību rakstām desmit dažādās funkcijās, tad tas skaitās slikts, nekvalitatīvs kods. Tā ir slikta pieeja, jo programmēšanā laba prakse ir tā: kad kods pierakstīts pēc iespējas īsākā pierakstā, ar loģiskiem - atbilstošiem nosaukumiem, pēc iespējas vienkāršāk. Jo tādu kodu pēc ilga laika mēs varam viegli lasīt, orientēties tajā, kāa rī, ja mūsu kods nonāk pie citiem izstrādātājiem, tiem arī ir vieglia r to strādāt. Šī ir laba programmēšanas prakse. */