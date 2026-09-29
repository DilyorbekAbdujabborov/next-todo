"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export function AddTodoForm({ onAdd }: { onAdd: (text: string) => Promise<void> }) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-7">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your task here.."
        className="h-[59px] flex-1 rounded-xl bg-white px-6 text-2xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] outline-none placeholder:text-[#a9a9a9] dark:border dark:border-gray-600 dark:bg-gray-700"
      />
      <button
        type="submit"
        className="flex h-[59px] w-[143px] items-center justify-center gap-2 rounded-xl bg-black text-2xl font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.25)] dark:bg-gray-600"
      >
        <Plus className="size-6" />
        Add
      </button>
    </form>
  );
}
