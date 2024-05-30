import './ToDoCounter.css'
function ToDoCounter({ total, completed }) {
    return (
        <h1>
            Has completado {completed} de {total} ToDo's
        </h1>
    );
}

export {ToDoCounter};