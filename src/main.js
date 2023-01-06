//Manejo del DOM
import { champDat } from './data/lol/lol.js';
import { extrayendoData, filtrandoChampions, ordenandoChampions, calculoRoles } from './data.js';

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
        const rolSelected = evento.target.value
        cardsLol(filtrandoChampions(rolSelected));
        calculoRoles(rolSelected);

        let calculo = document.getElementById("porcentaje_roles")

        const calculoPorcentaje = document.createElement("h4")
        
        calculoPorcentaje.innerHTML += `
        <h4 id="calculo_roles">${"El porcentaje de Champions con este rol es " + calculoRoles(rolSelected) + " %."}</h4>
        `
        calculo.appendChild(calculoPorcentaje)
        
        /*const calculoPantalla = document.getElementById("porcentaje_roles")
        const porcenPantalla = document.createElement("h4")
        porcenPantalla.textContent = ("Los Champions con este rol es del " + calculoRoles(rolSelected) + "%")
        calculoPantalla.appendChild(porcenPantalla)*/
    });

//Incluyendo ordenado

    const ordDatos = document.getElementById("orden");
    ordDatos.addEventListener ('change', (evento) => {
        const ordenChampions = ordenandoChampions(evento.target.value)
        cardsLol(ordenChampions)
    })