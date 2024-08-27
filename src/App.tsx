// import Login from "./pages/Login-page"
import FAQ from "./components/FAQ"
import Carousel from "./components/Carousel"
import CommentSection from "./components/CommentSection"
import DragnDrop from "./components/dragndrop/DragnDrop"
import Todo from "./components/Dnd/Todo"
import { TodoContext } from "./context/TodoContext"
import { Action, State } from "./components/types"
import { useReducer } from "react"
import {todoReducer} from './context/TodoReducer'


const initialState: State = {
  todos: [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
    { id: 4, text: 'Task 4', completed: false },
    { id: 5, text: 'Task 5', completed: false },
  ],
  completed: [],
};


function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);


  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="w-screen h-screen bg-gradient-to-r from-blue-400 to-blue-600 ">
        <div className="">
           {/* <Login /> */}
          {/* <FAQ /> */}
          {/* <Carousel /> */}
          <div className=" w-full h-screen flex flex-col items-center">
             <CommentSection />
          </div>
          {/* <DragnDrop /> */}
          {/* <Todo /> */}
         
        </div>
      </div>
 
    
    </TodoContext.Provider>
  )
}

export default App
