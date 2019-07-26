import React, { Component } from "react";
import Movie from "./movie";
import LoadingBar from '../base/loading_bar';
import Error from '../base/error';

class MovieList extends Component {
  state = {
    movies: [],
    pages: [1,2,3],
    currentPage: 1,
    moviesPerPage: 10
  };

  componentWillMount() {
    this.timerID = setTimeout(
      () =>  this._getMovies(),
      500
    );
    
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      if(movie.media_type ==='movie'){
        return <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          overview={movie.overview}
          poster = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      }
      return undefined;
    })
    return movies;
  }
  _getMovies = async () => {
    for(let i = 0; i<this.state.pages.length; i++){
      const results = await this._callApi(i+1);
      this.setState({
        movies: this.state.movies.concat(results)
      })
    }
  }

  _callApi = (page) => {
    return fetch(`https://api.themoviedb.org/4/list/116413?&api_key=005c2dfe9e66fb2c377f35ac409b86d7&sort_by=primary_release_date.desc&page=${page}`)
      .then(response => response.json())
      .then(json => json.results)
      .catch(err => <Error error={err} />);
  }

  render() {
    const { movies } =this.state;
    console.log(movies)
    return (
      <div className="Movie-list">
        {movies.length !== 0 ? this._renderMovies() : <LoadingBar type='cylon' color='#e50b14' />}
      </div>
    );
  }
}

export default MovieList;
