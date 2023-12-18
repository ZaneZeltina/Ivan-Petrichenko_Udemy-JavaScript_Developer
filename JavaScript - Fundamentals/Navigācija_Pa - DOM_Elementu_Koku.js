'use strict';

/* DOM: Document Object Module. Musm ir jāprot mainīt lapas elementus, mainīt to klašu nosaukumus, mainīt to izskatu izmantojot JavaScript kodu. */

/* lai vērsto pie HTML dokumenta tega: body ir jāuzraksta pa visam vienkārša metode: . */

console.log(document.body);

/* Mēs redzam, ka mums pārlūka konsolē parādās: body ar visu tā saturu. */

/* Tā pat mēs varam izvadīt konsolē arī citu tegu saturu, piemēram: head. */

console.log(document.head);

/* lai pārlūka konsolē mēs redzētu visu HTML dokumenta saturu, mēs pierakstām šādu metodi: . */

console.log(document.documentElement);

/* lai mēs redzētu kāda HTML dokumenta tega ielikto struktūru, izmntojam metodi: childNodes. Izpildot šādu metodi, mēs konsolē iegūstam datu masīvu ar četriem elemetiem. Atverot to, mēs redzam visu tā saturu, kur jau ir astoņi elementi. Tas ir tādēļ, ka mēs katru reizi, kad tiek pāriets uz jaunu rindu, tiek parādīts: text. Kaut gan hTML dokumentā mēs to neredxam. */

console.log(document.body.childNodes);

/*Kāda ir atšķirība starp DOM elementiem un DOM mezgliem? Katra īpašība, kas ir HTML dokumentā būtībā ir DOM mezgls, bet ne katrs DOM mezgls ir elements. Tas ko mēs redzam HTML dokumentā ir DOM elements, bet tas, ko mēs neredzam ir DOM mezgls, piemēram pārnese jaunā rindā. */

/* Tālāk izskatīsim metodes ar kuru palīdzību mēs varam pārvietoties pa mūsu DOM elementu koku: firstChild, kas ļauj mums iredzēt konkrēta tega pirmo ielikto elementu un: lastChild - pēdējo ielikto eleementu. */

console.log(document.body.firstChild);
console.log(document.body.lastChild);

/* izpildot šādas metodes mēs redzam, ka pirmais mums ir pārnese jaunā rindā, bet pēdējais: script, iekš kura ir pieslēgts mūsu JavaScript fails. */

/* Ievērojam, ka mēs līdz šim darbojāmies ar galveno, vecāko kopējo tegu. Bet tagad apskatīsim kā mēs varam izmantot jebkuru HTML dokumenta elementu - tegu. Kā mēs varam strādāt ar tiem: . */

console.log(document.querySelector('#current').parentNode.parentNode);

/* Izmantojot šādu pierakstu, mēs iegūstam konkrētu elementu, un izmantojot aiz elementa nosaukuma () iekavām metodi: .parentNode mēs rezultātā redzam, konkrēta elementa galveno, ārējo elementu - tegu, kas iekšā sevī satur mūsu pieprasīto elementu. Lai mēs varētu iegūt vēl augstāk stāvošu elementu mums metode: .parentNode ir jāieraksta divas reizes. */

/* HTML dokumenta pēdējā piektajā standartā parādījās iespēja iekš tega izmantot: data-current un citus dažādus datu tipus. Tas noder, lai mums katram elementam - tegam nevajadzētu rakstīt dažādus id nosaukumus. Ja mēs gribam kādam tegam - elementam noteikt konkrētas īpašības, iezīmes pēc kurām mēs pēc tam varēsim orientēties. Atribūtam: data ir dažādas iespējas, bet sākums visur ir vienāds: data- ...un dažādas izmantošanas iespējas. Pie data- ...atribūtu vērtības mēs varam norādīt dažādus datu tipus, ne tikai boolean tipa datus, bet arī Number, String datu tipus. izmantojot datu atribūtus, mums ir ļoti vienkārši orientēties hTML dokumentā. Un mēs tos izmantosim ļoti bieži strādājot iekš JavaScript koda. */

/* Sāksim izmantot - strādāt ar HTML dokumenta datu atribūtiem, sāksim tos izmantot: . */

console.log(document.querySelector('[data-current="3"]').nextSibling);

/* Lai metode nostrādātu ir jāievēro pareiza pieraksta sintakse. Ja mēs gribam piekļūt data atribūtiem, mums iekš metodes: querySelector() iekavām iekš '' pēdiņām jāliek [] iekavas, kur rakstām konkrētu datu atribūta nosaukumu, un tā vērtību liekam "" pēdiņās. Izpildot šādu kodu pārlūka konsolē mēs redzam visu HTML dokumenta rindiņu, kur ir iekšā konkrētie data atribūti un vērtība. Bet, ja mums vajag iegūt nākošo HTML dokumenta elementu, tad mēs aiz pirmajām ) aizverošajām iekavām liekam punktu un rakstām metodi: nextSibling. Izpildot šādu kodu mēs redzam, ka mēs iegūstam DOM mezglu: text - pārnesi jaunā rindā. */

/* izmantojot šīs komandas mēs visbiežāk iegūstam: DOM mezglus - to, ko mēs neredzam HTML dokumentā. Tālēļ šīm komandām ir analogi, lai mēs iegūtu to, ko vēlamies redzēt - elementus. Lai mēs neiegūtu DOM elementu mezglus. Izskatīsim analogas komandas: . */

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

/* izpildot līdzīgu, bet analogu metodi: .nextElementSibling mēs iegūstam nākošo elementu. Atverot pārlūka konsoli, mēs vairs neredzam DOM elementa mezglu, bet redzam DOM elementu. Tā pat strādās arī metode: previusElementSibling, mēs iegūsim iepriekšējo elementu. */

console.log(document.querySelector('#current').parentElement);

/* izmantojot metodes: parentNode analogo metodi: parentElement, mēs tieši iegūsim elementu, vienu līmeni augstāk. Iegūsim augstākstāvošo - galveno elementu, iekš kura ir dotais elements. */

/* Tā pat arī metodēm: firstChild un lastChild ir analogas metodes, kasļauj mums iegūt tieši DOM elementus, nevis DOM mezglus. */

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

/* Redzam pārlūka konsolē, ka mēs iegūstam pirmo ielikto elementu iekš tega: body, un pēdējo ielikto elementu. */

/* Metodei: childNode nav īsti analogas metodes, bet ir citi veidi, kā iegūt vēlamo rezultātu. Lai to izdarītu mums ir jāizmanto metode: forEach(), kas ļauj mums pārskatīt visus elemetus un tos izvadīt. Bet ir arī gadījumi, kad mēs nevaram izmantot forEach metodi. kad mēs nevaram to izmantot mums ir jāizmanto konstrukcija: for(of). Izmantojam ciklu: for, kā arī šeit mums lieliski noder metodes: break un continue. Izskatīsim to: . */

for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}

/* izpildot šādu kodu, mēs redzam, ka no HTML dokumenta elementa: body ir pazuduši visi DOM mezgli. Mēs redzam tikai DOM eleementus. Izmantojot šādu konstrukciju mēs esam ieguvuši vēlamo rezultātu. */












