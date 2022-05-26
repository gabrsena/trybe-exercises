//EXERCÍCIOS 

//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Crie um algoritmo que retorne o fatorial de 10.

var fatorial = 10;
var resultado = fatorial;
for (var i = 1; i < fatorial; i += 1) {
    resultado *= i;
}
console.log(resultado);

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 


function reverseString (tryber) {
let newString = ' ';
for (let index = tryber.length -1; index >= 0; index--) {
    newString = newString + tryber[index];
}
return newString;
}

console.log(reverseString('tryber'));

//3- Considere o array de strings abaixo:
//let array = ['java', 'javascript', 'python', 'html', 'css'];

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let highNumber = array[0];
let smallestWord = array[0];

for (let index = 0; index <array.length; index += 1) {
  if (array[index].length > highNumber.length) {
    highNumber = array[index];
  }
} 

for (let index = 0; index <array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(highNumber);
console.log(smallestWord);


//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <=50; currentNumber += 1) {
let isPrime = true;
for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
  if (currentNumber % currentDivisor ===0){
    isPrime = false;
  }
}
if (isPrime) {
  biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);