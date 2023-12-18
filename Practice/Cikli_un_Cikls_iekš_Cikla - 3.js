'use strict';

/* Augstākās sarežģītības uzdevums par cikliem. Cikls iekš cikla. Izpildām visus uzdevuma nosacījumus, vienā kopīgā atrisinājumā. Pārbaudām Izpildījuma pareizību izlaižot kodu konsolē. Uzdevuma nosacījumi: 

1) Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

		 *
		***
	 *****
	*******
 *********
***********

(Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС). */

/* Uzdevuma atrisinājums . */

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++){
	for (let j = 0; j < lines - i; j++){
		result += ' ';
	}
	for (let j = 0; j < 2 * i + 1;j++){
		result += '*';
	}
	result += '\n';
}

console.log(result);