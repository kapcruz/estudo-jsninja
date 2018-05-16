/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavelQualquer = ['Leandro', 29, null, true, 'Um verdadeiro ninja'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log (retornaArray(variavelQualquer)[1]); // 29

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArray2(arr, numero) {
  return arr[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var cincoDiferentes = ['Olá mundo!', 21, true, null, {a:2 , b:3}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArray2(cincoDiferentes, 0));
console.log(retornaArray2(cincoDiferentes, 1));
console.log(retornaArray2(cincoDiferentes, 2));
console.log(retornaArray2(cincoDiferentes, 3));
console.log(retornaArray2(cincoDiferentes, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var cincoDiferentes = {
  	'Aplicações web real-time com Node.js': {
  		quantidadePaginas : 185,
  		autor : 'Caio Ribeiro Pereira',
		editora : 'Casa do Código'
  	},
  	'Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node': {
  		quantidadePaginas : 407,
  		autor : 'Flávio Almeida',
		editora : 'Casa do Código'
  	},
  	'Do PHP ao Zend Framework': {
  		quantidadePaginas : 281,
  		autor : 'Flávio Lisboa',
		editora : 'Casa do Código'
  	}
  };

  //se o bookName não for passando ele retorna todos o allbook : se ele for passado, se for diferente de undefined, ele retorna o nome do book
  return !bookName ? cincoDiferentes : cincoDiferentes[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Aplicações web real-time com Node.js tem ' + book('Aplicações web real-time com Node.js').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName =  'Aplicações web real-time com Node.js';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName =  'Aplicações web real-time com Node.js';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora);