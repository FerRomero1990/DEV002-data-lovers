export const peticion = async () =>{
    const link = 'data/lol/lol.json';
    const response = await fetch(link)
    const datos = await response.json()
  
    const contenedor = document.getElementById("gallery")
    const fragment = document.createDocumentFragment()
    const templateGallery = document.getElementById('template-gallery').content;
  
    for (const item of Object.values(datos.data)) {
      templateGallery.querySelector('.gallery__img').src = item.splash
      templateGallery.querySelector('.gallery__name').textContent=item.name
      templateGallery.querySelector('.gallery__surname').textContent=item.title
  
      const clone = templateGallery.cloneNode(true)
      fragment.append(clone)
    }
    contenedor.append(fragment)
  }
