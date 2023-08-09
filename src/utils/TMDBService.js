import axios from 'axios';

const API_KEY = 'aa1de53af4f58d0982608e428ee96b57';

class TMDBService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: API_KEY,
      },
    });
  }

  async getTrendingMovies(timeWindow = 'day') {
    try {
      const response = await this.axiosInstance.get(
        `/trending/all/${timeWindow}`
      );
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении трендовых фильмов:', error);
      throw error;
    }
  }

  async searchMovies(query) {
    try {
      const response = await this.axiosInstance.get('/search/movie', {
        params: {
          query: query,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при поиске фильмов:', error);
      throw error;
    }
  }

  async getMovieDetails(movieId) {
    try {
      const response = await this.axiosInstance.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении деталей фильма:', error);
      throw error;
    }
  }

  async getMovieCredits(movieId) {
    try {
      const response = await this.axiosInstance.get(
        `/movie/${movieId}/credits`
      );
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении актёрского состава фильма:', error);
      throw error;
    }
  }

  async getMovieReviews(movieId) {
    try {
      const response = await this.axiosInstance.get(
        `/movie/${movieId}/reviews`
      );
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении отзывов о фильме:', error);
      throw error;
    }
  }
}

export default new TMDBService();
