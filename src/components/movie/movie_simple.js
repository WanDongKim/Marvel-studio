import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
class MovieSimple extends Component{
    state = {
        id: this.props.movie_id,
        movie: []
    }
    componentDidMount() {
        this._getMovies();
    }
    _renderSimpleMovie = () => {
        const movie = this.state.movie;
        return (
            <div className="Movie__Simple">
                <div className="Movie__Simple__Poster">
                    <img src={`https://image.tmdb.org/t/p/w116_and_h174_face/${movie.poster_path}`} />
                </div>
                <div className="Movie__Simple__Detail">
                    <p className="MovieSimple__Title">{ movie.title }</p>
                    <p className="MovieSimple__Goback" onClick={this.props.goBack}><FontAwesomeIcon icon={faLongArrowAltLeft} />&nbsp; Back to movie</p>
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
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
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



export default MovieSimple;
