import React, { Component } from 'react'
// import LoadingBar from '../base/loading_bar';
class Movie_Detail extends Component {
    state = {
        movie_id: this.props.match.params.id,
        movie: []
    }

    componentDidMount() {
        this._getMovies();
    }
    
    _getMovies = async () => {
        const result = await this._callApi(this.state.movie_id);
        this.setState({
            movie: result
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
    //                 <p>genres</p>
//                 <h1>list - genres => id, name</h1>
    _getGenres = () => {
        if(!!this.state.movie.genres ){
            const genres = this.state.movie.genres.map((genre) => {
                return (
                    <span className="Genre__Badge" key={genre.id}>{genre.name} </span>
                )
            });
            return genres;
        }

    }
    render(){
        const { movie } = this.state;
        const back = {
            backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            width: '100%',
            position: 'absolute',
            height: '100%',
            zIndex: '-1'
        }
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
            
                <div className="Detail__Cast">
                    <p className="Detail__Title">Top Billed Cast</p>
                </div>
            </div>
        )
    }
}


export default Movie_Detail;

// {movie ? this._renderMovies() : <LoadingBar type='cylon' color='#111111'  />}

//                 <p>original title</p>
//                 <h1>{movie.original_title}</h1>
//                 <p>Image backdrop</p>
//                 <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
//                 <p>budget</p>
//                 <h1>{movie.budget}</h1>
//                 <p>genres</p>
//                 <h1>list - genres => id, name</h1>
//                 <p>homepage</p>
//                 <h1>{movie.homepage}</h1>

//                 <p>original_language</p>
//                 <h1>{movie.original_language}</h1>
//                 <p>overview</p>
//                 <h1>{movie.overview}</h1>
//                 <p>poster_path</p>
//                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
//                 <p>production_companies</p>
//                 <h1>list - production_companies => id, logo_path, name, origin_country</h1>

//                 <p>release_date</p>
//                 <h1>{movie.release_date}</h1>
//                 <p>revenue</p>
//                 <h1>{movie.revenue}</h1>
//                 <p>runtime</p>
//                 <h1>{movie.runtime}</h1>
//                 <p>status</p>
//                 <h1>{movie.status}</h1>
//                 <p>vote_average</p>
//                 <h1>{movie.vote_average}</h1>
//                 <p>status</p>
//                 <h1>{movie.status}</h1>
//                 <p>popularity</p>
//                 <h1>{movie.popularity}</h1>