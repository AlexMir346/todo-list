import AddTaskIcon from '@mui/icons-material/AddTask';

interface TodoFormProps {
    value: string,
    updateText: (str: string) => void,
    handleAction: () => void
}

const TodoFrom: React.FC<TodoFormProps> = ({ value, updateText, handleAction}) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim().length) {
      handleAction();
    }
  };
 
    return (
       <div className="form">
        <input 
        className="form-input"
        placeholder="new Todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
        onKeyDown={handleKeyDown}
         />
         <button onClick={handleAction}><AddTaskIcon className='form-button' style={{fontSize: 'large', color: '#262626' }}/></button>
       </div>
    )
}
export default TodoFrom;