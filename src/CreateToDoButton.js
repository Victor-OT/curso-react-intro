import './CreateToDoButton.css'

function CreateToDoButton() {
    return (
        <div className='button-container'>
            <button className="button" 
            onClick={(event) => console.log('Has clickeado el boton')}>
                <img src="https://i.imgur.com/AwuZ2iu.png" alt="Icono Create" />
            </button>  
        </div>
    )
}

export {CreateToDoButton}