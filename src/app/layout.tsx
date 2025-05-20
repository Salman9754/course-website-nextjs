import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techy Academy",
  description: "Tech courses website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
     
        <link
          rel="shortcut icon"
          href="/shortcut icon.png"
          type="image/x-icon"
        />
      <body className={inter.className}>
        <div>
          {" "}
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
