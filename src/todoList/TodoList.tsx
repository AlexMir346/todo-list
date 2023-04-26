import { useAppSelector } from "../hooks/hooks";
import TodoItem from '../todoItem/TodoItem';


const TodoList = () => {
const todos = useAppSelector(state => state.todos.list)

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                {...todo}
                />
            ))}
        </ul>
    )
}

export default TodoList;