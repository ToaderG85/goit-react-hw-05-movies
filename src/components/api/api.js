import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'd46fe50954ecb8065dcaa214ccc0bcb9';

export async function trendingMovie() {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  }
  
  export async function searchMovie(value) {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${value}`
    );
    return response.data;
  }
  
  export async function movieDetails(id) {
    const response = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
  
  export async function movieDetailsCast(id) {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
  
  export async function movieDetailsReviews(id) {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
