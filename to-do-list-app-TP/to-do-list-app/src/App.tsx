import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='header'>
      <div className='inputContainer'>
        <input type='text' placeholder='task...'/>
        <input type="number" placeholder='Deadline (in Days)...'/>
        </div>
        <button>Add Task</button>
        </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
