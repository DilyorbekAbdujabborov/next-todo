import { redirect } from "next/navigation";
import { LoginForm } from "@/features/auth";
import { ThemeToggle } from "@/features/theme-toggle";
import { auth } from "@/shared/lib/auth";

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/todo");

  return (
    <main className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute top-8 right-10">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-[519px]">
        <h1 className="mb-14 text-center text-5xl font-bold">Log in</h1>
        <LoginForm />
      </div>
    </main>
  );
}
