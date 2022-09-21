(function() {
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
    doneButton.classList.add('btn', 'btn-success');
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

  function createTodoApp(container, title = 'Список дел', tasks = []) {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();


    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    if (tasks.length > 0) {
      for (let item of tasks) {
        addItem(item);
      }
    }

    todoItemForm.form.addEventListener('submit', function(e) {

      e.preventDefault(); // запретить перезагрузку страницы

      if (!todoItemForm.input.value) {
        return;
      }

      addItem({name: todoItemForm.input.value, done: false});

    });

    function addItem(item) {
      let todoItem = createTodoItem(item.name);

      if (item.done) {
        todoItem.item.classList.add('list-group-item-success');
      }

      todoItem.doneButton.addEventListener('click', function() {
        todoItem.item.classList.toggle('list-group-item-success');
      });

      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
        }
      })

      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
    }

  }

  window.createTodoApp = createTodoApp;
})();
