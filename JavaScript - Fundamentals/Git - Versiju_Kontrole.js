'use strict';

/* Ja mēs strādājam komandā pie kāda projekta vai vienatnē, mums obligāti jāizmanto Git versiju kontrole, jo tas ļauj mums izveidot kontroles - atskaites punktus mūsu vai komandas projekta, līdz ar ko mēs jeb kurā brīdī varam projektu mainīt, papildināt, atgriezties pie vecākām versijām. Kā rī varam tam piekļūt no jeb kura datora un turpināt strādāt ar vienu un to pašu projektu. Kā arī mums nav nepieciešamības koēt, turēt uz datora daudzus vienādus failus, jo tie aizņem atmiņu. Mēs visu glabājam attālinātā servisā Git Hub, kas ļauj visiem projekta dalībniekiem piekļūt projekta failiem, redzēt visas jaunākās izmaiņas. Kā arī, ja mēs strādājam vienatnē, mēs kam vien vēlamies varam parādīt savu darbu, to papildināt, mainot jeb labojot. */

/* Git un Git Hub ir divas dažādas lietas. Git ir sistēma, kas kontrolē versijas, bet Git Hub ir attālināts falu glabāšanas serviss. */

/* Kad mēs trādājam izmantojot Git savā projektā, mūsu projektā var būt daudz iesaistītie izstrādātāji. Latram ir savas zariņš brash, kurā viņš strādā, veic izmaiņas, atjauno failus, katram zariņam ir savas nosaukums, katrs izstrādātājs strādā pie sava zariņa. Pēc tam tie zariņi tiek sapludināti kopā, un veidojās vesels projekts - koks, kas sastāv no daudzoem da''zadiem zariņiem. Ja mēs strādājam vienatnē, tad mēs strādājam vieni savā: master vai: main zariņā. */

/* Katru reizi, kad veicam būtiskas izmaiņas projektā mēs saglabājam izmaiņas izmantojot Git versiju kontroli, pievienojot komentāru - īsu aprakstu par to, ko mēs esam mainījuši projektā. Pēc tam augšuplādējam izmaiņas, failus: push uz Git Hub attālinātu failu glabāšanas servisu. */

/* Lai sāktu lietot Git versiju kontroli, mums uz datora ir jāuzstāda Git programma, jo darbs notiek caur tās termināli, jeb caur windows termināli: poverShell. bet ērtākais veids kā to lietot ir uzreiz koda redaktorā VS Code, atvērt termināli tiēsi tanī mapē, kurā ir mūsu projekts, un sākti izmantot Git. */

/* Git un Git Hub strādā ar failu direktorijām - mapēm. Mums ir gan lokāli uz datora kāda projekta mape, kur mēs gribam lietot Git, gan arī globāli - attālinātajā failu glabāšanas servisā Gi Hum, mēs beigās savienojam abus kopa., lokālo ar globālo, un viss mūsu projekts ir redzams Git Hub. Lai sāktu lietot Git versiju kontroli, mums ir jāizpilda pirmā komanda, kas nozīmē, ka mēs mūsu projekta mapē uzstādam Git versiju kontroli: */

//git init

/* Mēs redzam, ka terminālis mums atbild, ka mūsu projektā ir uzstādīta Git versiju kontrole, un, ja mēs atvērsim projekta mapi, mēs redzēsim mapīti: .Git, kur ir daudz dažādi Git sistēmas faili. Ja mums mēs neredzam šīs sistēmas mapes, mums failu iestatījumos ir jāatzīmē opcija: rādīt slēptos failus, jo tad mēs redzēsim visus sistēmas failus. */

/* Lai mēs varētu sākt strādāt ar kādu projektu mums ir jāstādās priekšā, ierakstot gan savu vārdu, gan savu e - pastu, kas ierakstīsies Git congig failā. Mēs šos uzstādījumus varam uzstādīt lokāli, katram projektama tsevišķi, bet varam arī uzstādīt globāli. Lokāli - tas ir tad, kad Git versiju kontrole un uzstādījumi būs tikai vienā projektā, bet globāli - tas nozīmē, ka uzstādījumi tiks uzstādīti visā mūsu datorā. Bet ikdienā pareizāk to darīt it lokāli, jo prasības katram projektam var būt atšķirīgas. Izpildām divas uzstādījumu komandas: */

//git config --local user.name "Zane"
//git config --local user.email zanezeltina32@inbox.lv

/* Kad rakstām savu lietotājvārdu mums tas obligāti jāliek pēdiņās "", bet kad rakstām e-pastu mums nevajag likt pēdiņas. */

/* Lai pārliecinātos, ka mūsu uzstādījumi ir izpildīti pareizi, un, ka tie ir ierakstījušies Git config failā, mēs atveram .Git mapīti, sameklējam config failu un paskatāmies vai tur parādās mūsu izpildītie uzstādījumi. */

