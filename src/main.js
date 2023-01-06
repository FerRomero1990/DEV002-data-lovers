//Manejo del DOM
import { champDat } from './data/lol/lol.js';
import { extrayendoData, filtrandoChampions, ordenandoChampions, calculoRoles } from './data.js';

const datosChampions = extrayendoData(champDat)

//Imprimiendo cards en la página principal
function cardsLol(champions) {
    let container = document.getElementById("container")
    //limpia la página
    container.innerHTML = ''
    champions.forEach(champ => {
        container.innerHTML += `
    <div id="cards_champs">
        <div class="card_front">
          <img src="${champ.splash}" alt="imagen_del_personaje" class="img_champ"/>
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
const calculo = document.getElementById("porcentaje_roles");
document.getElementById("filtro_roles").addEventListener('change', (evento) => {
    const rolSelected = evento.target.value;
    const porcenChampions = calculoRoles(rolSelected);

//Se proyecta en pantalla el porcentaje de cálculo

    calculo.innerHTML = `<h4 class="calculo_roles">El porcentaje de Champions con este rol es ${porcenChampions}%.</h4>`
    cardsLol(filtrandoChampions(rolSelected));
});

//Incluyendo ordenado

const ordDatos = document.getElementById("orden");
ordDatos.addEventListener('change', (evento) => {
    const ordenChampions = ordenandoChampions(evento.target.value)
    cardsLol(ordenChampions)
})