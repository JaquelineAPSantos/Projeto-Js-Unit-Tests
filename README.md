## Repositório do projeto de ES6 e Testes Unitários!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Atenção a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Requisitos do Projeto
  - [1. Implemente a função `average`](#1-implemente-a-função-average)
  - [2. Implemente os casos de teste para a função `numbers`](#2-implemente-os-casos-de-teste-para-a-função-numbers)
  - [3. Implemente a função `vqv`](#3-implemente-a-função-vqv)
  - [4. Implemente os casos de teste para a função `circle`](#4-implemente-os-casos-de-teste-para-a-função-circle)
  - [5. Implemente a função `createStudent`](#5-implemente-a-função-createstudent)
  - [6. Implemente os casos de teste para a função `productDetails`](#6-implemente-os-casos-de-teste-para-a-função-productdetails)
  - [7. Implemente as funções `calculator` e `arrayGenerator`](#7-implemente-as-funções-calculator-e-arraygenerator)
  - [8. Implemente a função `myCounter`](#8-implemente-a-função-mycounter)
  - [9. Implemente os casos de teste para a função `getCharacter`](#9-implemente-os-casos-de-teste-para-a-função-getcharacter)
  - [10. Implemente a função `createMenu`, bem como seus casos de teste](#10-implemente-a-função-createmenu-bem-como-seus-casos-de-teste)

## Habilidades

- Escrever testes unitários para funções utilizando o módulo Jest do NodeJS para verificar o correto funcionamento dessas funções;
- A partir de testes já implementados, escrever funções de forma que elas atendam aos testes propostos;
- Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.

---

### O que foi desenvolvido

Implementação de várias funções para atender aos requisitos propostos e/ou testes unitários para garantir que as funções estão corretas.

---

## Requisitos do projeto

### 1. Implementar a função `average`

A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se, ao receber um array de números, a função `average` retorna a média de seus valores;
* Será validado se, ao receber um array que contém valores não numéricos, a função `average` retorna `undefined`;
* Será validado se, ao receber um array vazio, a função `average` retorna `undefined`.

---

### 2. Implementar os casos de teste para a função `numbers`

A função `numbers` recebe um array (tamanho variável) e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário. Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.

**O que será avaliado**

* Será validado se no teste da função `numbers`, o retorno da função é `true` quando o array passado por parâmetro contém somente números.

---

### 3. Implementar a função `vqv`

Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

```javascript
`Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!`
```

Caso a função seja chamada sem nenhum parâmetro, o valor `undefined` deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se `vqv` é uma função;
* Será validado se a função `vqv` retorna dados do tipo string;
* Será validado se a função `vqv` retorna a frase esperada quando passados parâmetros de nome e idade;
* Será validado se a função `vqv`, quando chamada sem parâmetros, retorna `undefined`.

---

### 4. Implementar os casos de teste para a função `circle`

A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna `undefined`. Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

**O que será avaliado**

* Será validado se no teste da função `circle`, ao receber um raio, o retorno da função é um objeto com as informações corretas (Raio, Área e Circunferência).

---

### 5. Implementar a função `createStudent`

A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:

1. **name**, contendo o nome passado como parâmetro;
2. **feedback**, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se a função `createStudent` retorna um objeto que contenha duas chaves: `name`, contendo o nome passado como parâmetro; e `feedback`, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

---

### 6. Implementar os casos de teste para a função `productDetails`

A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

```javascript
productDetails('Alcool gel', 'Máscara');
```

**Retorna:**

```js
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
```

### 7. Implementar as funções `calculator` e `arrayGenerator`

  A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
  - sum;
  - mult;
  - div;
  - sub.
  
  Para cada chave atribua como valor a operação correspondente à sua chave:
  - `sum:` retorna o resultado da soma dos dois números;
  - `mult:` retorna o resultado da multiplicação dos dois números;
  - `div:` retorna o resultado da divisão dos dois números;
  - `sub:` retorna o resultado da subtração dos dois números.
  
  Os resultados das divisões devem sempre ser arredondados para baixo.
  
  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  ```javascript
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
  ```
  
  Já a função `arrayGenerator` converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:

  * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
  * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  ```javascript
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  ```
O arquivo `objPlayground.spec.js` contém os testes para `calculator` e `arrayGenerator` já implementados. Implemente as funções no arquivo `src/objPlayground.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será avaliado se a função `calculator` retorna os valores esperados;
* Será avaliado se a função `arrayGenerator` retorna os valores esperados.

---

### 8. Implementar a função `myCounter`

A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija a função `myCounter`, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se a função `myCounter` retorna os dados esperados de acordo com o que está implementado no teste.

---

### 9. Implementar os casos de teste para a função `getCharacter`

A função `getCharacter` recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

```javascript
getCharacter('Arya');
```

**Retorna:**

```javascript
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.']
}
```

**O que será avaliado**

* Será validado se no teste da função `getCharacter` ao receber uma string, o retorno da função é o esperado - de acordo com a tabela apresentada no arquivo de testes.
* Será validado se no teste da função `getCharacter` ao não receber nenhum parâmetro, o retorno da função é `undefined`.
* Será validado se o teste da função `getCharacter` verifica se o parâmetro é case sensitive.
