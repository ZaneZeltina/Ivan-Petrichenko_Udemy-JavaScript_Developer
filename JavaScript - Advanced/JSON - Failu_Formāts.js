'use strict';

/* JSON ir mūsdienīga datu nodošanas sistēma, veids kā nodot datus. JSON: Java Script Object Notation - Teksta formāts datu apmaiņai. JSON tiek izmantots arī, lai glabātu datus. Kā arī JSON failā tiek aprakstīti uzstādījumi - settings. JSON formāts, jebkurā programmēšanas valodā glabā pāri: atslēgas nosaukums: atslēgas vērtība. Tā pat kā ar objekta tipa datiem JavaScript programmēšanas valodā. Galvenais JSON failu nosacījums ir: katrai rindiņai ir jābūt dubultajās pēdiņās: "". Atslēgu vērtības var būt dažādu datu tipu: objekti, datu masīvi, string dati, number dati, null dati. */

/* Secinājums: izmantojot JSON datu formātu mēs iegūstam netradicionālu datu bāzi. Izskatīsim šo visu teoriju ar praktisku piemēru: . */

const persone = {
	name: 'Zane',
	tel: '+37129909120',
	parents: {
		mom: 'Līvija',
		dad: 'Aivars',
	}
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Anna';

console.log(persone);
console.log(clone);

/* Mēs izveidojam objektu. Tagad iedomājamies, ka mums šie dati ir jānodot serverim - uz BackEnd daļu. Pa tiešo mēs objektu nevaram aizsūtīt serverim, jo serveris un datu nodošanas protokols mūs nesapratīs. Tādēļ mums dati jāpārvērš vienā no trim variantiem, kurus var transportēt uz serveri: no FrontEnd nodot uz: BackEnd. */

/* Neliela anotācija par datu nosošanu. Par galveno datu protokolu: http mēs mācīsimies vēlāk. Šī tēma neattiecās uz JavaScript, jo tā ir globāla, kas skar visu programmēšanu. Svarīgākais ir tas, lai mēs saprastu kā komunicē lietotājs ar serveri, kā notiek datu apmaiņa. JavaScript programmēšanas valodas bāzes līmenī mēs izskatīsim: url koda standartus, kad forma: form tiek sūtīta no web lapas uz serveri pirms lapas pārlādēšanās. Visbiežāk formas tiek sūtītas bez skripta. Kā arī mēs izskatīsim objektu nodošanu izmantot formātu: Date(). Un protams izskatīsim datu nodošanu izmantojot JSON failu formātu. Šie ir trīs galvenie datu nodošanas formāti. No FrontEnd uz BackEnd. */

/* Visi mūsdienīgie interneta pārlūki, un pat IE8 versija prot strādāt ar JSON formāta datiem, kam ir līdzīga uzbūve kā Objekta tipa datiem. Šinī iebūvētajā objektā mums ir iebūvētās metodes un īpašības. */

/* Izskatīsim dažas metodes un īpašības. Īpašības ir tikai divas. Pirmā no tām ir: Stringify, kas pārvērš objekta tipa datus uz mums vajadzīgo formātu, lai mēs tos varētu sūtīt uz serveri - BackEnd. Izskatīsim to ar piemēru, ņemot jau augstāk izveidoto objektu un paskatīsimies uzreiz konsolē uz rezultātu: . */

console.log(JSON.stringify(persone));

/* Svarīgi atcērēties ka JSON datu formātu mēs vienmēr pierakstām ar lielajiem burtiem. */

/* Izpildot šādu kodu mēs konsolē iegūstam objektu, kur katras atslēgas nosaukums un arī vērtība ir ierakstīta iekš "" pēdiņām, gan atslēgas nosaukums, gan vērtība. */

/* Tagad, kad esam ieguvuši sādu datu formātu, mēs tos varam nosūtīt serverim uz BackEnd daļu. Varam būt droši, ak šos datus sapratīs visi datu protokoli. Mēs mūsu datus varam ierakstīt, zūtīt uz serveri. */

/* Tagad izskatīsim pretēju situāciju, kad mums no servera ienāk JSON formāta dati, un mums ir nepieciešams pārvērst tos par objektu. Lai iegūtu objektu no JSON formāta, mums jāizmanto metode: parse(). Piemēra pieraksts: . */

console.log(JSON.parse(JSON.stringify(persone)));

/* JSON faili ir populāri tādēļ, ka tie aizņem maz vietas atmiņā, un tas ir vienkārši nolasāms, vienkārši saprotams. Kamēr nebija parādījies JSON formāts, tika izmantots HTML formāts. Bet dati HTML formātā aizņem daudz vairāk atmiņas, jo tiem ir atverošie un aizveroši tegi. Ja mums ir mazs kods, tad mēs atšķirību nejūtīsim, bet kad mums ir objekts, kas satur tūkstošiem atslēgas, tad atšķirība būs jūtama. */

/* Tagad atcerēsimies vienu no pirmajām mācībstundām, kad mēs mācījāmies par objektu kopēšanu: virspusējo kopēšanu un dziļo kopēšanu. */

/* Izskatīsim dziļo kopēšanu, jo mēs mācījāmies tikai par visrspusējo kopēšanu. Atgriežamies pie mūsu piemēra ar objektu: . */

/* Mēs objekta dziļo kopēšanu veicam izmantojot konstrukciju JSON un metodes: parse un stringify, kur metode stringify pārvērš objektu JSON formātā, bet metode: parse to pārvērš atpakļ par objektu, mēs iegūstam objekta dziļo kopiju. Šādas konstrukcijas pierakstu veicam izmantojot mainīgā deklarēšanu. Pieprasot konsoles izvadi mēs redzam jaunu objektu, kas ir identisks oriģinālam objektam. */

