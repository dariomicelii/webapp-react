import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReviewsList from "../../components/reviews/ReviewsList";

export default function MovieShowPage() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const movieId = useParams().id;

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies/" + movieId;
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          navigate("/not-found");
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data.movie);
      });
  }, []);

  return (
    <>
      {movie && (
        <div className="container pt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h1>{movie.title}</h1>
            <div>
              <Link className="btn btn-primary" to="/movies">
                Torna alla lista dei film
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={movie.image} alt={movie.title} />
            </div>
            <div className="col-9">
              <h5 className=""></h5>
              <h6 className="mb-2 text-body-secondary">{movie.director}</h6>
              <p className="card-text">{movie.abstract}</p>
            </div>
          </div>

          <hr />

          <ReviewsList reviews={movie.reviews} />
        </div>
      )}
    </>
  );
}
