"use client";

import { useState } from "react";
import { TodoItem, useTodos, type Todo, type TodoFilter } from "@/entities/todo";
import { AddTodoForm } from "@/features/add-todo";
import { TodoFilterTabs } from "@/features/filter-todos";
import { EmptyState } from "./EmptyState";

export function TodoBoard({ initialTodos }: { initialTodos: Todo[] }) {
  const { todos, addTodo, toggleTodo, editTodo, removeTodo } = useTodos(initialTodos);
  const [filter, setFilter] = useState<TodoFilter>("all");

  const visible = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const leftCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="mx-auto w-full max-w-[689px]">
      <h1 className="text-center text-5xl font-bold">My Tasks</h1>

      <div className="mt-14">
        <AddTodoForm onAdd={addTodo} />
      </div>

      {todos.length === 0 && (
        <div className="mt-14">
          <EmptyState />
        </div>
      )}

      {todos.length > 0 && (
        <>
          <div className="mt-15 flex justify-between text-xl text-gray-500">
            <TodoFilterTabs value={filter} onChange={setFilter} />
            <span>{leftCount} tasks left</span>
          </div>

          <ul className="mt-6 flex flex-col gap-7">
            {visible.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onEdit={editTodo}
                onRemove={removeTodo}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
