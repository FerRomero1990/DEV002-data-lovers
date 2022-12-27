import { champDat } from './data/lol/lol.js';

export const extrayendoData = (datos) => {
  return(
  Object.values(datos.data));
}

export const filtrandoChampions = (selectedRole) => {
  const filtroDatosChampions = Object.values(champDat.data);
  let filtroRol = filtroDatosChampions.filter(rol => rol.tags.includes(selectedRole));
  return filtroRol;
}
filtrandoChampions()

export const ordenandoChampions = () => {
  const ordenDatosChampions = Object.values(champDat.data);
  let azChampions = ordenDatosChampions.sort((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
  })
  let zaChampions = ordenDatosChampions.reverse((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
  })
  console.log(zaChampions)
}
ordenandoChampions()