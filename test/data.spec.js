import { extrayendoData, filtrandoChampions } from '../src/data.js'



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

/*describe('Test para la funcion de filtrado', () => {
  const data = champDat.data
  const elemento = "Mage"
  const filtrando = filtrandoChampions(data, elemento)

  it('La funcion no deberia contener el elemento seleccionado', () => {
    expect(filtrando).not.toContain(elemento);
  });

});*/
