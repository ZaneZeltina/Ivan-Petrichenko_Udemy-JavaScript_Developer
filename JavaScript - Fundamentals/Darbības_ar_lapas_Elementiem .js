/* eslint-disable no-unused-vars */
'use strict';

const box = document.getElementById('box'),
	buttons = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'),
	oneHeart = wrapper.querySelector('.heart');

/* Ievērojam, ka ne vienmēr mums izmantojot kādu metodi ir jāvēršās caur: document. Jo kā augstāk uzrakstīts mainīgais: wrapper, mēs pēc tam uzreiz, ja strādājam ar: wrapper elementiem, varam vērsties caur to - caur mainīgo: wrapper, jo mums nav vairs nepieciešamības katru reizi turpināt vēršanos caur: document. Bet šāda pieeja strādā tikai tad, ja elements satur citus elementus, ar kuriem mēs gribam strādāt, ja tie atrod iekš sevis tādus nosaukumus, klases, kā mēs esam uzrakstījuši. */

console.dir(box);

/* ja mēs gribam uzzināt visas iespējamās metodes un īpašības kādam HTML dokumenta elementam, tad mums ir jāizpilda komanda: console.dir, () iekavās rakstot elementa nosaukumu. Izpildot šādu darbību mūsu elements kļūst par objektu, un iekš tā ir visas metodes, ko tas var lietot un visas tā īpašības. Iekš dotā objekta ir vēl viens objekts - objekts objektā, kas norāda CSS stilus. Tas nozīmē to, ka mēs varam mainīt kāda elementa stilus. Tie ir tādi paši stili - īpašības kā mēs rakstām atsevišķā CSS failā. Bet šeit JavaScript tie saucās: Elementa iekšējie stili. */

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.height = '100px';

/* Lai mainītu silus, mums ir jāraksta elementa nosaukums, aiz punkta rakstot style, atkal punkts, un tad mēs redzam visus iespējamos CSS stilus, bet JavaScript tie nav atdalīti ar zīmi: - , bet gan tie ir sarakstīti cieši kopā, katrs nākošais vārds sākās ar lielo burtu. Tas ir: camelCase pieraksta stils. Tālāk liekam piederības zīmi, liekam '' pēdiņās, tajās rakstot stila vērtību. Ja mēs vēlamies pie kādas īpašības kā tās vērtību noteikt skaitli, mums tas ir jāraksta '' pēdiņās, kā String dati. */

/* Elementa iekšējie stili pēc to izpildījuma prioritātes ir visaugstāk. Un nav svarīgi, kas rakstīts CSS failā. JavaScript rakstītie stili izpildās pirmie. */

buttons[1].style.borderRadius = '100%';

/* Mēs varam arī mainīt stilus konkrēti vienam elementam, pat ja tie ir vairāki, ar vienādu nosaukumu. Rakstot nosaukumu, uzreiz aiz tā liekot [] iekavas, kurās rakstām indeksu, kuram elementam vēlamies mainīt stilus. Atceramies - datori skaita no nulles. */

/* Daudzi skolnieki, kad uzsāk mācības, pieļauj vienu un to pašu kļūdu: circles.style.backgroundColor = 'red'. Mēs nevaram šādi pierakstīt konkrētā elemeta stilus, jo circles mums ir datu masīvs - pseidomasīvs. Lai mūsu stils darbotos, mums ir jāraksta elementa ideks. Pierakstam izmantojot indeksu būtu jābūt šādam: */

// circles[0].style.backgroundColor = 'red';
// circles[0].style.height = '100px';
// circles[0].style.width = '100px';
// circles[0].style.borderRadius = '50%';

/* Ja mēs vēlamies uzreiz vienam elementam uzrakstīt vairākus stilus, tad mums ir jāizmanto metode: cssText. Jo citādi, kā augstāk piemērā nav pārāk ērti šādi katru reizi rakstīt. Un tas nav arī pareizākais. Pareizi un loģiski būtu rakstīt izmantojot metodi: cssText, kur mēs jau varam rakstīt parastajā CSS stilā, bez caleCase. Pareizais, īsākais pieraksts būtu šāds: */

circles[0].style.cssText = 'background-color: red; height: 100px; width: 100px; border-radius: 50%';

/* Ja mēs gribam iekš stila ierakstīt kādu mainīgo, tad mums stila vērtība jāliek atpakaļejošajās pēdiņās: `` , un tad mēs varam rakstīt mainīgo kā ieraksti JavaScript valodā: ${} . */

/* bet lai mēs varētu vairākiem elementiem uzrakstīt vienādus stilus, mums ir jāizmanto viena no divām iespējām. Rakstot tos iekš cikla: for() vai jāizmanto metode: foreach. Izskatīsim šīs abas iespējas ar piemēriem: . */

for (let i = 0; i < hearts.length; i++){
	hearts[i].style.backgroundColor = 'green';
}

/* bet ikdienā cikla: for izmantošana elementu pārskatīšanai vairs nav tik ērta, un netiek bieži lietota, jo ir daudz ērtākas metodes, kā vairākiem elementiem vienlaicīgi mainīt stilus. */

