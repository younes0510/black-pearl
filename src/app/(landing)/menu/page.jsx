"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";

export default function Menu() {
    const [plats, setPlats] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/plats')
            .then(response => {
                setPlats(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the menu items!', error);
            });
    }, []);

    return (
        <div className="bg-[#1d232a] min-h-screen text-white pt-7">
            <div className="text-center text-white text-3xl py-10 font-bold max-w-6xl mx-auto rounded-2xl">
                <h1 className="mb-10">NOTRE MENU</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-7xl mx-auto">
                    {plats.map((plat) => (
                        <div key={plat.id} className="flex flex-col items-center cursor-pointer bg-[#2a2f36] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <Link href={`/menu/${plat.id}`}> 
                                <img src={plat.image} alt={plat.name} className="w-80 h-48 object-cover rounded-t-lg" />
                            </Link>
                            <div className="p-4 w-full">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-xl font-bold">{plat.name}</h1>
                                    <h2 className="text-lg font-bold">{plat.price} DZD</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}