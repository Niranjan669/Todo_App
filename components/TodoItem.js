import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ marginBottom: '8px' }}>
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          marginRight: '10px',
          cursor: 'pointer'
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
