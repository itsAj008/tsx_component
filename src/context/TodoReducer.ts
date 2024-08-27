import { Action, State } from "../components/types";

export const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'RESET_TODO':
        return {
          ...state,
          todos: [...action.payload],
        };
      case 'RESET_CTODO':
            return {
              ...state,
              completed: [...action.payload],
            };
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      case 'ADD_COMPLETED':
        return {
          ...state,
          completed: [...state.completed, action.payload],
        };
      case 'REMOVE_COMPLETED':
        return {
          ...state,
          completed: state.completed.filter(todo => todo.id !== action.payload),
        };
      default:
        throw new Error('Unknown action type');
    }
  };