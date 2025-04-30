import React, { useState } from 'react';
import './App.css';
import TodoList from './Todo_app/components/TodoList';
import AddTodo from './Todo_app/components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
       <div style={{ padding: 20 }}>
      <h2>✅ To-Do List</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
    </div>
  );
}

export default App;
