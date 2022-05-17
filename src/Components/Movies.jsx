import Movie from "./Movie";

const Movies = (props) => {
  const { listOfMovies, heading } = props;
  return (
    <div className="titleList">
      <div className="title">
        <h1>{heading}</h1>
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
