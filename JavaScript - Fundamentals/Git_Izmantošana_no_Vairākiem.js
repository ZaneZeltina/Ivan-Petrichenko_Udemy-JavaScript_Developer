'use strict';

/* Ja mums ir viens dators mājās, bet otrs ofisā, un mēs gribam no abiem strādāt pie viena projekta, pastrādāt ofisā, atnākt mājās, atjaunināt projektu un turpināt arto strādāt no mājas datora, tad mums tam ir: Git versiju kontrole un Git Hub - attālinātā failu glabātuve. */

/* Ja esam pastrādājuši pie viena datora un tagad gribam strādāt pie tā paša projekta no cita datora, tad mums sākumā ir jāiekopē esošais projekts no Git Hub repozitorija jaunajā datorā, tajā no kura mēs gribam strādāt pie konkrētā projekta. */

/* Lai iekoētu jaunajā datorā esošu projektu mums ir jāatver Git Hum repozitorijs, kur ir mums vajadzīgais projekts, jānospiež uz pogas: code, jāizvēlās HTPPS, jānokopē tur dotās adreses ceļš, kas šinī gadījumā ir: 
https://github.com/Zany1919/Learn_JavaScript.git . Bet mus ir jāatver terminālis un tajā jāizpilda klonēšanas darbība, kas ir šāda: */

//git clone https://github.com/Zany1919/Learn_JavaScript.git

/* Mēs redzam, ka mūsu jaunajā datorā mapītē darbs ir viss mūsu projekts, un mēs varam sākt ar to strādāt. */

/* Ļoti svarīga komanda, kas mums ir jāizpilda katru reizi atsākot darbu pie mūsu projekta, neatkarīgi no datora, kurā mēs gribam strādāt. Šī komanda ir vajadzīga, lai ja mēs, vai kāds cits izstrādājs attālinātajā failu glabāšanas servisā: Git Hub ir veicis kādas izmaiņas, pievienojis vai mainījis kādus failus. Izpildot šo komandu mēs uzreiz savā datorā redzam jaunākos failus, strādājam ar visjaunāko projekta versiju. Mēs strādājam pie projekta, pēc tam veicam ierastās piecas mums jau zināmās komandas. Ja iepriekš būsim izpildījuši komandu: git pull, mums neradīsies terminālī kļūda, kas daudziem rodas, kad ir Git Hub attālinātajā failu glabāšanas servisā veiktas izmaiņas, bet sākot strādāt lokāli nav izpildīta šī komanda. Ja mums ir izpildīta šī komanda, mums tālāk strādājot, saglabājot versijas - pievienojot commit un augšuplādējot izmaiņas vis notiek bez kļūdām. 

//git pull

/* Katru rezi neatkarīgi no kura datora mēs strādājam, kad mēs kaut ko mainām, papildinam savā projektā, lai mēs strādātu vienmēr pie projekta aktuālākās versijas, mums ir jāizpilda sešas obligātas komandas: */

//git pull
//git status
//git add -A
//git status
//git commit -a -m"Komentārs"
//git push

/* Mums jāstrādā vienmēr pēc šāda principa, neatkarīgi vai strādājam vienatnē vai komandā. Mums šie Git un Git Hub pamati ir jāzin, jo tā ir obligāta prasība visās vakancēs kā Frontend izstrādātājam. Git versiju kontrole un Git Hub attālinātais failu serviss ir ļoti jaudīgas un sarežģītas sistēmas, kur ir ļoti daudz komandu un iespēju, bet iesākumā mums ir pietiekami, labi zināt to pamatus. Saprast kas un kā darbojās un kapēc tas vispār ir vajadzīgs. */

/* Svarīgi katru reizi, kad sākam strādāt pie kāda jauna projekta, kad mums jau ir faili, izveidot failu: .gitignore. Ielikam to projekta mapītē. Tajā mēs ievērojot pieraksta nosacījumus ierakstam visus tos failus, mapes, kuras nevēlamies nevienam citam rādīt, nevēlamies, lai Git versiju kontrole tiem sekotu, nevēlamies tos likt attālinātajā Git Hub failu glabāšanas servisā. Parastākais piemērs ir mapīte: node_modules, jo to parasti nevienam citam nerāda, neaugšuplādē. Dažādi sistēmas faili, utt. Izveidojot failu: .gitignore neaizmirstam izmantojot Git versiju kontroli to pievienot, pievienot commit un augšuplādēt attālinātajā failu glabāšanas servisā: Git Hub. */

/* Lai mēs varētu ērti strādāt, pārskatīt savu projektu, tā versijas, kas kad ir mainīts, mēs varam izmantot programmu: Git Kraken, kur mums ir iespēja ērti aplūkot katru izmaiņu, katru atskaites punktu - commit, kas un kad tika izdarīts, un mums ir ērti to lietot, tas ir vienkāršāks nekā terminālis, mēs uzreiz nospiežot pogas varam likt Git versiju kontrolei izsekot failus, piecienot commit un augšuplādēt failus izmantojot pogu: push. Git Kraken arī ir sarežģīta un jaudīga sistēma, un mums tā ir jāzin, jāprot ar to strādāt. */

/* Ja mums ir nepieciešamība strādāt ar Git Hub direktorijām, tad Git Kraken ir vislabākais instruments, kura lietošana ir vienkārša un ērta. */



