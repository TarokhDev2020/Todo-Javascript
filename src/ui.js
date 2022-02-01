class UI {
    constructor() {
        this.todoList = document.querySelector(".toDoList");
    }
    showList(todos) {
        let output = '';
        todos.forEach((todo) => {
            output += `
                <li class= "todo-item" data-id=${todo.id}>${todo.todo}</li>
            `;
        });
        this.todoList.innerHTML = output;
    }
    removeList(element) {
        element.remove();
    }
};

export const ui = new UI();