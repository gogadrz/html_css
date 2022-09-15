function filter(obj, key, name) {

  let rec = Object.values(obj);
  for (let x of rec) {
    if (x['name'] === name) {
      console.log(`string "${name}" found, ${x.name}`);
    }
    console.log(x);

    // console.log(x['name']);
  }
}

let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
  ]

let result = filter(objects, 'name', 'Иван');
// console.log(result);
