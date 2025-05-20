'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count === null || personalMovieDB.count === '' || isNaN(personalMovieDB.count)) {
    console.log("Произошла ошибка");
} else if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Вы классический зритель");
}

console.log(personalMovieDB);