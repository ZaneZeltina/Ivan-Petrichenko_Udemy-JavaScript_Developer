'use strict';

/* Šinī lekcijā mēs izskatīsim moduļu pieeju un kā mēs varam izmantot tos savā darbā. */

/* Moduļi tiek izmantoti, lai noslēptu iekšējās koda realizācijas detaļas. Izskatīsim tā priekšrocības. Ar moduļu palīdzību, mēs varam sadalīt garu koda failu, kur vis ir sarakstīts vienā garā kodā, mēs to varam sadalīt pa atsevišķiem failiem, izmantojot moduļus. */

/* Moduļu priekšrocības. Pirmkārt: moduļi pēc to struktūras ir pašpietiekami un neatkarīgi. Otrkārt: Moduļi nodrošina globālās apkārtnes - teritorijas tīrību. Ko tas nozīmē? Kad mēs izstrādājam kodu, deklarējam mainīgos, tie kļūst redzami globāli. bet to nav ieteicams darīt, jo globālajiem mainīgajiem ir jābūt pēc iespējas mazāk mūsu kodā. Moduļi ļauj mums izbēgt no globālās koda teritorijas piesārņojuma un izbēgt no konflikta situācijām, kad mums ir vienādi nosaukumi, jo visi moduļa dati eksistē tikai tā personīgajā redzamības laukā. */

/* Labi izstrādāts modulis nav nekādi atkarīgs no cita koda un tas var viegli tikt mainīts jeb izdzēsts. */

/* Kā piemēru ņemsim mūsu script.js failu no mūsu projekta: Food - Project. */

/* Izskatīsim to ar vienkāršu piemēru, kad mēs varam iegūt koda piesārņojumu. Izveidojam mapīti: Moduļi_Un_To - Izmantošana, iekš tās izveidojam projekta struktūru ar html, css un diviem js failiem, kur js mapītē mums ir faili: script.js un lib.js. Izveidojam abos failos mainīgo ar vienādu nosaukumu: app, piešķiram tam dažādas vērtības. Atverot šādu kodu pārlūkā, mēs konsolē iegūstam kļūdu, jo tā mums raksta, ka ir notikusi sintakses kļūda, ka nevar būt mainīgie ar vienādiem nosaukumiem. Tieši šādi mēs iegūstam koda piesārņojumu. */

/* Tieši tādēļ mēs cenšamies neveidot globālas redzamības mainīgos, mums ir jācenšas mainīgos deklarēt lokāli, lai tie nebūtu redzami globāli, jo savādāk, ja mēs pieslēgsim kādu bibliotēku, jeb kādu failu, un, ja mums būs mainīgie, kas ir redzami globāli ar vienādu nosaukumu, tad mēs saņemsim kļūdu. */

/* Jo ļoti bieži mēs savu kodu pārnesam no projekta uz projektu. Inkapsulācija mums sniedz iespēju mainīt iekšējo moduļu realizāciju bez problēmām. Tādēļ mēs to varēsi  katru reizi izmantot bez problēma, to nedaudz modificējot, lai pielāgotos katram uzdevumam. Tādejādi uzlabojot savus moduļus, un iespējams, ka šos uzlabojumus varēsim pielietot arī iepriekšējos projektos. */

/* Tagad praksē visi izmanto klases, tā kā mēs to darījām iepriekšējā mācību stundā. Moduļu pieeja tika izdomāta vēl ilgi pirms klasēm. Un mēs atceramies, ka klasēs iekšā ir vienkārša funkcija. */

/* Mēs izskatīsim divus pamata veidus kā mēs varam izstrādāt moduļus caur natīvo realizāciju. */

/* Pirmais veids: izmantot anonīmu pašizsaukšanas funkciju. Piemērs atrodams: script.js failā. */