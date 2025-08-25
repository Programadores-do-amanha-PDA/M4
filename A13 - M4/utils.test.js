const {itsEven} = require('./utils.js');

describe("Função itsEven", ()=>{
  it("verifica se a entrada do número 4 retorna é par", ()=>{
    expect(itsEven(4)).toBe("4 é par");
  });
})