/* Ja mums ir kādi faili, pames, kurām mēs negribām, lai tās kontrolē Git, mēs iazveidojam mūsu esošajā projektā failu: .gitignore, kuru mēs aizpildām norādot mapes, failus, kurus vēlamies atslēgt no Git sekošanas, un kurus nevēlamies kādam rādīt  - augšuplādēt attālinātajā failu glabāšanas servisā: Git Hub. */

/* Kad Git versiju kontrole ir uzstādīta mšus visiem failiem ir trīs satāvokļi. Pirmais stāvoklis ir: kad faili ir tikko izveidoti - kad Git ir ieraudzījis kādus failus. Lai mēs redzētu, kādā statusā ir mūsu projekts un tā faili, mēs izpildām sekojošu komandu, kur mēs redzam, ka tie faili un mapes, kuras mēs ierakstījām .gitignore failā netiek parādītas. Saprotam, ka esam pareizi uzstādījuši: .gitignore failu. */

//git status

/* Mēs redzam visus mūsu failus, kuri mums ir, bet tiem netiek vēl sekots. Šis Git valodā ir pirmais failu stāvoklis. Lai sāktu ar tiem strādāt un sāktu tiem sekot mums jāizpilda sekojoša komanda: */

//git add -A

/* Tas nozīmē, ka mēs liekam Git sekot visiem mūsu failiem, kas ir mūsu projektā, izņemot tiem, kas ir ievietoti: .gitignore failā. Terminālī mēs redzam, ka vienkārši tiek izpildāta mūsu komanda. */

/* Lai pārliecinātos, ka visiem mūsu failiem, kas ir projektā Git tik tiešām seko, mēs vēlreiz izpildām mums jau zināmo komandu: */

//git status

/* Redzam, ka tagad visi mūsu failu nosaukumi ir zaļā krāsā, kas nozīmē, ka Git tiem seko. Jo pirmajā reizē, tie bija sarkanā krāsā, tie bija vienkārši faili, ar kuriem Git vēl neko nedarīja, bet tagad Git seko visām izmaiņām katrā mūsu failā. Šis ir otrais failu stāvoklis. */

/* Lai mūsu faili pārietu trešajā stāvoklī mums ir jāpievieno komentārs: commit, ar kādu īsu izmaiņu aprakstu, sākumpunkta aprakstu, jo šis būs mūsu pirmais komentārs. Komentāri jāraksta loģiski un apzināti, lai mēs vēlāk varam skatoties saprast, ko kurš nozīmē, un kas tieši tika darīts. Komentāriem jābūt atbilstošiem -- loģiskiem. Lai to izdarītu rakstām sekojošu komandu: */

//git commit -a -m"Start learn JavaScript"

/* Pievienojot komentāru uzmanīgi rakstām komandas pieprasījumu, ievērojot visus nosacījumus, jo savādāk tā netiks izpildīta. Ievērojam, to, ka pirms komentāra mēs neliekam atstarpes, un pašu komentāru liekam pēdiņās: "". Mēs iegūstam trešo failu stāvokli. Tie ir atrasti, tiek izsekoti, un ir komentēti. */

/* Ja mēs gribam redzēt kādi atskaites pinkti - komentāri mums ir bijuši. Mēs gribam redzēt ko tieši un kurā brīdī mēs esam mainījuši, komentējuši, mēs izpildām sekojošu komandu: */

//git log

/* Mēs redzam visus līdz šim saglabātos komentārus - atskaites punktus. */

/* Tagad mums ir failu direktorija uz datora, kuru kontrolē Git, bet lai kāds bez mums varētu piekļūt mūsu direktorijai mums jāizveido tā globālajā - attālinātajā failu glabāšanas servisā: Git Hub. Lai to izdarītu mums jāatver savs Git Hub profils un jāuztaisa jauna direktorija: create new repository. */

/* Lai savienotu projektu, kas pagaidām ir tikai uz mūsu datora ar attālināto Git Hub direktoriju - repozitoriju, mums ir jānokopē adrese no Git Hub izveidotā repozitorija, no tās sadaļas, kad mums jau ir eksistējoša direktorija - repozitorija. Šinī pimērā mums ir jāizpilda sekojoša komanda , kur ir norādīta darbība, kas jāizpilda, repozitorija nosaukums un adrese. Katram repozitorijam - direktorijai ir cita adrese. Mēs rakstām terminālī komandu: */

//git remote add origin git@github.com:Zany1919/Learn_JavaScript.git

/* Mēs redzam, ka abas direktorijas, gan tā, kas mums ir uz datora, gan tā, kas ir attālinātajā failu glabātuvē: Git Hub ir savienotas vienā. Lai mēs varētu augšuplādēt mūsu projekta failus attālinātajā Git Hub servisā mums ir jāizpilda sekojoša komanda: */

//git push -u origin master


