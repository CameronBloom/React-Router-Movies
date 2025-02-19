import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';


// HOME SCREEN
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
        // <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// function MovieDetails(props) {
//   const { id, title, director, metascore } = props.movie;
//   const navigate = useNavigate();
//   const handleMovie = () => {
//     console.log(`navigating to id: ${id}`)
//     navigate(`/movies/${id}`);
//   }
//   return (
//     <div className="movie-card" onClick={handleMovie} >
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }
