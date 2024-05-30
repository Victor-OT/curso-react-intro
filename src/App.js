import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso de Introduccion a Js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Hacer la tarea', completed: false},
  {text: 'Hacer la tarea', completed: false},
  {text: 'Completar la clase 8', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  console.log('User input: ' + searchValue)

  return (
    <>
      <ToDoCounter completed={completedTodos} total={totalTodos}/>

      <ToDoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <ToDoList>
        {defaultTodos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </ToDoList>
      
      <CreateToDoButton />
    </>
  );
}

export default App;
