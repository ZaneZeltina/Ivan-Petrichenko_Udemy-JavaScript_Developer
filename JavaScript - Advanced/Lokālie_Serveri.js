'use strict';

/* Šinī mācībstundā mēs runāsim par serveriem. Kāpēc mums tas var būt vajadzīs? . Serveris: tā ir programma, kas ļauj palais interneta web lapu, un veikta r to sarežģītas darbības. Serveris ir BackEnd daļa. Tur tiek izmantotas citas programmēšanas valodās, interpretatori. Un būtiskākais ir tas, ka to daļu lietotājs nekad neredzēs. Pirms mēs sākam iepazīt kas ir serveris, mums ir jāsaprot tā īpašības, iespējas un izmantošanas ierobežojumus. */

/* Izskatīsim situāciju, lai labāk saprastu kā serveri darbojās un kur tie tiek izmantoti. */

/* Atveramies, kas ir hosting? Hostings ir, tas, kad mēs pērkam atsevišķu vietu un mapi pie hostinga ražotāja - izstrādātāja. Kad būsim nopirkuši hostingu ar domēnu, kur piemēram lapas web adresē būs nosaukumā mūsu vārds, uzvārds, un domēns: lc, com, uk utt. Ja tā būs reģistrēta, tad mēs savu lapu redzēsim internetā. */

/* Lai tas vis strādātu mums ir vajadzīgs, lai hostinga pakalpojuma sniedzējam būtu ieslēgs serveris. */

/* Servera pakalpojuma sniedzējam ir liels un jaudīgs dators, kur tiek palaista mūsu mapīte ar web lapu, lapām. Mēs pie tām varam piekļūt izmantojot internetu. */

/* Šis bija klasisks servera izmantošanas piemērs. Bet mums kā izstrādātājiem ir visu laiku jātestē mūsu produkts, kad mēs izstrādājam produktus: web aplikāciju, web lapu. Mums ir jātestē mūsu produktu. Un priekš tā mums ir vajadzīgi: lokālie serveri, kas ļauj izpildīt tādu pašu funkcionālu, izmantojot tikai mūsu datoru. Lokālajiem serveriem ir sava mini klasifikācija, kuru mums ir jāzin, lai veismīgi strādātu ar serveru tehnoloģijām. */

/* Lokālie serveri mēdz būt diva veidi: parastie, kas izpilda vienu konkrētu uzdevumu,un kompleksie, ks izpilda vairākus uzdevumus vienlaicīgi. Pie parastajiem serveriem mēs varam pieskaitīt VS Code papalašinājumu; live server. Izmantojot live server, mms atverās mūsu projekta lapa, un visas izmaiņas, kuras mēs veicam HTML dokumentā automātiski tiek attēlotas lapā, mūsu projektā. Lapas automātiska atjaunošana ir ieslēgtā, un pie katrām veiktajām izmaiņām tā atjaunojās. Arī tad, kad veicam izmaniņas CSS failā un JS failā. */

/* Ar šādu darbību mēs izmantojam mazu daļiņu no BackEnd daļas. */

/* Tieši tas pats notiek, kad mēs izmantojam: Gulp un tur palaižam tādu funkciju kā: browserSync. Tas pilda tādu pašu funkciju kā: live server. Bet browserSync izmantošanai vēl ir cits papildiespējas, kas ļauj iekš mūsu wi-fi tīkla robežām piekļūt mūsu lapai. Tas ir ļoti ērti, kad mēs testējam mūsu produktu. Mēs izmantojot browserSync varam arī atvērt lapu uz mobilā telefona, kas pieslēgts mūsu wi-fi tīklam. */

/* Ir vēl citas analogas metodes: JSON serveri, HTTPS serveri. */

/* Šie ir mazie lokālie serveri, kas pilda tikai daļiņu no funkcijām. */

/* Kādus pieprasījumus prot apstrādāt šie serveri? Izskatīsim piemēru ar HTTP serveri. Tie apstrādā get un post pieprasījumus. Piemēram: mēs atveram Google, kaut ko meklējam, mēs automātiski sūtam: get pieprasījumu serverim. Tas pats attiecās, kad mēs kādā lapā spiežam: ielādēt vēl, piemēram preces, mēs atkal sūtam serverim pieprasījumuizmantojot: get. Get no Angļu valodas - pieprasīt. */

/* Viens no populārākajiem HTTP servera pieprasījumiem ir pieprasījums: post, kas sūta datus uz serveri, mēs pieprasām kādus datus nosūtīt serverim. Piemēram, mums lapā ir kontaktu forma, kur mēs ievadām datus, spiežam pogu: nosūtīt. Šādi mēs nevis pieprasām informāciju, bet gan pieprasām sūtīt informāciju uz serveri. Šāds pieprasījums saucās: post pieprasījums. Ir daudz dažādi pieprasījumi serveriem. Bet tie ir sastopami retāk. */

/* Mums interesē tieši get un post pieprasījumi.No lokālajiem serveriem mēs varam tikai iegūt datu - pieprasīt izmantojot: get pieprasījumu, bet sūtīt, izmantojot pieprasījumu: post mēs nevaram. Ja mēs izmantosim lokālo serveri un mēģināsim pieprasīt sūtīt datus: post, mēs saņemsim kļūdu. Jo mūsu lokālie serveri neprot apstrādāt: post pieprasījumus. */

/* Izmantojot HTML lapas savos lokālajos serveros mēs nevaram piepraasīt no tiem datus, nevaram izmantot pieprasījumu: get. Kāa arī nevaram izmantot pieprasījumu: post. */

/* Lai pilnvērtīgi strādātu ar projektiem, lai varētu piepraasīt datus: get, un pieprasīt sūtīt datus: post, mums ir vajadzīgi pilnvērtīgi serveri, kuri normāli darbosies ar mūsu lapām, tā pat kā hostinga pakalpojuma sniedzēji. */

/* Tālāk mēs mācīsimies tādu tehnoloģiju kā: AJAX, kas mums ļauj pieprasīt saņemt un sūtīt datus: get un post. Kas neprasa katru reizi pārlādēt lapu. */

/* Šeit mums ir vajadzīgs pilnvērtīgs lokālais serveris. Viens no tiem ir Open Server. Ja mēs izmantojam Windows operētājsistēmu mums jāizvēlās: Open Server, bet, ja strādājam uz MacOs datora, uz Apple, tad mums jāizmanto: MAMP serveris. MAMP serveris der arī priekš Windows Operētājsistēmas. Šie abi serveri darbojās praktiski vienādi, un pēc to uzstādīšanas nav nepieciešami papildus uzstādījumi. */

/* Izvēlamies sev uzstādīt serveri: MAAMP PRO izmantojot instalācijas failu lejupielāžu mapītē. */

/* Uzstādam otru serveri: Open Server. */

/* Tagad mēs izmantojot serveru MAMP varam veikt pieprasījumus: get un post. */



