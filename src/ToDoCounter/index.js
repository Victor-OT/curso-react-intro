import { TodoContext } from '../TodoContext';
import './ToDoCounter.css'
import React from 'react';

function ToDoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)
    return (
        completedTodos === totalTodos
        ? <h1>{`Has completado todos los Todos`}</h1>
        : <h1>{`Has completado ${completedTodos} de ${totalTodos} ToDo's`}</h1>
    );
}

export {ToDoCounter};