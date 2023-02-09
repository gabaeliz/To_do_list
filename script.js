import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

//Queremos saber cuando el usuario le esta dando clic al boton de agregar
(() => {
    const btn = document.querySelector('[data-form-btn]');

    const addTask = (evento) => {
        const list = document.querySelector('[data-list]');
        const task = createTask(evento);
        list.appendChild(task);
    }

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const calendar = document.querySelector("[data-form-date]");
        const value = input.value;
        const date = calendar.value;
        const dateFormat = moment(date).format('DD/MM/YYYY');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const taskContent = document.createElement('div');

        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

        //task.innerHTML = content;
        //Al elemento lista le quiero agregar un "hijo"(tarea)
        const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
        return task;
    };
    //Arrow functions o funciones anonimas 
    btn.addEventListener('click', addTask);

})();