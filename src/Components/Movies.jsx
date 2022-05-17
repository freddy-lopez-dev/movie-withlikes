import Movie from "./Movie";

const Movies = (props) => {
  const { listOfMovies } = props;
  return (
    <div className="titleList">
      <div className="title">
        <h1>Trending Movies</h1>
        <div className="titles-wrapper">
          {listOfMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
