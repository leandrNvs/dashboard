import IChildren from "@/interfaces/children";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@components/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "Dashboard to practice nextjs concepts",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
