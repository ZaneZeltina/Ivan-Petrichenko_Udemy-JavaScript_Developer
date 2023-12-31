'use strict';

/* Augstākās grūtības pakāpes uzdevums par funkcijām:

Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"

Задача непростая для новичков, так что с первого раза может не получится. */

/* Uzdevuma atrisinājums: . */

function fib(num) {
	if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
		return "";
	}

	let result = '';
	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
		} else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}

	return result;
}

fib(5);
