import React, { Component } from "react";
import Cast from "./cast";
import LoadingBar from '../base/loading_bar';

class CastList extends Component {
    state ={
        casts: [],
        movie_id: this.props.movie_id,
        tv_id: this.props.tv_id,
        tv_last_season: this.props.last_seaseon
    }
    componentDidMount() {
        this._getCastList();
    }
   
    _renderCastList = () => {
            const casts = this.state.casts.map((cast, index) => {
                if(index < 10 ) {
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
    

    _callApi = () => {
        console.log(this.state)
        if(this.state.movie_id){
            return fetch(`https://api.themoviedb.org/3/movie/${this.state.movie_id}/credits?api_key=005c2dfe9e66fb2c377f35ac409b86d7`)
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.log(err));
        } else {
            return fetch(`https://api.themoviedb.org/3/tv/${this.state.tv_id}/season/${this.state.tv_last_season}/credits?api_key=005c2dfe9e66fb2c377f35ac409b86d7&language=en-US`)
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.log(err));
        }


    };

    render() {
        const { casts } = this.state;
        return (
            <div className="Cast__Top10">
            { casts ? this._renderCastList() : <LoadingBar  type='cylon' color='#111111' />}

            </div>
        )
    }
}

export default CastList;

