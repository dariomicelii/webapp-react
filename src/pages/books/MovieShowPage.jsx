import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieShowPage() {
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies/" + movieId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.movie);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movie Detail</h1>
        {movie && <p>{movie.title}</p>}
      </div>
      <div className="container pt-5">
        <h1>Reviews</h1>

        {/* capire come stampare le reviews */}
      </div>
    </>
  );
}
