import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Series from './series';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class RelatedSeries extends Component{
    state = {
        id: this.props.id,
        series_list: '',
        redirect: false
    };
    
    componentDidMount() {
        this._getMovies();
    }
    _renderMovies = () => {
        const series_list = this.state.series_list.map((series) => {
            return <Series
            key={series.id}
            id={series.id}
            title={series.name}
            release_date={series.release_date}
            vote_average={series.vote_average}
            overview={series.overview}
            poster = {`https://image.tmdb.org/t/p/w250_and_h141_face/${series.backdrop_path}`} />
        })
        return series_list;
    }

    _getMovies = async () => {
        const results = await this._callApi();
        console.log(results)
        this.setState({
            series_list: results
        })
    }
    
    _callApi = () => {
        return fetch(`
        https://api.themoviedb.org/3/tv/${this.state.id}/recommendations?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US&page=1`)
            .then(response => response.json())
            .then(json => json.results)
            .catch(err => console.log(err));
    }
    
    
    render() {
        const { series_list } = this.state;
        return (
            <div className="Related__Carousel">
            { series_list ? this._renderMovies() : 'loading'}
            </div>
        )
    }
}

export default RelatedSeries;
