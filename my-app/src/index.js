import React from 'react';
//import ReactDOM from 'react-dom/client';
//import{Ap} from './nuevaPag.js'
import App from './components/App/App.js';
import { createRoot } from 'react-dom/client';
//import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Marvel from './components/App/Marvel.js';

//componente
/*function App(){
    return (<h1>Mi aplicacion</h1>)
}*/

//renderizacion
/*ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);*/

//Renderizacion nueva
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App />} />
            <Route path='marvel' element={<Marvel />} />
        </Routes>
        
        </BrowserRouter>,
    rootElement
);

