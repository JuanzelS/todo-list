// src/components/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text} – Due: {todo.dueDate} – Priority: {todo.priority}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
