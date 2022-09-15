let mB = {
  usbPortCoune: 8,
  socket: 'AM3/AM4', // будет перезаписан
};

let cpu = {
  coreCount: 8,
  socket: 'AM4',
}

let comp = {
  powerBlock: '220v',
  ...mB,
  ...cpu,
}

let keys = Object.keys(comp);
let values = Object.values(comp);
let entries = Object.entries(comp);

for (let key of keys) {
  console.log(key);
}

for (let value of values) {
  console.log(value);
}

for (let entry of entries) {
  console.log(entry[0], entry[1]);
}

// лучше так
for (let [key, value] of entries) {
  console.log(key, '->', value);
}

// устарел
console.log('---------------- old ');
for (let key in comp) {
  if (!comp.hasOwnProperty(key)) {
    continue;
  }
  console.log(comp[key]);
}
