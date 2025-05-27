'use strict';

const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms = null;
        while (numberOfFilms === null || numberOfFilms === '' || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = +numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = null,
                b; 
            while (a === null || a === '' || a.length > 50) {
                a = prompt('Один из последних просмотренных фильмов?', '');
            }
            while (b === null || b === '' || isNaN(b)) {
                b = prompt('На сколько оцените его?', '');
            }
            personalMovieDB.movies[a] = +b;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = null;
            while (genre === null || genre === '') {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            }
            personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
