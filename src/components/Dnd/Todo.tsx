import React, { useState, useContext } from 'react';
import TodoList from './TodoList';
import { TodoContext } from '../../context/TodoContext';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


function Todo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('Todo must be used within a TodoProvider');
  }
  
  const { state: { todos , completed}, dispatch } = context;
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTask });
    setInput('');
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const onDragEnd = (result: DropResult) => {

    const {source,destination} = result


    if(!destination ) return;
    if(destination.droppableId === source.droppableId && 
      destination.index === source.index) return;

    let add,
        active = todos,
        complete = completed;

        if(source.droppableId === 'TodoList'){
          add = active[source.index];
          active.splice(source.index , 1)
          console.log(add,active)
        }else {
          add = complete[source.index];
          complete.splice(source.index , 1)
        }
        
        if(destination.droppableId === 'TodoList'){
          active.splice(destination.index , 0,add)
          console.log('hi')
          console.log(active)
        }else {
          complete.splice(destination.index , 0,add)
        }

    

        dispatch({type:"RESET_TODO",payload:active})
        dispatch({type:"RESET_CTODO",payload:complete})
  };

  return (
    <div className="w-full h-screen flex flex-col gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="w-[60%] mt-20 ml-[20%] flex gap-3">
          <input
            type="text"
            value={input}
            className="w-[90%] rounded-md outline-none"
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <button className="px-3 py-1 text-white bg-green-400 rounded-md" onClick={handleAdd}>
            Add
          </button>
        </div>
        <TodoList context={context} heading="Todo:" />
      </DragDropContext>
    </div>
  );
}

export default Todo;
