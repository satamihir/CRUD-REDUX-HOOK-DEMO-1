import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return(

       <div className = "App m-4">
         <TodoList />
         <TodoInput />
        
       </div>
    );
  }


export default App;
