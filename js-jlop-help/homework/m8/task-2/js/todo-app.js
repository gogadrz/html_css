(function() {

  let storageKey = null;
  // создать заголовок
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создать и возвратить форму
  function createTodoItemForm() {
    let timerId = null;
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');

    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';

    // добавить задержку перед обработчиком
    input.addEventListener('input', delayTyping);

    // 0.3 секунды
    function delayTyping() {
      clearInterval(timerId);
      timerId = setInterval(inputEvent, 300);
    }

    // переключить состояние кнопки (enabled / disabled)
    function inputEvent() {
      if (!input.value) {
        button.classList.add('disabled');
        button.setAttribute('aria-disabled', true);
        button.style.cursor = 'default';
      } else {
        button.classList.remove('disabled');
        button.setAttribute('aria-disabled', false);
        button.style.cursor = 'pointer';
      }
    }

    buttonWrapper.classList.add('input-group-append');

    button.classList.add('btn', 'btn-primary', 'disabled');
    button.setAttribute('aria-disabled', true);
    button.style.cursor = 'default';
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  // создать и возвратить список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // добавить элемент в список
  function createTodoItem(name) {
    let item = document.createElement('li');

    // группа кнопок
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // стилизуем
    item.classList.add('List-group-item', 'd-flex', 'justify-content-between','align-items-center', 'm-1', 'p-2', 'border');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success', 'mr-1');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    // вложить кнопки в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function createTodoApp(container, title = 'Список дел', tasks = [], Key = 'me') {

    storageKey = Key;

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    let storageItems = getItemsFromStorage(storageKey)
    if (storageItems !== null) {
      for (let itm of storageItems) {
        addItem(itm);
      }
    }

    todoItemForm.form.addEventListener('submit', function(e) {

      e.preventDefault(); // запретить перезагрузку страницы

      if (!todoItemForm.input.value) {
        return;
      }

      addItemToStorage({name: todoItemForm.input.value, done: false}, storageKey);
      addItem({name: todoItemForm.input.value, done: false}, storageKey);
    });

    function addItem(item, storageKey) {
      console.log('---addItem', storageKey);

      let todoItem = createTodoItem(item.name);

      if (item.done) {
        todoItem.item.classList.add('list-group-item-success');
      }

      todoItem.doneButton.addEventListener('click', function() {
        todoItem.item.classList.toggle('list-group-item-success');
        console.log('click gotovo');
        console.log(item.name, todoItem.item.classList.contains('list-group-item-success'));
        setDoneInStorage(item.name, todoItem.item.classList.contains('list-group-item-success'));
      });

      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
          deleteFromStorage(item.name);
        }
        console.log('clock udalit');
      })

      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
    }
  }

  // localStorage //////////////////////
  // добавить элемент в localStorage
  function addItemToStorage(item, storageKey) {
    console.log('indide addItemToStorage:', item, storageKey);

    if (localStorage.getItem(storageKey) === null) {
      console.log('ключ не найден');

      let storageData = new Array(item);
      localStorage.setItem(storageKey, JSON.stringify(storageData));
    }
    else
    {
      let storageData = JSON.parse(localStorage.getItem(storageKey));
      storageData.push(item);
      console.log('storageData:', storageData);
      localStorage.setItem(storageKey, JSON.stringify(storageData));
    }
  }

  // вернуть содержимое localStorage по ключу
  function getItemsFromStorage(storageKey) {
    return JSON.parse(localStorage.getItem(storageKey));
  }

  // установить флаг "выполнено"
  function setDoneInStorage(name, flag) {
    let storageData = getItemsFromStorage(storageKey);
    let msg = `storageKey: ${storageKey}, name: ${name}, flag: ${flag}`;
    console.log(msg);

    for (let item of storageData) {
      if (item.name === name) {
          item.done = flag;
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(storageData));
  }

  // удалить элемент из localStorage
  function deleteFromStorage(name) {
    console.log(name, 'will be deleted');

    let storageData = getItemsFromStorage(storageKey);
    localStorage.setItem(storageKey, JSON.stringify(storageData.filter((n) => {return n.name !== name})));
  }

  window.createTodoApp = createTodoApp;
})();
