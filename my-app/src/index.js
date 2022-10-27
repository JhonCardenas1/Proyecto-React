import React from 'react';
import ReactDOM from 'react-dom/client';
//import{Ap} from './nuevaPag.js'
import App from './components/App/App.js'
//comentario
//Comentario2

//componente
/*function App(){
    return (<h1>Mi aplicacion</h1>)
}*/

//renderizacion
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);