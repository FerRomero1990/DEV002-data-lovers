import { champDat } from './data/lol/lol.js'

    export function peticion(dataActual){

    const contenedor = document.getElementById("gallery")
    const fragment = document.createDocumentFragment()
    const templateGallery = document.getElementById('template-gallery').content;
      // console.log(dataActual)
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
    // console.log(typeof(champDat[0].data))
    // filtros
    const filter = () => {
    const fighterBtn = document.getElementById('fighter');
    const tankBtn = document.getElementById('tank');
    const mageBtn = document.getElementById('mage');
    const assasinBtn = document.getElementById('assasin');
    const supportBtn = document.getElementById('support');
    const marksmanBtn = document.getElementById('marksman');


    fighterBtn.addEventListener("click",() => {
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
        let champion = card.textContent

        if (!champion.includes("Fighter")){
          card.classList.add("ocultar")
        }else{
          card.classList.remove("ocultar")
        }
      }
    })

    tankBtn.addEventListener("click",() => {
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
        let champion = card.textContent

        if (!champion.includes("Tank")){
          card.classList.add("ocultar")
        }else{
          card.classList.remove("ocultar")
        }
      }
    })

    mageBtn.addEventListener("click",() => {
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
        let champion = card.textContent

        if (!champion.includes("Mage")){
          card.classList.add("ocultar")
        }else{
          card.classList.remove("ocultar")
        }
      }
    })

    assasinBtn.addEventListener("click",() => {
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
        let champion = card.textContent

        if (!champion.includes("Assassin")){
          card.classList.add("ocultar")
        }else{
          card.classList.remove("ocultar")
        }
      }
    })

    supportBtn.addEventListener("click",() => {
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
        let champion = card.textContent

        if (!champion.includes("Support")){
          card.classList.add("ocultar")
        }else{
          card.classList.remove("ocultar")
        }
      }
    })

    marksmanBtn.addEventListener("click",() => {
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
        let champion = card.textContent

        if (!champion.includes("Marksman")){
          card.classList.add("ocultar")
        }else{
          card.classList.remove("ocultar")
        }
      }
    })

}
filter()

    //busqueda
  const search = () => {
  const searchImput = document.getElementById("search");

  searchImput.addEventListener('keyup',(event)=>{
      let cards = document.querySelectorAll(".gallery__card")
      for (const card of cards) {
      const minuscula =  card.textContent.toLowerCase()
        //console.log(minuscula.includes());
        if (!minuscula.includes(event.target.value)) {
          card.classList.add('ocultar')
        }else{
          card.classList.remove('ocultar')
        }
      }
      if (event.key === 'Escape') {
        event.target.value = ''
      }
  })
}
search()

//ordenar

const descendente = () => {

  const zaBtn = document.getElementById("za")

  zaBtn.addEventListener("click", () => {
    let champDesc = document.querySelectorAll(".gallery__name")
    console.log(champDesc)
    for (let i = 0; i < champDesc.length; i++) {
      let nameChamp = champDesc.sort((a,b));

      if(a.champDesc()<b.champDesc())
      return -1;
      else{
        return 1;
      }
      //console.log(nameChamp)
    }
  })
};
descendente()
}
peticion(champDat[0].data)
