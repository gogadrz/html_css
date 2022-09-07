// Вывести отдельно целую и дробную часть числа

let precision = 3;
let number = 0x12f + .3 + .1;

console.log('Исходное число: ', number);

// floor - округлить вниз (смахнуть дробную часть)
console.log('Целая часть:', Math.floor(number));

// остаток от деления на 1 возвращает дробную часть
// console.log('Дробная часть:', Math.round(number % 1 * Math.pow(10, precision)));
console.log('Дробная часть:', Math.round(number % 1 * Math.pow(10, precision)));
