// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((film) => {
    return film.director;
  });
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const filteredArray = array.filter((film) => film.director === director);
  return filteredArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let totalRating = 0;
  const filteredArray = getMoviesFromDirector(array, director).map((film) => {
    totalRating += film.score;
  });
  return +(totalRating / filteredArray.length).toFixed(2);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const arrayCopy = [...array];
  const sortedArray = arrayCopy.sort((a, b) => a.title.localeCompare(b.title));
  const mappedArray = sortedArray.map((film) => film.title).splice(0, 20);
  return mappedArray;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedArray = array.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  const newArray = [...sortedArray];
  return newArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  if (!array || !category) {
    return undefined;
  }
  const filteredArray = array.filter((film) => {
    return film.genre.includes(category);
  });
  const ratingSum = filteredArray.reduce((sum, film) => sum + film.score, 0);
  const finalRating = +(ratingSum / filteredArray.length).toFixed(2);
  return finalRating;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
