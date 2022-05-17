import { useState } from "react";

const Header = (props) => {
  const [movieName, setMovieName] = useState("");

  const onChangeMovieInputHandler = (event) => {
    const movieValue = event.target.value;
    setMovieName(movieValue);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.searchMovie(movieName);
    console.log(movieName);
  };

  return (
    <header className="header">
      <a href="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <form id="search" className="search" onSubmit={onSubmitHandler}>
        <input
          type="search"
          placeholder="Search for a title..."
          value={movieName}
          onChange={onChangeMovieInputHandler}
        />
      </form>
    </header>
  );
};

export default Header;
