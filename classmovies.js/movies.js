// 1. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
    title;
    studio;
    rating;
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const movie1 = new Movie("Her","Aquatic Studio","PG-13");
const movie2 = new Movie("Sanam Teri Kasam","Eros International","PG");
console.log(movie1,movie2);


//b. The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie1 {
    title;
    studio;
    rating;
    constructor(title,studio,rating= "PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const movie3 = new Movie1("Her","Aquatic Studio");
const movie4 = new Movie1("Sanam Teri Kasam","Eros International","PG");
console.log(movie3,movie4);


//c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// Example Movie array
function getPG(Movies) {

    return Movies.filter(Movie => Movie.rating === "PG");
  }
  
let MoviesArray = [
    { title: "Her", studio: "Aquatic Studio" , rating: "PG" },
    { title: "Sanam Teri Kasam", studio: "Eros International" , rating: "PG-13" },
];
  let pgMovies = getPG(MoviesArray);
  console.log(pgMovies);

//d.Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie2 {
    title;
    studio;
    rating;
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const movie5 = new Movie2("Casino Royale","Eon Productions","PG­13");
console.log(movie5);
    
