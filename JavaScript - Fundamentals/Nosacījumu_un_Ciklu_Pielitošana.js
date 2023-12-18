'use strict';

/* Lai nostiprinātu zināšanas par nosacījumiem un ciklu izmantošanu, darbosimies praktiski izmantojot iepriekšējo praktisko uzdevumu par Filmu Datu Bāzes izveidi, to papildinot, pielāgojot jaunajiem nosacījumiem. Jo tieši tā reālajā dzīvē notiek. Sāk ar mazu projektu, bet laikam ejot tas tiek mainīts, pielāgots jaunajām prasībām nosacījumiem. Tā ir normāla jeb kura projekta attīstība. */

/* Mūsu projektam jāatbilst šādiem nosacījumiem: 

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами. */

/* Nosacījumu izpilde: */

const numberOfFilms = +prompt('Cik filmas Jūs jau esat noskatījušies?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Viena no pēdējām filmām, kuru Jūs noskatījāties?', ''),
		b = prompt('Uz Cik Jūs novērtējat šo filmu?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done!');
	} else {
		console.log('Kļūda!');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Jūs esat maz skatījies filmas!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Jūs esat lielisks filmu skatītājs!');
} else if (personalMovieDB.count >= 30) {
	console.log('Jūs esat filmu fans!');
} else {
	console.log('Ir notikusi kļūda!');
}

console.log(personalMovieDB);

