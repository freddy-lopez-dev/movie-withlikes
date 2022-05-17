import imagePlaceholder from "./image-not-available.jpg";

const Movie = (props) => {
  const { id, image, title, rating, plot, liked } = props.movie;
  console.log(image, liked);
  return (
    <div className="movie" data-id={id}>
      <img
        src={image === undefined ? imagePlaceholder : image}
        alt={`${title} Movie poster`}
      />
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{rating}</div>
        <div className="plot">{plot}</div>
        <div data-toggled="true" className="listToggle">
          <div>
            <i className="far fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
