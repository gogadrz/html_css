Сравнение чисел

let first = .1 + .2 + .033;
let second = .3334;
let precision = 3;

let firstNormalized = Math.round(first * Math.pow(10, precision));
let secondNormalized = Math.round(second * Math.pow(10, precision));


console.log('first == ', first);
console.log('second == ', second);

console.log('firstNormalized == ', firstNormalized);
console.log('secondNormalized ==', secondNormalized);

console.log('=========================');

console.log('Исходные числа равны', first === second);
console.log('Числа равны', firstNormalized === secondNormalized);
console.log('Первое число больше', firstNormalized > secondNormalized);
console.log('Первое число меньше', firstNormalized < secondNormalized);
