import { extrayendoData, filtrandoChampions, ordenandoChampions, calculoRoles } from '../src/data.js'

const dataChamp =  [{name: "Aatrox", tags: ["Fighter", "Tank"]},
          {name: "Gnar", tags: ["Fighter", "Tank"]},
          {name: "Nami", tags: ["Support", "Mage"]},
          {name: "Pantheon", tags: ["Fighter", "Assassin"]},
          {name: "Quinn", tags: ["Marksman", "Fighter"]}];

describe('Test para la funcion de extraer la data', () => {

  it('extrayendoData debe ser una función', () => {
    expect(typeof extrayendoData).toBe('function')
  });

});

describe('Test para la funcion de filtrar la data', () => {

  it('filtrandoChampions debe ser una función', () => {
    expect(typeof filtrandoChampions).toBe('function')
  });

});

describe('Test para la funcion de filtrado', () => {
  const data = dataChamp
  const elemento = "Mage"
  const filtrando = filtrandoChampions(elemento, data)

  it('La funcion no deberia contener el elemento seleccionado', () => {
    expect(filtrando).toEqual([{name: "Nami", tags: ["Support", "Mage"]}]);
  });

});

describe('Test para la funcion de ordenar la data', () => {

  it('ordenandoChampions debe ser una función', () => {
    expect(typeof ordenandoChampions).toBe('function')
  });

});

describe('La función debería ordenar los datos en forma ascendente', () => {
  const data = dataChamp
  const deAz = data
  const ordenando = ordenandoChampions(data, deAz)

  it('La funcion deberá ordenar de la a a la z', () => {
    expect(ordenando).toEqual([{name: "Aatrox", tags: ["Fighter", "Tank"]},
    {name: "Gnar", tags: ["Fighter", "Tank"]},
    {name: "Nami", tags: ["Support", "Mage"]},
    {name: "Pantheon", tags: ["Fighter", "Assassin"]},
    {name: "Quinn", tags: ["Marksman", "Fighter"]}]);
  });

});

describe('Test para la funcion de realizar un cálculo con la data', () => {

  it('calculoRoles debe ser una función', () => {
    expect(typeof calculoRoles).toBe('function')
  });

});

describe('La función calculo debería calcular el porcentaje del rol especificado', () => {
  const data = dataChamp
  const elemento = "Fighter"
  const calculando = calculoRoles(elemento, data)

  it('La funcion debería calcular el porcentaje del rol Fighter en la data', () => {
    expect(calculando).toEqual("80.00");
  });

});
