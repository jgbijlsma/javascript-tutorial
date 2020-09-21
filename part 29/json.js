function saveClick(e) {
  e.preventDefault();
  const taskValue = document.querySelector("#task").value;
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks === null) savedTasks = "[]";
  const taskArray = JSON.parse(savedTasks);
  taskArray.push(taskValue);
  const json = JSON.stringify(taskArray);
  localStorage.setItem("tasks", json);

  renderTasks();
}

function renderTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks === null) savedTasks = "[]";
  const taskArray = JSON.parse(savedTasks);

  const taskContainer = document.querySelector("#task-container");
  taskContainer.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    const taskElement = document.createElement("button");
    taskElement.innerText = taskArray[i];
    taskElement.addEventListener("click", deleteTask);
    taskContainer.appendChild(taskElement);
  }
}

function deleteTask(e) {
  let savedTasks = localStorage.getItem("tasks");
  const taskArray = JSON.parse(savedTasks);
  const index = taskArray.indexOf(e.target.innerText);
  taskArray.splice(index, 1);
  const json = JSON.stringify(taskArray);
  localStorage.setItem("tasks", json);

  renderTasks();
}

document.querySelector("#save-btn").addEventListener("click", saveClick);

renderTasks();
