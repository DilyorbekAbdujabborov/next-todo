"use client";

import { useState } from "react";
import { createTodo, deleteTodo, updateTodo } from "../api/todo-actions";
import type { Todo } from "./types";

// Ekranni darhol yangilaymiz, keyin bazaga yozamiz
export function useTodos(initialTodos: Todo[]) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = async (text: string) => {
    const todo = await createTodo(text);
    setTodos((prev) => [...prev, todo]);
  };

  const toggleTodo = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    updateTodo(id, { completed: !todo.completed });
  };

  const editTodo = (id: number, text: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
    updateTodo(id, { text });
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
    deleteTodo(id);
  };

  return { todos, addTodo, toggleTodo, editTodo, removeTodo };
}
