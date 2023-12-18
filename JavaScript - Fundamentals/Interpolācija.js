'use strict';

/* Interpolācija JavaScript programmēšanas valodā nozīmē pareizu vairāku elementu, mainigo savienošanu vienā rindā. Reāls piemērs no dzīves, kad mums vajag vairākus elementus savienot vienā: url adresē. Vēl pēc vecā JavaScript programmēšanas valodas standarta mēs izmantojām pierakstu, savienojot elementus, liekot zīmi: + mainīgā nosaukumes, kas šajā piemērā ir: category. Kad mums ir divi vai trīs elementi, kurus vajag savienot vienā rindā, mums problēmu nav, bet tās rodas, kad mums vajag savienot daudzus elementus, jo mums veidojās ļoti garš un ne vienmēr saprotams koda pieraksts. Un turklāt vēl viens būtisks mīnus, ka, ja mums ir ļoti daudz elementi, kurus vajag savienot mūsu kods paliek ļoti garš un izskatās neglīti. Piemēra pieraksts pēc vecā standarta: */

const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4');

/* Pareizs pieraksts izmantojot jaunāko E26 JavaScript standartu. Lai lietotu pareizu Interpolācijas pierakstu mums ir jāievēro viens ļoti būtisks nosacījums. Mēs visus elementus, kurus vēlamies savienot vienā rindā liekam `` atpakaļejošās pēdiņās. Tas ir ļoti svarīgi, jo, ja mēs lietosim parastās '' pēdiņas jeb "" dubultpēdiņas interpolācija - elemntu savienošana nenotiks. Otrs svarīgs nosacījums ir tas, ka mēs neizmantojot atstarpes liekam zīmi ${ } iekavās rakstot mainīgā nosaukumu, kura vērtību vēlamies savienot vienā rindā. Ja mums vajag savienot daudzus elementus, mēs neizmantojot atstarpes uzreiz rakstām elementus, kurus gribam savienot. Atstarpes mēs neizmantojam tikai tādā gadījumā, ja mums rezultātā vajag iegūt: url adresi, bet citos gadījumos, kad mums vajag iegūt kādu rindiņu ar tekstu un mainīgo vērtībām mēs liekama tsarpes. Interpolācijas izmantošanas priekšrocības: mums ir īsāks, kvalitatīvāks kods. Pareiza Interpolācijas - savienošanas izmantošana pēc jaunākā E26 standarta: */

console.log(`https://someurl.com/${category}/4`);

/* Izpildot konsoles izvadi mēs redzam, ka visi elementi ir savienoti vienā url adresē, pieraksts ir pareizs, interpolācija - vairāku elementu savienošana ir izpildīta. */

/* Cits piemērs, kur tiek izmantota interpolācija pēc jaunākā E26 standarta: */

const user = 'Zane';
alert(`Sveicināti, ${user}!`);

/* Mēs atverot interneta pārlūkā mūsu skriptu redzam brīdinājuma lodziņu, kurā ir viena rindiņa un mums ir rakstīts: Sveicināti, Zane! Šādi mēs varam dažādos veidos izmantot interpolācijas - vairāku elementu savienošanas priekšrocības. */


