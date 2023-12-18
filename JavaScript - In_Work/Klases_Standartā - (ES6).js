'use strict';

/* JavaScript programmēšanas valodas 2015 gadā izveidoto standartu: ES6 atbalsta gandrīz visi interneta pārlūki. Bet ir daži, kam vecās to versijās ntiek atbalstīt javaScript ES6 standarta kods. Bet mēs šinī lekcijā izskatīsim arī iespēju, metožu izmantošanu, lai mūsu kods tiktu atbalstīts arī vecās pārlūka versijās, kaut gan reti jau vairs kurš tās lieto. */

/* Šinī lekcijā mēs mācīsimies strādāt ar JavaScript klasēm: class. Klases vienkāršā valodā sakot ir: skaists ietvars, kas ir ap funkciju, metodi. Var sastapt tādu jēdzienu kā: sintaksiskais cukurs, pie tā pieder arī javaScript klases - class. */

/* Ikdienā strādājot ar lapām mēs sastapsimies ar šablonizāciju. Un tā vietā, lai kartu reizi veidotu no jauna kādu slaideri lapā jeb rakstu, mēs varam izveidot vienu kopēju šablonu, kur būs noteikts ko šis komponents dara. Pēc tam no tā šablona veidojam atsevišķus eksemplārus, atsevišķus pēcnācējus, kas tiks pēc tam izvietoti web lapā. Tādējādi izmantojot vienu koda gabalu mēs varam izveidot daudzus lapas komponentus, kas var būt atšķirīgi viens no otra. */

/* Izskatīsim klases: class sintaksiskās īpašības ar piemēriem: . */

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, backgroundColor) {
		super(height, width);
		this.text = text;
		this.backgroundColor = backgroundColor;
	}

	showMyProperties() {
		console.log(`Teksts: ${this.text} Krāsa: ${this.backgroundColor}`);
	}
}

const square = new Rectangle(10, 10);
const long = new Rectangle(12, 15);

const div = new ColoredRectangleWithText(10, 12, 'Hello world!', 'red');
div.showMyProperties();

console.log(div.calcArea());
console.log(square.calcArea());
console.log(long.calcArea());

/* Svarīgi atcerēties, ka klašu nosaukumus JavaScript programmēšanas valodā mēs vienmēr rakstām ar lielo burtu. To ir ļoti būtiski ievērot. Pēc tam, kad esam uzrakstījuši klases nosaukumu, mēs liekam {} iekvas, mēs neliekam piederības zīmi. Mēs esam izveidojuši klasi - šablonu, kur iekš {} iekavām nosakām tā īpašības, ko tas pratīs izdarīt. Svarīgākie parametri ir tie argumenti, kas darbosies uz āru. Tā pat kā ar funkcijām, kad mēs iekš funkcijas () iekavām rakstījām tās argumentus. */

/* Lai konstruētu mūsu klasi mums ir tāda īpašība kā: construktor - konstruktors. To rasktām iekš klases {} iekvaām. Rakstām: constructot, leikam () iekavas un atveram {} iekavas. Konstruktora () iekavās rakstām argumentus, tā pat kā strādājot ar funkcijām, argumentus, ar kuriem gribam strādāt. Mūsu piemērā tie ir: height, width. */

/* Tālāk mums ir jāieraksta jaunā objekta īpašības - atslēgas un to vērtības. Jo klases tā pat kā funkcijas konstruktori kalpo mums, lai izveidotu jaunus objektus. Izmantojot konteksta izsaukšanu: this mēs vēršamies pie jaunā izveidotā objekta eksemplāra. Šinī piemērā pie katra atsevišķa kvadrātiņa. */

/* Izveidojam divas objekta īpašības: this.height = height un this.width = width. Tālāk veidojam kalses metodes, metodes var būt vienai klasei daudzas. Ievērojam, ka aiz īpāšībām un metodēm mēs neliekam zīmi ; semikolu, jo tad tā būs kļūda, tā ir klašu sintaksiskā īpatnība. */

/* izmantojot metodi: return mēs liekam atgriest kvadrāta augstumu reizinātu ar kvadrāta platumu, jo vēlamies iegūt kvadrāta laukumu. Veidojam jaunu objektu izmantojot: this, liekam punktu un rakstām height reizināts ar this.width. */

/* Mūsu metode un klase principā ir gatava, un tagad mēs varam to izmantot. Rakstām jaunu mainīgo: const square, kam pievienojam: new Rectangle() iekavās rakstot divus skaitļus: 10, 10, kas ir kvadrāta austums un kvadrāta platums. Mēs esam izveidojuši jaunu objektu, kam ir divas īpašības: width un height. Un tam ir arī metode: calcArea(). Izpildām konsoles izvadē mainīgo square liekam punktu un izsaucam metodi: calcArea(). Izpildot šādu kodu mēs konsolē redzam: 100. */

/* Izmantojot konst mēs varam veidot jaunus objekta eksemplārus, ar jauniem skaitļiem, un mēs redzam, ka tie uzreiz manto visas īpašības un metodi: calcArea(). Izpildot kodu konsolē mēs redzam otro skaitli: 180. Redzam, ka kods strādā pareizi. */

