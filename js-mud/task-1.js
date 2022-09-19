function filter(obj, key, name) {
  let newObj = [];

  for (let x of obj) {
    if (x['name'] === name) {
      newObj.push(x);
      return newObj;
    }
  }
  return obj;
}

export default filter;
