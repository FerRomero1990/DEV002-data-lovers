import { champDat } from './data/lol/lol.js'

    export function peticion(dataActual){

    const contenedor = document.getElementById("gallery")
    const fragment = document.createDocumentFragment()
    const templateGallery = document.getElementById('template-gallery').content;
      console.log(dataActual)
    for (const item of Object.values(dataActual)) {
      templateGallery.querySelector('.gallery__img').src = item.splash
      templateGallery.querySelector('.gallery__name').textContent=item.name
      templateGallery.querySelector('.gallery__surname').textContent=item.title.toUpperCase()
      templateGallery.querySelector('.gallery__attack').textContent=('Attack: ' + (item.info.attack))
      templateGallery.querySelector('.gallery__defense').textContent=('Defense: ' + (item.info.defense))
      templateGallery.querySelector('.gallery__magic').textContent=('Magic: ' + (item.info.magic))
      templateGallery.querySelector('.gallery__difficulty').textContent=('Difficulty: ' + (item.info.difficulty))
      templateGallery.querySelector('.gallery__tags').textContent=item.tags

      const clone = templateGallery.cloneNode(true)
      fragment.append(clone)
    }
    contenedor.append(fragment)
    console.log(typeof(champDat[0].data))
    // filtros
    let arregloChampions = Object.entries(champDat[0].data)
    console.log(arregloChampions);

    let fighters = arregloChampions.filter(champion =>champion[1].tags.includes("Fighter"));
    console.log(fighters)
    let tanks = arregloChampions.filter(champion => champion[1].tags.includes("Tank"));
    let mages = arregloChampions.filter(champion => champion[1].tags.includes("Mage"));
    let assassins = arregloChampions.filter(champion => champion[1].tags.includes("Assassin"));
    let supports = arregloChampions.filter(champion => champion[1].tags.includes("Support"));
    let marksmans = arregloChampions.filter(champion => champion[1].tags.includes("Marksman"));

  };

  peticion(champDat[0].data)
