import ClearIcon from '@mui/icons-material/Clear';

import { useAppDispatch } from "../hooks/hooks";
import { toggleComplete, removeTodo } from "../store/todoSlice";

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()
    return (
        <li className='todo-list'>
            <input className='todo-list_input' type="checkbox" 
            checked={completed}
            onChange={() => dispatch(toggleComplete(id))}
            />
            <span>{title}</span>
            <ClearIcon className='todo-list_clear-icon' onClick={() => dispatch(removeTodo(id))}/>
        </li>
    )
}

export default TodoItem