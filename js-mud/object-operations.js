let mB = {
  usbPortCoune: 8,
  socket: 'AM3/AM4', // будет перезаписан
};

let cpu = {
  coreCount: 8,
  socket: 'AM4',
}

// ... - spread operator
let comp = {
  powerBlock: '220v',
  ...mB,
  ...cpu,
}

let compWithAssign = Object.assign (
  { powerBlock: '220v' },
  mB,
  cpu
);

console.log(comp);
console.log('----------------------');
console.log(compWithAssign);
console.log('-----------------------');

console.log(Object.keys(mB));
console.log(Object.values(mB));
console.log(Object.entries(mB));
//==========================================
let me = {
  name: 'Goga',
};

// {} - пустой объект, что бы не модифицировать объект me
let newMe = Object.assign({}, me, { name: 'Not Goga' }, { surname: 'Ne Kravtsov' });
// или spread
let newMeWidhtSpread = { ...me, name: 'Not Goga', surname: 'Ne Kravtsov'};

console.log(me);
console.log(newMe);
console.log(newMeWidhtSpread);

console.log(me === newMe);
