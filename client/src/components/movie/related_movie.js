import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from './movie';
import LoadingBar from '../base/loading_bar';


class RelatedMovies extends Component{
    state = {
        id: this.props.id,
        movies: [],
        redirect: false
    };
    
    componentDidMount() {
        this._getMovies()
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            if(index <3){
                return <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                overview={movie.overview}
                poster = {`https://image.tmdb.org/t/p/w250_and_h141_face/${movie.backdrop_path}`} />
            }
            return undefined;
        })
        return movies;
    }

    _getMovies = async () => {
        const results = await this._callApi();
        this.setState({
            movies: results
        })
    }
    
    _callApi = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/recommendations?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US&page=1`)
            .then(response => response.json())
            .then(json => json.results)
            .catch(err => console.log(err));
    }
    
    
    render() {
        const { movies } = this.state;
        return (
            <div className="Related__Carousel">
            {movies ? this._renderMovies() : <LoadingBar  type='cylon' color='#e50b14' />}
            </div>
        )
    }
}

export default RelatedMovies;
