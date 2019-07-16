import React, { Component } from 'react';
import CastList from '../cast/cast_list';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SeriesFact from './series_fact';

class Series_Detail extends Component {
    state = {
        tv_id: this.props.match.params.id,
        tv: ''
    };

    componentDidMount() {
        this._getSeries();
    }
    
    _getSeries = async () => {
        const result = await this._callApi(this.state.tv_id);
        console.log(result);
        this.setState({
            tv: result,
        });
    }
    
    _callApi = (id) => {
        return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(err => console.log(err));
    }
    _getGenres = () => {
        if(!!this.state.tv.genres ){
            const genres = this.state.tv.genres.map((genre) => {
                return (
                    <span className="Genre__Badge" key={genre.id}>{genre.name} </span>
                );
            });
            return genres;
        }
    }
    render(){
        const { tv, tv_id } = this.state;
        const id = tv_id;
        const back = {
            backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_face${tv.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            width: '100%',
            position: 'absolute',
            height: '100%',
            zIndex: '-1'
        };
        return(
            <div className="Series__Details">
                <div className="Detail__bg-card" >
                    <div style={back}></div>
                    <div className="Detail__Column">
                        <img className="Detail__Poster" src= {`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${tv.poster_path}`} alt={tv.name} title={tv.name}/>
                    </div>
                    <div className="Detail__Column">
                        <div className="Detail__Info">
                            <p className="Detail__Title">{tv.original_name}</p>
                            <i>{tv.first_air_date}</i>
                            <p>{this._getGenres() }</p>

                            <div className="Detail__Overview">
                                <p className="Overview__Title">Overview</p>
                                <p>{tv.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="Detail__Column left">
                    <div className="Detail__Cast">
                        <p className="Detail__Title">Top Billed Cast</p>
                        { tv ? <CastList tv_id={this.state.tv_id} last_seaseon={tv.seasons.length-1} /> : 'loading...' }
                        { tv ? <p className="Detail__CastLink"><i><Link to={{pathname: `/series/${id}/season/${tv.seasons.length}/full-cast`, component: '../cast/full-cast_list.js'}}>View Full Cast & Crew</Link></i></p> : 'loading...' }
                    </div>
                </div> 
                <div className="Detail__Column right">
                    <SeriesFact 
                        homepage={tv.homepage}
                        status={tv.status}
                        budget={tv.budget}
                        language={tv.original_language}
                        revenue={tv.revenue}
                        runtime={tv.runtime}
                        vote_avg={tv.vote_average}
                        popularity={tv.popularity}  />
                </div>

            </div>       
            </div>
        );
    }
}


export default Series_Detail;


