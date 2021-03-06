import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import { useState, useEffect } from "react";
import plceholder from "../src/images/image-not-available.jpg";

function App() {
  let initialState = [];
  const [movies, setMovies] = useState(initialState);
  const [heading, setHeading] = useState("Trending Movies");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=2d33f41f9fdf5973090cc7432de860c8"
    )
      .then((response) => response.json())
      .then((movies) => {
        return movies.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            rating: movie.vote_average,
            plot: movie.overview,
            liked: false,
          };
        });
      })
      .then((movies) => setMovies(movies));
    // You can add a return for a cleanUp function from the last time useEffect runs
    // remove eventlistener to add again
    // return () => {
    //   console.log("the return runs");
    //   setMovies([]);
    // };
  }, []);

  const searchMovies = (query) => {
    const apiKey = "2d33f41f9fdf5973090cc7432de860c8";
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    )
      .then((response) => response.json())
      .then((movies) => {
        return movies.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            image:
              movie.poster_path === null
                ? plceholder
                : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            rating: movie.vote_average,
            plot: movie.overview,
            liked: false,
          };
        });
      })
      .then((movies) => setMovies(movies));
  };

  const searchMoviesHandler = (query) => {
    searchMovies(query);
    setHeading("Search Result");
  };

  return (
    <div className="App">
      <div id="root">
        <Header searchMovie={searchMoviesHandler} />
        <Movies listOfMovies={movies} heading={heading} />
      </div>
    </div>
  );
}

export default App;

// Add a trending on first useEffect
// The first text should be trending movies and then search results
