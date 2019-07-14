import React from 'react';

function Cast({profile, character, name}){
    return( 
        <div className="Cast__Card">
            <CastImage profile={profile} alt={name} />
            <p className="Cast__Name">{name}</p>
            <p className="Cast__Character">{character }</p>
        </div>
    );
}

function CastImage({profile, alt}){
    return (
        <img src={profile} alt={alt} title={alt} className="" />
    )
}

export default Cast;

// cast_id: 137
// character: "Peter Parker / Spider-Man"

// gender: 2
// id: 1136406
// name: "Tom Holland"
// order: 0
// profile_path: "/2qhIDp44cAqP2clOgt2afQI07X8.jpg"

