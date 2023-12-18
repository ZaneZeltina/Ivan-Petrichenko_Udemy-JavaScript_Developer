/* eslint-disable no-unused-vars */
'use strict';

/* Konstrukcija: Date() ir sastopama daudzās programmēšanas valodās, tostarp arī javaScript programmēšanas valodā. Date() ir sava veida objekts, kam ir savas metodes un īpašības. Mācēt strādāt ar konstrukciju: Date() ir obligāta prasība. Konstrukcijai: Date() ir plašs pielietojums, pimēram, lai izmērītu kādas funkcijas darbības laiku. Ja mēs gribam uzzināt, cik ilgi tā strādā un salīdzināt ar kādas citas funkcijas darbības laiku. Tā pat konstrukciju: Date() var izmantot, lai izvadītu tekošos datus, piemēram pulksteni jeb timeri kādā web lapā. Kā arī, lai glabātu informāciju par kāda dokumenta izveides laiku, jeb laiku, kad ir veiktas kādas izmaiņas. Tas gan attiecās vairāk uz Back-End darbības lauku, piemēram darbs ar Node.js. Nākošajā mācību stundā mēs mūsu projektā izstrādāsim taimeri, kur būs vajadzīgas šinī lekcijā iegūtās zināšanas par Date() izmantošanu. */

/* tagad izskatīsim ar koda piemēru, kā mēs varam realizēt šādu funkcionālitāti: */

// const now = new Date('2023-09-05');

const now = new Date(2023, 8, 4, 16);

const oldTime = new Date(-999999999999);

console.log(now);
console.log(oldTime);

/* Mēs izveidojam mainīgo, kam piešķiram vērtību: new Date() iekavās pēdiņās rakstot šodienas datumu, skaitļus atdalot ar zīmi: - . Izpildot šādu kodu konsolē mēs redzam noteikto datumu, bet pulkstenis ir pa nullēm. Bet, ja mēs iekavas atstāsim tukšas, tad saņemsim tekošo datumu un laiku līdz pat milisekundēm. Pulksteņa laiku saņemsim ar 3 h nobīdi atpakaļ, jo dators rāda Grinčas - nulles laika joslu, nevis mūsu laika joslu. */

/* Tā pat mēs varam norādīt datumu ar skaitļiem, atdalot tos ar komatu, bet ņemam vērā, ka mēsnesis mums jānorādā vineu skaitli atpakaļ, jo tos dators skaita no nulles, kas nozīmē, to, ka Janvāris ir 0 mēnesis. Datumu norādām esošo skaitli. Mēs varam norādīt arī pulksteni, bet ņemam vērā, ka norādot pulksteni, dators mums attēlos Grinčas - nulles laika joslu. Izpildot šādu kodu mēs konsolē redzam: 2023-09-04T13:00:00.000Z. Redzam, ka laika josla tiek rādīta 3h atpakaļ. Tā ir būtiska īpatnība, kas mums jāņem vērā, kad nosakām pulksteni. */

/* Mēs varam noteikt datus milisekundēs. Kāpēc tieši milisekundēs? Tāpēc, ka datoru valodā - programmēšanas valodās, arī JavaScript programmēšanas valodā, visi laiki tiek mērīti - glabāti milisekundēs. Šī metode, kad laiks tiek mērīts milisekundēs tiek saukta par: TimeStamp - Laika zīmogu. Ar milisekunžu izmantošanu ir ļoti viegli strādāt, mainīt laikus, it īpaši JavaScript programmēšanas valodā. Laika skaitīšana milisekundēs sākās 1970 gadā. Par to pārliecināties, mēs varam iekš Date() iekvām ierakstot: 0. Mēs iegūsim konsolē šādu rezultātu: 1970-01-01T00:00:00.000Z. Visi laiki, ko mēs nosakām tiek mērīti - skaitīti milisekundēs. */

/* Bet, ko darīt, ja mums vajag iegūt agrāku laiku? Pirms 1970-01-01. Mēs rakstām() iekvaās laiku, milisekundes ar - mīnuss zīmi priekšā, kas nozīmē, ka mēs skaitām uz atpakaļu. Izpildot kodu, kas mums ir piemērā, mēs konsolē iegūstam: 1938-04-24T22:13:20.001Z. Šādi mēs varam iegūt agrāku laiku par 1970-01-01. */

