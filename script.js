// Selecting elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(text) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  const label = document.createElement('label');
  label.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeBtn);

  todoList.appendChild(li);
}

// Function to handle the add todo button click event
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    createTodoItem(todoText);
    todoInput.value = '';
  }
}

// Event listener for add todo button click
addTodoBtn.addEventListener('click', addTodo);

// Event listener for Enter key press in the input field
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});
