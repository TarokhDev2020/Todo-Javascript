import {ui} from './ui';
import {store} from './store';

document.addEventListener("DOMContentLoaded", getTodos);
document.querySelector(".button").addEventListener("click", submitTodo);
document.querySelector(".toDoList").addEventListener("click", removeTodo);

function getTodos() {
  const todos = store.getTodosFromStorage();
  ui.showList(todos);
}

function submitTodo(e) {
  e.preventDefault();
  const todoInput = document.getElementById("todo");
  if (todoInput.value === "") {
    console.log("Please add a todo to your list!");
  }
  else {
    const value = todoInput.value;

    store.addTodo(value);
    const todos = store.getTodosFromStorage();
    ui.showList(todos);
    todoInput.value = "";
  }
};

function removeTodo(e) {
  if (e.target.className === "todo-item") {
    console.log(e.target.dataset.id);
    store.removeTodoFromStorage(e.target.dataset.id);
    ui.removeList(e.target);
  }
}