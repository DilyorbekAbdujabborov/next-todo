import { LogOut } from "lucide-react";
import { logout } from "../api/login";

export function LogoutButton({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <form action={logout}>
      <button
        type="submit"
        aria-label="Chiqish"
        className="flex h-[58px] items-center gap-11 px-5 text-2xl font-bold"
      >
        <LogOut className={collapsed ? "size-12" : "size-8"} />
        {!collapsed && "Log out"}
      </button>
    </form>
  );
}
