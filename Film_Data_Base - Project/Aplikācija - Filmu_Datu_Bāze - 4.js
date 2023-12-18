'use strict';

/* Praktiskais darbs izmantojot objektus. Uzdevumi:

Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)" . */

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Cik filmas Jūs esat nosaktījušies?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Cik filmas Jūs esat noskatījušies?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Pēdējā filma, ko esat skatījies', '').trim(),
				b = prompt('Jūsu novērtējums šai filmai?', '');
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Jūs esat noskatījies maz filmas');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Jūs esat klasisks filmu skatītājs');
		} else if (personalMovieDB.count >= 30) {
			console.log('Jūs esat kino fans');
		} else {
			console.log('Ir notikusi kļūda');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
			
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genres = prompt(`Jūsu mīļākais žanrs numur: ${i}`);
			if (genres === '' || genres == null) {
				console.log('Jūs ievadījāt nepareizus datus');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genres;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Jūsu mīļākais žanrs ${i+1} ir: ${item}`);
		});
	}
};
