'use strict';

/* Sodien mēs runāsim par asinhronu uzdevumu izpildi un mijiedarbību starp lietotāju un serveri. Tā ir tehnoloģija: AJAX par kuru tiek daudz runāts. Iedomāsimies to ar piemēriem: Mums ir interneta veikals. Pats uzskatāmākais piemērs ir interneta veikala preču filtrs, ko mēs izmantojam, kad meklējam kādu preci. Izmantojot preču filtru mēs redzam tikai nepieciešamāko informāciju. Mums nav nepieciešams katru reizi atlasot kādu preču meklēšanas filtru pārlādēt visu lapu, mums atjaunojas tikai daļa no lapas. Izmantojot šādu pieeju mēs mazinām servera slodzi. */

/* Bet šādai pieejai ir arī savi trūkumi. Pirmais: vienmēr jābūt ieslēgtam JavaScript, jo savādāk nekas nedarbosies. Otrkārt: Jābūt labam interneta savienojumam, jo savādāk var nekorekti strādāt datu attēlošana, jo kaut kas var neielādēties, uzkārties. Līdz 2017 gadam bija problēmas ar SEO optimizāciju. Meklēšanas sistēmas nespēja atpazīt SEO sistēmu, bet tagad šī problēma ir risināma. */

/* Tagad izskatīsim tehniskās daļas. AJAX, tā ir: Abviatūra no asinhrona JavaScript un XML. */

/* Lai mūsu web lapa prastu darboties ar serveri, mums ir vajadzīgi http pieprasījumi, kurus mēs sūtīsim uz serveri. Mēs varam pieprasīt datus, sūtīt datus. Lai tas notiktu asinhroni, lai mums nevajadzētu katru reizi pārlādēt web lapu mums ir vajadzīga tehnoloģija: AJAX. To mēs varam realizēt dažādos veidos. Šinī un nākamās lekcijās mēs izskatīsim visas AJAX izmantošanas metodes, ieskaitot arī vecākas versijas, jo tās vēl ir sastopamas projektos, mēs iemācīsimies sākot ar vecākajām versijām līdz pašām mūsdienīgākajām - modernākām pieejām. Izskatīsim arī http pieprasījumus un kā tie realizējās. Izskatīsim visas tā īpatnības. Izskatīsim to ar nelielu piemēru, izstrādājot valūtu kursa kalkulatoru, kur tekošais valūtas kurs mums ienāk no servera. Mēs realizēsim pirmo AJAX izmantošanas metodi, kas tiek realizēta izmantojot XML objekta http pieprasījumu. Dotajā momentā šāda pieeja vairs nav aktuāla, bet mums tā ir jāzin, jo tā vēl ir sastopama daudzos projektos. */

const inputRub = document.querySelector('#rub'),
	inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	request.open('GET', '../js/current_1.json');
	request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
	request.send();

	request.addEventListener('load', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = 'Kaut kas nogāja greizi!';
		}
	});

});

// Metodes:

// open();
// setRequestHeader();
// send();

// Īpašības: 

// status;
// statusText;
// response;
// readyState;

// Notikumi:

// onreadystatechange;
// load;

/* . */



