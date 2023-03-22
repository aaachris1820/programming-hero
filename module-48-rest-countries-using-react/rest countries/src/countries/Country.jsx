import React from 'react';
import "./country.css"
const Country = (props) => {
    console.log(props.languages?Object.values(props.languages):"Not found" )
    return (
        <div className="country">
            <img src={props.flagUrl} alt="country flag" className="img-country" />
            <h3>{props.name}</h3>
            <p style={{marginTop:"8px"}}>Capital : {props.capital}</p>
            <p>Population : {props.population}</p>
            <p>Languages : {props.languages?Object.values(props.languages).join(', '):"Not found" }</p>
        </div>
    );
};

export default Country;