import { todo_items } from "./components/todo-item.js";
import { lista_de_tareas } from "./lista-de-tareas.js";


function cargar_listado_de_todos (){

    let caja_todos = document.querySelector("#todos");

    lista_de_tareas.forEach((Element)=>{
        let componente = document.createElement("div");

        componente.innerHTML = todo_items();

        caja_todos.appendChild(componente);
    });

}

cargar_listado_de_todos();