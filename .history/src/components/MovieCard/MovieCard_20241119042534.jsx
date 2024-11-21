import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  const { vote_average, original_title } = movie;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4"> {/* Bootstrap column grid */}
      <div className="card bg-dark text-white h-100"> {/* Full height card */}
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
          <img
            src={imageUrl}
            className="card-img-top img-fluid"
            alt={movie.title || "Movie image"}
            style={{ height: "300px", objectFit: "cover" }} 
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-truncate">{original_title}</h5> {/* Truncate long titles */}
          <p className="card-text d-flex align-items-center gap-2">
  <span className="bi bi-star-fill text-warning"></span>
  <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
  <span className="badge bg-secondary text-uppercase">HD</span>
  <span>{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</span>
</p>

          <button className="btn btn-dark watch-now-button d-flex align-items-center gap-2">
  <span className="bi bi-play-circle"></span> Watch now
</button>

        </div>
      </div>
    </div>
  );
};