import React from 'react';

function Cast({}){
    return( 
        <div className="Cast__Card">

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
export default Cast;