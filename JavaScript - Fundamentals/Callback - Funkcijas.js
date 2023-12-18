'use strict';

function first() {
	setTimeout(function () {
		console.log(1);
	}, 500)
}

function second() {
	console.log(2);
}

first();
second();

/* Šeit mēs redzam, ka vispirms izpildās otrā funkcija, un tikai pēc tam pirmā funkcija. Jo pirmā funkcija ir uzrakstīta ar pus sekundes aizturi. Kā rezultātā vispirms izpildās otrā funkcija. To pārbaudīt mēs varam izpildot kodu konsolē. Šinī piemērā konsolē mēs vispirms redzam: 2, bet pēc tam: 1. */

/* Callback funkcijas nozīmē to, ka mēs stingri nosakām tām izpildīties vienai aiz otras. Otrajai funkcijai liekot izpildīties tikai tad, kad pirmā funkcija ir beigusi savu darbu. */

function learnJS(lang, callback) {
	console.log(`Es mācos: ${lang}`)
	callback();
}

function done() {
	console.log('Es pabeidzu šo lekciju!');
}

learnJS('JavaScript', done);

/* Šinī piemērā mēs redzam, ka mēs izveidojam funkciju, pie tās argumentiem ierakstot callback. Izpildām konsoles izvadi liekot izvadīt tekstu un izpildīt lang darbību, pēc tam izpildot callback kā funkciju. Izsaucam funkciju: learnJS, iekvās () rakstot kādu tekstu, liekam komatu un rakstām otrās funkcijas nosaukumu: done, ko esam iepriekš uzrakstījuši. Izpildot šo kodu mēs redzam: Es mācos JavaScript, Es pabeidzu šo lekciju!. Šeit mēs redzam, ka mēs stingri norādām funkciju izpildīšanas kārtību. Callback funkcijas ļoti bieži tiek lietotas, un praksē tās sastapt var ļoti bieži. */

/* JavaScript programmēšanas valoda ir paredzēta interakstīvām darbībām, lai mēs tās varētu realizēt. */