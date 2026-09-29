"use client";

import { useState } from "react";
import { Pencil, Square, SquareCheck, Trash2 } from "lucide-react";
import type { Todo } from "../model/types";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onEdit: (id: number, text: string) => void;
  onRemove: (id: number) => void;
};

export function TodoItem({ todo, onToggle, onEdit, onRemove }: Props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const save = () => {
    if (text.trim()) onEdit(todo.id, text.trim());
    else setText(todo.text);
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-5 rounded-xl bg-white px-6 py-7 shadow-[0_2px_4px_rgba(0,0,0,0.25)] dark:bg-gray-800">
      <button onClick={() => onToggle(todo.id)} aria-label="Belgilash">
        {todo.completed ? (
          <SquareCheck className="size-6 fill-black text-white dark:text-gray-800" />
        ) : (
          <Square className="size-6" />
        )}
      </button>

      {editing ? (
        <input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => e.key === "Enter" && save()}
          className="flex-1 bg-transparent text-2xl outline-none"
        />
      ) : (
        <span
          className={`flex-1 text-2xl ${todo.completed ? "text-gray-500 line-through" : ""}`}
        >
          {todo.text}
        </span>
      )}

      <button onClick={() => setEditing(true)} aria-label="Tahrirlash">
        <Pencil className="size-6" />
      </button>
      <button onClick={() => onRemove(todo.id)} aria-label="O'chirish">
        <Trash2 className="size-6" />
      </button>
    </li>
  );
}