/* Tālāk, kad strādāsim ar projektiem, mēs izmantosim tieši klases, jo to izmantošana ir ērtāka nekā funkcijas konstruktoru izmantošana. Un vairums reālo projektu izstrādē arī tiek izmantotas klases. */

/* Tagad atcerēšimies principus, kas attiecās: Uz Objektiem orientēta programmēšanu. */

/* Pirmais princips: Apstraksija: kad mēs atdalām koncepciju no tās eksemplāra.Konscepcija mūsu piemērā ir kopējais šablons: Rectangle, un eksemplāri, kas ir izveidoti pamatojoties uz koncepciju, tie ir mainīgie ar new Rectangle().Šis pirmais princips mums ir ievērots. */

/* Otrais princips: Mantošana: objekta jeb klases iespēja bāzēties uz citu objektu jeb klasi. Tas ir galvenais mehānisms, lai mēs atkārtoti varētu izmantot kādu kodu. Šāda klašu mantošanas iespēja nosaka to hiarhiju. Iztēlosimies to ar piemēru: Mums ir liela klase: Title, kas satur dažādus rakstus, kas ir izvietoti web lapā. Laikam ejot tā pieaug, tiek pievienoti ar vien jauni raksti. Un mums vajag izveidot rakstus, kas būs zem dažādām rubrikām - tēmām. Katrs no šiem rakstiem mums būs kaut kā pielāgots, bet pie tam tie vienalga tie būs tādi prototipi, uz kuru pamata tiks kaut kas veidots. Un šeit jau ums veidojās hiarhija. Sākumā galvenā klasea: Title, kas saturēs daudz dažādus datus, kas saturēs visus rakstus, kas ir lapā. Pēc tam mums sākās rakstu sadalīšana pa tēmām, kam katram jau ir savas īpašības. Un nedaudz vēlāk mēs no šīm tēmām veidojam atsevišķus eksemplārus. */

/* Šāda hiarhija JavaScript tiek izmantota ļoti bieži, un arī mēs to turpmāk izmantosim. */

/* Papildināsim mūsu piemēru ar jaunu klasi: ColoredRectangleWithText. Skatīt peimēru augšā: . */

/* Mēs mūsu piemērā izveidojam jaunu klasi: ColoredRectangkeWithText, kas mantos visas īpašības un metodi no iepriekšējās klases: Rectabgle. Lai to izdarītu mums aiz jaunās klases nosaukuma jāizmanto atslēgvārds: extends un aiz tā jāraksta galvenāsklases nosaukums: Rectangle. Mēs šeit izmantojam mazus piemērus, bet reālajos projektos būs gari, apjomīgi kodi. Mums būs klasēs ļoti daudz īpašību un metodes, tādēļ šī problēma būs ļoti aktuāla. Mēs tā apt izmantojam metodi: constructor() iekavās rakstot argumentus: height, komats, width, komats, text. text, jauns klases konstruktora arguments, un backgroundColor, kas arī ir jauns klases konstruktora arguments. */

/* Iekš konstruktora {} iekavām mēs izmantojam universālu metodi: super, kas ir super konstruktors klasei līmeni augstāk, galvenajai klasei, no kuras tiks mantotas visas īpašības un metodes, kas ir galvenajai klasei: Rectangle. Pateicoties metodei: super().Konkrētajā piemērā tiks mantotas īpašības: height un width, un metode: clacArea(). */

/* Bet šeit ir viens ļoti svarīgs nosacījums, kas mums ir jātcerās: metodei: super() vienmēr jāatrodās iekš constructor pirmās rindas. metodes: super() iekavās rakstām to īpašību nosaukumus, kurus vēlamies no galvenās klases mantot. Rakstām metodes: super() iekavās: height, width. Pēc tam jaunajā klasē nosakām jaunās īpašības: this.text un this.backgroundColor. Pievienojam tām vērtības, kas ir vienādas ar to nosaukumiem. */

/* izveidojam jaunajai klasei jaunu metodi: showMyProperties(), kuras iekavās {} rakstām darbību, kura tai jāveic, konkrētajā piemērā izpildām konsoles izvadi, tās iekavās () rakstot tesktu un īpašības. Šo visu rindu rakstām iekš `` atpakaļejošajām iekavām, jo mēs izmantojam konkatizāciju, dažādu datu, darbību savienošanu vienā rindā. */

/* lai pārbaudītu vai jaunās klases konstruktors pilda savas funkcijas, mēs deklarējam mainīgo: div, kam pievienojam: new ColoredRectangleWithText(), kuras iekavās () rakstām vērtības: augstumu, platumu, tekstu un krāsu. Tekstu un krāsu rakstām '' pēdiņās, atdalot vienu no otra ar komatu. Izpildām konsoles izvadi, iekavās () rakstot: */

/* Izpildot kodu konsolē, mēs redzam, ka izpildās metode: showMyProperties(), kā arī izpildās console.log(div.calcArea()). Izpildās arī visi pārējie: conosle.log() pieprasījumi. Redzam, ka abas mūsu klases izpilda savas funkcijas, un mēs saņemam to rezultātu ko vēlējāmies. Redzam, ka mantošanas princips strādā teicami. */

/* Ar šādām kontrukcijām mums strādājot ikdienā nāksies darboties ļoti bieži. Tādēļ mums ir jāzin kā tās darbojās. It īpaši izstrādājot Web. */