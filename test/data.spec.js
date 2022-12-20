import { filter } from "./script/filtros.js";


describe('Test para la funcion de filtrado', () => {
  const filter = []
  const elemento = "Mage"
  const filtrando = filter(filter, elemento)

  it('La funcion no deberia contener el elemento seleccionado', () => {
    expect(filtrando).not.toContain(elemento);
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
