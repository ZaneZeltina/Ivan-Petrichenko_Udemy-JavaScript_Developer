/* eslint-disable no-unused-vars */
'use strict';

/* Reizēm strādājot ar datiem, parasti skaitļa datiem - Number datiem, mums var gadīties, ka tie ir ļoti lieli dati. Tādus datus sauc par: BigInt datiem - Liela apjoma datiem. */

/* JavaScript programmēšanas valoda prot strādāt līdz sakitlim: 2(53 pakāpē - 1). Tas ir maksimālais skaitlis ar kuru JavaScript programmēšanas valoda prot normāli strādāt. Ja skaitlis ir lielāks, tad to jau sauc par BigInt datiem. BigInt dati arī var būt rindu tipa dati - String tipa dati. Izskatīsim ar piemēriem kā mēs varam strādāt ar BigInt datiem - liela apjoma datiem: */

const bigInt = 234765756437438737545384738853548375348n;

/* Ja mums jāstrādā ar BigInt datiem - liela izmēra skaitļiem, mums aiz tāda skaitļa jāliek burts: n, kas nozīmē, ka tie ir BigInt dati. */

/* Ir vēl viens veids kā izveidot BigInt datus. Mēs izmantojam iebūvēto JavaScript metodi: BigInt() iekavās liekot skaitli, atceramies beigās likt burtu: n, lai mums nebūtu kodā kļūda. Šī metode strādā arī ar rindas tipa datiem, liela apjoma String datiem. Pimērs: . */

const someBigInt = BigInt(234765756437438737545384738853548375348n);

/* Ja mēs gribam pārliecināties, ka tie tiešām ir bigint dati, izpildām konsoles izvadē metodi typeof() iekavās liekot lielo skaitli, iekļaujot burtu: n skaitļa beigās. Rezultātā mēs konsolē redzam: bigint - redzam, ka tie ir liela apjoma dati. */

console.log(typeof (234765756437438737545384738853548375348n));

/* Svarīgi ir atcerēties, ka mēs BigInt datus nevaram izmantot ar iebūvēto JavaScript programmēšanas valodas metodi: math. Mēs nevaram veikt matemātiskas darbības izmantojot šo metodi. */

/* Kā arī mēs nedrīkstam jaukt BigInt datus ar parastajiem Number - Skaitļa tipa datiem. Ja mēs viena skaitļa beigās pieliekam burtu: n, tad tie jau skaitās BigInt dati, jo burts: n nozīmē: BigInt dati. Ja mēs izpildīsim šādu darbību, mēs saņemsim koda kļūdu, mūsu kods nedarbosies. Tas pats attiecās uz metodes: Math izmantošanu. Izskatīsim to ar piemēriem: */

// console.log(5n + 8); - kļūda;

// console.log(Math.round(3n)); - kļūda;

/* Mēs varam veikt matemātiskas darbības ar BigInt datiem, neizmantojot metodi: math. Mēs varam izpildīt matemātiskas darbības ar BigInt datiem. Piemēram: . */

console.log(3n + 8n);

/* izpildot matemātiskas darbības ar BigInt datiem mums jābūt uzmanīgiem izmantojot vienkāršus operatorus. Mmums jābūt uzmanīgiem ar dalīšanas operatoru: /, jo jāatcerās, k a, ja mēs dalīsim BigInt skaitļus, tad mums rezultātā tiks atgriezts vesels skaitlis, bez atlikuma. Piemērm: */

console.log(5n / 2n);

/* Izpildot šādu kodu mēs redzam: 2n, apaļu skaitī, jo dalot BigInt datus, atlikumu mēs neredzam. */

/* izpildot matemātiskas darbības ar BigInt datiem, rezultātā mums vienmērtiks atgriezti BigInt dati. */

/* Mēs varam arī izmantot visus salīdzināšanas operatorus strādājot ar BigInt datiem. Izpildot darbības izmantojot salīdzināšanas operatorus mēs varam salīdzināt vienā darbībā, gan BigInt datus, gan parastos Number tipa datus. Mums nebūs kļūda. Bet,  savrīgi ir ievērot: ja mēs izmantosim stingrās salīdzināšanas operatoru: ===, salīdzinot dažādu tipu datus, BigInt un Number tipa satus, tad mēs rezultātā saņemsim: false, jo tie nav vienādi, tie ir dažādi datu tipi. Pimeēram: */

console.log(3n === 3); // - false;

/* bet ir gadījumi, kad mums nākas veikt matemātiskas darbības ar Number un BigInt datiem. Kā mēs to varam izdarī, lai mums nebūtu koda kļūda? Mēs to varam izdarīt ar datu konvertēšanas palīdzību. Izpildot šādu kodu konsolē mēs redzam rezultātu: 4n. Redzam, ka esam number datus pārvērtuši par BigInt datiem. Šādi mēs varam veikt darbības ar dažādiem datu tipiem, un būt droši, ka nebūs kļūdas. Piemēram: */

let bigData = 2n;
let number = 2;

console.log(bigData + BigInt(number));

/* bet reizēm mums vajag veikt matemātiskas darbības BigInt datus pārvēršot par Number - Skaitļa tipa datiem. Tad mēs izmantojam šādu pierakstu: . */

console.log(Number(bigData) + number);

/* Izpildot šādu komandu konsolē, mēs iegūstam rezultātā: 4. Parastus Number tipa datus. */

/* Svarīgi ir ievērot, ka darbībās ar BigInt datiem mēs nevaram izmantot unāro plusu: +, ko liek priekšā mainīgajiem un metodēm. Darbībās ar BigInt datiem mēs to nevaram izmantot, jo savādāk mēs iegūsim kļūdu. Pimeēram: . */

// console.log(+bigData + number); - kļūda;

/* Svarīgi ir atcerēties, par vienu problēmu, kas var rasties, kad mēs konvertējam BigInt datus uz Number tipa datiem, tā ir: Ja mēs gribam BigInt datus konvetēt uz Number tipa datiem, mums ir jāņem vērā, ka JavaScript programmēšanas valodā ir noteikta skaitļa lieluma robeža. Un, ja BigInt dati konvertējot tos uz Number tipa datiem pārsnied to robežu, tad mums jārēķinās ar to, ka daļa no skaitļa vienkārši tiks atmesta. Skaitlis tiks apgriezts līdz noteiktajam atļautajam skaitlim JavaScript programmēšanas valodā. Mums tas ir jāņem vērā, jo mēs varam saņemt nevēlamu rezultātu. */

/* Atceramies, ka kaut datu mūsdienu pasaulē kļūst ar vien vairāk, mums jābūt uzmanīgiem ar BigInt datu izmantošanu. Tos jāizmanto tikai tad, kad tas ir patiešām nepieciešams. */
































