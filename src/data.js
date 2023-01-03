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

export const ordenandoChampions = ( champDat, sortBy, sortOrder) => {
  const ordDatos = champDat[data].sort((a, b) => {
    if(a.name[sortBy] > b.name[sortBy]) {
      if(sortOrder == "az")
      {
        return 1;
      }
      else {
        return -1
      }
    }
    if(a.name[sortBy] < b.name[sortBy]) {
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

};


/*export const ordenandoAzChampions = () => {
  const ordenDatosChampionsAz = Object.values(champDat.data);
  let azChampions = ordenDatosChampionsAz.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
  })
  return azChampions;
}

export const ordenandoZaChampions = () => {
  const ordenDatosChampionsZa = Object.values(champDat.data);
  let zaChampions = ordenDatosChampionsZa.sort((a, b) => {
    if(a.name > b.name) return -1;
    if(a.name < b.name) return 1;
  })
  return zaChampions;
}*/
