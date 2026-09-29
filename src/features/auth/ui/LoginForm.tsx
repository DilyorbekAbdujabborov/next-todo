"use client";

import { useActionState } from "react";
import { login } from "../api/login";

const inputClass =
  "h-[59px] w-full rounded-xl bg-white px-6 text-2xl shadow-[0_2px_4px_rgba(0,0,0,0.25)] outline-none placeholder:text-[#a9a9a9] dark:border dark:border-gray-600 dark:bg-gray-700";

export function LoginForm() {
  const [error, formAction, isPending] = useActionState(login, null);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input name="username" placeholder="Username" required className={inputClass} />
      <input name="password" type="password" placeholder="Password" required className={inputClass} />

      {error && <p className="text-xl text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="h-[59px] rounded-xl bg-black text-2xl font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.25)] disabled:opacity-60 dark:bg-gray-600"
      >
        {isPending ? "Loading..." : "Log in"}
      </button>
    </form>
  );
}
