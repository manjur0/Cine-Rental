import { useState } from "react";
import { getMovieImage } from "../../utils/cine-utils";
import MovieRating from "./MovieRating";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // modal close handler
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  // selected movies
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  // add to cart handler
  const handleAddToCart = (event, movie) => {
    // event propagation stop
    event.stopPropagation();

    console.log(movie);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover cursor-pointer"
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
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span> {movie.price}$ | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCart;
