"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://your-backend-api.com/api/menu")
            .then((response) => {
                setMenuItems(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the menu items!", error);
            });
    }, []);

    return (
        <div className="bg-[#1d232a] min-h-screen text-white pt-7 ">
            <div className="text-center text-white text-3xl py-10 font-bold bg-[#4f5a66] max-w-6xl mx-auto rounded-2xl">
                <h1 className="mb-10">NOTRE MENU</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-7xl mx-auto">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer  p-4 rounded-lg shadow-lg"
                        >
                            <h1 className="text-xl mt-4 font-bold">{item.name}</h1>
                            <p className="mt-2 text-lg">{item.description}</p>
                            <p className="mt-2 text-lg font-bold">{item.price} €</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
