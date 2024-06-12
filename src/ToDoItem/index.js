import {CompleteIcon} from "../TodoIcon/CompleteIcon";
import {DeleteIcon} from "../TodoIcon/DeleteIcon";

import './ToDoItem.css'

function ToDoItem(props) {
    return (
      <li>
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete} />
        <p className={props.completed ? 'completed' : undefined}>{props.text}</p>
        <DeleteIcon
        onDelete={props.onDelete} />
      </li>
    )
  }

  export {ToDoItem}