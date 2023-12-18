'use strict';

/* Iesāksim pildīt uzdevumu par filmu datu bāzes izveidi. Šo uzdevumu mēs izmantosim vairākas reizes mācoties uz priekšu, to madificējot, pielāgojot katrai tēmai. Šeit mēs tikai ieliekam uzdevumu pamatu. Šim uzdevumam turpinot mācībās mēs paplašināsim funkcionalitāti, paplašināsim to. Strādājot ar reāliem projektiem notiek tieši tā pat. Šākumā tie ir ļoti vienkārši, bet tie turpina attīstīties, paplašinās to funkcionalitāte. */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
		- count - сюда передается ответ на первый вопрос
		- movies - в это свойство поместить пустой объект
		- actors - тоже поместить пустой объект
		- genres - сюда поместить пустой массив
		- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
		- 'Один из последних просмотренных фильмов?'
		- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
		movies: {
				'logan': '8.1'
		}

Проверить, чтобы все работало без ошибок в консоли */

/* Uzdevuma atrisinājums: */

const numberOfFilms = +prompt('Cik filmas Jūs jau esat noskatījušies?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Viena no pēdējām filmām, kuru Jūs noskatījāties?', ''),
	b = prompt('Uz Cik Jūs novērtējat šo filmu?', ''),
	c = prompt('Viena no pēdējām filmām, kuru Jūs noskatījāties?', ''),
	d = prompt('Uz Cik Jūs novērtējat šo filmu?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/* Ja mēs pildot uzdevumu pie noteiktajiem mainīgajiem: a un c būtu vērsušies caur punktu, tad konsoles izvadē mēs saņemtu nekorektus datus, un tā būtu kļūda, uzdevums būtu izpildīts nepareizi. Tādēļ ir būtiski atcerēties, ka vēršoties pie kāda elementa mainīgā mums tas jāliek: [ ] iekavās, jo tad mēs izslēgsim jebkādu kļūdu iespēju. */

