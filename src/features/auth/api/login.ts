"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/shared/lib/auth";

export async function login(_prev: string | null, formData: FormData) {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/todo",
    });
    return null;
  } catch (error) {
    if (error instanceof AuthError) return "Username yoki parol noto'g'ri.";
    throw error; // redirect ham xato sifatida keladi, uni o'tkazib yuboramiz
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}
