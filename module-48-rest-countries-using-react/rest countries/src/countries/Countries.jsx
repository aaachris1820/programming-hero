import React from 'react';
import Country from './Country';
const Countries = (props) => {
    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"24px",margin:"0 16px"}}>
            {props.data.map(x=><Country key={x.cca2} name={x.name.common} capital={x.capital} population={x.population} flagUrl={x.flags.svg} languages={x.languages} />)}
        </div>
    );
};

export default Countries;