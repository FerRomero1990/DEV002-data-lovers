export const search = () => {
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
