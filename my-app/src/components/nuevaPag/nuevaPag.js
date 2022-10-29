//import { Fragment } from "react";

const fs = require ('fs');

let data = fs.readFileSync('../../data/heroes.json');
//console.log(data);
let hero = JSON.parse(data).heores;
console.log(hero);
console.log(typeof(hero));



//Componente
/*export function Ap(){
    return(
        <Fragment>
            <h1>Mi aplicacion</h1>
            <h2>es muy bonita</h2>
        </Fragment>
        
    )
}*/