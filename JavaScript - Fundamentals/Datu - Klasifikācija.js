'use strict';

/* JavaScript programmēšanas valodā ir dažādi datu tipi. Tie iedalās divās grupās: parastie datu tipi jeb primitīvie dati un objekta datu tipi. */

/* Parastie datu tipi: */

/* Number tipa dati: tas ir tad, kad mums ir doti skaitļi: 1, 3, 2.6, 0.7.Skaitļus, kas nav veseli skaitļi atdalām ar punktu, nevis ar komatu. */

/* Rindiņtipa dati jeb rindas tipa dati: string dati, tas ir tad, kad dati ir ielikti pēdiņās '', dažādi vārdi, nosaukumi, bet arī skaitļi, ja tie ir ielikti pēdiņās '' jo tad tie pārvēršās par string rindas tipa datiem. */

/* Loģiskā tipa dati: Boolean: true un false - patiesība vai nepatiesība. Tiem ir tikai divas šīs loģiskās vērtības. */

/* Null: nulles tipa dati, tas ir tad, kad mums vispār nav dati, nav ne nosaukums, ne vērtības. Kad dati vienkārši neeksistē. */

/* Underfined: Neatrasti dati, tas ir tad, kad piemēram nosaukums ir, bet vērtības nav, kas nozīmē - dati nav atrasti. Tas ir tad, ad mums ir vispārīgi dati, bet nav to vērtība. */

/* Symbol: simbola tipa dati, tas ir tad, kad mums datu vietā ir kādi simboli, piemēram: @. Bet tādi JavaScript programmēšanas valodā ir reti sastopami. */

/* BigInt: Liela tipa dati, tas ir tad, kad mums ir ļoti lieli skaitļi. Tie ir tikai skaitļa tipa dati. */

/* Objekta tipa dati. */

/* Objekta tipa dati iedalās divās grupās: specifiskie objeka tipa dati un parastie objekta tipa dati. */

/* Specifiskie objekta tipa dati: . */

/* Datu masīvi: tie ir datu masīvi, kuros var būt dažādu tipu dati, bet tie vienmēr ir noteiktā stingrā kārtībā. Katrai to vērtībai ir savs indekss. Indeksi vienmēr sākās no: 0, jo datori skaita no nulles. Datu masīva dati - vērtības vienmēr rakstās iekš [ ] iekavām, katru vērtību atdalot ar komatu. Iekš viena datu masīva var būt vēl citi datu masīvi. */

/* Funkcijas: Funkciju tipa dati. Funkcijas: function arī ir dati. */

/* Objekta tipa dati: tie ir dati, kas rakstās iekš { } iekavām, visbiežāk tie ir pa pāriem. Nosaukums : vērtība, . Ja tie ir vairāki dati, tad aiz katras vērtības liek komatu, lai tos atdalītu. Iekš objekta var būt ielikti vēl citi objekti, datu masīvi. Objekta tipa dati no datu masīva atšķirās ar to, ka tiem nav stingras kārtības. To nosaukumi arī var saturēt skaitļus. */

/* Regulāru izteiksmju dati. */

/* Kļūdas: Error. Tie arī ir dati. Kad mums tiek izdota kļūda, tad tie ir error tipa dati. */

/* JavaScript programmēšanas valoda mums vienmēr atgriež kaut kāda tipa datus, tā vienmēr mums kaut ko atgriež. JavaScript programmēšanas valoda ir objektiem bāzēta programmēšanas valoda. */

/* Parastie objekta tipa dati jeb parastie objekti. Tie ir visa veida objekta tipa dati, kas neatbilst iepriekš aprakstītajiem objekta datu tipiem. */

/* Apskatkatīsim katru datu tipu izmantojot vienkāršus piemērus: */

let number = 4.6;
console.log(number);

console.log(4 / 0);
console.log(-4 / 0);

/* Šādā gadījumā, ja mēs veiksim neloģiskas darbības, mēs konsolē saņemsim: Infinity - Bezgalīgu vērtību. Otrajā izvadē mēs konsolē redzam: - infinity */

console.log('Zane' * 3);

