import { v4 as uuidv4 } from 'uuid';

class Store {
    addTodo(todoValue) {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
            todos.push({id: uuidv4(), todo: todoValue});
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));
            todos.push({id: uuidv4(), todo: todoValue});
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
    getTodosFromStorage() {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
    }
    removeTodoFromStorage(id) {
        let todos = JSON.parse(localStorage.getItem("todos"));
        var i = todos.findIndex(todo => todo.id === id);
        console.log(`The index is: ${i}`);
        if(i !== -1) {
            todos.splice(i, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        else {
            console.log("We have some problem");
        }
    }  
};

export const store = new Store();