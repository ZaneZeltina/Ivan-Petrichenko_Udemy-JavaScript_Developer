'use strict';

/* Lai mēs varētu labāk saprast darbības ar lapām un to elementiem JavaScript programmēšanas valodā, mums ir jāapgūst tāds jēdziens kā: Notikumi JavaScript, jo vis ir balstīts uz darbībām ar lapas elementiem. Notikumi: tie ir signāli no pārlūka, ka kaut kas notiek. Tās ir visas darbības, kuras lietotājs veic lapā - pārlūkā. Lai kāds notikumes notiktu, tam ir vajadzīgs notikumu apstrādātājs. Notikumu apstrādātāji ir funkcijas, kas tiek izpildītas JavaScript. Notikumi var būt daudz dažādi. Internetā ir atrodama dokumentācija, kur visi iespējamie lapas notikumi ir aprakstīti, bet mēs izskatīsim dažus visbiežāk sastopamākos, vienkāršākos notikumus. */

/* javaScript ir trīs metodes, kā noteikt notikumu apstrādātājus: . */

/* Viena no metodēm kā mēs varam noteikt notikumu apstrādātāju ir uzreiz rakstot tos HTML dokumentā. Skatīt attiecīgo HTML failu. Bet reālajos projektos šāda metode netiek izmantota, un ikdienā nav ieteicams to lietot. Šādas metodes izmantošana noder tikai kaut kādos mazos skriptos jeb testa programmās. */

// <button onclick="alert('click')" id="btn">Nospiest</button>

/* Otrais veids kā mēs varam noteikt notikumu apstrādātāju ir izmantojot DOM - Document Object Module, elementu koku. DOM izmantošanas pieraksts: */

const btns = document.querySelectorAll('button');
// overlay = document.querySelector('.overlay');

// btn.onclick = function () {
// 	alert('click');
// };

/* Nosakām mainīgo, lai mēs varētu tālāk kodā to izmantot. Rakstām funkciju, kas izpildīs brīdinājuma logu lapā, kad nospiedīsim uz pogas. */

/* Mūsu laikos, jaunajos projektos netiek vairs izmantots šāds notikumu apstrātāšanas pieraksts. Vēl nesen tas bija bieži sastopams, bet tagad to neiesaka izmantot, jo tam ir būtisks trūkums: Ja mēs jau esam izmantojuši vienu metodi, un tālāk strādājot ar kodu gribam ko mainīt, piemēram skatoties uz šo piemēru, gribam, lai alert logā parādās: second click, palaižot pārlūku mums izpildīsies tikai tas, ko būsim uzrakstījuši otrajā reizē, mums neizpildīsies pirmais variants. Jo otrā izmantošanas reize aizstāj pirmo. Un reizēm mēs varam sagaidīt negaidītu koda darbību lapā. Tādēļ arī šī metode netiek ieteikta izmantošanai. Otrs būtisks mīnuss ir tas, ka ja mēs šo notikumu gribēsim izpildīt, un pēc tam nodzēst, mēs izmantojot šādu notikuma apstrādātāju, to vairs nevarēsim izdarīt. */

/* Tādēļ mācīsimies pierakstīt notikumu apstrādātājus pareizi. Tiem ir divas metodes:  Pirmā metode: addEventListener nozīmē to, ka mēs liekam sekot līdzi konkrētajam notikumam. Šai metodei ir būtisks pluss, jo mēs varam šo metodi vienam elementam izmantot vairākas reizes, jo tiks izpildīta katra reize. Izpildot kodu redzam, ka pārlūkā nospiežot pogu divas reizes parādās alert logs, ar tekstu. */

// btn.addEventListener('click', () => {
// 	alert('click');
// });

// btn.addEventListener('click', () => {
// 	alert('Second click');
// });

/* Šo metodi mēs varam izmantot visdažādākajām darbībām, jo tā tādā ziņā ir universāla. Piemēram: */

// btn.addEventListener('mouseenter', (event) => {
// 	console.log(event.target);
// 	console.log('Hover');
// });

/* Reizēm mums ir vajadzība iegūt no elementa datus: datus, kas notiek pie katra notikuma. Lai mēs iegūtu kādus datus par notikumu, mums irkš funkcijas () iekavām ir jānorāda arguments: event. Bet nosaukt, tā nosaukumu mēs varam rakstīt kā vēlamies. Bet atceramies nosacījumu, ka rakstot kodu nosaukumi jāizdomā loģiski. Lai mēs vēlāk atverot kodu, kāa rī citi izstrādātāji varētu to saprast, un viegli lasīt. Izpildot šādu kodu mēs redzam, ka mēs iegūstam datus par konkrēto notikumu. Dāzus notikumu datus mēs izmantosim bieži. Tie ir: type: norādīts notikuma nosaukums: mouseenter un target: button#btm. Un vēl ir daudz dažādi dati, koordinātas utt. */

/* Ja mēs gribam uzzināt konkrēta notikuma atrašanās ceļu, mums pie konsoles izvades pieprasījuma, aiz argumenta nosaukuma, jāliek: punkts un jāieraksta: target. Target - Ceļš. Izpildot šādu kodu, mums parādās plašas iespējas. Mēs varam tagad ar elementu izpildīt dažādas darbības, samainīt to, mainīt tā izskatu, izdzēst, utt. Piemēram, lai elements pazustu, mums iekš funkcijas darbības {} iekavām jāieraksta: event.target.remove(); Redzam, ka tikko mēs ar peli uzvedam uz pogas, tā pazūd no lapas. */

