import React, { Component } from "react";
import Cast from "./cast";
import LoadingBar from '../base/loading_bar';

class CastList extends Component {
    state ={
        casts: [],
        crew: [],
        movie_id: this.props.movie_id
    }
    componentDidMount() {
        this._getCastList();
    }
   
    _renderCastList = () => {
            const casts = this.state.casts.map((cast, index) => {
                if(index < 10) {
                    return <Cast 
                        key={cast.id}
                        profile={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                        character={cast.character}
                        name = {cast.name} />
                }
            })
            return casts;
    };

    _getCastList = async () => {
        const results = await this._callApi(this.state.movie_id);
            this.setState({
                casts: results.cast,
                crew: results.crew
            });
    }
    

    _callApi = (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=005c2dfe9e66fb2c377f35ac409b86d7`)
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.log(err));
    };

    render() {
        const { casts } = this.state;
        console.log(casts)
        return (
            <div className="Cast__Top10">
            {casts ? this._renderCastList() : <LoadingBar  type='cylon' color='#111111' />}
            </div>
        )
    }
}

export default CastList;

