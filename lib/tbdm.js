import { TMDB_API_KEY } from "@env";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`);
  const data = await res.json();

  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    score: movie.vote_average,
    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  }));
}