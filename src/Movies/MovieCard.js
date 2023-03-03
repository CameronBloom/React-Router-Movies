import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard (props) {
  const { id, title, director, metascore, stars } = props.movie;
  const navigate = useNavigate();
  const handleMovie = () => {
    console.log(`navigating to id: ${id}`)
    navigate(`/movies/${id}`);
  }
  if (stars) {
    return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="movie-card" onClick={handleMovie} >
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    );
  }

}