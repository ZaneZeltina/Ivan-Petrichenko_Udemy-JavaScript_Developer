/* eslint-disable no-unused-vars */
'use strict';

/* Rakstot mainīgā nosaukumus, funkciju nosaukumus, mums tie jāveido loģiski, ai jebkuram būtu saprotams, ko mēs darām, ar ko mēs to darām, ko mēs iegūstam rezultātā. Mums ir skaidri jānorāda darbība rezultāts, kuru vēlamies iegūt izpildot kādu darbību. */

const a = 5000;
const b = 4000;

console.log('Automašīnas piekabes platums: ' + a + ', garums: ' + b);

/* Šāds pieraksts nosakot mainīgos nav loģiski noformulēts, jo ja mums būs garš kods, tad mums nebūs skaidrs, kas tie ir par mainīgajiem. Tehniski pierakstīts pareizi, sintakse arī ir ievērota, bet mainīgo nosaukumi ir iedoti pavirši, un ja kāds lasīs mūsu kodu, tad nesapratīs, kas te notiek, un ko katrs mainīgais nozīmē. Tādēļ sekojoši pareizs pieraksts ir izmantot loģiskus mainīgo nosaukumus, tā, lai uzreiz ir skaidrs, ko tie apzīmē - to nozīme. Loģisks pieraksts šim piemēram būtu šāds: */

const wehicleBodyWidth = 5000;
const wehicleBodylenght = 4000;

console.log('Automašīnas piekabes platums: ' + wehicleBodyWidth + ', garums: ' + wehicleBodylenght);

/* Ja mums ir tehnisks apraksts, kad nav jāveido konkrēti nosaukumi mainīgajiem un funkcijām, kad mēs aprakstām, kādus mazus elementus, kad nav īpaši būtiski to nosaukumu loģika, tad mēs varam izmantot vienkāršus nosaukumus: ar atsevišķiem burtiem jeb vispārīgas nozīmes vārdiem. Bet ko līdz mēs aprakstām kaut kādu elementu, kur ir būtiski saprast tā nozīmi - mēs rakstām loģiskus, atbilstošus, no daudziem vārdiem sastāvošus nosaukumus. Daži piemēri, kad mēs varam izmantot nekonkrētus nosaukumus: */

['Zane', 'Līvija', 'Aivars', 'Ivars'].map();

/* Ja mēs aprakstām kādu datu masīvu, bet pēc tam darbojamies ar to izmantojot kādu metodi, tad nav būtiski kā mēs nosaucam katru elementu. Mēs varam tos nosaukt: a, b, item, employ utt. */

/* Kad mēs pieprasām no servera kādus datus mēs izpildam pieprasījumu: request, un mums nav svarīgi ar kādiem nosaukumiem mēs saņemsim datus. Tiem būs nekonkrēti nosaukumi kā: data, response utt. */

/* Mēs varam arī mainīgo nosaukumus un vērtības rakstīt vienā rindā, bet tikai tad, ja to nav daudz. Bet laba koda pieraksta prakse nosaka to, ka mēs katra mainīgā, funkcijas nosaukumu rakstām jaunā rindā, atdalot ar komatu. Jo ja mums būs daudz mainīgie, tad tos sarakstot vienā rindā mūsu kods kļūs nesaprotamāks, nekārtīgāks, grūtāk lasāms. */

/* Svarīgi ir ievērot arī nosaukumu veidošanas stilu, lai tie būtu vienoti, viena tipa, vienas loģikas. Skatoties uz doto piemēru, lai lasot kodu, lasot mainīgo nosaukumus būtu skaidrs, ka mēs aprakstām konkrētas automašīnas piekabes garumu un konkrētas automašīnas piekabes platumu. Ja mēs esam iesākuši rakstīt nosaukumus pēc šādasloģikas, tad mums tas ir jādara visā kodā. Tā saucās - sintakses stila ievērošana. */

/* Kad mēs rakstām kodu ir svarīgi ievērot vienotu nosaukumu rakstības stilu rakstot mainīgo, funkciju nosaukumus. Populārākais un visbiežāk lietotais stils ir: camelCase stils. Tas ir tad, kad nosaukums rakstās ar mazo burtu, bet katrs nākošais vārds rakstās cieši blakus un ar lielo burtu. */

/* JavaScript programmēšanas valodā ir vēl citi rakstības stili. Viens no tiem ir: snake_case, kad nosaukumi tiek rakstīti ar mazajiem burtiem vārdus atdalot ar apakšpasvītrojuma līniju: _ . Vēl viens stils ir: UPPER_SNAKE_CASE, kad nosaukumi tiek rakstīti vis ar lielajiem burtiem, vārdus atdalot ar apakšpasvītrojumu: _ . Cits stils ir: kebab-case, kad nosaukumi tiek rasktīti viss ar mazajiem burtiem, bet vārdi tiek atdalīti ar domuzīmi: - . Vēl viens nosaukumu rasktības stils ir: PascalCase, kad gan pirmais vārds, gan katrs nākošais rakstās šakot ar lielo butu, bet vārdi rakstās cieši kopā. */

/* Parsti citādus nosaukumu rakstības stilus, kas nav populārākais: camelCase stils izmanto, lai noteiktu konstantes izmantojot atslēgvārdu: const - kad ir stingri deklarēts mainīgais, kura vērtību mēs nedrīgstam mainīt. Daži piemēri: */

const COLOR_RED = '#F00';

/* Ja kāds programmētājs ir pierakstījis nosaukumu izmantojot nestandarta nosaukumu pierakstu stilu, mēs nekādā gadījumā nedrīgstam to mainīt, jo mēs varam sabojāt visu kodu. Ja kāds tā ir uzrakstījis, tad mēs to ievērojam, neaiztiekam. Tas ir nerakstīts likums. Mēs mainīgo nosaukumus varam tikai izmantot, lietot kādās darbības, bet pašus nosaukumus nedrīgstam mainīt, pat ja tie nav uzrakstīti kā konstantes, bet ir uzrakstīti izmantojot atslēgvārdu: let.  */

/* Kādā citā kodā mēs varam sastapt uzrakstītus mainīgo nosaukumus izmantojot nenoteiktu stilu. Arī šādi pierakstītus mainīgo nosaukumus mēs nedrīstam mainīt, bet varam izmantot koda darbību pierakstā. Nekonkrētus mainīgo nosaukumu rakstības stilus atbalsta un uztur paši programmētāji, jo tie nav nekur stingri noteikti. Piemērs no reāla projekta: . */

const _apiBase = 'https://gateway.marvel.com:443/v1/Public/';
const _apiKey = 'apikey=d4eecb0c66debdfae4';

/* JavaScript programmēšanas valoda ir augsta līmeņa programmēšanas valoda, un tādas zema līmeņa darbības kā rakstīšana atmiņā - datora atmiņā notiek automātiski. Automātiski tiek noteikts cik atmiņas tiks patērēts, cik pēc atmiņas lieluma ir katrs koda fails. Ja mums ir mūsdienīgs dators mums nav jādomā par koda garumu, un jāuztraucās, cik daudz atmiņas tas aizņems. JvaScript programmēšanas valoda pati izpilda atmiņas optimizāciju, un ja mums ir nepieciešams rakstīt kādu koda gabalu, tad mēs droši to varam darīt. */





