import { getMovieImage } from "../../utils/cine-utils";
import MovieRating from "./MovieRating";

const MovieCart = ({ movie }) => {
  return (
    <figure
      key={movie.id}
      className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
    >
      <img
        className="w-full object-cover"
        src={getMovieImage(movie.cover)}
        alt=""
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
        <div className="flex items-center space-x-1 mb-5">
          <MovieRating value={movie.rating} />
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src="./assets/tag.svg" alt="" />
          <span> {movie.price}$ | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCart;
