"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SubHero from "@/components/SubHero";
import StoreProvider from "@/lib/Provider";
export default function layout({ children }) {
    return (
        <> <StoreProvider>
        <Navbar />
       {children}
     <SubHero /> 
      <Footer />
       </StoreProvider>
            
            
            
            
        </>
    );
}
