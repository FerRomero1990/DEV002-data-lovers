//creamos una funcion asincrona y exportamos en un archivo principal
export const peticion = async () =>{
  //crear una variable con la direccion del archivo json
  const link = 'data/lol/lol.json';
  //usamos fetch para llamar al enlace
  const response = await fetch(link)
  //el await espera una respuesta (promesa pendiente)
  //con json transformamos la respuesta en objeto
  const datos = await response.json()
  //console.log(datos)

  //se crea variable contenedor donde llamamos al div container en html
  const contenedor = document.getElementById("container")
  //en el fragment contiene las etiquetas que estamos creando dinamicamente que almacenan
  const fragment = document.createDocumentFragment()
  //creamos un array convirtiendo un objeto con values
  const arrayContainer = Object.values(datos)
  //crear variable para guardar la posicion 3
  const personajes = arrayContainer[3]
  console.log(arrayContainer)

  //se usa de nuevo object.values para converir el objeto en array
  for (const item of Object.values(personajes)) {
    //se crea las etiquetas dinamicas
    const nameChamp = document.createElement("p")
    const image = document.createElement("img")
    const apodoChamp = document.createElement("p")
    const rolChamp = document.createElement("p")
    const ataqueChamp = document.createElement("p")
    const defensaChamp = document.createElement("p")
    const magiaChamp = document.createElement("p")
    const dificultadChamp = document.createElement("p")
    //teniendo en cuenta que los datos de ataque, defensa, magia y dificultad están dentro de otro objeto
    //se llama ese objeto seguido del otro objeto de ahi info.difficulty
    dificultadChamp.textContent =item.info.difficulty
    magiaChamp.textContent = item.info.magic
    defensaChamp.textContent = item.info.defense
    ataqueChamp.textContent = item.info.attack
    rolChamp.textContent = item.tags
    apodoChamp.textContent = item.title
    //al atributo src le colocamos el enlace
    image.src = item.splash
    //al textContent le colocamos los nombres
    nameChamp.textContent = item.name
    //accedemos al fragment y le hacemos un append
    fragment.append(nameChamp,image,apodoChamp,rolChamp,ataqueChamp,defensaChamp,magiaChamp,dificultadChamp)
    //dentro de un contenedor metemos todas las etiquetas creadas
    contenedor.append(fragment)
    console.log(item.name)
  }

}
