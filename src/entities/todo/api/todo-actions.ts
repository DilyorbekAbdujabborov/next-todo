"use server";

import { auth } from "@/shared/lib/auth";
import { db } from "@/shared/lib/db";
import type { Todo } from "../model/types";

// Har bir amalda foydalanuvchi id'sini sessiyadan olamiz,
// shunda hech kim boshqaning todolarini o'zgartira olmaydi
async function getUserId() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Login qilinmagan");
  return Number(session.user.id);
}

export async function getTodos(): Promise<Todo[]> {
  const userId = await getUserId();
  const result = await db.query(
    "SELECT id, text, completed FROM todo_app.todos WHERE user_id = $1 ORDER BY id",
    [userId],
  );
  return result.rows;
}

export async function createTodo(text: string): Promise<Todo> {
  const userId = await getUserId();
  const result = await db.query(
    "INSERT INTO todo_app.todos (user_id, text) VALUES ($1, $2) RETURNING id, text, completed",
    [userId, text],
  );
  return result.rows[0];
}

export async function updateTodo(id: number, data: { text?: string; completed?: boolean }) {
  const userId = await getUserId();
  await db.query(
    `UPDATE todo_app.todos
     SET text = COALESCE($1, text), completed = COALESCE($2, completed)
     WHERE id = $3 AND user_id = $4`,
    [data.text ?? null, data.completed ?? null, id, userId],
  );
}

export async function deleteTodo(id: number) {
  const userId = await getUserId();
  await db.query("DELETE FROM todo_app.todos WHERE id = $1 AND user_id = $2", [id, userId]);
}
