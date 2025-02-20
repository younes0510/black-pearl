import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SubHero from "@/components/SubHero";

export default function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <SubHero />
            <Footer />
        </>
    );
}
