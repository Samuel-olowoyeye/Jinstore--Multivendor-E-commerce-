import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'



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
          {children}
        </Providers>
      </body>
    </html>
  );
}
