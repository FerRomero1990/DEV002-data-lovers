import { champDat } from './data/lol/lol.js'
// console.log(champDat[0].data)


/*export const peticion = async () =>{
    const link = 'data/lol/lol.json';
    const response = await fetch(link)
    const datos = await response.json()*/

    export function peticion(){

    const contenedor = document.getElementById("gallery")
    const fragment = document.createDocumentFragment()
    const templateGallery = document.getElementById('template-gallery').content;

    for (const item of Object.values(champDat[0].data)) {
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
    // console.log(typeof(champDat[0].data))
    // filtros
    let arregloChampions = Object.entries(champDat[0].data)
    console.log(arregloChampions);
    let fighters = arregloChampions.filter(champion => {
      // console.log(champion[1].tags);
      return champion[1].tags === "Fighter"
    });
    console.log(fighters)
  };

  peticion()

  /*const busqueda = (input, selector) => {

  document.addEventListener('keyup', (event) => {
    if (event.target.matches(input)) {
      const elements = document.querySelector(selector);
      for (const element of elements) {
        const elementSmall = element.textContent.toLowerCase();

        elementSmall.includes(event.target.value) ?
        element.classList.remove('filter')
        : element.classList.add('filter');
      }
      if (event.key === 'Escape') {
        event.target.value = '';
      }
    }
  });
}
busqueda('.card-filter', '.card');*/








/*const button = document.querySelector('boton')


button.addEventListener('click',()=>{
  for (const iterator of personajes) {
    personajes.fighters = 'figgter'

  }
})*/
