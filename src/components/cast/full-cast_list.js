import React, { Component } from "react";
import CastSimple from "./cast_simple";
import LoadingBar from '../base/loading_bar';
import Unknown from '../../assets/images/unknown.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieSimple from "../movie/movie_simple";
import SeriesSimple from '../series/series_simple';

class FullCastList extends Component {
    state ={
        id: this.props.match.params.id,
        tv_last_season: this.props.match.params.season,
        casts: [],
        crews: [],
    }
    componentDidMount() {
        console.log(this.props)
        this._getCastList();
    }

    _renderCastList = () => {
        console.log(this.state.casts)

            const casts = this.state.casts.map((cast, index) => {
                const profile_pics = cast.profile_path ?  `https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}` : Unknown;
                const key = cast.index + ' ' + cast.order + ' ' + cast.credit_id;
                    return <CastSimple 
                        key={key}
                        profile={ profile_pics }
                        character={cast.character}
                        name = {cast.name} />
            })
            return casts;
    };
    _renderCrewList = () => {
        console.log(this.state.crews)

        const crews = this.state.crews.map((crew, index) => {
            const profile_pics = crew.profile_path ?  `https://image.tmdb.org/t/p/w138_and_h175_face/${crew.profile_path}` : Unknown;
            const key = crew.index + ' '  + crew.credit_id + ' ' + crew.id
            return <CastSimple 
            key={key}
            profile={ profile_pics }
            department={crew.department}
            character={crew.job}
            name = {crew.name} />
        })
        return crews;
    }
    _getCastList = async () => {
        const results = await this._callApi(this.state.id);
        console.log(results)
            this.setState({
                casts: results.cast,
                crews: results.crew
            });
    }
    

    _callApi = () => {
        if(this.state.tv_last_season){
            return fetch(`https://api.themoviedb.org/3/tv/${this.state.id}/season/${this.state.tv_last_season-1}/credits?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.log(err));
        }else {
            return fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=005c2dfe9e66fb2c377f35ac409b86d7`)
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.log(err));
        }
      
    };

    render() {
        const { id, tv_last_season, casts, crews } = this.state;
        const { history } = this.props;
        return (
            <div className = "Cast__Full_Container">
                { tv_last_season ? <SeriesSimple series_id={id} goBack={() => history.goBack()} /> : <MovieSimple movie_id={id} goBack={() => history.goBack()} /> }
                <div className="Cast__Simple">

                    <div className="Cast__Simple__Column">
                        <p className="Simple__Title">Cast {casts.length}</p>
                        {casts ? this._renderCastList() : <LoadingBar  type='cylon' color='#111111' />}
                    </div>
                    <div className="Cast__Simple__Column">
                        <p className="Simple__Title">Crew {crews.length}</p>
                        {crews ? this._renderCrewList() : <LoadingBar  type='cylon' color='#111111' />}
                    </div>
                </div>
            </div>

        )
    }
}

export default FullCastList;

