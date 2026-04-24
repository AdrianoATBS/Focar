import { Manrope } from "next/font/google";

import "./globals.css";
import Sidebar from "@/shared/components/Sidebar";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="h-screen flex flex-col">
        <main>
        {children}
        </main>  

      </body>

    </html>
  );
}
