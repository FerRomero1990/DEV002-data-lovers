//Manejo del DOM
import { champDat } from './data/lol/lol.js';
import { extrayendoData, filtrandoChampions, ordenandoChampions } from './data.js';

const datosChampions = extrayendoData(champDat)

//Imprimiendo cards en la página principal
function cardsLol(champions){
    let container = document.getElementById("container")
    //limpia la página
    container.innerHTML = ''
    champions.forEach(champ => {
        container.innerHTML += `
    <div id="cards_champs">
        <div class="card_front">
          <img src="${champ.splash}" alt="" class="img_champ"/>
            <h2 id="nameChamp">${champ.name}</h2>
            <h3 id="tagChamp">${champ.tags.join(" & ")}</h3>
        </div>
          <div class="card_back">
              <h3 id="titleChamp" class="title">${champ.title.toUpperCase()}</h3>
              <h4 id="attackChamp">${"Ataque " + champ.info.attack}</h4>
              <h4 id="defenseChamp">${"Defensa " + champ.info.defense}</h4>
              <h4 id="magicChamp">${"Magia " + champ.info.magic}</h4>
              <h4 id="difficultyChamp">${"Dificultad " + champ.info.difficulty}</h4>
          </div>
    </div>`
    });
}
cardsLol(datosChampions); 

//Incluyendo filtrado
    
    document.getElementById("filtro_roles").addEventListener('change', (evento) => {
        cardsLol(filtrandoChampions(evento.target.value));
        //console.log(evento)
    });

//Incluyendo ordenado

    const ordDatos = document.getElementById("orden");
    ordDatos.addEventListener ('change', (evento) => {
        const ordenChampions = ordenandoChampions(evento.target.value)
        console.log(ordenChampions)
        cardsLol(ordenChampions)
    })


    /*const oAz = document.getElementById('orden')
    oAz.addEventListener('change', (evento) => {
        const ordAz = ordenandoAzChampions(evento)
        console.log(ordAz)
        cardsLol(ordAz)
    })
    const oZa = document.getElementById('orden')
    oZa.addEventListener('change', (evento) => {
        const ordZA = ordenandoZaChampions(evento)
        cardsLol(ordZA)
    });*/

    /*document.getElementById("ZA").addEventListener('change', (evento) => {
        cardsLol(ordenandoZaChampions(evento.target.value))
    });*/

    /*document.getElementById("orden").addEventListener('change', (evento) => {
        cardsLol(ordenandoAzChampions(evento.target.value))
        console.log(evento)
    });
    document.getElementById("orden").addEventListener('change', (evento) => {
        cardsLol(ordenandoZaChampions(evento.target.value))
    });*/