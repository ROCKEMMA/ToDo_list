import { program_new_todo } from "./components/new_todo_buttom.js";
import { todo_items } from "./components/todos.js";


// LISTADO DE ToDos ACTUALIZADOS
let root = document.querySelector(".root");
root.innerHTML = todo_items;



// PROGRAMAS
program_new_todo();