'use strict';

/* Mainīgos JavaScript programmēšanas valodā var uzskatīt par kastītēm. Mums ir kastīte, kurai ir nosaukumus, un kurā kaut kas ir ielikts iekšā. */

/* Lai noteiktu kādu mainīgo mēs izmantojam atslēgvārdus: let un const. Let izmantojam tad, ja vēlāk vēlamies mainīt mainīgā vērtību, bet const izmantojam, tad, kad skaidri zinām, ka mainīgā vērtība nemainīsies. */

console.log(name);
var name = 'Zane';
console.log(name);

/* Agrāk mainīgo noteikšanai izmantoja atslēgvārdu: var, bet tas bija vēl pēc vecā JavaScript standarta. Atslēgvārdu: var mēs varam sastapt vecos kodos, vecos projektos. Mianīgā vērtību, kas deklarēts izmantojot atslēgvārdu: var mēs varam mainīt. Ar jauno E26 standarta iznākšanu var mainīgo noteikšanai vairs neizmanto, jo tam bija neloģiskas īpašības. Noteikts mainīgais izmantojot atslēgvārdu: var varēja tikt izmantots pirms bija veiktas kādas darbības, tas bija jua pirms tām. Un šinī piemērā mēs to redzam, ka kaut mainīgā nosaukums konsoles izvadē ir nostrīpots, tas tiek izpildīts - izvadīts. Bet izvadē mēs redzam: uderfined, kas pieder pie datu tipa: nav atrasti dati. Bet ja mēs to pašu konsoles izvadi atkārtosim pēc mainīg;a deklarēšanas izmantojot atslēgvārdu: var, mēs redzēsim tā vērtību: Zane. Mēs redzam, ka mainīgo varam izmantot jau pirms tā pieraksta, līdz ar ko kodā veidojās neloģika. Tādēļ jaunajā standartā un visos mūsdienīgos projektos netiek izmantots: var mainīgo deklarēšanai. */
    
/* Bet ja mēs tādu pašu darbību: konsole.log() mēģināsim izpildīt pirms mainīgā deklarēšanas izmantojot atslēgvārdu: let, tad mums tas nesanāks, jo mums būs kļūda.Jo tas neatbilst loģikai.Loģiski ir vispirms deklarēt mainīgo, un pēc tam ar to veikt vajadzīgās darbības. */

console.log(user);
const user = 'zany1919';

/* bet ja mums ir jāraksta projekts vecai pārlūka versijai, tad mums ir jāraksta mainīgie izmantojot atslēgvārdu: var. Lai vecajās pārlūka versijās darbotos mūsu kods. */

let number = 5;
const leftBorderWidth = 1;
console.log(leftBorderWidth);

/* Šeit mēs ievērojot loģiku redzam, ka vis ir pierakstīts pareizi un mums nav kļūdas, mūsu kods strādā. */

/* Deklarētos mainīgos izmantojot atslēgvārdus: let un const mēs varam izmantot tikai pēc to deklarēšanas, un tas ir pareizi, loģiski. */

/*Ja mainīgais ir deklarēts iekš { } iekavām, tad tas ir redzams, tikai { } iekavās un ārpus iekavām mēs nevaram to izmantot. Bet mēs varam to izmantot iekavās. Tā kā šinī piemērā: */

{
	let result = 50;
	console.log(result);
}
/* console.log(result); - Mums būs kļūda. Mēs konsolē redzēsim, ka mums ir kļūda, un mainīgais: result neeksistē. Bet ja mēs šādu darbību veiktu izmantojot atslēgvārdu: var, tad mums kļūdu nebūtu, jo mūsu darbība būtu redzama ārpus { } iekavām, tā tiktu izpildīta. */

/* JavaScript programmēšanas valodā zīme: = ir piederības zīme. Mēs nosakām, ka kastītei ar kādu nosaukumu = - pieder kāda vērtība. Mēs kaut ko ieliekam iekšā kastītē. Tā nav vienādības zīme, tā ir piederības zīme. Pirmajā piemērā mēs izmantojam atslēgvārdu: let, kura vērtība var mainīties, bet otrā piemērā mēs izmantojam atslēgvārdu: const, kuram ir noteikta nemainīga vērtība. Citi noteiktus mainīgos izmantojot atslēgvārdu: const sauc par konstantēm, bet reālajā programmēšanas valodā JavaScript konstante īsti nav konstante. */

/* Rkastot mainīgo nosaukumus mēs nedrīgstam sākumā likt skaitļus, bet mēs to varam darīt beigās. Mainīgo nosaukumos negrīgst likt jau rezervētus vārdus, kurus izmanto JavaScript programmēšanas valoda, metodes nosaukumus, atslēgvārdus. Mainīgo nosaukumi, funkciju nosaukumi, jāraksta apzināti, lai jebkurš, kurš strādās ar mūsu kodu, arī mēs paši pēc kāda laika uz to paskatoties varētu saprast, kas uz ko attiecās, lai mēs un citi izstrādātāji varētu viegli lasīt - saprast mūsu kodu. */

/* Rkastot mainīgo nosaukumus mēs varam priekšā likt tikai divas zīmes: $ un apakšsvītru _ . Citas zīmes nedrīgst likt priekšā nosaukumiem JavaScript programmēšanas valodā. */

