import axios from 'axios';

const API_KEY = 'aa1de53af4f58d0982608e428ee96b57';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

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
      console.error('Помилка при отриманні списку популярних фільмів ', error);
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
      console.error('Помилка при пошуку фільму', error);
      throw error;
    }
  }

  async getMovieDetails(movieId) {
    try {
      const response = await this.axiosInstance.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error('Помилка під час отримання додаткової інформації', error);
      throw error;
    }
  }

  async getMovieImage(imagePath) {
    try {
      const fullImgUrl = `${IMAGE_BASE_URL}${imagePath}`;
      const response = await axios.get(fullImgUrl, { responseType: 'blob' });
      return URL.createObjectURL(response.data);
    } catch (error) {
      console.error('Помилка під час завантаження зображення', error);
    }
  }

  async getMovieCredits(movieId) {
    try {
      const response = await this.axiosInstance.get(
        `/movie/${movieId}/credits`
      );
      return response.data;
    } catch (error) {
      console.error('Помилка при отриманні акторського складу:', error);
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
      console.error('Помилка при отриманні відгуків про фільм:', error);
      throw error;
    }
  }
}

export default new TMDBService();
