import { redirect } from "next/navigation";
import { getTodos } from "@/entities/todo";
import { ThemeToggle } from "@/features/theme-toggle";
import { auth } from "@/shared/lib/auth";
import { Sidebar } from "@/widgets/sidebar";
import { TodoBoard } from "@/widgets/todo-board";

export default async function TodoPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const todos = await getTodos();

  return (
    <div className="flex min-h-screen">
      <Sidebar name={session.user.name ?? ""} email={session.user.email ?? ""} />

      <main className="relative flex flex-1 flex-col px-6 pt-20 pb-12">
        <div className="absolute top-8 right-10">
          <ThemeToggle />
        </div>

        <TodoBoard initialTodos={todos} />

        <footer className="mt-auto pt-12 text-center text-xl text-gray-500">© 2025</footer>
      </main>
    </div>
  );
}
