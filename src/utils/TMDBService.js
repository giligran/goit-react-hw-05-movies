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
}
