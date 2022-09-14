function filter(source, blackList) {
  let result = [];

  for (let item of source) {
    if (!blackList.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

emailList = ['123@mail.ru', '234@mail.ru', '345@mail.ru', '456@mail.ru', '567@mail.ru', '678@mail.ru', '789@mail.ru',];
emailBlackList = ['234@mail.ru', '678@mail.ru'];

console.log(filter(emailList, emailBlackList));
