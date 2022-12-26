import axios from 'axios';

import requestData from 'base';

const { BASE_URL, API_KEY } = requestData;

async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovieCast;
