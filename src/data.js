import { champDat } from './data/lol/lol.js';

export const extrayendoData = (datos) => {
  return(
  Object.values(datos.data));
}

export const filtrandoChampions = (selectedRole) => {
  const filtroDatosChampions = Object.values(champDat.data);
  let filtroFighter = filtroDatosChampions.filter(rol => rol.tags.includes(selectedRole));
  return filtroFighter
  /*let filtroTank = filtroDatosChampions.filter(rol => rol.tags.includes("Tank"));
  let filtroMage = filtroDatosChampions.filter(rol => rol.tags.includes("Mage"));
  let filtroAssasin = filtroDatosChampions.filter(rol => rol.tags.includes("Assassin"));
  let filtroSupport = filtroDatosChampions.filter(rol => rol.tags.includes("Support"));
  let filtroMarksman = filtroDatosChampions.filter(rol => rol.tags.includes("Marksman"));*/
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
}
ordenandoChampions()