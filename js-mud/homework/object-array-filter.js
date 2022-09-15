function filter(obj, key, name) {
  let newObj = [];
  let values = Object.values(obj);

  for (let item of values) {
    if (item["name"] === name) {
      newObj.push(item);
      return newObj;
    }
  }
  // return newObj;
}

export default filter;
