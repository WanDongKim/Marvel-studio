import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Episode({episode}){
    return( 
        <div className="Episode__Card">
            <EpisodePoster poster={episode ? `https://image.tmdb.org/t/p/w227_and_h127_bestv2/${episode.still_path}` : ''} />
            <div className="Episode__Content">
                <p className="Episode__Name">Episode {episode.episode_number} -  {episode.name} <span className="Episode__Star">{Number((episode.vote_average).toFixed(2))} / 10</span></p>
                <p>{episode.overview}</p>
                <p>Air on : {episode.air_date}</p>
            </div>

        </div>
    );
}
function EpisodePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Series__Poster" />
    )
}
function VoteAverage({vote_average}){
    return (
        <CircularProgressbar className="Series__VoteBar" value={vote_average} maxValue={10}  text={vote_average} />
    )
}
export default Episode;