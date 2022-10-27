import React from "react";
import './App.css';

export default function showAdditional(additional){
    const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}:${information[1]}`)
    .join('\n');  
    document.write(alertInformation) 
    //window.location.href='./marvel';
  }
  export function Marvel() {
    return (
      <div className='wrapper'>
        <h1>INFORMACIÓN HEROES </h1>
        <h2>desde API Marvel</h2> 
        <appDiv></appDiv> 
              </div>
    );
  }
 
 /* function Marvel(){
    return(
        <div className="wrapper">
            <h1>Informacion Adicional</h1>
            
        </div>
    );
}*/


const marvel = {
    render: ()=> {
      const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?&ts=&1apikey=bfabd8bb94d96ab88b80e7f78b59df71';
      const container = document.getElementById("datos");
      let contentHTML ='';
  
      fetch(urlAPI)
      .then(res=> res.json())
      .then((json)=>{
        for(const hero of json.data.results){
          let urlHero = hero.urls[0].url;
          contentHTML+= `
          <div class='wrapper'>
          <ahref = ${urlHero} target ="_blank"> 
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
            class="img-thumbnail">
          </a>
          <h3 class="title"> ${hero.name}</h3>
          </div>`
        }
       container.innerHTML=contentHTML;
      })
    }
  };
  marvel.render();


//export default Marvel;

//1a59ab796f042fd5784b7131a5c5680c43af65d247f2ea9a47c68c9c503ba04d3a6de3927

/*let Mel;
const uriAPI = 'https://gateway.marvel.com:443/v1/public/characters?&ts=&1apikey=bfabd8bb94d96ab88b80e7f78b59df71'
fetch(uriAPI)
.then(response => response.json())
.then(json =>{
    json.data.results.map(item => {
        let uri = item.thumbnail.path + item.thumbnail.extension
        Mel.innerHTML += `<div class='item'>
        <img scr=${uri.replace('http' , 'https')}/>
        <span> ${item.name}</span>
        </div>`
    })
})*/