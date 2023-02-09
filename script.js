import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTask.js";

//Queremos saber cuando el usuario le esta dando clic al boton de agregar
const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas 
btn.addEventListener('click', addTask);

readTasks();