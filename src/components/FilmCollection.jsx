import React from 'react';
import tmdbService from 'utils/TMDBService';

class FilmCollection extends React.Component {
  state = {
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const day = 'day';
      const trendingMovies = await tmdbService.getTrendingMovies(day);
      this.setState({
        trendingMovies: trendingMovies.results,
        isLoading: true,
      });
    } catch (error) {
      this.setState({
        error: 'Ошибка при загрузке трендовых фильмов',
        loading: false,
      });
    }
  }

  render() {
    return;
  }
}
