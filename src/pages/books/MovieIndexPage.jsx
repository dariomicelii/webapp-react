import { useState, useEffect } from "react";

export default function MovieIndexPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movie List</h1>
      </div>
    </>
  );
}
