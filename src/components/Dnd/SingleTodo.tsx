
import {TodoItem} from '../types'
import { useContext, useState } from 'react'
import {TodoContext} from '../../context/TodoContext'
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    todoItem :TodoItem;
    flag : boolean;
    index:number
}

function SingleTodo({ todoItem, flag, index }: Props) {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error('SingleTodo must be used within a TodoProvider');
    }
  
    const { dispatch } = context;
    const [checked, setChecked] = useState(todoItem.completed);
  
    const handleComplete = () => {
      setChecked(true);
      dispatch({ type: 'ADD_COMPLETED', payload: { ...todoItem, completed: true } });
      dispatch({ type: 'REMOVE_TODO', payload: todoItem.id });
    };
  
    const handleDelete = () => {
      if (!flag) {
        dispatch({ type: 'REMOVE_TODO', payload: todoItem.id });
      } else {
        dispatch({ type: 'REMOVE_COMPLETED', payload: todoItem.id });
      }
    };
  
    const handleMoveBack = () => {
      dispatch({ type: 'ADD_TODO', payload: { ...todoItem, completed: false } });
      dispatch({ type: 'REMOVE_COMPLETED', payload: todoItem.id });
    };
  
    
    return (
      <Draggable draggableId={todoItem.id.toString()} index={index}>
        
        {(provided) => (
          <li
            className="w-full bg-slate-300 flex justify-between px-3 py-1 rounded-md items-center"
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
           
            <span className="truncate">{todoItem.text}</span>
            <div className="ml-1 flex gap-2 items-center ">
              {!flag ? (
                <input type="checkbox" className="border-none cursor-pointer" checked={checked} onChange={handleComplete} />
              ) : (
                <button className="bg-green-500 rounded-md px-2 py-1 text-xs text-white" onClick={handleMoveBack}>
                  Move
                </button>
              )}
              <button className="bg-red-500 rounded-md px-2 py-1 text-xs text-white" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </li>
        )}
      </Draggable>
    );
  }
  
  export default SingleTodo;
  