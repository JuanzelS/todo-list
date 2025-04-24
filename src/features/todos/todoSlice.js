// src/features/todos/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const saved = localStorage.getItem("todos");
const initialState = saved ? JSON.parse(saved) : [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        dueDate: action.payload.dueDate,
        priority: action.payload.priority,
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) state.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