/* Objektam: Date() ir ļoti daudz dažādas metodes, kuras mēs varam izmantot. Pilnīgi visas metodes mēs neizskatīsim, tās visas ir atrodamas dokumentācijā. Mēs izskatīsim populārākās - visbiežāk sastipamākās metodes. Izskatīsim tās ar koda piemēriem: . */

const time = new Date();

console.log(time.getFullYear());

/* Izmantojot metodi: getFullYear(), mēs konsolē redzam pilnu gada skaitli. izpildot šādu kodu konsolē, redzam: 2023. */

console.log(time.getMonth());

/* Izmantojot metodi: getMonth(), mēs konsolē iegūstam pilnu mēneša skaitli. izpildot šādu kodu konsolē, redzam: 9. */

console.log(time.getDay());

/* Izmantojot metodi: getDay(), mēs konsolē iegūstam pilnu dienas skaitli. Nedēļas dienas skaitli. Šinī gadījumā, mēs iegūstam: 2, jo šodien ir otrdiena. Izpildot šādu kodu konsolē, redzam: 2. */

console.log(time.getTime());

/* Izmantojot metodi: getTime(), mēs konsolē iegūstam milisekunžu skaitu, kas ir pagājis no 1970 gada 01 Janvāra 00:00:00. Izpildot šādu kodu konsolē, redzam: 1693923287222. Redzam laiku attēlotu tieši milisekundēs. Atceramies, ka datori attēlo Grinčas - Nules laika joslu, kas nozīmē, ka no mūsu laika joslas jāatskaita: -3 h. */

/* Mēs varam iegūto skaitli pārvērst par datumu, ierakstot to iekš metodes: date() iekavām. Tāda pieeja tiek ļoti bieži izmantota. */

console.log(time.getDate());

/* Izmantojot metodi: getDate(), mēs konsolē iegūstam pilnu dienas skaitli. Šodienas kalendāro dienu. Izpildot šādu kodu konsolē, redzam: 5. */

console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());

/* Šīs trīs metodes ir līdzīgas. Tās izvada: pilnu stundu skaitu, minūšu skaitu, un sekunžu skaitu, milisekunžu skaitu. Izpildot šos kodus konsolē, mēs iegūstam: 18 - pilnas stundas; 16 - pilnas minūtes; 29 - pilnas sekundes; 939 - pilnas milisekundes. */

/* Svarīga īpatnība, ka izmantojot visas šīs metodes, mēs iegūstam vietējās laika joslas laiku, nevis Grinčas - nulles laika zonu. Tā ir svarīga metožu atšķirība, starp vienkāršu Date() izmantošanu. */

/* Reizēm mums ir vajdzīgs laiku izvadīt pēc citas laika joslas. Citas laika joslas izmantošana saucās metode: UTC. Mēs varam izmantot šīs visas metodes rastot aiz get: UTC. Izpildot tādas komandas, iksevišķi stundu komantu: getUTCHours() mēs iegūsim esošo Grinčas laiku - nules laika joslas laiku. */

console.log(time.getUTCHours());

/* izpildot šo komadu, esošajā brīdī mēs saņemsim konsolē skaitli: 15. Esošo stundu skaitu pēc Grinčas - nulles laika zonas. */

/* ir vēl viena  metode, kuras attiecās uz struktūru: Date(). Tās ir: getTimezoneOffset(). */

console.log(time.getTimezoneOffset());

/* Metode: getTimezoneOffset() mums izvada mums atšķirību starp galveno - Grinčas - nulles laika zonu un mūsu laika zonu. Mums tiek izvadīts minūšu skaits. Redzam konsolē skaitli: -180. Mēs redzam par cik minūtēm mūsu laiku josla atšķirās no galvenās laika joslas. */

/* Mēs izskatījām visas metodes, kas sākās ar: get.., kas mums ļauj kaut ko esošu iegūt. Tagad izskatīsim metodes, kas sākās ar: set.., kas ļauj mums ko noteikt. Šeit tiek izmantotas visas tās pašas metodes, tikai ar sākumu: set. Izskatīsim tās: */

