import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = String(credentials.username ?? "");
        const password = String(credentials.password ?? "");
        if (!username || !password) return null;

        const result = await db.query("SELECT * FROM users WHERE user_name = $1", [username]);
        const user = result.rows[0];
        if (!user) return null;

        const passwordOk = await bcrypt.compare(password, user.password);
        if (!passwordOk) return null;

        return { id: String(user.id), name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    // proxy.ts shu yerga qaraydi: login qilmagan bo'lsa /login'ga yuboradi
    authorized({ auth }) {
      return !!auth;
    },
    session({ session, token }) {
      session.user.id = token.sub ?? "";
      return session;
    },
  },
});
