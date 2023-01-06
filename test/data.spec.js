import { champDat } from './data/lol/lol.js';
import { filtrandoChampions } from './data.js';


describe('Test para la funcion de filtrado', () => {
  const data = champDat
  const elemento = "Mage"
  const filtrando = filtrandoChampions(data, elemento)

  it('La funcion no deberia contener el elemento seleccionado', () => {
    expect(filtrando).not.toContain(elemento);
  });

  /*it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