/* JavaScript programmēšanas valodā populārākais nosaukumu pieraksta veids ir: vārdus rakstīt kopā, bet katru jauno vārdu sākt ar lielo burtu. Sādu pieraksta veidu sauc par camelCase pieraksta stilu, un tas ir vispopulārākais un visbiežāk lietotais pieraksta stils JavaScript programmēšanas valodā. Kaut tas skaitās vispareizākais rakstības stils ir vēl citi stili, kuri ir retāk sastopami, bet tomēr - tādi ir. */

/* Nosakot mainīgo, rakstot tam nosaukumu tas nedrīgst atkārtoties, jo nevar divas reizes noteikt mainīgo ar vienādu nosaukumu, jo tad tā būs kļūda. */

number = 10;
console.log(number);

/* Šeit mēs redzam, ka mainīgā vērtību, kas noteikta izmantojot atslēgvārdu: let mēs varam mainīt un izmantojot metodi: console.log( ) iekavās rakstot mainīgā nosaukumu, mēs redatora jeb interneta pārlūka iebūvētajā konsolē redzam: 10. Izmantojot metodi: console.log( ) mēs pieprasām kādu koda gabalu izvadīt konsolē, atgriezt mums kādu vērtību, izpildot noteiktās darbības. */

// leftBorderWidth = 10;

/* Mēģinot to pašu izdarīt ar stingri noteikto mainīgo izmantojot atslēgvārdu: const mēs jau uzreiz redzam, ka koda gabals pastrīpojas ar sarkanu, kas nozīmē - kļūdu koda pierakstā, jo mēs tā nedrīgstam darīt. Tas ir stingri deklarēts mainīgais un tā vērtību mēs nedrīgstam mainīt. */

/* Laba JavaScript programmēšanas valodas pieraksta prakse ir: visur kur iespējams, pēc iespējas deklarēt mainīgos izmantojot atslēgvārdu: const. */

/* Bet atslēgvārda const izmantošanā ir savas īpatnības. JavaScript programmēšanas valodā pierādās tas, ka konstantes nav gluži konstantes. Izskatīsim to šādā piemērā: */

const obj = {
	a: 50
};

obj.a = 10;

console.log(obj);

/* Ja mēs šādi pierakstām mainīgo izmantojot atslēgvārdu: const, mēs varam mainīt tā vērtību, izvadot to konsolē mēs redzam objekta: obj saturu. Šinī piemērā, kad pierakstam objektu mēs redzam, ka izpildās nosacījums, ka konstante nav īsti konstante. Jo tiēsi tādas kā konstantes JavaScript programmēšanas valodā nepastāv. */

/* JavaScript programmēšanas valoda ir uz objektiem bāzēta programmēšanas valoda. */

/* Lai mums vecajām pārlūka versijām nebūtu jāraksta kods pēc vecajiem standartiem, ir dažādas tehnoloģijas, kas jauno koda versiju pārvērš pēc vecā standarta, līdz ar to mēs mūsu rakstīto kodu varam izmantot vecās pārlūka versijās. */

/* Pastāv direktīva, kas paredz, ka mēs varam likt izpildīt mūsu kodu stingri.Izmantojot stingro režīmu, kas JavaScript valodā rakstās koda sākumā pirmajā rindā rakstot: 'use strict', kas nozīmē to, ka mēs strādājam mūsdienīgā režīmā, pēc jaunākā E26 standarta, un mēs izslēdzam nesakritības un neloģiku, kas bija vecajos standartos. Tas nozīmē, ka rasktot kodu mums ir jāievēro visi sintakses, pieraksta nosacījumi, mēs nevaram rakstīt pavirši, kaut ko neievērojot, izlaižot, jo tad mums būs kļūda un mūsu kods nedarbosies. Stingrā režīma izmantošana palīdz izbēgt no neprecizitātes, nekonkrētības. Stingrais režīms konrolē mūsu kodu. * /

/* Stingrais režīms jānosaka katrā koda dokumentā, pirmajā rindā: 'use strict'. */

/* Rakstot koda dokumentu: script mums ir jāievēro tā kopējais stils, jāraksta tas noteiktā stilā, lai mēs un citi varētu tajā viegli orientēties, viegli to lasīt, saprast. Katrai programmēšanas valodai ir savs vienotais stils, kas ir jāievēro rakstot kodu. */

/* Zīmi: semikols ; mēs liekam vienmēr, kad mēs pabeidzam rakstīt kādu darbību, nosakām mainīgo, izmainām tā vērtību, izpildām kādu darbību. Pareiza zīmes ; izmantošana nāk ar pieredzi ar laiku, pagaidām mums ir papildinājumi, programmas, kas pasaka priekšā, ka mums ir jāliek zīme ; , bet mums ir pašiem jāiemācās, kad likt semikolu , un kad nelikt. Semikola izmantošana nozīmē to, ak mēs pabeidzam kādu darbību, jo ja mēs to nepieliksim, tad kods jaunu rindiņu, jaunu darbību uzskatīs kā iepriekšējās darbības, rindiņas turpinājumu. Un mūsu kods nedarbosies un būs kļūdas, tadēļ semikola izmantošana ir ļoti būtiska. */


