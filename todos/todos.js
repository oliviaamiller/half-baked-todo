import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    //create a new todo from the todo form input
    const data = new FormData(todoForm);

    const todoItem = data.get('todo');

    const newTodo = await createTodo(todoItem);

    // reset the form 
    todoForm.reset();

    //display the todos
    renderTodo(newTodo);
});

async function displayTodos() {
    // fetch the todos
    
    // display the list of todos

    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});
