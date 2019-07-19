import React, { Component, Fragment } from 'react';
import Season from './season';
import LoadingBar from '../../base/loading_bar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SeriesSimple from '../series_simple';
class SeasonList extends Component {
    state ={
        id: this.props.match.params.id,
        tv: '',
        seasons: ''
    }
    componentDidMount() {
        this._getSeries();
    }
    _renderSeasons() {
        const seasons = this.state.seasons.map((season) => {
            return (
                <Fragment key={season.id}>
                    <Season  season={season} id={this.state.id}/>
                    <hr/>
                </Fragment>
            )

        })
        return seasons;
    }
    _getSeries = async () => {
        const result = await this._callApi();
        this.setState({
            tv: result,
            seasons: result.seasons
        });
    }
    
    _callApi = () => {
        return fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(err => console.log(err));
    }
    render() {
        const { tv, id } = this.state;
        const { history } = this.props;
        return (
            <div className = "Season__List">
                { tv ? <SeriesSimple series_id={id} goBack={() => history.goBack()} />:'lod'}

                {tv ? this._renderSeasons() : <LoadingBar  type='cylon' color='#111111' />}
            </div>

        )
    }
}

export default SeasonList;