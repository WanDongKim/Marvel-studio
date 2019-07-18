import React, { Component, Fragment } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Season extends Component {
    state = {
        season: ''
    }
    componentDidMount(){
        this.setState({
            season: this.props.season
        })
    }
    render() {
        const { season } = this.state;
        const imgSrc = season ? `https://image.tmdb.org/t/p/w130_and_h195_bestv2/${season.poster_path}`: '';
        return (
            <div className="Season">
                <Link to= {{pathname: `/series/${this.props.id}/season/${season.season_number}`, component: './series_detail.js'}}>
                    <img src= {imgSrc} alt={season.name} />
                </Link>
                <div className="Season__Detail">
                    <Link to= {{pathname: `/series/${this.props.id}/season/${season.season_number}`, component: './series_detail.js'}} className="Season__Title">
                        {season.name}                    
                    </Link>
                    <p className="Season__Subtitle">{season.episode_count} Episodes  |  {season.air_date}</p>
                    <LinesEllipsis
                    className="Season__Overview"
                    text={season.overview}
                    maxLine='2'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'/>
                </div>

            </div>
        )
    }
}

export default Season;