/* //exercicio 1

//let menu =['home','serviços', 'portfolio','links'];
//let menuServices = menu[1];
//console.log(menuServices);

//exercicio 2

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let indexOfPortfolio = menu[2] ;

//console.log(indexOfPortfolio);

//exercicio 3

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

//menu.push('contato');

//console.log(menu);


/* exercicio 1 */

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
 */
/* for (let index=0; index <groceryList.length;index+=1){
 console.log(groceryList [index]);
} */

/* ### EXERCÍCIO 1 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index=0; index <numbers.length; index+=1 ) {
console.log(numbers[index]);
}
 */

/* ### EXERCÍCIO 2 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index=0; index<numbers.length;index+=1) {
    result+= numbers [index];
}
console.log(result); */

/* ### EXERCÍCIO 3 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average); */

/* EXERCÍCIO 4 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
} */

/* ### EXERCICIO 5 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber); */

/* ### EXERCÍCIO 6 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
} */

/* ### EXERCÍCIO 7 */
/* 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);
 */
/* ### EXERCÍCIO 8 */

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

/*  ### EXERCÍCIO 9 */

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  }; */