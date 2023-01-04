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

export const ordenandoChampions = (sortOrder) => {
  const championsArray = Object.values(champDat.data);
  const ordDatos = championsArray.sort((a, b) => {
    if(a.name > b.name) {
      if(sortOrder == "az")
      {
        return 1;
      }
      else {
        return -1
      }
    }
    if(a.name < b.name) {
      if(sortOrder == "za")
      {
        return -1
      }
      else {
        return 1
      }
    }
    return 0;
  });
return ordDatos;
};
