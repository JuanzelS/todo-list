// src/App.js
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  return (
    <div>
      <h1>📝 Redux To-Do App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
