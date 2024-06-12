import React from 'react';
import './ToDoSearch.css'
import { TodoContext } from '../TodoContext';

function ToDoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

    return (
        <div className='search-container'>
            <input 
            placeholder="Buscar"
            value={searchValue}            
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}/>
            <img src='https://i.imgur.com/Lzwmpui.png' alt='Icono Buscar'/>
        </div>
    );
}

export {ToDoSearch};