import axios from "axios";

const apiKey = "ee6b7de90b08eb078ae7c2cf3f78c481";
const baseUrl = "https://api.themoviedb.org/3/";

export const img500 = "https://image.tmdb.org/t/p/w500/";
export const img320 = "https://image.tmdb.org/t/p/w320/";
export const img150 = "https://image.tmdb.org/t/p/w150/";

const trendingMoviesEndpoint = `${baseUrl}trending/movie/day?api_key=${apiKey}`;
const populerPeople = `${baseUrl}person/popular?api_key=${apiKey}`;

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
  return await apiCall(populerPeople);
}
