"use client"

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
        <div className="bg-[#1d232a] min-h-screen text-white pt-7 ">
            <div className="text-center text-white text-3xl py-10 font-bold  max-w-6xl mx-auto rounded-2xl">
                <h1 className="mb-10">NOTRE MENU</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-7xl mx-auto">
                    {plats.map((plat) => (
                        <div key={plat.id} className="flex flex-col items-center cursor-pointer  p-4 rounded-lg shadow-lg">
                       <Link href={`/menu/${plat.id}`}>     <img src={plat.image} alt={plat.name} className="w-56 h-48 object-cover rounded-lg" /></Link>
                            <h1 className="text-xl mt-4 font-bold">{plat.name}</h1>
                            <p className="mt-2 text-lg">{plat.description}</p>
                            <p className="mt-2 text-lg font-bold">{plat.price} €</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}