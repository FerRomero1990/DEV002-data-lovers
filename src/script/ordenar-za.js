
export const ordenarZa= (dataActual) => {

   const championUser = () => {
      const contenedor = document.getElementById("gallery")
    const fragment = document.createDocumentFragment()
    const templateGallery = document.getElementById('template-gallery').content;

    const championZa = dataActual.slice().reverse();

    for (const item of championZa) {

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
    }


     const zaBtn = document.getElementById("za")

    zaBtn.addEventListener('click',()=>{
      let cards = document.querySelectorAll(".gallery__card")
      for (const iterator of cards) {
        iterator.remove()
      }
      championUser()
})
}
