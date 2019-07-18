import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function MovieFact({homepage, status, budget, language, revenue, runtime, vote_avg, popularity, company}){
    const format_budget = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(budget);
    const format_revenue = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(revenue);
    return(
        <div className="Fact__Container">
            <p className="Fact__Title">Official Website <a href={homepage}><FontAwesomeIcon icon={faLink} /></a></p>
            <FactDetail title="Status" context={status} />
            <FactDetail title="Budget" context={format_budget} />
            <FactDetail title="Language" context={language} />
            <FactDetail title="Revenue" context={format_revenue} />
            <FactDetail title="Run-time" context={runtime + ' minutes'} />
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


export default MovieFact

//                 <p>production_companies</p>
//                 <h1>list - production_companies => id, logo_path, name, origin_country</h1>
// _getCompanies = () => {
//     if(!!this.state.movie.production_companies ){
//         const companies = this.state.movie.production_companies.map((company) => {
//             const path = `https://image.tmdb.org/t/p/w300${company.logo_path}`
//             return (
//                 <div className="" key={company.id}>
//                     <img className="" src={path} alt={company.name}/>
//                     {company.name}
//                 </div>
//             )
//         });
//         return companies;
//     }
// }
