'use strict';

/* Praktizējamies - izmantojam funkcijas. Praktikai izmantojot iepriekšējo failu par filmu datu bāzi. */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно. */

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Cik filmas Jūs esat nosaktījušies?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Cik filmas Jūs esat noskatījušies?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilmas() {
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
}

rememberMyFilmas();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Jūs esat noskatījies maz filmas');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Jūs esat klasisks filmu skatītājs');
	} else if (personalMovieDB.count >= 30) {
		console.log('Jūs esat kino fans');
	} else {
		console.log('Ir notikusi kļūda');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Jūsu mīļākais žanrs numur: ${i}`);
	}
}

writeYourGenres();