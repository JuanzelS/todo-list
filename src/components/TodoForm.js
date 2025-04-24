// src/components/TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export default function TodoForm() {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !dueDate) return;
    dispatch(addTodo({ text, dueDate, priority }));
    setText("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
