const STORAGE_KEY = "simple_tasks";
let tasks = [];

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

// Load from localStorage
function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  tasks = raw ? JSON.parse(raw) : [];
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;

    const buttons = document.createElement("div");

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.done ? "Undo" : "Done";
    toggleBtn.onclick = () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      render();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      render();
    };

    buttons.appendChild(toggleBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(textSpan);
    li.appendChild(buttons);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  input.value = "";
  saveTasks();
  render();
});

loadTasks();
render();
