import React from "react";
//import { ReactPropTypes } from "react";
import ProTypes from 'prop-types';
import './heroes.css';
//import { heroes } from "../../data/data";



export default function HeroesCard({name,id,additional,owner,showAdditional}){
    //const{name, id, owner} = props;
    return <div className="box">
    <h2>{name}</h2>
    <h3>{id}</h3>
    <h4>{owner}</h4>
    <button onClick={()=> showAdditional(additional)}>More info</button>
    </div>
}

HeroesCard.prototype = {
    additional: ProTypes.shape({
        notes: ProTypes.string,
        link: ProTypes.string

    }),
    name:ProTypes.string.isRequired,
    id:ProTypes.string.isRequired,
    owner:ProTypes.string.isRequired,
    showAdditional: ProTypes.func.isRequired
}