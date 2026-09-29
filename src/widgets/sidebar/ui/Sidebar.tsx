"use client";

import { useState } from "react";
import Image from "next/image";
import { ListTodo, Menu, Settings } from "lucide-react";
import { LogoutButton } from "@/features/auth";

type Props = {
  name: string;
  email: string;
};

export function Sidebar({ name, email }: Props) {
  const [open, setOpen] = useState(true);

  // Yig'ilgan holat: faqat ikonkalar
  if (!open) {
    return (
      <aside className="flex w-[130px] shrink-0 flex-col items-center gap-6 bg-white pt-10 shadow-[0_4px_12px_rgba(0,0,0,0.25)] dark:bg-gray-800">
        <button onClick={() => setOpen(true)} aria-label="Menyuni ochish">
          <Menu className="size-12" />
        </button>
        <hr className="w-[104px] border-gray-400" />
        <div className="flex h-[58px] w-[104px] items-center justify-center rounded-xl bg-gray-100 text-[#333]">
          <ListTodo className="size-12" />
        </div>
        <Settings className="size-12" />
        <LogoutButton collapsed />
      </aside>
    );
  }

  return (
    <aside className="flex w-[359px] shrink-0 flex-col bg-white px-[34px] pt-[45px] shadow-[0_4px_12px_rgba(0,0,0,0.25)] dark:bg-gray-800">
      <button onClick={() => setOpen(false)} aria-label="Menyuni yopish" className="ml-4">
        <Menu className="size-8" />
      </button>

      <div className="mt-7 flex flex-col items-center">
        <Image src="/avatar.png" alt={name} width={89} height={89} className="rounded-full" />
        <p className="mt-7 text-2xl font-bold">{name}</p>
        <p className="mt-2 text-xl text-gray-500 dark:text-gray-400">{email}</p>
      </div>

      <hr className="mt-7 border-gray-400" />

      <nav className="mt-9 flex flex-col gap-4">
        <div className="flex h-[58px] items-center gap-11 rounded-xl bg-gray-100 px-5 text-2xl font-bold text-[#333]">
          <ListTodo className="size-8" />
          My Tasks
        </div>
        <div className="flex h-[58px] items-center gap-11 px-5 text-2xl font-bold">
          <Settings className="size-8" />
          Settings
        </div>
        <LogoutButton />
      </nav>
    </aside>
  );
}
