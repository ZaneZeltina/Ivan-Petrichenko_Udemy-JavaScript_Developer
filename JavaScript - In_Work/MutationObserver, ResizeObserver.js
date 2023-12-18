'use strict';

/* Šinī papildus lekcijā mēs izskatīsim tādās konstrukcijas kā: MutationObserver(), ResizeObserver() un HTML dokuemnta elementu atribūtu: contenteditable. */

/* Līdz šīm mēs tikai sekojām notikumiem, kas ir konkrētajiem elemetiem - notikumu klausītāji. No tikumu klasuītāji var būt lietotāja - izstrādātāja noteikti un noteikti ar programmas palīdzību. */

/* Bet vai mēs varam sekot līdzi pašu elementu izmaiņām? Piemēram, ja kaut kas notiek ar elementu, tikai tad mēs izpildām kādas darbības. Un ieši tādēļ mums ir vajadzīgs iebūvētā JavaScript programmēšanas valodas metode: MutationObserver(). Tā ir ļoti vienkārši izmantojama un satur ļoti daudz informāciju. Iedomājamies, kad mums ir kāds bloks HTML dokumentā, kam kaut kas tiek mainīts, izmērs, atrašanās vieta utt, tad mums ir jāveic attiecīgas darbības. Izmaiņas var būt veiktas ar JavaScript. Īpaši aktuāli tas būs tad, kad mēs iemācīsimies saņemt datus no serveriem. Kā piemēru varam iztēloties: mēs saņemam valūtas kursa informāciju - datus, un attēlojam tos savā lapā. Bet pagaidām izskatīsim darbu ar vienkāršām izmaiņām. */

/* Lai sekotu kāda elementa izmaiņām tiek izmantots HTML dokumenta atribūts: contenteditable, kas nozīmē, ka saturs ir rediģējams - maināms. Tā gan nav bieži sastopama, ar to mēs saskarsimies reti, bet par tādas esamību mums ir jāzin. Šāda atribūta izmantošana mums sniedz iespēju kādu elementu - objektu web lapā - HTML lapā rediģēt. Kā šinī piemērā, iekš kvadrāta rakstīt tekstu. Bet, lai šādas lietotāja veiktas izmaiņas kādā elementā tiktu lapā saglabātas, izmaiņu saglabāšana, sekošana izmaiņām  jānosaka izmantojot JavaScript kodu. Mēs izmantojam metodi: MutationObserver(), lai darbotos HTML dokumenta elementa atribūts: contenteditable. Piemērs: . */

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => {
	console.log(mutationRecords);
});

observer.observe(box, {
	childList: true
});

/* Sekošana notikumiem tiek uzstādīt pēc šāda principa: Mēs nosakām, elementu, kura izmaiņām vēlamies sekot un nosakām tieši kādām izmaiņām mēs vēlamies sekot, funkciju apstrādātājā nosakām kādas darbības mēs veiksim. Iekš funkcijas parasti tiek noteikti daudzi nosacījumi, bet šeit mēs izskatām vienkāršu piemēru. */

/* Divas svarīgas lietas, kas ir jāatcerās strādājot ar: Observer: elementu izmaiņām ir: Pirmā: Observer strādā tikai tad, kad izmaiņas jau ir veiktas, jo izmaiņu laikā mēs nevaram neko darīt, jo mēs strādājam tikai ar izmaiņu rezultātu. Otrkārt: Šī visa operācija ir asinhrona: Notikuma izmaiņu izsekošana var notikt nedaudz ātrāk jeb vēlāk, atkarībā no nosacījumiem. Tieši tādēļ mēs konsolē redzam datu masīvu ar visām izmaiņām, kas ir veiktas. */

/* Kad mums vairs nav nepieciešamība sekot kādam Objektam - HTML lapas elementam, mēs to nodzēšam. Rakstot šādi: . */

observer.disconnect();

/* Šeit tiek izmantots tas pats princips: atmiņas noplūdes. Lai mums neveidotos atmiņas noplūdes, nepaliktu saites uz kādu elementu, funkciju, mainīgo, mēs pēc izmantošanas to nodzēšam. */

/* Šis instruments netiek izmantots bieži, jo tas tiek pielietots risinot īpašus uzdevumus. */

/* Ir vēl viens elementu izmaiņu izsekotājs. Un tas ir: ResizeObserver(). Tas darbojās tieši pēc tāda paša principa kā MutationObserver() tikai tas seko HTML dokumenta elemeneta lieluma izmaiņām, jo ir specifiski lapu izstrādes momenti, kur tas var noderēt. */
