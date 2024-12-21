import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
import "./globals.css";
import { ourFileRouter } from "./api/core";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Škola Pro - Komplexní řešení pro správu škol",
  description: "Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={inter.className}
      >
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <NextSSRPlugin
          
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}
      </body>
    </html>
  );
}
