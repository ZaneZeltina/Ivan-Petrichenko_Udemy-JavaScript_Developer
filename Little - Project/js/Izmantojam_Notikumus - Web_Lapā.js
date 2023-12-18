'use strict';

/* Turpinām mūsu nelielo projektu, izpildot visus nosacījumus. Pievienojam HTML dokumentam jaunu JavaScript failu, lai mums vis pilnvērtīgi darbotos. */

/* Uzdevuma nosacījumi: 

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

/* Uzdevuma atrisinājums: . */

/* Ļoti svarīgi, kad mēs strādājam ar HTML dokumentu - ar Web lapu, mums ir svarīgi, lai viss tās saturs DOM koks ielādējās vispirms, un tikai tad tiek izpildīts JavaScript kods, tādēļ mēs pierakstām šādu struktūru: . */

/* Tālāk izpildām visus uzdevuma nosacījumus: . */

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkBox = addForm.querySelector('[type="checkbox"]');
	
	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkBox.checked;

		if (newFilm) {

			if (newFilm.lenght) {
				newFilm = (`${newFilm.substring(0, 22)}...`);
			}

			if (favorite) {
				console.log('Добавляем любимый фильм');
			}
			
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			createMovieList(movieDB.movies, movieList);	
		}

		event.target.reset();

	});

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};

	/* Pareizāk un ērtāk ir izmantot bultiņveida funkcijas, kur vien tas ir iespējams. */

	// adv.forEach(function (item) {
	// 	item.remove();
	// });

	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);

		films.forEach((film, i) => {
			parent.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(films, parent);
			});
		});

	}


	deleteAdv(adv);
	makeChanges();
	createMovieList(movieDB.movies, movieList);

});


/* Tagad mūsu JavaScript kods nostrādās tikai tad, kad mums būs ielādējusies visa DOM struktūra. */