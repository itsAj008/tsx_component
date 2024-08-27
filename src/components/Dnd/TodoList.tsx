import SingleTodo from './SingleTodo';
import { TodoItem } from '../types';
import { Droppable } from 'react-beautiful-dnd';

type Props = {
  context: any;
  heading: string;
  flag?: boolean;
};

function TodoList({ context, heading = 'List', flag = false }: Props) {
  const { state: { todos, completed } } = context;

  return (
    <div className="flex gap-5 w-full justify-center">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <ul className="w-[45%] flex flex-col gap-2 bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-md " style={{boxShadow:"-10px 10px -5x rgb(255, 64, 15)"}}  ref={provided.innerRef} {...provided.droppableProps}>
            <h3>{todos.length > 0 && heading}</h3>
            {todos.map((todo:TodoItem, index:number) => (
              <SingleTodo key={todo.id} index={index} todoItem={todo} flag={flag} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <Droppable droppableId="CompletedList">
        {(provided) => (
          <ul className="w-[45%] flex flex-col gap-2 bg-gradient-to-l from-blue-500  to-blue-600 p-4 rounded-md "  style={{boxShadow:"-10px 10px 8px -6px rgb(190, 255, 180)"}} ref={provided.innerRef} {...provided.droppableProps}>
            <h3>{completed.length > 0 && heading}</h3>
            {completed.map((todo:TodoItem, index:number) => (
              <SingleTodo key={todo.id} index={index} todoItem={todo} flag={true} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}

export default TodoList;
