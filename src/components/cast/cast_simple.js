import React from 'react';

function CastSimple({profile, character, department, name}){
    return( 
        <div className="Cast__Card__simple">
            <div>
                <CastImage profile={profile} alt={name} />
            </div>
            <div>
                <p className="Cast__Name">{name}</p>

                {department? <p className="Cast__Character">Department: { department }</p> : ''}
                <p className="Cast__Character">{character }</p>
            </div>

        </div>
    );
}

function CastImage({profile, alt}){
    return (
        <img src={profile} alt={alt} title={alt} className="" />
    )
}

export default CastSimple;

// cast_id: 137
// character: "Peter Parker / Spider-Man"

// gender: 2
// id: 1136406
// name: "Tom Holland"
// order: 0
// profile_path: "/2qhIDp44cAqP2clOgt2afQI07X8.jpg"

