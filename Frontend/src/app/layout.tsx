import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "flowbite";
import { Providers } from './providers'
import {Toaster} from "react-hot-toast";



const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Jinstore",
  description: "jinstore is an e-connerce website that allows users to shop their desired items such as foods, beverages and many other stuffs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className ={`${inter.variable} antialiased`}>
      <body
        
      >
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
