import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Tasks",
  description: "Simple To-Do List",
};

// Sahifa chizilishidan oldin saqlangan mavzuni qo'yamiz (oq "miltillash" bo'lmasin)
const themeScript = `if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
