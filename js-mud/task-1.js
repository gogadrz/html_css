function filter(obj, key, name) {
  let newObj = [];
  let values = Object.values(obj);

  for (let item of values) {
    if (item["name"] === name) {
      newObj.push(item);
      return newObj;
    }
  }
  return newObj;
}

let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
];

let result = filter(objects, "name", "Иван");
console.log(result);
