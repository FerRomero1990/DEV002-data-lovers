export const extrayendoData = (datos) => {
  return (Object.values(datos.data));
}

export const filtrandoChampions = (selectedRole, data) => {
  const filtroRol = data.filter(rol => rol.tags.includes(selectedRole));
  return filtroRol;
}

export const ordenandoChampions = (sortOrder, data) => {
  const ordDatos = [...data].sort((a, b) => {
    if (a.name > b.name) {
      if (sortOrder === "az") {
        return 1;
      }
      else {
        return -1;
      }
    }
    if (a.name < b.name) {
      if (sortOrder === "za") {
        return -1;
      }
      else {
        return 1;
      }
    }
    return 0;
  });
  return ordDatos;
};

export const calculoRoles = (rolSelected, data) => {
  const totalCalculo = data.length;
  const rolCalculo = filtrandoChampions(rolSelected, data);
  const conteoRol = rolCalculo.length;
  const porcentaje = (conteoRol * 100) / totalCalculo;

  return porcentaje.toFixed(2);
}
