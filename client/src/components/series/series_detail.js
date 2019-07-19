import React, { Component } from 'react';
import CastList from '../cast/cast_list';
import LoadingBar from '../base/loading_bar';
import Season from './season/season';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SeriesFact from './series_fact';
import RelatedSeries from './related_series';

class Series_Detail extends Component {
    state = {
        tv_id: this.props.match.params.id,
        tv: ''
    };

    componentWillMount() {
        this.timerID = setTimeout(
            () =>  this._getSeries(),
            500
        );
        
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    _getSeries = async () => {
        const result = await this._callApi(this.state.tv_id);
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
    _getNetwork = () => {
        if(!!this.state.tv.networks ){
            const networks = this.state.tv.networks.map((net,index) => {
                const logo_path = `https://image.tmdb.org/t/p/h30/${net.logo_path}`;
                return (<div key={index}>
                    <p className="Fact__Title">Network</p>
                    <img src={logo_path} alt={net.name} />
                </div>)
            })
        return networks;
        }
    }
    render(){
        const { tv, tv_id, status } = this.state;
        const id = tv_id;
        const tv_url = tv ? `url("https://image.tmdb.org/t/p/w1400_and_h450_face${tv.backdrop_path}")` : '';
        const poster_url = tv ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${tv.poster_path}` : '';
        const back = {
            backgroundImage: `${tv_url}`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            width: '100%',
            position: 'absolute',
            height: '100%',
            zIndex: '-1'
        };
        console.log(tv);
        return(
        <div className="Series__Details">
            <div className="Detail__bg-card" >
                <div style={back}></div>
                <div className="Detail__Column">
                    <img className="Detail__Poster" src= {`${poster_url}`} alt={tv.name} title={tv.name}/>
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
                    { tv ? <CastList tv_id={this.state.tv_id} last_seaseon={tv.seasons.length-1} /> : <LoadingBar  type='cylon' color='#e50b14' /> }
                    { tv ? <p className="Detail__CastLink"><i><Link to={{pathname: `/series/${id}/season/${tv.seasons.length}/full-cast`, component: '../cast/full-cast_list.js'}}>View Full Cast & Crew</Link></i></p> : <LoadingBar  type='blank' color='#e50b14' /> }
                    <hr />

                    </div>
                <div className="Detail__Season">
                    <p className="Detail__Title">Last Season</p>
                    { tv ? <Season season={tv.seasons[tv.seasons.length - 1]} /> : <LoadingBar  type='cylon' color='#e50b14' /> }
                    { tv ? <p className="Detail__SeasonLink"><i><Link to={{pathname: `/series/${id}/seasons`, component: './season/season_list.js'}}> View All Seasons</Link></i></p> : <LoadingBar  type='blank' color='#e50b14' /> }
                    <hr />

                </div>
                <div className="Detail__RelatedSeries">
                    <p className="Detail__Title">Recommendations</p>
                    <RelatedSeries id={this.state.tv_id}/>
                </div>
            </div> 
            <div className="Detail__Column right">
                <SeriesFact 
                    homepage={tv.homepage}
                    status={tv.status}
                    type={tv.type}
                    network={this._getNetwork()}
                    language={tv.original_language}
                    vote_avg={tv.vote_average}
                    popularity={tv.popularity}  />
            </div>

            </div>       
        </div>
        );
    }
}


export default Series_Detail;


// Series 

// created_by - array - 
// first_air_date 
// genres - list - id, name
// homepageid
// in_production - t/f
// last_air_date
// last_episode_to_air:{
//                     air_date: "2019-07-12"
//                     episode_number: 9
//                     id: 1836869
//                     name: "Collision Course, Part Two"
//                     overview: "No time for the team to play catch-up, there’s a planet to save."
//                     production_code: ""
//                     season_number: 6
//                     show_id: 1403
//                     still_path: "/tltvvC9uYb3ZSi6c226Fu3AcGdv.jpg"
//                     vote_average: 0
//                     vote_count: 0
//                     }
// name
// networks - list - id, logo_path, name, origin_country
// next_episode_to_air{
//             air_date: "2019-07-19"
//         episode_number: 10
//         id: 1838465
//         name: "Leap"
//         overview: "The party’s over, and now the team must trust each other in order to face impending doom and an enemy that’s closer than they think."
//         production_code: ""
//         season_number: 6
//         show_id: 1403
//         still_path: null
//         vote_average: 0
//         vote_count: 0
//         }
// number_of_episode
// number_of_seasons
// original_language
// original_name
// overview
// popularity
// poster_path
// seasons - list - air_date: "2013-08-25"
//                 episode_count: 12
//                 id: 3649
//                 name: "Specials"
//                 overview: ""
//                 poster_path: "/3F0XJAWuQxnhgmb2uE1xtyszoj9.jpg"
//                 season_number: 0

// status
// type: scripted
// vote_average
    
