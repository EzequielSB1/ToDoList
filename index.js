// Info Dates.

const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');

// Task Container.

const taskContainer = document.getElementById('taskContainer');

// Funciones.

const setDate = () => {
    const date = new Date();

    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric'});
    dateMonth.textContent = date.toLocaleString('es', { month: 'long'});
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric'});
    dateText.textContent = date.toLocaleString('es', { weekday: 'long'});
}

const addNewTask = event => {
    // preparando para que no se ejecute solo el submit y no se puedan agregar bloques de tareas vacias.
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    
    // construyendo tareas.
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();

    console.log('funciona')
};

const changeTaskState = event => {
    // creando cambio de estado de la tarea
    event.target.classList.toggle('done');
};

const order = () => {
    // creando listas.
    const done = [];
    const toDo = [];

    // creando funcion de recorrido.
    taskContainer.childNodes.forEach( el => {
        //generando que cuando la tarea tenga la clase done suba al principio agregando esa tarea al array done y colocando las demas en el array toDo.
        el.classList.contains('done') ? done.push(el) : toDo.push(el)

    });

    // retornando los dos arrays
    return [...toDo, ...done];

};

const renderOrderedTasks = () => {
    // funcion que ejecuta la funcion order.
    order().forEach( el => taskContainer.appendChild(el));
};


// Ejecucion de funciones.

setDate();