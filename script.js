let added = [];

// Load tasks from localStorage
function loadTasks() {
  let saved = localStorage.getItem('todoList');
  if (saved) {
    added = JSON.parse(saved);
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('todoList', JSON.stringify(added));
}

loadTasks();
show();

function addTask() {
  let task = document.querySelector("#input-task");
  let date = document.querySelector("#task-date");
  let item = task.value;
  let dueDate = date.value;
  if (item.trim() === '') return; // avoid empty
  added.push({ task: item, Done: dueDate });
  task.value = '';
  date.value = '';
  saveTasks();
  show();
}

function show() {
  let display = document.querySelector(".todo-container");
  let newHtml = '';
  for (let i = 0; i < added.length; i++) {
    let { task, Done } = added[i];
    newHtml += `
      <span>${task}</span>
      <span>${Done}</span>
      <button onclick="deleteTask(${i})" id="delete">Delete</button>
    `;
  }
  display.innerHTML = newHtml;
}

function deleteTask(index) {
  added.splice(index, 1);
  saveTasks();
  show();
}
