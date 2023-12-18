'use strict';

/* Praktiski uzdevumi par cikliem. Cikla iekš cikla izmantošana. Uzdevums: Izmantojot cikls iekš cikla metodi uzzīmēt trijstūri, izmantojot zvaigznītes, uzzīmēt to sešās rindiņās, tā, lai katrā jaunā rindā būtu par vienu: * zvaigznīti vairāk, un lai katra rindiņa to attēlojot sāktos jaunā rindā. Ir dots piemērs, kādam jāizskatās trijstūrim, kad mēs koda pierakstu palaidīsim darbībā izmantojot konsoli. Mums ir jāuzraksta tāds kods, lai dators uzzīmētu šādu trijstūri:

*
**
***
****
*****
******
. */

/* uzdevuma atrisinājums: */

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}
	result += '\n';
}

console.log(result);

/* Uzdevuma atrisinājuma piemēr skaidrojums: Mēs nosakām mainīgo izmantojot atslēgvārdu: let, dodam tam nosaukumu: result, piešķiram tam tukšas rindas vērtību, jo pagaidām tā ir tukša, bet ta izpildot kodu aizpildīsies. Tālāk deklarējam stingru mainīgo izmantojot atslēgvārdu: const, nosakot stingru garumu, cik garai jābūt rindiņai, dodam vērtību, aks mūsu gadījumā ir: 7. Neaizmirstam risinājuma beigās pieprasīt konsoles izvadi izvadot tajā mainīgo: result. Lai JavaScript programmēšanas valodā, kādu elementu, darbību paŗnestu jaunā rindā, mēs izmantojam simbolu '\n', kas dod mums iespēju, katru reizi kādu darbību sākt jaunā rindiņā. Rindas pārnešanu rakstām tur pat iekš { } iekavām. Tālāk sākam rakstīt cikla iekš cikla nosacījumus. Nosakām mainīgā: i vērtību, nosakām cik reizes izpildīsies galvenais cikls, šīnī gadījumā mēs sakām, ka tas izpildīsies mazāk nekā lenght vērtība, tas izskatās šādi: i < lenght;. Tālāk nosakām trešo nosacījumu, ka katru reizi izpildot šo cikli mainīgā: i vērtība pieaugs par +1. Sākam rakstīt ielikto ciklu, kas būs atbildīgs tišii par to, lai mums veidosies zvaigznītes. Rakstām ieliktā cikla pirmo nosacījumu, ka mainīgā: j vērtība ir: 0. Rakstām otro nosacījumu, ka mainīgais: j < i, kas nozīmē, ka ieliktā cikla mainīgais; j orientējās uz galvenā cikla mainīgo: i. Tiešs skaidrojums būtu, ka mainīgais: j ir mazāks par mainīgo: i. Pie trešā nosacījuma liekam izpildot ciklu katru reizi mainīgā: j vērtību palielināt par: + 1. Pēc nosacījumu pieraksta atveram { } iekavās, iekavās liekot mainīgo: result veidot zvaigznītes += '*';. Meaizmirstam pirms zīmes: = pielikt zīmi: + . Palaižot kodu konsolē, mēs redzam, ka mēs esam vsu pareizi pierakstījuši, un mums konsolē uzzīmējās tieši tāds trijstūris kā bija prasīts uzdevumā. */

/* Konsoles izvadē mēs redzam tieši tādu trijstūri kā bijām vēlējušies:

*
**
***
****
*****
******
. */
