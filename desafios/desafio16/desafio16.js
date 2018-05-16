(function(){
'use strict';
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/

var name = new String('Karina');

console.log( 'As letras do seu nome:' );
console.log( name.charAt(0) + ' é a 1ª letra do meu nome.' );
console.log( name.charAt(1) + ' é a 2ª letra do meu nome.' );
console.log( name.charAt(2) + ' é a 3ª letra do meu nome.' );
console.log( name.charAt(3) + ' é a 4ª letra do meu nome.' );
console.log( name.charAt(4) + ' é a 5ª letra do meu nome.' );
console.log( name.charAt(5) + ' é a 6ª letra do meu nome.' );


/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/

var fullName = new String('karina-pereira-da-cruz');
var fullName2 = fullName.split('-');
var showName = fullName2.map(function (item) {
  return item.replace( item[0], item[0].toUpperCase() );
}).join(' ');



console.log( '\nNome convertido à partir de um slug:', showName );


/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
console.log( '\nMeus amigos:' );

var amigos = ['erica', ' carol', ' denise', ' carlos', 'enzo'];

var myFriends = amigos.reduce(function (acumulado, atual, index, array) {
  return amigos.length === (index + 1) ? acumulado + ' e ' + atual : acumulado + ',' + atual;
});
console.log(myFriends.concat(' são meus amigos.'));

/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/

var ror = 'roberto';

console.log( '\nEra "Roberto", agora é:', ror.replace('to', 'ta'));


/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
var fer = 'fernando';
var corta = fer.slice(3);

console.log( '\nParte de uma string:', corta );

console.log( '\nou' );

console.log( '\nParte de uma string:', fer.substring(8, 3) );


/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
var myName = 'Karina';
var myNewName = [];

for( var i = 0, len = myName.lenght; i < len; i++ ) {

	myNewName.push( i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase() );
}


console.log( '\nNome com letras intercaladas entre caixa alta e baixa:');

console.log( myNewName.join( '' ) ); 

})();