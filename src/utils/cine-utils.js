function getMovieImage(imgName) {
  return new URL(`../assets/movie-covers/${imgName}`, import.meta.url).href;
}

export { getMovieImage };
