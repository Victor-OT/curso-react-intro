import React from "react";
import './TodoForm.css';
import {TodoContext} from '../TodoContext'

function TodoForm () {

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
            placeholder="Añade tu tarea"
            value={newTodoValue}
            onChange={onChange}/>

            <div className="todoform-button-container">
                <button 
                className="todoform-button todoform-cancel"
                type="button"
                onClick={onCancel}>Cancelar
                </button>

                <button 
                className="todoform-button todoform-add"
                type="submit">Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}