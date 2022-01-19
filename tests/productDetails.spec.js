const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  }); 
  it('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails). toMatch('function')
  }) // Teste se productDetails é uma função.
  it('Verifica se o retorno da função é um array', () => {
    expect(typeof productDetails()). toContain([])
  }) // Teste se o retorno da função é um array.
  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails()). toHaveLength(2)
  }) // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(productDetails()). toMatchObject({})
  })  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')).not.toEqual()
  }) // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.includes('123')). toBe(true)
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.includes('123')). toBe(true)
})
});
