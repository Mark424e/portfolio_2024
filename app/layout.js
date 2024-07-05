import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mark Thomassen | Front-End Developer & UX/UI Designer",
  description: "I am Mark, a frontend developer with three years of experience, specializing in creating user-friendly websites using ReactJS and NextJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
