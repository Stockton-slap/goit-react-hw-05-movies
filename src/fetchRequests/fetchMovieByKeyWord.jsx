import axios from 'axios';

async function fetchMovieByKeyWord(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=f23afa13cf10e0a13fa8c4a5195ece8b&language=en-US&query=${query}&page=1&include_adult=false`
  );

  const data = response.data;

  return data;
}

export default fetchMovieByKeyWord;
