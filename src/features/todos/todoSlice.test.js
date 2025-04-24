// src/features/todos/todoSlice.test.js
import todoReducer, { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

test("should add a todo", () => {
  const state = [];
  const action = addTodo({ text: "Test task", dueDate: "2025-05-01", priority: "High" });
  const newState = todoReducer(state, action);
  expect(newState).toHaveLength(1);
  expect(newState[0].text).toBe("Test task");
  expect(newState[0].completed).toBe(false);
});

test("should toggle a todo", () => {
  const initial = [{ id: 1, text: "Task", completed: false, dueDate: "2025-05-01", priority: "Low" }];
  const newState = todoReducer(initial, toggleTodo(1));
  expect(newState[0].completed).toBe(true);
});

test("should delete a todo", () => {
  const initial = [{ id: 1, text: "Task", completed: false, dueDate: "2025-05-01", priority: "Low" }];
  const newState = todoReducer(initial, deleteTodo(1));
  expect(newState).toHaveLength(0);
});
