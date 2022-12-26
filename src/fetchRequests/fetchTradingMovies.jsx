import axios from 'axios';

import requestData from 'base';

const { BASE_URL, API_KEY } = requestData;

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
