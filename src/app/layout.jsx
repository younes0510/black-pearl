"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
<<<<<<< HEAD
    return (
        <html lang="en">
            <body className="bg-white">
                <Navbar />
                {children}
=======
  return (
    <html lang="en">
      <body >
>>>>>>> d2d7760f586fe08517b0040a0753e128b04cf852

                <Footer />
            </body>
        </html>
    );
}
