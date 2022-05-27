// EXERCICIO 1

const a = 20;
const b = 10;

console.log('soma:'+(a+b));
console.log('subtração:'+(a-b));
console.log('multiplicação:'+(a*b));
console.log('divisao:'+(a/b));
console.log('módulo:'+(a%b));



//EXERCICIO 2

const x = 100
const y = 50

if (x>y) {
console.log("'x' é maior que 'y'");
}
else {
console.log("'y'é maior que 'x'");
}



//EXERCICIO 3

const w = 30;
const u = 20;
const r = 10;

if (w>u && w>r) {
  console.log("'w' é maior que 'u' e 'r'");
}
else if (u>w && u>r){
console.log("'u' é maior que 'w' e 'r'");
}

else {
    console.log( "'r é maior que 'w' e 'u'");
}



//EXERCICIO 4


const number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};


// EXERCICIO 5

const ladoA= 60;
const ladoB= 60;
const ladoC= 60;

let ladoAll= ladoA+ladoB+ladoC;

let allAnglesArePositives = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (ladoAll==180) {
console.log("true");
}
else {
    console.log("false");
}


// EXERCICIO 6

let chessPiece = '';


switch (chessPiece.toLowerCase() ) {
 case 'rei':
   console.log('rei-> apenas uma casa para qualquer direção');
    break;
 case 'dama':
    console.log('dama->pode se mover para qualquer direção desde que estejam livres');
    break;
 case 'torre':
   console.log('torre-> move-se linha reta, tamto vertical quanto horizontal');
 default:
   console.log ('erro, peça invalida');
   break;
};



//EXERCICIO 7

let nota = ;

 if(nota<0 || nota >100){
  console.log('erro');
}
else if (nota >=90) {
  console.log('nota A');
}
else if(nota>=80) {
  console.log('nota B');
}
else if (nota>=70){
  console.log('nota C');
}
else if (nota>=60){
  console.log('nota D');
}
else if (nota>=50){
  console.log('nota E');
}
else {
  console.log('nota F');
}


//EXERCICIO 8

const paulo= 1;
const jorge= 3;
const luiz= 5;

let isEven=false;

if (paulo%2==0 || jorge%2==0|| luiz%2==0 ){
  isEven =true;
};

console.log(isEven);


//EXERCICIO 9

const dani= 10;
const tali= 5;
const gege= 13;

let condição = 'false';

if (dani%2!==0 || tali%2!==0 || gege%2!==0){
condição='true'
};

console.log(condição);


//EXERCICIO 10


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};


// EXERCICIO 11


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));

