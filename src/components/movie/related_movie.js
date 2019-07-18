import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from './movie';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class RelatedMovies extends Component{
    state = {
        id: this.props.id,
        movies: [],
        redirect: false
    };
    
    componentDidMount() {
        this._getMovies();
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

        })
        return movies;
    }

    _getMovies = async () => {
        const results = await this._callApi();
        console.log(results)
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
            {movies? this._renderMovies() : 'loading'}
            </div>
        )
    }
}

export default RelatedMovies;