hearts.forEach(item => {
	item.style.backgroundColor = 'red';
});

/* lai izmantotu metodi: forEach mums tās iekavās () ir jāizveodo callBack bultiņveida funkcija, kas liek katram elementam būt sarkanā krāsā. */

/* Mēs apskatījām kā mēs izmantojot JavaScript programmēšanas valodu varam mainīt stilus. Tagad paskatīsimies, kādas metodes ir HTML dokumenta elementiem, un kā mēs ar tām varam strādāt izmantojot JavaScript. Jo ir lapas, kuras tiek taisītas izmantojot tikai bibliotēku: React, un visa lapas izstrāde ir balstīta uz skriptiem, uz js failiem. */

const div = document.createElement('div');

/* izmantojot šādu metodi: createElement() iekavās rakstot '' pēdiņās elementa nosaukumu, mums jau ir jauns elelemens. Bet tas mums ir tikai JavaScript failā. Tas vēl nav HTML dokumentā. */

const text = document.createTextNode('Mani sauc Zane!');

/* ja vēlamies pievienot HTML dokumentam kādu tekstu, bez tags, tad mums ir jāizmanto metode: creatTextNode() iekavās iekš '' pēdiņām rakstot to tekstu, ko vēlamies pievienot. Atceramies, ka šī metode arī pagaidām pastāv tikai JavaScript failā, tā vēl nepastāv HTML dokumentā. Tālāk mācoties mēs lietosim daudzas metodes, kurām nosaukumā ir: Node. Bet konkrēti šī metode tiek izmantota ļoti reti. */

/* Strādājot par web izstrādātāju reālajos projektos, mēs nerakstīsim elementu stilus izmantojot metodi: style. Bet mēs strādāsim ar elementu klasēm. Darbosimies ar tiem caur to klasēm. Metode: className jau ir novecojusi, un to vairāk neizmanto. Tās vietā ir daudz jaunākas. Izskatīsim tās ar piemēriem: */

div.classList.add('black');

/* izmantojot metodi: add() aiz īpašības: classList mēs tās iekavās () rakstām klases nosaukumu, kuru vēlamies pievienot konkrētajam elementam. Bet arī šāda darbība mums pagaidām ir tikai JavaScript failā. Iekš HTML dokumenta nekas nav mainījies. */

/* Tagad izskatīsim jaunākās metodes, lai beidzot mūsu izveidotie juanie elementi iekš JavaScript parādītos arī HTML dokumentā: . */

// document.body.append(div);

/* izmantojot metodi: append, mēs liekam iekš HTML dokumenta: iekš tega: body ielikt: tegu: div. Tas tiek ielikts pašās tega: body beigās. */

/* ja mēs kādu mainīgo gribam izmantot tikai vienu reizi, mums neva nepieciešams katru reizi deklarēt atsevišķu mainīgo. */

/* Ja mēs gribam kādu HTML dokumenta elementu pievienot caur JavaScript noteiktā vietā, tad mums jāraksta tā tega nosaukums iekš kā iekšā mēs gribam pievienot jaunu HTML dokumenta elementu. Mēs rakstām metodi iekš metodes, kas ir šādi: . */

wrapper.append(div);

/* Šeit mēs iekš HTML dokumenta elementa, ar klases nosaukumu: wrapper, izmantojot metodi: append() iekavās rakstot tā tega nosaukumu, kuru vēlamies izveidot, izveidojam pirms wrapper beigām jaunu elementu: div. */

/* Bet ja mēs kādu HTML dokumenta elementu gribam izmantot vairākas reizes savā JavaScript kodā, tad mums ir jāieraksta tas koda sākumā, kā viens no mainīgajiem. Jo pēc tam mēs to varam izmantot daudzas reizes. Lai izveidotu iekš wrappper jaunu elementu - tegu: div, mēs to varam izdarīt ar daudz īsāku pierakstu, jo mums koda sākumā jau wrapper ir noteikts mainīgais. */

/* Kad mēs izmantojam tādu pieeju kā mainīgā deklarēšanu un vairākkārtēju izmantošanu to sauc par: koda pārstrukturēšanu. Mēs strukturējam HTML dokumenta elementus - HTML dokumentu. */

// wrapper.prepend(div);

/* Lai pievienotu kādu elementu - tegu iekš noteiktas klases jeb cita tega sākumā mēs izmantojam metodi: prepend() iekavās rakstot tā HTML dokumenta elementa - tega nosaukumu, kuru vēlamies pievienot. redzam, ka atverot pārlūkā mūsu HTML dokumentu, mums elements: div maina savu atrašanās vietu, atkarīgi no tām metodēm, kuras mēs izmantojam. */

// hearts[0].before(div);
// hearts[0].after(div);

/* Tā pat ir metodes, kas ļauj mums ielikt kādu elementu pirms vai pēc kāda cita HTML dokumenta elementa. Metodes: before() un after(). Ja mums šādi elementi, kurā gribam ko jaunu ielikt ir vairāki, tad norādām [] iekavās tā elementa indeksu pirms/pēc kura kaut ko gribam ielikt. */

// circles[1].remove();

