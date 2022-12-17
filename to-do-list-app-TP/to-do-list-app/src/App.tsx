import React, {ChangeEvent, useState} from 'react';
import './App.css';
import { Itask } from './interfces';


function App() {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Itask[]>([]);
  setTask('');
  setDeadline(0)
  



  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task'){
setTask(event.target.value)
} else {
  setDeadline(Number(event.target.value))
}
  };

const addTask = (): void => {
  const newTask = {taskName: task, deadline: deadline}
  setTodoList([...todoList, newTask]);


}


  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='header'>
      <div className='inputContainer'>
        <input type='text' placeholder='Task...' name='task' onChange={handleChange}/>
        <input type="number" placeholder='Deadline (in Days)...' name='deadline' onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
        </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
