
/*export const ordenarAz = (dataActual) => {

   const championUser = () => {
      const contenedor = document.getElementById("gallery")
    const fragment = document.createDocumentFragment()
    const templateGallery = document.getElementById('template-gallery').content;

    for (const item of dataActual) {

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


     const azBtn = document.getElementById("az")

    azBtn.addEventListener('click',()=>{
      let cards = document.querySelectorAll(".gallery__card")
      for (const iterator of cards) {
        iterator.remove()
      }
      championUser()
})
}*/
