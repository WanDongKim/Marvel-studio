import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Movie({id, title, release_date, overview, vote_average, poster}){
    return( 
        <div className="Movie__Card">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <p className="Movie__Title">  {title}</p>
                <p className="Movie__ReleaseDate">{release_date}</p>    
                <LinesEllipsis
                className="Movie__Overview"
                text={overview}
                maxLine='3'
                ellipsis=' ...'
                trimRight
                basedOn='letters'/>
                <p className="Movie__View-more">
                    <Link to= {{pathname: `/movie/${id}`, component: './movie_details.js'}}>
                        View more
                    </Link>
                </p>
            </div>
        </div>
    );
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}
function VoteAverage({vote_average}){
    return (
        <CircularProgressbar className="Movie__VoteBar" value={vote_average} maxValue={10}  text={vote_average} />
    )
}
export default Movie;