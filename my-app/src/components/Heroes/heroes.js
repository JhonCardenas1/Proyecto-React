import React from "react";
//import { ReactPropTypes } from "react";
import PropTypes from 'prop-types';
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

HeroesCard.propTypes = {
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string

    }),
    name:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired
}

HeroesCard.defaultProps ={
    additional: {
        notes:'no aditional Information'
    }
}