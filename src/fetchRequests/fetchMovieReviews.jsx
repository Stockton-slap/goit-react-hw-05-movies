import axios from 'axios';

import requestData from 'base';

const { BASE_URL, API_KEY } = requestData;

async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovieReviews;
