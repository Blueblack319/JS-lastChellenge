const container = document.querySelector(".js-toDoContainer"),
  input = container.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

let list = [];
const LIST_LS = "localList";

function loadToDO() {
  list = JSON.parse(localStorage.getItem(LIST_LS));
  list.forEach(function (node) {
    const toDo = node.toDo;
    const id = node.id;
    showingToDo(toDo, id);
  });
}

function changeObj(toDo, id) {
  const toDoObj = {
    toDo,
    id,
  };
  return toDoObj;
}

function handleClick(event) {
  event.preventDefault();
  const button = event.target;
  const li = button.parentElement;
  toDoList.removeChild(li);
  list = list.filter(function (toDoObj) {
    return toDoObj.id !== parseInt(li.id);
  });
  localStorage.setItem(LIST_LS, JSON.stringify(list));
}

function showingToDo(text, id) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = id;
  span.innerText = text;
  button.innerText = "Delete";
  button.addEventListener("click", handleClick);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleChange(event) {
  event.preventDefault();
  const toDo = event.target.value;
  const id = list.length + 1;
  showingToDo(toDo, id);
  const toDoObj = changeObj(toDo, id);
  list.push(toDoObj);
  localStorage.setItem(LIST_LS, JSON.stringify(list));
  event.target.value = " ";
}

function handleSubmit(event) {
  event.preventDefault();
}

function init() {
  container.addEventListener("submit", handleSubmit);
  input.addEventListener("change", handleChange);

  if (localStorage.getItem(LIST_LS) !== null) {
    loadToDO();
  }
}

init();
