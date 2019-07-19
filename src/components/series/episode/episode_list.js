import React, { Component, Fragment } from 'react';
import LoadingBar from '../../base/loading_bar';
import Episode from './episode';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SeriesSimple from '../series_simple';

class EpisodeList extends Component {
    state ={
        id: this.props.match.params.id,
        season_id: this.props.match.params.season,
        episodes: '',
        result: '',
        length: 0
    }
    componentWillMount() {
        this.timerID = setTimeout(
          () =>  this._getEpisdoes(),
          500
        );
        
      }
      componentWillUnmount(){
        clearInterval(this.timerID);
      }
    _renderEpisodes() {
        const episodes = this.state.episodes.map((episode) => {
            return (
                <Episode key={episode.id} episode={episode} />
            )
        })
        return episodes;
    }
    _getEpisdoes = async () => {
        const result = await this._callApi();
        console.log(result);
        this.setState({
            result: result,
            episodes: result.episodes,
            length: result.episodes.length
        });
    }
    
    _callApi = () => {
        return fetch(`https://api.themoviedb.org/3/tv/${this.state.id}/season/${this.state.season_id}?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(err => console.log(err));
    }
    render() {
        const { id, result, length } = this.state;
        const { history } = this.props;
        console.log(result);
        return (
            <div className="Episode__Container">
                <SeriesSimple series_id={id} goBack={() => history.goBack()} />
                <div className = "Episode__List">
                    <p className="List__Title">Episodes <span><i>{length}</i></span></p>
                    { result ? this._renderEpisodes() : <LoadingBar type='cylon' color='#e50b14' /> }
                </div>
            </div>


        )
    }
}

export default EpisodeList;