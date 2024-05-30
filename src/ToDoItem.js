import './ToDoItem.css'

function ToDoItem(props) {
    return (
      <li>
        <span className={`check ${props.completed ? 'check-done' : false}`}>V</span>
        <p className={props.completed ? 'completed' : false}>{props.text}</p>
        <span className='delete'>X</span>
      </li>
    )
  }

  export {ToDoItem}