/* Šinī gadījumā mēs konsolē saņemsism datu vērtību: NaN - Not a Number, kas nozīmē - Nav skaitlis. Jo mēs nevaram String datu tipu reizināt ar Number datu tipu. Jo šī nav matemātiska darbība. */

const person = 'Zane';
console.log(person);

/* Šis piemērs ir parasti string - rindas tipa dati. Rindas tipa dati var saturēt jebkādu garumu, jebkādu tekstu. Skaitļi, ja tie ir ielikti '' pēdiņās arī ir string - rindas tipa dati. */

const bool = true;
console.log(bool);

/* Loģiskie dati, kas var būt tikai: true or false, patiesība vai nepatiesība. Varam arī teikt tā, ja mums uzdot jautājumu: jā - true, nē - false. */

// console.log(something);

/* Null tipa dati, akd tādi dati vispār neeksistē. Ja mēs šādu pieprasījumu palaižam konsolē, tad mēs saņemam kļūdu. */

let und;
console.log(und);

/* Undefined dati, kad mums ir nosaukums, ir mainīgais, bet nav vērtība. Kad mūsu mainīgais nesatur nekādu vērtību. Pieprasot konsolē izvadīt und, mēs redzam: underfined. */

/* Obekta tipa dati ir datu kolekcija, kas sevī var saturēt dažādus datu tipus. Objekts - Datu komplekss. Objekta datu tipam ir īpašības un to nozīme, pierakstā tas izskatās šādi: */

const obj = {
	name: 'Zane',
	age: 34,
	isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

/* Lai piekļūtu kādai objekta īpašības vērtībai, lai to izvadītu konsolē, mums ir jāievēro noteikts pieraksts. Mēs iekš console.log ( ) iekavām rakstām objekta nosaukumu, liekam punktu, aiz punkta rakstot tās īpašības nosaukumu, kuru mēs vēlamies izvadīt konsolē, jeb veikt ar to kādas citas darbības. */

/* Otrajā konsoles pieraksta pieprasījumā, mums ir jāatceras tas, ka vēlamies izvadīt kādu objekta īpašību pierakstot to [ ] iekavās, tad mums tās īpašības nosaukums jāraksta pēdiņās '', lai mums nebūtu kļūdas, jo savādāk JavaScript uzskatīs, ka tas ir mainīgais un mums būs kļūda. Bet pareizākais ir vēršoties pie objekta īpašībām console.log( ) pieprasījumus veikt rakstot objekta nosaukumu, liekot punktu un tad rakstot īpašību, kuras vērtību mēs vēlamies izvadīt konsolē. */

/* Datu masīvs pieder pie objekta tipa datiem, tas nav atsevišķs datu tips. Klasisks datu masīva piemērs, kas satur dažādus datu tipus, bet noteiktā secībā,tiem is stingra kārtība. Iekš datu masīva var būt ielikti objekti un ielikti datu masīvi. */

let arr = ['plum.png', 'orrange.jpg', 6, 'apple.bnp', {}, []];
console.log(arr[1]);

/* Kad mēs vēršamies pie datu masīva, vēlamies izvadīt kāda indeksa vērtību, tad iekš console.log ( ) iekavām rakstām datu masīva nosaukumu, liekam [ ] iekavas, iekavās rakstot indeksa numuru, kura vērtību vēlamies redzēt konsoles izvadē. Atceramies datora valodā skaitīšana sākās no nulles. Mēs konsoles izvadē šinī piemērā redzam: orrange.jpg. jo dators skaitot no nulles izvada mums pirmā indeksa vērtību. */

/* Objekts satur īpašības un to vērtības - nozīmes, bet datu masīvā par īpašībām var uzskatīt indeksus, bet par nozīmēm, tos datus, kas ir noteikti datu masīvā. */

/* Jebkuru objektu var pārvērst par datu masību un jebkuru datu masīvu var pārvērst par objektu. Datu masīvi principā ir tie paši objekti, tikai īpašību nosaukumu vietā ir noteikti indeksi, kurus mēs nevaram mainīt jeb kā citādi ietekmēt. */




