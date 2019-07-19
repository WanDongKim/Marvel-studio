import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Series({id, title, release_date, overview, vote_average, poster}){
    return( 
        <div className="Series__Card">
            <div className="Series__Column">
                <SeriesPoster poster={poster} alt={title} />
            </div>
            <div className="Series__Column">
                <p className="Series__Title">  {title}</p>
                <p className="Series__ReleaseDate">{release_date}</p>    
                <LinesEllipsis
                className="Series__Overview"
                text={overview}
                maxLine='3'
                ellipsis=' ...'
                trimRight
                basedOn='letters'/>
                <p className="Series__View-more">
                    <Link to= {{pathname: `/series/${id}`, component: './series_detail.js'}}>
                        View more
                    </Link>
                </p>
            </div>
        </div>
    );
}

function SeriesPoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Series__Poster" />
    )
}
function VoteAverage({vote_average}){
    return (
        <CircularProgressbar className="Series__VoteBar" value={vote_average} maxValue={10}  text={vote_average} />
    )
}
export default Series;