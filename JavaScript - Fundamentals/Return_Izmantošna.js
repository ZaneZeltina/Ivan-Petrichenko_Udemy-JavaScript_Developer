'use strict';

/* Jeb kura funkcija var mums kaut ko atgriezt, parādot savu darbību. Izskatīsim piemēru no iepriekšējās lekcijas, par valūtu kalkulatoru. Kad piemērā mēs gribam, lai lietotājs saņemtu atlaidi, pie valūtu konvertizācijas. Pierakstā, tas izskatītos šādi: */

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

/* Šinī piemērā mēs nosakām divus mainīgos. Izveodojam divas funkcijas: conver un promotion. Funkcijā convert rakstām divus funkcijas argumentus: amount un curr. Pēc tam izmantojot metodi: return liekam funkcijai convert atgriezt mums pašreizējo valūtu kursa vērtību aprēķinātu ar atlaidi, kuru esam norādījuši pie mainīgo deklarēšanas. Izveidojam otru funkciju: promotion. Kā tās argumentu rakstām: result. Liekam konsolē izvadīt result - rezultātu kopā ar discount - atlaidi. Nosakām vēl vienu mainīgo, liekam piederības zīmi, rakstām funkcijas nosaukumu, kas mūsu piemērā ir: convert. Ikevās () liekam vērtību, kuru vēlamies mainīt, atdalām ar komatu pēc tam rakstot mainīgā nosaukumu: usdCurr, kurā esam deklarējuši dolāra kursa vērtību. Izsaucam funkciju: promotion, iekavās norādot jauno mainīgo () res. Izpildot šādu kodu mēs konsolē redzam, ka ir izrēķināts valūtas kurss, un ir piemērota 0.9 atlaide. Mainīgais, kuru deklarējam sākumā. */

/* izmantojot metodi: return mēs varam vienai funkcijai likt atgirezt kādu citu funkciju. */

/* Izskatīsim vēl vienu funkciju piemēru, izmantojot ciklu, un atslēgvārdu: return. */

function test() {
	for (let i = 0; i < 5; i++){
		console.log(i);
		if (i === 3) return;
	}
	console.log('Done!');
}

test();

/* Konsoles izvadē, izpildot šādu kodu, mēs redzam, ka funkcija: test izpilda ciklu līdz skaitlim: 3, bet pēc tam atduroties uz metodes: return, tā beidz savu darbību. Un mēs redzam, ka tālāk nekas nenotiek, jo metode: return aptur funkcijas darbību. Un mēs konsolē, neredzam tālāku funkcijas darbību, šinī gadījumā, mēs neredzam: Done!. */

/* Atceramies, to, ka jeb kura funkcija mums kaut ko atgriež, pat, ja mēs neizmantojam metodi: return. Katra funkcija pēc tās noklusējuma atgriez mums: underfined datus, kas nozīē, ka dati nav atrasti. Tā ir neredzama katras funkcijas darbība, kura nav katru reizi jāraksta. Izpildot šādu kodu, mēs konsolē redzam: true. To pārbaudīt mēs varam uzrakstot šādu piemēru: */

function doNothing() {
}

console.log(doNothing() === undefined);

/* Metode: console.log('11') arī ir funkcija. Console ir objekts, bet .log ir funkcija. Tādēļ arī, ja mēs pārlūkā izpildām šādu darbību, mēs redzam, skaitli: 11, un pēc tā redzam: undefined. Izpildot šādu darbību mēs redzam, ka console.log() ir funkcija. Atcermies, ka, jebkura funkcija mums kaut ko atgirež. */

/* Izmantojot metodi: return mēs nedrīgstam pārnest tekstu jaunā koda rindā, jo tādā veidā mēs salauzīsim kodu, un mums būs kļūda. Mūsu rakstītais kods vienkārši nedarbosies. Tas ir tādos gadījumos, ja aiz metodes: return ir kāds teksts - kādas darbības. Tas notiek tādēļ, ka JavaScript automātiski, ja teksts ir pārnests uz jaunu rindu, aiz metodes: return pieliks semikolu, uzskatot, ka rinda ir beigusies. Un izpildot šādi nepareizi pierakstītu kodu, mēs konsolē redzēsim: NaN - Not a Number. */
