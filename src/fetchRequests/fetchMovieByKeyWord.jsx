import axios from 'axios';

import requestData from 'base';

const { BASE_URL, API_KEY } = requestData;

async function fetchMovieByKeyWord(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovieByKeyWord;
