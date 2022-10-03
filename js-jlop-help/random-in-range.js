// генератор случайных чисел от n до m

let n = -100;
let m = 350;

let range = Math.abs(m - n);
// console.log(range);

let numberInRange = Math.round(Math.random() * range);

// нижняя граница числа
let min = Math.min(n, m);
console.log(min + numberInRange);

