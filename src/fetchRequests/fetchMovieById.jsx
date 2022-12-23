import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'f23afa13cf10e0a13fa8c4a5195ece8b';

async function fetchMovieById(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US
`
    );

    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovieById;
