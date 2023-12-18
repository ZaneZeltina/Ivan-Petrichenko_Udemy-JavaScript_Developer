'use strict';

/* Lai komunicētu ar lietotāju, mums JavaScript programmēšanas valodā ir vairākas metodes - komandas. Viena no tām mums jau zināmā ir konsoles izvade, jo redz lietotājs pieslēdzot skriptu HTML dokumentam. Principā to var nosaukt par datora - konsoles komunikāciju ar lietotāju. Šī komanda rakstās šādi: */

console.log('Zane');

/* Komanda: akert ir brīdinājuma komanda, kad lietotājam atverot kādu lapu parādās brīdinājuma lodziņš, kur ir rakstīts kāds teksts, ko mēs esam gribējuši parādīt. Komanda alert tiek realitātē izmantota, lai par kaut ko svarīgu brīdinātu lietotāju, piemēram: ka aizverot konkrēto lapu netiks saglabātas izmaiņas vai kādi dati. Šī komanda rakstās šādi: */

alert('Hello!');

/* Komanda: confirm, tiek izmantota, kad mums vajag no lietotāja saņemt apstiprinošu vai noraidošu atbildi. Konkrētāk, tad, kad uz jautājumu var atbildēt tikai ar: jā vai nē. Mēs izveidojam kastīti, iedodam tai nosaukumu, ieliekam tajā iekšā metodi: confirm, kas satur kādu jautājumu, un izvadām konsolē rezultātu, to, ko ir atbildējis lietotājs - apstiprinoši vai noraidoši. Konsolē mēs redzam: true - ja lietotājs ir atbildējis apstiprinoši, vai: false, ja lietotājs ir atbildējis noraidoši. Mums tiek atgriezti Boolean tipa dati. Komandas pieraksts ir šāds: */

const result = confirm('Vai Jūs vēl šeit esat?');
console.log(result);

/* Vairums no šīm komandām, principā visas darbojās tikai pārlūkā, atverot interneta pārlūku, jo tās nedarbojas redaktora iebūvētajā konsulē. Izņemot vienu: console.log( ) komandu. Lai pārliecinātos par pārējo komandu darbību mums mūsu kods ir jātver pārlūkā. Šīs visas komandas realitātē lielos projektos tiek izmantotas reti, bet mazākos tās ir sastopamas. */

/* Ja mēs gribam lietotājam kaut ko pajautāt, tā lai viņš mums atbildētu ievadot kādus datus lodziņā. Mēs pierakstā izmantojam atkal kastītes izveidi, iedodam tai nosaukumu, un ieliekam tanī iekšā komandu: prompt( ) iekavās rakstot kādu jautājumu lietotājam, pēc tam liekot konsolē izvadīt to, ko lietotājs ir atbildējis. Komandas pieraksts ir sekojošs: */

const answer = +prompt('Cik JUms ir gadu?', '');
console.log(typeof(answer));

/* Izmantojot šo komandu mums ir stingri jāatcerās tās pieraksts, jo ja mēs gribam, lai lietotājs var ievadīt kādus datus, mums atbildēt mums aiz mūsu teksta - jautājuma jāliek komats un jāieliek pēdiņas '', kas nozīmē to, ka mēs rezervējam lietotājam atbildi. */

/* Ja mēs gribam redzēt datu tipu atbildei, ko ie ievadījis lietotājs, mēs aiz consoli.log( ) iekavās pirms mainīgā nosaukuma rakstām typeof, liekam mainīgā nosaukumu ( ) iekavās. Šinī piemērā mēs redzam, ka lietotāja sniegtā atbilde ir: string - rindas tipa dati. Mums ir svarīgi atcerēties, ka jeb kāda veida atbilde, ko musm sniegs lietotājs būs: string datu tipa, tie būs rindas tipa dati. Bet ir vienkāršs veids kā izmainīt datu tipu. Mēs izmantojam pirms: prompt operatoru: + un mums tādējādi datu tips mainās no: string datu tipa uz: number - skaitļu datu tipu. Par to mēs varam pārliecināties izvadot konsolē atbildi izmantojot metodi: typeof. */

console.log(answer + 5);

/* Ja mēs ar kādiem datiem vēlamies strādāt kā ar skaitļa tipa datiem, tad mums ir jāpārvērš tie no string datu tipa uz number datu tipa. Jo ja mēs to neizdarīsim, tad mēs tālāk nevarēsim ar tiem strādāt kā ar number tipa datiem. Šinī pimērā mēs liekam konsolē izvadīt atbildei pieskaitītu + 5. Šinī piemērā mēs lietotāja sniegtos datus jau esam pārvērtuši par number tipa datiem, tādēļ mēs konsolē redzam vēlamo rezultātu, bet ja mums pirms: prompt nebūtu operators: +, tad mēs konsolē redzētu, ka +5 ir vienkārši pielikts klāt atbildes vērtībai, bet ne pieskaitīts. */

/* Šādi mijiedarboties ar lietotāju mēs varam arī izmantojot datu masīvus. Ieliekot tajā iekšā lietotāja sniegtās atbildes. Atceramies, ka mēs varam datu masīvam pievienot elementus, rakstot elementu indeksu [ ] iekavās, liekot piederības zīmi, izmantojam metodi: prompt, rakstām jautājumus. Atbildes, kuras sniegs lietotājs tiks ierakstītas datu masīvā: answrs, kas mums šobrīd ir tukš. Dotajā iemērā tas izskatās šādi: */

const answers = [];
answers[0] = prompt('Kāds ir Jūsu vārds?', '');
answers[1] = prompt('Kāds ir Jūsu uzvārds?', '');
answers[2] = prompt('Cij Jums ir gadu?', '');

/* Lai redzētu lietotāja sniegtās atbildes, bez komandas console.log( ) ir vēl metode: document.write, kas ieraksta esošajā HTML lapā sniegtās atbildes, bet reālajos projektos mūsdienās tā vairs netiek izmantota, jo tai ir liels mīnus: tā aizstāj jau esošu HTML lapu un pārraksta to no jauna. Metodes pieraksts izskatās šādi: */

document.write(answers);

/* Izpildot šō komandu mēs redzam, ka visas atbildes ko mums ir sniedzis lietotājs ir ierakstītas HTML dokumentā, kas atdalītas viena no otras ar komatu, tās tiek rakstītas bez atstarpēm. */

console.log(typeof (answers));

/* Mēs redzam, ka izpildot konsoles izvadi mums ir: object - objekta tipa dati. Datu masīvs pieder pie objekta tipa, un tādēļ mēs redzam datu tipu: object. */

/* JavaScript programmēšanas valodā ir viena būtiska: null datu tipa īpatnība. Ja mēs: null datu tipu gribam izvadīt konsolē izmantojot metodi typeof, mēs konsolē redzam, ka tie arī ir: object tipa dati. Bet šī īpatnība ir palikusi vēl no vecajiem JavaScript standartiem. Šī īpatnība tiek uzskatīta par kļūdu, jo: null datu tips nepieder pie: object tipa datiem. */

