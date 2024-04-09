document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
  
    addTodoBtn.addEventListener('click', function() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
      }
    });
  
    function addTodoItem(todoText) {
      const li = document.createElement('li');
      li.textContent = todoText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    }
  });