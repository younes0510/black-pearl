"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SubHero from "@/components/SubHero";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <body className="bg-white ">
                <Navbar />
                {children}

                <SubHero />
                <Footer />
            </body>
        </html>
    );
}
