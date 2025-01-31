import { API_KEY } from '@env';
import axios from "axios";

const apiKey = API_KEY;
const baseUrl = "https://api.themoviedb.org/3/";

export const img500 = "https://image.tmdb.org/t/p/w500/";
export const img320 = "https://image.tmdb.org/t/p/w320/";
export const img150 = "https://image.tmdb.org/t/p/w150/";

const trendingMoviesEndpoint = `${baseUrl}trending/movie/day?api_key=${apiKey}`;
const populerPeopleEndpoint = `${baseUrl}person/popular?api_key=${apiKey}`;
const nowPlayingMoviesEndpoint = `${baseUrl}movie/now_playing?api_key=${apiKey}`;
const genreListEndpoint = `${baseUrl}genre/movie/list?api_key=${apiKey}`;
const discoverMoviesByGenreEndpoint = `${baseUrl}discover/movie?api_key=${apiKey}`;
const similarMoviesEndpoint = (movieId) =>
  `${baseUrl}movie/${movieId}/similar?api_key=${apiKey}`;
const movieCreditsEndpoint = (movieId) =>
  `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`;
const searchMoviesEndpoint = `${baseUrl}search/movie?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
    return {};
  }
};

export async function fetchTrendingMovies() {
  return await apiCall(trendingMoviesEndpoint);
}

export async function fetchPopulerPeople() {
  return await apiCall(populerPeopleEndpoint);
}

export async function fetchNowPlayingMovies() {
  return await apiCall(nowPlayingMoviesEndpoint);
}

export default async function fetchGenreList() {
  return await apiCall(genreListEndpoint);
}

export async function fetchMoviesByGenre(genreId) {
  const params = { with_genres: genreId };
  return await apiCall(discoverMoviesByGenreEndpoint, params);
}

export async function fetchSimilarMovies(movieId) {
  return await apiCall(similarMoviesEndpoint(movieId));
}

export async function fetchMovieCredits(movieId) {
  return await apiCall(movieCreditsEndpoint(movieId));
}

export async function searchMovies(query) {
  const params = { query };
  return await apiCall(searchMoviesEndpoint, params);
}
