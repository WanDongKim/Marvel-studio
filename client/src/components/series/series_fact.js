import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function SeriesFact({homepage, status, network, language, type, vote_avg, popularity, company}){
    return(
        <div className="Fact__Container">
            <p className="Fact__Title">Official Website <a href={homepage}><FontAwesomeIcon icon={faLink} /></a></p>
            <FactDetail title="Status" context={status} />
            <FactDetail title="Type" context={type} />
            <FactDetail title="Language" context={language} />
            {network}
            <FactDetail title="Rate" context={vote_avg + ' / 10'} />
            <FactDetail title="Popularity" context={popularity} />
        </div>
        )
}

function FactDetail({title, context}){
    return (
        <Fragment>
            <p className="Fact__Title">{title}</p>
            <p className="Fact__Context">{context}</p>
        </Fragment>
    )
}


export default SeriesFact

