let n = 'pit';
let surname = 'sidorov';
function getFullName () { return this.n + ' ' + this.surname; }

let someObj = {
  n,
  surname,
  getFullName
};

someObj.n = 'vital';
someObj.surname = 'boch';

console.log(someObj.getFullName());
