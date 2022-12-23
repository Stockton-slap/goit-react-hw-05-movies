import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'f23afa13cf10e0a13fa8c4a5195ece8b';

async function fetchTradingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchTradingMovies;