/* Lai dzēstu kādu notikuma apstrādātāju, mums ir jāizveido jauns mainīgais, .  Ievērojam sintaksi un pareizu pierakstu. Atceramies, ka divas vienādas funkcijas jeb datu masīvs, objekts: tie nav vienādi veins ar otru. Pareizs notikumu dzēšanas pieraksts ir šāds: .*/

// let i = 0;
// const deleteElement = (element) => {
// 	console.log(element.target);
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// };

// btn.addEventListener('click', deleteElement);

/* Atceramies, ka rakstot mainīgos, jeb kādus citus nosaukumus, mēs nevaram izmantot JavaScript jau rezervētos vārdus, kas šajā gadījumā būtu: delete. Mums ir jāraksta citādāks nosaukums. */

/* Seit mēs nosakām mainīgo i - iterator, un liekam, tam katru reizi notikumam izpildoties palielināties par: +1. Nosakām nosacījumu: ja i==1, tad konkrētais notikumu apstrādātājs tiek dzēsts. */

/* Lai pilnvērtīgi redzētu kā darbojās metode: removeEventListener, mums ir jāizslēdz iepriekšējais kods, kur izmantojām konkrēto elementu. Vienkārši aizkomentējot tos. Redzam, ka izpildot ša'du kodu, mūsu notikums tiek izpildīts un pēc tam tiek dzēsts, jo nospiežot atkārtoti nekas vairs nenotiek. */

/* Svarīgi zināt, ka ir arī: notikumu sapludināšana. Nejaukt ar objekta sapludināšanu!!! . */

/* Lai izskatītu tādu peimēru, ar notikumu saplusināšanu. Nosakām skripta sākumā vēl vienu mainīgo: overlay. Lai mēs to varētu izmantot tālāk savā kodā. Lai pilnvērtīgi redzētu kā darbojās šis kods, mums jāizslēdz - iekomentējot iepriekšējo kodu. */

const deleteElement = (element) => {
	console.log(element.target);
	console.log(element.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

/* izpildot šādu kodu mēs redzam, ka kaut mums ir dažādi elemeti, tie var pildīt divas vienādas funkcijas. Pierakstot īpašību: currentTarget, mēs skaidri redzam, kā notikumi saplūst, redzam notikumu saplūšanu. Redzam, ka elements: btn uzpeld augstāk, kaut gan HTML dokumentā mums pirmais bija tegs: div ar klasi: overlay, iekš, kura bija poga. Redzam, ka tie ir saplūduši un darbības izpildās otrādi. Bet praksē netiek rakstīta īpašība: .currentTarget, jo tiek rakstīts vienkārši: .target. Notikumu saplusināšanu var arī atcelt, bet praksē tas praktiski netiek izmantots, jo var sagādāt liekas problēmas. */

/* Notikumu sapludināšana: Kad notikuma apstrādātājs saķumā izpildās ieliktajā elementā, bet pēc tam izpildās uz galvenā - vecākā elementa, un tā tas virzās uz augšo. Šo nosacījumu ir ļoti svarīgi saprast - zināt, jo darba intervijā var būt šāds jautājums. */

/* Svarīgi ir prast atcelt elementu standarta uzvedību - darbības pārlūkā - lapā. Piemēram mums ir kādā saite, kas atverās, jeb mēs varam iezīmēt tekstu. Tās ir pārlūka standarta darbības, bet mēs tās varam mainīt un atcelt. Lai to izdarītu ir divas metodes. Pirmā: kad mēs izmantojam metodi: return false pašās notikuma beigās. Bet šī metode jau ir novecojusi un netiek vairs izmantota. Jo mums ir otra daudz labāka metode: preventDefault, kas liek pārlūkam izpildīt citas noteiktās darbības, nevis tā standartdarbības. Izskatīsim to ar piemēru. Kur mēs sākumā nosakām mainīgo. */

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
	event.preventDefault();
	console.log(event.target);
});

/* Ievērojam, ka kods, kur ir metode: preventDefault tiek rakstīts bultiņveida funkcijā pašā tās sākumā. */

/* Izpildot šādu kodu mēs redzam, ka ir mainījusies pārlūka saites uzvedība, noklikšķinot uz tās, tā neatveras, bet gan konsolē tiek parādīts pilns tās ceļš. Šādu notikumu apstrādātāju uzvedībs mainīšanu mēs izmantosim ļoti bieži. */

/* Kā mums pareizi jāizpilda viens un tas pats notikumu apstrādātājs uz vairākiem elementiem? Tie var būt vienādi elementi, bet var būt arī dažādi. Izskatīsim to ar piemēriem. Lai mēs pilnvērtīgi redzētu kā darbojās piemērs pārlūkā, mums ir jāaizkomentē iepriekšējie kodi - tie jāizslēdz. */

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
});

/* izmantojot metodi: forEach, kad mēs pārskatām visus esošos elemetus pēc konkrētā nosaukuma, izmantojam bultiņveida funkciju, pievienojam metodi: addEventListener, kas liek noteikt jaunu notikumu apstrādātāju, rakstom: click, liekam komata, aiz tā rakstot iepriekš aprakstīto metodi: deleteElement. */

/* Vēl ir savrīgi saprast kas ir notikumu opcijas. Pagaidām mēs izmantojot metode: addEventListener iekavās nosakām divus argumentus, bet mēs varam noteikt arī trešo, kas nozīmēs, ka mēs ar doto elementu vēlamies izpildīt kādu opciju. Objektiem ir daudz dažādas īpašības. Viena no tām ir: once, kur mēs varam norādīt: true vai false. Konkrēto opciju pievienojam iepriekšējam piemēram. */





