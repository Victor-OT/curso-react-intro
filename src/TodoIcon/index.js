import {ReactComponent as CheckSVG} from './icon_check.svg'
import {ReactComponent as DeleteSVG} from './icon_delete.svg'
import "./TodoIcon.css"

const iconTypes = {
    "check":(color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete":(color) => <DeleteSVG className='Icon-svg' fill={color}/>
}

function TodoIcon ({type, color, onClick}) {
    return (
        <span 
        className={`icon icon-svg icon-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}