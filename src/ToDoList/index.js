import './ToDoList.css'

function ToDoList({children}) {
    return (
        <div className='list-container'>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export {ToDoList};