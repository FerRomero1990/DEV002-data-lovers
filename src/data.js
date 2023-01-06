import { champDat } from './data/lol/lol.js';

export const extrayendoData = (datos) => {
  return(
  Object.values(datos.data));
}

export const filtrandoChampions = (selectedRole) => {
  const filtroArray = Object.values(champDat.data);
  let filtroRol = filtroArray.filter(rol => rol.tags.includes(selectedRole));
  return filtroRol;
}

export const ordenandoChampions = (sortOrder) => {
  const ordenArray = Object.values(champDat.data);
  const ordDatos = ordenArray.sort((a, b) => {
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

export const calculoRoles = (rolSelected) => {
  const calculoArray = Object.values(champDat.data);
  const totalCalculo = calculoArray.length;
  const rolCalculo = filtrandoChampions(rolSelected);
  const conteoRol = rolCalculo.length;
  const porcentaje = (conteoRol * 100) / totalCalculo;
  console.log(porcentaje)
}
