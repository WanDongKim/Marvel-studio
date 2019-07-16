import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
class SeriesSimple extends Component{
    state = {
        id: this.props.series_id,
        movie: []
    }
    componentDidMount() {
        this._getMovies();
    }
    _renderSimpleMovie = () => {
        const movie = this.state.movie;
        return (
            <div className="Series__Simple">
                <div className="Series__Simple__Poster">
                    <img src={`https://image.tmdb.org/t/p/w116_and_h174_face/${movie.poster_path}`} />
                </div>
                <div className="Series__Simple__Detail">
                    <p className="SeriesSimple__Title">{ movie.name }</p>
                    <p className="SeriesSimple__Goback" onClick={this.props.goBack}><FontAwesomeIcon icon={faLongArrowAltLeft} />&nbsp; Back to movie</p>
                </div>
            </div>
        );
    }
    _getMovies = async () => {
        const result = await this._callApi(this.state.id);
        this.setState({
            movie: result,
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
    render() {
        return (
            <Fragment >
                {this._renderSimpleMovie()}
            </Fragment>
        )
    }
}



export default SeriesSimple;
