import React, { createContext, ReactNode, useReducer } from 'react';
import { TodoItem, State, Action } from '../components/types';


type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);


export { TodoContext  };
