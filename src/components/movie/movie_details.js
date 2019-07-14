import React, { Component } from 'react'
import CastList from '../cast/cast_list';
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
    //                 <p>production_companies</p>
//                 <h1>list - production_companies => id, logo_path, name, origin_country</h1>
    _getCompanies = () => {
        if(!!this.state.movie.production_companies ){
            const companies = this.state.movie.production_companies.map((company) => {
                const path = `https://image.tmdb.org/t/p/w300${company.logo_path}`
                return (
                    <p className="" key={company.id}>
                        <img className="" src={path} alt={company.name}/>
                        {company.name}
                    </p>
                )
            });
            return companies;
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
                    <div className="row">
                        <div className="Detail__Column left">
                            <div className="Detail__Cast">
                                <p className="Detail__Title">Top Billed Cast</p>
                                <CastList movie_id={this.state.movie_id} />
                            </div>
                        </div> 

                        <div className="Detail__Column right">
                            <div className="Fact__Container">
                                Homepage {movie.homepage}
                                <p className="Fact__Title">Status</p>
                                <p className="Fact__Context">{movie.status}</p>
                                <p className="Fact__Title">Budget</p>
                                <p className="Fact__Context">$ {movie.budget}</p>
                                <p className="Fact__Title">Original Language</p>
                                <p className="Fact__Context">{movie.original_language}</p>
                                <p className="Fact__Title">revenue</p>
                                <p className="Fact__Context">$ {movie.revenue}</p>
                                <p className="Fact__Title">Run time</p>
                                <p className="Fact__Context">{movie.runtime}</p>
                                <p className="Fact__Title">vote_average</p>
                                <p className="Fact__Context">{movie.vote_average}</p>
                                <p className="Fact__Title">popularity</p>
                                <p className="Fact__Context">{movie.popularity}</p>
                                <p className="Fact__Context">{movie.vote_average}</p>
                                <p className="Fact__Title">Company</p>
                                <p className="Fact__Context">{this._getCompanies()}</p>
                                
                            </div>

                        </div>
                    </div>

            </div>
        )
    }
}


export default Movie_Detail;


//              
//                 <p>genres</p>
//                 <h1>list - genres => id, name</h1>



//                 <p>vote_average</p>
//                 <h1>{movie.vote_average}</h1>
//                 <p>status</p>
//                 <h1>{movie.status}</h1>
//                 <p>popularity</p>
//                 <h1>{movie.popularity}</h1>