/* Kā rī, ja mēs gribam kādu elementu no HTML dokumenta izdzēst mēs izmantojam metodi: remove(). Atceramies, ka ja mēs gribam izmantot metodi, mēs aiz tās nosaukuma liekam () iekavas, lai tā darbotos. */

hearts[0].replaceWith(circles[0]);

/* ja mēs kādu HTML dokumenta elementu vēlamies aizstāt ar citu elementu, tad mēs izmantojam metodi: replaceWith(), metodes sākumā rakstot tā elementa nosaukumu, kuru vēlamies aizstāt, un aiz metodes: replaceWith() iekavās rakstot tā elementa nosaukumu - jaunā elementa nsaukumu. */

/* Tā pat kā mēs tagad praktizējamies ar dažādām figūrām, pēc tāda paša principa mums jāprot strādāt ar dažādiem lapas elemetiem. Jo visas līdz šim apskatītas metodes ir bieži sastopamas - lietojamas. */


/* Daudzas metodes ir pierakstītas kā komentārs, tādēļ, lai tās nedublētos, un lai nesajauktu mums HTML dokumenta kodu. */

/* tagad izskatīsim konstrukcijas, kas ir nedaudz novecojušas, bet tās vēl daudzos kodos var sastapt, un tādēļ mums ir jāzin par tām. */

// wrapper.appendChild(div);

/* Šī metode, dara tieši to pašu, ko metode: append(), tikai šī jau ir nedaudz vecāka metode. */

// wrapper.insertBefore(div, hearts[1]);

/* Šī metode bija pirms metožu: after, before un prepend rašanās, jo pildīja tieši tādu pašu uzdevumu. Tikai izmantojot šo metodi: insertBefore() iekavās mēs rakstām divus argumentus. Pirmo rakstām tā elemeta nosaukumu, kuru vēlamies izveidot, aiz komata rakstām tā elementa nosaukumu, pirms kura gribam izveidot jauno elementu. */

// wrapper.removeChild(hearts[1]);

/* Agrāk, lai izdzēstu kādu elementu tika izmantota metode: removeChild() iekavās rakstot to metodi, kuru vēlamies izdzēst - izņemt. Ievērojam, ka agrākās metodes tika izmantotas caur galvenā elemeta nosaukumu, aiz tā liekot punktu, un tad rakstot vajadzīgo metodi. */

/* jaunās metodes ir daudz ērtāk un patīkamāk izmantot, jo tām ir vienkāršāks pieraksts. */

// wrapper.replaceChild(circles[1], hearts[1]);

/* Agrāk, lai kādu elementu varētu aizstāt ar citu elementu tika izmantota metode: replaceChild(), kuras iekavās rakstīja kā pirmo argumentu, kur ir jaunā elemta nosaukums, bet aiz komanta rakstot tā elementa nosaukumu, kurš tiek mainīts. */

/* Tālāk mēs apskatīsim metodes, kā mēs varam iekš elementa ievietot tekstu uzreiz HTML dokumentā, jeb pat ievietot veselu HTML dokumenta daļu kādā elementā. */

div.innerHTML = '<h1>Hello world!</h1>';

/* Metode: innerHTML ļauj mums iekš elementa ievietot tekstu, citus elementus, kā arī veselu HTML dokumenta struktūru. Atceramies, kad izmantojam šo metodi, mēs HTML rakstām ar lielajiem burtiem, jo savādāk tā nestrādās. Šī metode tiek ļoti bieži izmantota, un tālāk strādājot arī mēs to izmantosim ļoti bieži. */

// div.textContent = 'Hello world!';

/* Izmantojot šo metodi: textContent mēs varam iekš HTML dokumenta elementiem ievietot tekstu. Bet šī metode ļauj tikai ievietot tekstu. S"'adas dažādas metodes iz domātas, tam, lai lietotājs vrētu ievadīt tikai konkrētus datus, lai viņš nejauši neizjauktu visu HTML dokumentu. Metode: textContent ir lietotāja un izstrādātāja drošībai. */

/* Šīs metodes ir, lai ievietotu tikai nelielu HTML dokumenta koda gabaliņu, bet tagad izskatīsim metodi, kas ļauj mums ievietot HTML dokumentā veselu HTML dokumenta daļu: . */

div.insertAdjacentHTML('beforebegin', '<h2>Mani sauc Zane!</h2>');

/* Izmantojot šo metodi: insertAdjacecentHTML() mēs varam noteiktās vietās, norādot četras atrašanās vietas iespējas iekš metodes () iekavām, rakstot tās iekš '' pēdiņām, liekot komatu, un atkal iekš '' pēdiņām rakstot to HTML dokumenta struktūru, kuru vēlamies pievienot. Nav svarīgi cik gara un liela ir HTML dokumenta struktūra, kuru mēs vēlamies ielikt, jo izmantojot šo metodi, tas nav svarīgi, jo strādās jeb kurā gadījumā. Ir četras atrašanās vietas iespējas: beforeend, beforebegin, afterend, afterbegin. Tās mēs varam izmantot, lai noteiktu vietu, kur hTML dokumentā tiks ielikta jaunā struktūra. */





