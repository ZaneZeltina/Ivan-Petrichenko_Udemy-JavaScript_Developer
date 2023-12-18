'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* Iepriekšējā versija, kas bija jau taisīta ir citā failā: */

/* Uzdevuma risinājums kopā ar pasniedzēju. */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Pēdējā filma, ko esat skatījies', ''),
		b = prompt('Jūsu novērtējums šai filmai?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Jūs esat noskatījies maz filmas');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Jūs esat klasisks filmu skatītājs');
} else if (personalMovieDB.count >= 30) {
	console.log('Jūs esat kino fans');
} else {
	console.log('Ir notikusi kļūda');
}

console.log(personalMovieDB);