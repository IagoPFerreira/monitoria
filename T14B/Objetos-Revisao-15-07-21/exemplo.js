let casa = {
  // ['Cama', 'Guarda roupa', 'Mesa de computador', 'Estante']
  quarto: {
    cama: ['Colchão', 'Travesseiro', 'Lençol', function xablau() {
      return 'Vamos vacinar!'
    }],
    guardaRoupa: 1,
    mesaDeComputador: function() {
      return 'Gol da Alemanha!'
    },
    estante: '',
  },
  cozinha: '',
  banheiro: '',
  sala: '',
}

const [chave, valor] = Object.entries(casa)
console.log(valor);
Array.prototype.join();

// for (let index = 0; index < arrayObj.length; index += 1) {
//   console.log(arrayObj);
//   // console.log(arrayObj[0], arrayObj[1]);
  
// }


// casa['quarto']['cama'][0]['']
// casa.quarto.cama[0]
// casa.quarto.cama[0];

// const { cama } = casa.quarto;
// const [Colchão] = casa.quarto.cama;
// console.log(casa.quarto.cama);
// console.log(cama);
// console.log(Colchão);

// for () {}

// let contador = 0;

// while (contador < 2) {
//   console.log('Bom dia');
//   contador += 1;
// }

// casa['quarto']['cama']
// console.log(casa['quarto']['cama'][0].length);
// console.log(casa.quarto.mesaDeComputador());

// for (propriedade in casa) {
//   console.log(propriedade);
// }

// console.log(Object.entries(casa))

// copy.quarto.cama.push('fronha')
// console.log(copy)
// console.log(casa);
// Tipos Primitivos

// number => int e float
// console.log(Number.isNaN())
// string
// bool
// null
// undefined
// symbol
// arrays
// objetos