console.log(time.setFullYear());
console.log(time.setMonth());
console.log(time.setDate());
console.log(time.setTime());
console.log(time.setHours());
console.log(time.setMinutes());
console.log(time.getSeconds());
console.log(time.setMilliseconds());

/* Tā pat Šīs visas metodes darbojās ar laika zonas noteikšanas metodēm, analogajām metodēm, kas aiz vārda: set iekļāuj lielos burtus: UTC. Mēs redzam izmaniņas, kad lietojam konkrēti metodi: setUTCHours(). */

console.log(time.setUTCHours());

/* Metodē: setHours() iekavās mēs varam rakstīt stundas, likt komatu un rasktīt arī minūtes, kuras vēlamies iestatīt. Šāds risinājums ne vienmēr ir labs, jo programmētāji ir pieraduši, ka tur būs noteiktas tikai stundas, un var šakt brīnīties, kas tas par otru skaitli. */

/* Ir vēl viena būtiska nienase: Kad mēs nosakām vienkārši metodi: Date() tā mums attēlo datumu un laiku. Laiku stundās tā attēlo pēc Grinčas laika zonas, pēc nulles laika zonas, bet tas tādā gadījumā, ja izpildīsim kodu redaktora konsolē, jo datori orientējās pēc vienas laika zonas. Bet, ja to pašu kodu atvērsim no pārlūka konsoles, mēs redzēsim, ka mums tiek rādīts laiks - stundās pēc mūsu laika zonas. Secinājums: ka izmantojot datorprogrammas, datori orientējās pēc globālā laika, bet, ja izmantojam programmas, kas darbojās caur internetu, tad kods darbojās pēc mūsu lokālās laika zonas. */

/* Konstrukcijai: Date() ir arī automātiskais laika labotājs. Ja mēs iekš metodes: setHours() iekavām ierakstīsim skitli: 40, tad mēs redzēsim, ka mēs saņemam laiku, kas atbilst: + 40 stundām, dators pats izlabo mūsu noteiktos laikus. */

/* Ir vēl dažas metodes, kas tiek izmantotas ar: Date() struktūru. Izskatīsim tās ar piemēriem: . */

// new Date.parse('2020-09-10');

/* Pirmā metode: parse(). Mēs varam mainīt tekošo datumu, laiku uz citu laiku izmantojot metodi: parse() iekavās rakstot to datumu un laiku, kuru vēlamies uzstādīt. Tieši to pašu mēs varam izdarīt izmantojot parastu date konstrukciju: new Date() iekavās ierakstot to datumu un laiku, kuru vēlamies uzstādīt. Ir divi varianti viena uzdevuma atrisināšanai. izmantošanas atšķirības šīm divām metodēm nav, jo tās pilda vienādu darbību. */

/* Datumu - laika metodes mēs varam izmantot, lai izmērītu kādu laiku. Piemēram, lai salīdzinātu vienas funkcijas darbības laiku ar citas funkcijas darbības laiku. */

/* Paskatīsimies kā mēs varam izmērīt darbības laiku. izskatīsim to ar piemēru: . */

let start = new Date();

for (let i = 0; i < 100000; i++){
	let some = i ** 3;
}

let end = new Date();

alert(`Cikls tika izpildīts: ${end - start} milisekundēs!`);

/* mēs nosakām mainīgo ar jaunu datumu un laiku. Pēc tam izpildām ciklu: for. Iekš cikla: for nosakām vēl vienu mainīgo liekot iteratoram: i izpildīties trešajā pakāpē. JavaScript jaunajā standartā ir pievienots jauns operators, operatorsa: ** - kas ļauj mums noteikt skaitli pakāpē. Pēc tam nosakāmjaunu mainīgo piešķirot tam jau jaunu laiku: new Date(). Lai redzētu, kā kods strādā, lai redzētu rezultātu, mums ir jāatver pārlūks, un jāizslēdz konstrukscija: Date.parse(), jāiekomentē kods. */

/* Šādas operācijas vēl tiek sauktas par: Benchmark, kad mēs pārbaudām funkcionalitātes izpildes kvalitāti. Kad mēs pārbaudām kā strādā kāda funkcija, cikls, koda konstrukcija. */











