import React from 'react';
import './App.css';
import TodoList from './components/Todolist';

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList items={['banana','strawberry']}/>
    </div>
  );
}

export default App;
