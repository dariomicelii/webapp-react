import { useState, useEffect } from "react";
import Card from "../../components/Card";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movie List</h1>
        <div className="row row-cols-md-5 row-cols-3 row-cols-sm-4 g-3">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <Card
                image={movie.image}
                title={movie.title}
                subtitle={movie.director}
                link={{
                  to: "/movies/" + movie.id,
                  text: 'Vedi dettaglio "' + movie.title + '"',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
