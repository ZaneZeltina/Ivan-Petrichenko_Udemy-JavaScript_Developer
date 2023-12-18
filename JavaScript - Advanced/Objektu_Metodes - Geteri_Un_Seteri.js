'use strict';

/* Šinī lekcijā mēs izskatīsim īpašības: aktcesorus. */

/* Kad mēs mācījāmies par objektiem, mēs mācījāmies, ka tie sastāv no metodēm un īpašībām. */

/* Objekta īpašība: tas ir tas, kas apraksta mūsu objektu, bet metode: tas ko prot darīt mūsu objekts. */

/* Objektu īpašības dalās vēl divās kategorijās: datu īpašības un akcesoru īpašības. */

/* Visas īpašības ko mēs izmantojām iepriekš tās bija: objekta datu īpašības. Tās vienkārši aprakstīja mūsu datus. */

/* Otrais īpašību veids ir vesels īpašību komplekss, kas ļauj mums pievienot, izmantojot piederības zīmi kādas vērtības, kā arī saņemt kādas vērtības. Bet kodā tās izskatīsies kā parastas objekta īpašības. */

/* Mēs tās izskatām divu iemeslu dēļ. Pirmais: Mēs vēl nezinājām par funkcijas izsaukšanas kontekstu: this(). Otrais: Mums vēl nebija iespēja tās izmantot. */

/* Iegūtā informācija šinī lekcijā būs kā pamats nākošajās lekcijās. */

/* Akcesori dalās divās grupās: getter un setter. Getter mums ļauj saņemt kādas īpašības vērtību, bet setter nosaka kādas īpašības vērtību. */

/* Izskatīsim objekta īpašību sintaksi, kas parādījās salīdzinoši nesen. Izskatīsim to ar piemēriem: . */

const persone = {
	name: 'Zane',
	age: 34,

	get userAge() {
		return this.age;
	},

	set userAge(number) {
		this.age = number;
	}
};

console.log(persone.userAge = 40);
console.log(persone.userAge);

/* Izpildot šādu kodu mēs konsolē redzam: 40, jo izmantojot getter un setter īpašības mēs saņemam jaunu datu vērtību, objekta īpašības vērtību. */

/* Šīs objekta īpašības ir pāra īpašības, kas strādā tikai pārī: get un set. Ja kaut viena no tām nebūs, mēs saņemsim konsolē kļūdu. */

/* Get un set tiek bieži izmantots sarežģītos un garos kodos, piemēram valūtas konvertora izveidē, izstrādē. */

/* Vienu no plašāk - biežāk sastopamajiem veidiem, akd tiek izmantoti getter un setter mēs izskatīsim jau nākošajās lekcijās. */

