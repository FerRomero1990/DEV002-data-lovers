import { champDat } from './data/lol/lol.js'
//console.log(champDat[0].data)

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
    //console.log(typeof(champDat[0].data))
    /*let arregloChampions = Object.entries(champDat[0].data)
    let fighters = arregloChampions.filter(champion => champion[1].tags.includes("Fighter"));
    let tanks = arregloChampions.filter(champion => champion[1].tags.includes("Tank"));
    let mages = arregloChampions.filter(champion => champion[1].tags.includes("Mage"));
    let assassins = arregloChampions.filter(champion => champion[1].tags.includes("Assassin"));
    let supports = arregloChampions.filter(champion => champion[1].tags.includes("Support"));
    let marksmans = arregloChampions.filter(champion => champion[1].tags.includes("Marksman"));

  };*/

    const filter = () => {  

    const fighterBtn = document.getElementById("fighter")
    const tankBtn = document.getElementById("tank") 
    const mageBtn = document.getElementById("mage") 
    const assasinBtn = document.getElementById("assasin") 
    const supportBtn = document.getElementById("support") 
    const marksmanBtn = document.getElementById("marksman") 

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

/*const ascendente = () => {

  const azBtn =document.querySelectorAll(".gallery__card")

  azBtn.addEventListener("click",() => {
    let orAz = document.querySelectorAll(".gallery__card")
    orAz.sort((a,b))
  }) 

}

ascendente()*/

      function descendente() {

        const zaBtn = document.getElementById("za")

      zaBtn.addEventListener("click",() => {
      let cardsDesc = document.querySelectorAll(".gallery__name");
      for (const card of cardsDesc) {
        let championDesc = card.textContent.name;
        console.log(cardsDesc);

          let nameChampDesc = championDesc.sort((a, b));
          console.log(nameChampDesc);

          if (a.nameChampDesc() > b.nameChampDesc())
            return -1;
          else {
            return 1;
          }
        }
      })

        /*const zaBtn = document.getElementById("za");
        const contenedor = document.getElementById("gallery");
        const templateGalleryDesc = document.getElementById('template-gallery').content;
        for (const item of Object.values(champDat[0].data)) {
        const nombreChamp = templateGalleryDesc.querySelectorAll(".gallery__name").textContent=item;
        const cloneDesc = templateGalleryDesc.cloneNode(true);
        contenedor.append(fragment);
          fragment.append(cloneDesc);
          console.log(nombreChamp);
          
          let descChamp = nombreChamp.sort((a, b));

          if (a.descChamp() > b.descChamp())
              return -1;
            else {
              return 1;
            }
        }*/
        /*const zaBtn = document.getElementById("za");

        zaBtn.addEventListener("click", () => {
          const nodeListNameChamp = document.querySelectorAll('.gallery__name');
          const nodeListNCarray = Array.apply(0,nodeListNameChamp);
          nodeListNCarray.map();
          console.log(nodeListNCarray);
          for (let i = 0; i < champDesc.length; i++) {
            let nameChamp = champDesc.sort((a, b));

            if (a.champDesc() > b.champDesc())
              return -1;
            else {
              return 1;
            }
          }
        });*/

        /*let champDesc = dataActual.sort((a,b) => {
          if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
          return 0;
        })
        console.log(champDesc);*/
      }

descendente()
//console.log(dataActual)

/*const filter = () => {  

  const fighterBtn = document.getElementById("fighter")

  fighterBtn.addEventListener("click",() => {
    let cards = document.querySelectorAll(".gallery__card")
    for (const card of cards) {
      let champion = card.textContent

      if (!champion.includes("Fighter")){
        card.classList.add("ocultar")
      }else{
        card.classList.remove("ocultar")
      }
    }*/

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


    // let arregloChampions = Object.entries(dataActual)
    // console.log(arregloChampions);

    // let fighters = arregloChampions.filter(champion =>champion[1].tags.includes("Fighter"));
    // console.log(fighters)
    // fighterBtn.addEventListener('click',() => {
    //   for (const item of fighters) {
    //   templateGallery.querySelector('.gallery__img').src = item[1].splash
    //   templateGallery.querySelector('.gallery__name').textContent=item[1].name
    //   templateGallery.querySelector('.gallery__surname').textContent=item[1].title.toUpperCase()
    //   templateGallery.querySelector('.gallery__attack').textContent=('Attack: ' + (item[1].info.attack))
    //   templateGallery.querySelector('.gallery__defense').textContent=('Defense: ' + (item[1].info.defense))
    //   templateGallery.querySelector('.gallery__magic').textContent=('Magic: ' + (item[1].info.magic))
    //   templateGallery.querySelector('.gallery__difficulty').textContent=('Difficulty: ' + (item[1].info.difficulty))
    //   templateGallery.querySelector('.gallery__tags').textContent=item[1].tags
    //    const clone = templateGallery.cloneNode(true)
    //   fragment.append(clone)
    // }
    // contenedor.append(fragment)
    // })

    // let tanks = arregloChampions.filter(champion => champion[1].tags.includes("Tank"));
    // let mages = arregloChampions.filter(champion => champion[1].tags.includes("Mage"));
    // let assassins = arregloChampions.filter(champion => champion[1].tags.includes("Assassin"));
    // let supports = arregloChampions.filter(champion => champion[1].tags.includes("Support"));
    // let marksmans = arregloChampions.filter(champion => champion[1].tags.includes("Marksman"));

  };

  peticion(champDat[0].data)
