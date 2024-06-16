import './CreateToDoButton.css'
import { TodoContext } from '../TodoContext'
import React from 'react'

function CreateToDoButton({setOpenModal}) {
    return (
        <div className='button-container'>
            <button className="button" 
            onClick={(event) => {
                console.log('Has Clickeado el boton')
                setOpenModal(state => !state)
            }}>
                <img src="https://i.imgur.com/AwuZ2iu.png" alt="Icono Create" />
            </button>  
        </div>
    )
}

export {CreateToDoButton}