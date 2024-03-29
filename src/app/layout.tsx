import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="
            w-full
            h-[100vh]
            bg-[url('/modern-geometrical-wallpaper-with-round-lines.jpg')]   bg-cover
          "
        >
          <div
            className="
              w-full 
              h-full 
              flex 
              justify-center 
              items-center 
              px-10 
              py-6
              relative
              select-none
            "
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
