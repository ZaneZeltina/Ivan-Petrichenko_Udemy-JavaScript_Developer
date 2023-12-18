'use strict';

/* Šinī mācību stundā mēs apvienosim zināšanas par metodi: Promise() un  serveru izmantošanu. */

/* Mēs uzzināsim par tehnoloģijas: Fetch API izmantošanu. */

/* API: Application Programming Interface (API). Latviski: Lietojumprogrammas saskarsme. */ 

/* API ir datu kopums un iespējas, kas mums dod iespēju izmantot kādus gatavus risinājumus. Aplikācijas, programmas. */

/* Food-Project mēs jau izmantojām API, strādājot ar DOM koku, kur izmantojām DOM iebūvētās metodes: querySelector() utt. */

/* Jau gatavs API risinājums ir: Google Maps API, kur Google ļauj mums strādāt ar viņu kartēm. Internetā ir vēl ļoti daudz citi jau gatavi API risinājumi, kurus mēs varam izmantot savā darbā. */

/* Mēs katru dienu izmantojam API savā mobilajā telefonā, piemēram, lai piekļūtu iestatījumiem, kamerai utt. */

/* Bet šodien mēs strādāsim tieši ar: Fetch API, kas ir jau iebūvēts interneta pārlūkā. Tā mums ļauj mijiedarboties ar serveriem un tajā tiek izmantoti: Promise(). Izmantosim iegūtās zināšanas par serveriem un Promise(), lietosim tos abus kopā. */

/* Mēs izmantosim jau gatavu API risinājumu no interneta, kas saucās: JSON Placeholder. */

/* Izskatīsim Fetch API izmantošanu, izmantojot serveri. izskatīsim to ar nelielu koda piemēru: . */

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({ name: 'Zane' }),
	headers: {
		'Content-type': 'application/json'
	}
})
	.then(response => response.json())
	.then(json => console.log(json));


/* Tālāk strādāsim savā projektā: Food-Project izmantojot metodi: Fetch() API kopā ar serveri. */