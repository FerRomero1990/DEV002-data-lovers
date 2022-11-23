// estas funciones son de ejemplo

export const peticion = async () =>{
  const link = 'data/lol/lol.json';
  const response = await fetch(link)
  const datos = await response.json()

  //console.log(datos)

  const contenedor = document.getElementById("container")
  const fragment = document.createDocumentFragment()

  const arrayContainer = Object.values(datos)
  const personajes = arrayContainer[3]
  console.log(arrayContainer)

  for (const item of Object.values(personajes)) {
    const nameChamp = document.createElement("p")
    const image = document.createElement("img")
    image.src = item.splash
    nameChamp.textContent = item.name
    fragment.append(nameChamp,image)
    contenedor.append(fragment)
    console.log(item.name)
  }

}
