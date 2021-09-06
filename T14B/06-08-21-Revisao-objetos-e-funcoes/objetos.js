// composta: array, string, 
// {} 
// simples: number, string, boolean

// Um objeto é:
// Um conjunto de dados armazenados no formato chave: valor 

// const string =  'Olá, mundo!';

// const number = 2;

// const array = ['string', null, undefined, symbol, NaN, 65, true];

// const objeto = {
//   string: 'string',
//   null,
//   undefined,
//   symbol: symbol,
//   nan: NaN,
//   number: 65,
//   bool: true
// }

// console.log(typeof NaN);

// Number.NaN()

// console.log(array[bool]);

// console.log(string[2]);

// const string =  'Olá, mundo!';

// const number = 2;

// const string = {
//   length,
//   toUpperCase,
//   toLowerCase,
//   trim,
// }

// string.

// const casa = {
//   quarto: {
//     cama: {
//       travesseiro: 'Fofinho'
//     }
//   },
//   sala: {
//     sofa: {
//       almofada: 'top de linha',
//       encosto: 'macio'
//     }
//   },
//   cozinha: {
//     geladeira: 'cheia',
//     fogão: {
//       acender: () => console.log('E fez-se o fogo!'),
//       apagar: '',
//       cozinhar: {}
//     }
//   },
//   banheiro: '',
// }

// const array = ['string', null, undefined, 'symbol', 'NaN', 65, true];

// console.log(array.map((item) => item));

// console.log(casa.quarto.cama.travesseiro);

// const { travesseiro } = casa.quarto.cama;

// const {
//   quarto: { cama: { travesseiro }, cama },
//   sala: { sofa: { encosto, almofada } },
//   cozinha: {
//     geladeira, 
//     fogão: { acender }
//   },
//   sala,
//   cozinha
// } = casa

// const { travesseiro, encosto, fogao} = casa


// console.log(sala);
// cozinha.fogão.acender()
// acender();

// console.log(sala);
// console.log(cama);

// console.log(almofada);
// console.log(encosto);
// console.log(travesseiro);

// console.log(casa['quarto']['cama']['travesseiro']);

// const corpo = {
//   cabeca: {
//     cranio,
//     cerebro,
//     musculos,
//     pele,
//     tecidoNervoso
//   },
//   tronco,
//   membrosSuperiores,
//   membrosInferiores,
// }

// const a = [];

// a[1] = 1;
// a[2] = 2;

// console.log(a.length); 

// const objeto = { string: "String", 1: 24, 2: undefined} 
// const objeto2 = ["String", 24, undefined]

// console.log(objeto.string);
// console.log(objeto2[objeto2.length - 2]);

// function tarara(param1, param2) {
//   console.log(param1);
//   const frase = `${param1} tem ${param2} anos`

//   return frase
// }

// function () {}

// () => {}

// const xablau = () => {
//   const argumento1 = 'Elmo';
//   const argumento2 = 100;

//   const elmoFrase = tarara(argumento1, argumento2);
//   return elmoFrase;
// }

// console.log(xablau());

// console.log(tarara('Hugo', 36));

// const tururu = () => ({
//   quarto: {
//         cama: {
//           travesseiro: 'Fofinho'
//         }
//       },
//       sala: {
//         sofa: {
//           almofada: 'top de linha',
//           encosto: 'macio'
//         }
//       },
//       cozinha: {
//         geladeira: 'cheia',
//         fogão: {
//           acender: () => console.log('E fez-se o fogo!'),
//           apagar: '',
//           cozinhar: {}
//         }
//       },
//       banheiro: '',
// });

// console.log(tururu());
// console.log(tarara(654, 45));

const array = [{a: '', d: ''}, {b: '', e: ''}, {c: '', f: ''}];

for ( let i = 0; i < array.length; i += 1) {
  array[i]
}

const maiusculas = array.map((miniArray) => {
  // console.log(miniArray);
  return Object.keys(miniArray).map((letra) => {
    // console.log(letra);
    return letra.toUpperCase()
  })
  // miniArray.map((letra) => {
  //   console.log(letra);
  //   letra.toUpperCase()
  // })
});

contador = [];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  contador += array[index];
}

console.log(contador);

const teste = array.reduce((acc, curr, index, array) => {
  acc += curr
  return acc
}, [])

console.log(teste);

array.map((curr, index, array) => {})

// console.log(maiusculas);

// const maiusculas2 = array.map((miniArray) => miniArray).map((letra) => letra);

// console.log(maiusculas2);