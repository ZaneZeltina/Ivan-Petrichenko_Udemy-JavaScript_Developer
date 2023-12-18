'use strict';

/* Šinī mācībstundā mēs uzzināsim kā mēs varam pielāgot savu kodu - script, lai tas pareizi ielādējās - lai tas būtu pielāgots katram interneta pārlūkam. */

/* Ļoti svarīgi ir ievērot likumu, ka HTML dokumentā script - JavaScript failus mēs pieslēdzam tikai iekš tega: body beigām. Tos nekādā gadījumā nedrīgst pieslēgt HTML dokumenta sākumā, piemēram iekš: head, jo mums nav vēl ielādējusies HTML lapa, kad tiek jau pildīts JavaScript kods. Rezultātā lapa ilgi ielādējās, jo JavaScript fails bloķē HTML lapu. Un ja, aiz javaScript faila mums ir elementi, kas tiek izmantoti JavaScript failā, tad mēs iegūstam kļūdu. Atceramies, ka JavaScript failus mēs pieslēdzam tikai HTML dokumenta beigās. */

/* HTML dokumentā, kad mēs pievienojam JavaScript failu iekš tega: script mēs varam izmantot HTML atribūtu: defer, kas ļauj mums fonā ielādēt javaScript failu, netraucējot HTML lapai. Mums ielādējās HTML lapa - dokuments, bet fonā darbojās JavaScript fails. Ja mēs izmantojam atribūtu: defer, tad mēs varam JavaScript failu pieslēgt tega: body sākumā. Šādu skripta pieraksta varientu: ar atribūtu: defer mēs varam pat pieslēgt iekš tega: head. Un netiks traucēta HTML lapas darbība, un nebūs kļūdas. */

/* Šādi atliktie skripti - JavaScript faili. Tie ir faili, kas ielikti izmantojot HTML atribūtu defer. Vēl viena būtiska defer priekšrocība ir tā: ka, ja mums būs vairāki JavaScript faili, tie ielādēsies viens aiz otra, izpildīs savu darbu tikai tad, kad iepriekšējais JavaScript fails būs ielādējies. */

/* Bet ja ieliksim mūsu JavaScript failus iekš HTML dokumenta tega: head, tad izlaižot mūsu lapu cauri testiem, piemēram: googlespeed, mums tests vienalga liks JavaScript failus pārvietot zemāk, jo lai arī nedaudz, pat ar visu atribūtu: defer, tie tomēr bremzē lapas ielādi. */

/* Un arī ikdienā - reālajos projektos - visur Javascript faili tomēr tiek pieslēgti HTML dokumenta tega: body beigās. */

/* Ir vēl viens HTML dokumenta tega: script atribūts: async. izskatīsim kādos gadījumos tas tiek izmantots. Izmantojot atribūtu: async mēs liekam Javascript failiem kļūt neatkarīgiem. Tie negaida, kad ielādēsies HTML lapa, tie negaida citu JavaScript failu ielādi, tie darbojās paši pa sevi. SĒit darbojās princips: kas pirmais ielādējās, tas arī darbojās. Parastos javaScript failos, tos pieslēdzot netiek izmantots atribūts: async. Bet ir divi JavaScript failu veidi, kad šis atribūts tiek izmantots: metriku failu un skaitītāju faili. Jo tiem vienalga, kad izpildīt savu darbību, jo tiem galvenais noķert momentu, kad lietojās ir iegājis lapā. Tādēļa rī ar atribūta: async izmantošanu jābūt ļoti uzmanīgiem. */

/* Pievienot JavaScript failu iekš HTML faila mēs varam arī izmantojot JavaScript. Pieraksts izskatās šādi: . */

function loadScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false;
	document.body.append(script);
}

loadScript('js/script.js');
loadScript('js/some.js');

/* izmantojot ša'du koda pierakstu, mēs izveidojam funkciju, kas pievienos JavaScript failus HTML dokumentam. Iekš tās nosakot, ka JavaScript faili drīgst ielādēties tikai cits aiz cita, un tikai tad, kad HTML lapa ir ielādējusies. Lai to panāktu mēs rakstām: sript.async = false, kas neļauj javaScript failiem lādēties katram pa sevi. Tālāk izsaucot funkciju mēs varam pievienot vairākus JavaScript failus. Un tiem būs stingra ielādes kārtība, tie ielādēsies viens aiz otra. */

