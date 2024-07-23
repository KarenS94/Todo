
import { useState } from "react";
import Header from "./Header";
import TodoComputed from "./TodoComputed";
import TodoCreate from "./TodoCreate";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const initialStateTodos = [
  {id: 1, title: "Complete online react", completed: false},
  {id: 2, title: "Complete sql", completed:false},
  {id: 3, title: "Complete scrum ", completed: false},
  {id: 4, title: "complete arquitectura", completed: false},
  {id: 5 , title: "Complete todo app", completed: false},
  
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)


 return(
 <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">

      <Header/>

    <main className="container mt-8 mx-auto px-4">
        <TodoCreate/>
  
        <TodoList todos = {todos} />
      
        <TodoComputed/>

        <TodoFilter/>
    </main>

    <footer className="text-center mt-8"> 
      Drag and drop to order list.
    </footer>
 </div>

);

};

export default App