import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Syntax Code",
  description: "Buy any code in most cheap price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div className="h-20">
          <Navbar />
        </div>
        <div className="max-w-[1200px] mx-auto p-3 lg:p-0">
          {children}
        </div>
      </body>
    </html>
  );
}
