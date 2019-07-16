import React, { Component } from 'react';
import CastList from '../cast/cast_list';
import MovieFact from './movie_fact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import LoadingBar from '../base/loading_bar';
class Movie_Detail extends Component {
    state = {
        movie_id: this.props.match.params.id,
        movie: []
    };

    componentDidMount() {
        this._getMovies();
    }
    
    _getMovies = async () => {
        const result = await this._callApi(this.state.movie_id);
        this.setState({
            movie: result,
        });
    }
    
    _callApi = (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(err => console.log(err));
    }

    _getGenres = () => {
        if(!!this.state.movie.genres ){
            const genres = this.state.movie.genres.map((genre) => {
                return (
                    <span className="Genre__Badge" key={genre.id}>{genre.name} </span>
                );
            });
            return genres;
        }
    }

    render(){
        const { movie, movie_id } = this.state;
        const id = movie_id;
        const back = {
            backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            width: '100%',
            position: 'absolute',
            height: '100%',
            zIndex: '-1'
        };
        return(
            <div className="Movie__Details" >
                <div className="Detail__bg-card" >
                    <div style={back}></div>
                    <div className="Detail__Column">
                        <img className="Detail__Poster" src= {`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} title={movie.title}/>
                    </div>
                    <div className="Detail__Column">
                        <div className="Detail__Info">
                            <p className="Detail__Title">{movie.original_title}</p>
                            <i>{movie.release_date}</i>
                            <p>{this._getGenres() }</p>
                            <div className="Detail__Overview">
                                <p className="Overview__Title">Overview</p>
                                <p>{movie.overview}</p>

                            </div>
                        </div>
                    </div>
                </div>       
                <div className="row">
                        <div className="Detail__Column left">
                            <div className="Detail__Cast">
                                <p className="Detail__Title">Top Billed Cast</p>
                                <CastList movie_id={this.state.movie_id} />
                                <p className="Detail__CastLink"><i><Link to={{pathname: `/movie/${id}/full-cast`, component: '../cast/full-cast_list.js'}}>View Full Cast & Crew</Link></i></p>
                            </div>
                        </div> 

                        <div className="Detail__Column right">
                            <MovieFact 
                                homepage={movie.homepage}
                                status={movie.status}
                                budget={movie.budget}
                                language={movie.original_language}
                                revenue={movie.revenue}
                                runtime={movie.runtime}
                                vote_avg={movie.vote_average}
                                popularity={movie.popularity}  />
                        </div>
                    </div>

            </div>
        );
    }
}


export default Movie_Detail;


