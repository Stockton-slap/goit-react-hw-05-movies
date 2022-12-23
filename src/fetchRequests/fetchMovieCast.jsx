import axios from 'axios';

async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f23afa13cf10e0a13fa8c4a5195ece8b&language=en-US`
  );

  const data = response.data;

  return data;
}

export default fetchMovieCast;
