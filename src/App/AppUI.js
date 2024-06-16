import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return (
        <>
          <ToDoCounter />
    
          <ToDoSearch  />

          <ToDoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && searchedTodos.length === 0 && <EmptyTodos />}

              {searchedTodos.map(todo => (
                <ToDoItem key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </ToDoList>
          
          <CreateToDoButton setOpenModal = {setOpenModal} />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </>
      );
}

export {AppUI}