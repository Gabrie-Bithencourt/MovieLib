import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie_card">
        <img src={`${imageUrl + movie.poster_path}`} alt={movie.title} />
        <h4>{movie.title}</h4>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard